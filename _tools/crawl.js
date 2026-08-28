'use strict';
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const crypto = require('crypto');

const ORIGIN = 'https://olympiaperm.ru';
const HOST   = 'olympiaperm.ru';
const ROOT   = path.resolve(__dirname, '..');
const OUT    = path.join(ROOT, 'site');
const MANIFEST = path.join(__dirname, 'manifest.json');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36';
const CONC = 6;
const MAX_ITEMS = Number(process.env.MAX_ITEMS || 30000);

const argv = process.argv.slice(2);
const DO_FETCH   = !argv.includes('--rewrite-only');
const DO_REWRITE = !argv.includes('--fetch-only');

// ONLY_PREFIX=/ads/,/newyear/  — обходить как страницы только эти разделы (режим докачки)
// SKIP_EXISTING=1              — не качать то, что уже лежит на диске
const ONLY_PREFIX = process.env.ONLY_PREFIX
  ? process.env.ONLY_PREFIX.split(',')
      .map(s => s.trim().toLowerCase())
      .filter(Boolean)
      // Git Bash подменяет значения, похожие на пути: "/ads/" -> "C:/Program Files/Git/ads/".
      // Отрезаем приклеенный префикс установки, если он появился.
      .map(s => s.replace(/^[a-z]:\/.*?\/git\//, ''))
      .map(s => '/' + s.replace(/^\/+|\/+$/g, '') + '/')
  : null;
if (ONLY_PREFIX) console.log('разделы для обхода: ' + ONLY_PREFIX.join(' '));
const SKIP_EXISTING = !!process.env.SKIP_EXISTING;
let skipped = 0;

// внешние хосты, чьи статические файлы тянем к себе
const CDN_HOSTS = new Set(['code.jquery.com','ajax.googleapis.com','cdnjs.cloudflare.com','unpkg.com',
  'cdn.jsdelivr.net','fonts.googleapis.com','fonts.gstatic.com','maxcdn.bootstrapcdn.com',
  'stackpath.bootstrapcdn.com','use.fontawesome.com','netdna.bootstrapcdn.com']);
// счётчики/виджеты — не качаем, оставляем абсолютными ссылками
const SKIP_HOST_RE = /(yandex|google-analytics|googletagmanager|googleads|doubleclick|gstatic\.com\/recaptcha|vk\.com|vk\.ru|mail\.ru|facebook|instagram|criteo|calltouch|jivo|bitrix24|youtube|youtu\.be|recaptcha|flocktory|roistat|marquiz|rutube|t\.me|telegram|whatsapp|2gis|openstreetmap|tildacdn|tawk|carrotquest|amocrm|verbox|envybox)/i;

const ASSET_EXT = new Set(['css','js','mjs','json','xml','png','jpg','jpeg','gif','svg','webp','avif','ico','bmp',
  'woff','woff2','ttf','eot','otf','mp4','webm','ogv','ogg','mp3','wav','m4a','pdf','doc','docx','xls','xlsx',
  'ppt','pptx','zip','rar','7z','txt','map','csv','rtf']);

const BAD_Q = ['pagen','print=','print_t','print_course','action=','register=','forgot_password','change_password',
  'login=','logout=','auth=','backurl','back_url','utm_','sphrase_id','special_version','clear_cache',
  'add_to_compare_list','order_by','show_include_exec_time','show_page_exec_time','show_sql_stat',
  'bitrix_include_areas','etext=','set_filter','del_filter','bxajaxid','ajax=','block='];

const TYPE_EXT = {'text/css':'.css','application/javascript':'.js','text/javascript':'.js','application/x-javascript':'.js',
  'image/jpeg':'.jpg','image/png':'.png','image/gif':'.gif','image/svg+xml':'.svg','image/webp':'.webp','image/avif':'.avif',
  'image/x-icon':'.ico','image/vnd.microsoft.icon':'.ico','font/woff2':'.woff2','font/woff':'.woff','font/ttf':'.ttf',
  'application/font-woff':'.woff','application/font-woff2':'.woff2','application/pdf':'.pdf','application/json':'.json',
  'text/plain':'.txt','application/xml':'.xml','text/xml':'.xml','audio/mpeg':'.mp3','video/mp4':'.mp4'};

const RESERVED = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const sh = s => crypto.createHash('sha1').update(s).digest('hex').slice(0, 8);

// ---------- состояние ----------
const urlToLocal = new Map();   // href -> относительный путь внутри site/
const usedPaths  = new Map();   // путь -> href
const seen       = new Set();
const savedFiles = [];          // {rel, base, kind}
const failed     = [];
const queue = [];
let done = 0;

// ---------- утилиты URL ----------
function norm(raw, base) {
  try {
    const u = new URL(String(raw).trim(), base);
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
    u.hash = '';
    if (u.hostname === 'www.' + HOST) u.hostname = HOST;
    return u;
  } catch (e) { return null; }
}
function extOf(u) {
  const b = u.pathname.split('/').pop() || '';
  const i = b.lastIndexOf('.');
  return i > 0 ? b.slice(i + 1).toLowerCase() : '';
}
function isAssetUrl(u) { return ASSET_EXT.has(extOf(u)); }

function pageAllowed(u) {
  if (u.hostname !== HOST) return false;
  const p = u.pathname.toLowerCase();
  const s = (p + u.search).toLowerCase();
  if (p.startsWith('/bitrix/') || p.startsWith('/local/') || p.startsWith('/upload/')) return false;
  if (p.startsWith('/personal/') || p.startsWith('/auth/')) return false;
  if (p.endsWith('/index.php')) return false;
  if (ONLY_PREFIX && !ONLY_PREFIX.some(pre => p.startsWith(pre))) return false;
  for (const b of BAD_Q) if (s.indexOf(b) !== -1) return false;
  return true;
}
function assetAllowed(u) {
  if (u.hostname === HOST) return true;
  if (SKIP_HOST_RE.test(u.hostname)) return false;
  return CDN_HOSTS.has(u.hostname);
}

function sanitize(seg) {
  let s = seg;
  try { s = decodeURIComponent(seg); } catch (e) {}
  s = s.replace(/[<>:"\\|?*\u0000-\u001f]/g, '_').replace(/[\s.]+$/g, '');
  if (!s) s = '_';
  if (RESERVED.test(s.replace(/\..*$/, ''))) s = '_' + s;
  if (Buffer.byteLength(s) > 120) s = s.slice(0, 60) + '~' + sh(seg);
  return s;
}

function assignLocal(u, isHtml, ctype) {
  const key = u.href;
  if (urlToLocal.has(key)) return urlToLocal.get(key);
  const pre = u.hostname === HOST ? [] : ['_external', sanitize(u.hostname)];
  const segs = u.pathname.split('/').filter(Boolean).map(sanitize);
  let file;
  if (isHtml) {
    if (u.pathname.endsWith('/') || segs.length === 0) file = 'index.html';
    else {
      file = segs.pop().replace(/\.(php\d?|aspx?|jsp|cgi|shtml?|do)$/i, '');
      if (!/\.html?$/i.test(file)) file += '.html';
    }
  } else {
    if (segs.length === 0) file = 'index' + (TYPE_EXT[ctype] || '.bin');
    else {
      file = segs.pop();
      if (!path.extname(file)) file += (TYPE_EXT[ctype] || '');
    }
  }
  let rel = pre.concat(segs, [file]).join('/');
  if (usedPaths.has(rel) && usedPaths.get(rel) !== key) {
    const e = path.extname(file), b = file.slice(0, file.length - e.length);
    rel = pre.concat(segs, [b + '~' + sh(key) + e]).join('/');
  }
  usedPaths.set(rel, key);
  urlToLocal.set(key, rel);
  return rel;
}

// Предсказать путь уже скачанного файла, чтобы не качать его повторно.
// Возвращает null, если предсказать нельзя (тогда качаем как обычно).
function existingLocal(u, kind) {
  if (u.hostname !== HOST) return null;
  if (u.search) return null;              // у адресов с параметрами имя могло получить хеш
  const segs = u.pathname.split('/').filter(Boolean).map(sanitize);
  let file;
  if (kind === 'page') {
    if (u.pathname.endsWith('/') || segs.length === 0) file = 'index.html';
    else {
      file = segs.pop().replace(/\.(php\d?|aspx?|jsp|cgi|shtml?|do)$/i, '');
      if (!/\.html?$/i.test(file)) file += '.html';
    }
  } else {
    if (segs.length === 0) return null;
    file = segs.pop();
    if (!path.extname(file)) return null; // расширение неизвестно до запроса
  }
  const rel = segs.concat([file]).join('/');
  try { if (fs.statSync(path.join(OUT, rel)).isFile()) return rel; } catch (e) {}
  return null;
}

// ---------- сохранение ----------
async function saveFile(rel, buf) {
  let target = rel;
  for (let i = 0; i < 6; i++) {
    const abs = path.join(OUT, target);
    try {
      await fsp.mkdir(path.dirname(abs), { recursive: true });
      await fsp.writeFile(abs, buf);
      return target;
    } catch (e) {
      if (['EEXIST', 'ENOTDIR', 'EISDIR', 'EPERM'].indexOf(e.code) !== -1) {
        const ext = path.extname(target), b = target.slice(0, target.length - ext.length);
        target = b + '~f' + i + ext;
        continue;
      }
      throw e;
    }
  }
  throw new Error('не удалось записать ' + rel);
}

// ---------- сеть ----------
async function get(href) {
  let last;
  for (let i = 0; i < 3; i++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 60000);
    try {
      const r = await fetch(href, {
        headers: { 'User-Agent': UA, 'Accept': '*/*', 'Accept-Language': 'ru-RU,ru;q=0.9', 'Referer': ORIGIN + '/' },
        redirect: 'follow', signal: ctrl.signal
      });
      clearTimeout(t);
      return r;
    } catch (e) { clearTimeout(t); last = e; await sleep(700 * (i + 1)); }
  }
  throw last;
}

// ---------- извлечение ссылок ----------
const RE_ATTR = /\b(href|src|data-src|data-original|data-lazy|data-lazy-src|data-srcset|srcset|imagesrcset|poster|action|data-bg|data-background|data-image|data-large|data-thumb|content)\s*=\s*("|')([\s\S]*?)\2/gi;
const RE_ATTR_NQ = /\b(href|src|poster|action)\s*=\s*([^"'\s>]+)/gi;
const RE_CSSURL = /url\(\s*("|'|)([^'")]+?)\1\s*\)/gi;
const RE_IMPORT = /@import\s+(?:url\(\s*)?("|')([^'"]+)\1/gi;

function looksUrl(v) { return /^(https?:)?\/\//i.test(v) || v.charAt(0) === '/'; }

function extractFromHtml(html, base) {
  const out = [];
  const bm = html.match(/<base[^>]+href\s*=\s*("|')([^"']+)\1/i);
  let b = base;
  if (bm) { const bu = norm(bm[2], base); if (bu) b = bu.href; }
  const push = v => { const u = norm(v, b); if (u) out.push(u); };
  let m;
  RE_ATTR.lastIndex = 0;
  while ((m = RE_ATTR.exec(html))) {
    const attr = m[1].toLowerCase(), val = m[3];
    if (!val) continue;
    if (attr === 'content') { if (looksUrl(val.trim())) push(val); continue; }
    if (attr.indexOf('srcset') !== -1) {
      val.split(',').map(s => s.trim()).filter(Boolean).forEach(s => push(s.split(/\s+/)[0]));
      continue;
    }
    push(val);
  }
  RE_ATTR_NQ.lastIndex = 0;
  while ((m = RE_ATTR_NQ.exec(html))) push(m[2]);
  RE_CSSURL.lastIndex = 0;
  while ((m = RE_CSSURL.exec(html))) push(m[2]);
  RE_IMPORT.lastIndex = 0;
  while ((m = RE_IMPORT.exec(html))) push(m[2]);
  return out;
}
function extractFromCss(css, base) {
  const out = [];
  const push = v => { const u = norm(v, base); if (u) out.push(u); };
  let m;
  RE_CSSURL.lastIndex = 0;
  while ((m = RE_CSSURL.exec(css))) push(m[2]);
  RE_IMPORT.lastIndex = 0;
  while ((m = RE_IMPORT.exec(css))) push(m[2]);
  return out;
}

function enqueue(u, kind) {
  if (!u) return;
  if (seen.has(u.href)) return;
  if (seen.size >= MAX_ITEMS) return;
  if (kind === 'page' && !pageAllowed(u)) return;
  if (kind === 'asset' && !assetAllowed(u)) return;
  seen.add(u.href);
  queue.push({ url: u, kind });
}
function enqueueAuto(u) {
  if (!u) return;
  if (u.hostname === HOST) enqueue(u, isAssetUrl(u) ? 'asset' : 'page');
  else if (isAssetUrl(u)) enqueue(u, 'asset');
}

// ---------- обработка одного URL ----------
async function handle(item) {
  const url = item.url;
  if (SKIP_EXISTING) {
    const have = existingLocal(url, item.kind);
    if (have) {
      urlToLocal.set(url.href, have);
      if (!usedPaths.has(have)) usedPaths.set(have, url.href);
      skipped++;
      return;
    }
  }
  let r;
  try { r = await get(url.href); }
  catch (e) { failed.push({ url: url.href, err: String((e && e.message) || e) }); return; }
  if (!r.ok) { failed.push({ url: url.href, err: 'HTTP ' + r.status }); return; }

  const finalU = norm(r.url, url.href) || url;
  const ctypeRaw = (r.headers.get('content-type') || '').toLowerCase();
  const ctype = ctypeRaw.split(';')[0].trim();
  const isHtml = ctype.indexOf('html') !== -1;
  const isCss  = ctype.indexOf('css') !== -1;
  const isText = isHtml || isCss || ctype.indexOf('xml') !== -1 || ctype.indexOf('json') !== -1;

  let buf = Buffer.from(await r.arrayBuffer());
  const rel = assignLocal(finalU, isHtml, ctype);
  if (finalU.href !== url.href) urlToLocal.set(url.href, rel);

  let text = null;
  if (isText) {
    const cm = ctypeRaw.match(/charset=([\w-]+)/);
    const enc = (cm ? cm[1] : 'utf-8').toLowerCase();
    try { text = new TextDecoder(enc === 'utf8' ? 'utf-8' : enc).decode(buf); }
    catch (e) { text = buf.toString('utf8'); }
    if (enc !== 'utf-8' && enc !== 'utf8') buf = Buffer.from(text, 'utf8');
  }

  const actualRel = await saveFile(rel, buf);
  if (actualRel !== rel) { urlToLocal.set(finalU.href, actualRel); urlToLocal.set(url.href, actualRel); }

  if (isHtml && text != null) {
    savedFiles.push({ rel: actualRel, base: finalU.href, kind: 'html' });
    extractFromHtml(text, finalU.href).forEach(enqueueAuto);
  } else if (isCss && text != null) {
    savedFiles.push({ rel: actualRel, base: finalU.href, kind: 'css' });
    extractFromCss(text, finalU.href).forEach(u => { if (assetAllowed(u)) enqueue(u, 'asset'); });
  }
}

// ---------- пул воркеров ----------
function runPool() {
  let active = 0, idx = 0;
  return new Promise(resolve => {
    const tick = () => {
      if (idx >= queue.length && active === 0) return resolve();
      while (active < CONC && idx < queue.length) {
        const item = queue[idx++];
        active++;
        handle(item)
          .catch(e => failed.push({ url: item.url.href, err: String((e && e.message) || e) }))
          .then(() => {
            active--; done++;
            if (done % 50 === 0) console.log('  ' + done + '/' + queue.length + ' (ошибок: ' + failed.length + ')');
            setImmediate(tick);
          });
      }
    };
    tick();
  });
}

// ---------- перезапись ссылок ----------
function relFrom(fromRel, toRel) {
  const r = path.posix.relative(path.posix.dirname('/' + fromRel), '/' + toRel);
  return r || path.posix.basename(toRel);
}
function makeMapper(base, fromRel) {
  return raw => {
    if (raw == null) return null;
    const t = String(raw).trim();
    if (!t || /^(data:|mailto:|tel:|javascript:|about:|blob:|#)/i.test(t)) return null;
    let u, frag = '';
    try {
      u = new URL(t, base);
      frag = u.hash; u.hash = '';
      if (u.hostname === 'www.' + HOST) u.hostname = HOST;
    } catch (e) { return null; }
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
    const local = urlToLocal.get(u.href);
    if (local) return relFrom(fromRel, local) + frag;
    if (u.hostname === HOST) return u.href + frag;
    return null;
  };
}
function rewriteHtml(html, base, fromRel) {
  const map = makeMapper(base, fromRel);
  html = html.replace(RE_ATTR, (m, attr, q, val) => {
    const a = attr.toLowerCase();
    if (!val) return m;
    if (a === 'content' && !looksUrl(val.trim())) return m;
    if (a.indexOf('srcset') !== -1) {
      const parts = val.split(',').map(s => s.trim()).filter(Boolean).map(part => {
        const bits = part.split(/\s+/); const n = map(bits[0]);
        if (n) bits[0] = n;
        return bits.join(' ');
      });
      return attr + '=' + q + parts.join(', ') + q;
    }
    const n = map(val);
    return n ? attr + '=' + q + n + q : m;
  });
  html = html.replace(RE_CSSURL, (m, q, val) => { const n = map(val); return n ? 'url(' + q + n + q + ')' : m; });
  html = html.replace(RE_IMPORT, (m, q, val) => { const n = map(val); return n ? '@import ' + q + n + q : m; });
  return html;
}
function rewriteCss(css, base, fromRel) {
  const map = makeMapper(base, fromRel);
  css = css.replace(RE_CSSURL, (m, q, val) => { const n = map(val); return n ? 'url(' + q + n + q + ')' : m; });
  css = css.replace(RE_IMPORT, (m, q, val) => { const n = map(val); return n ? '@import ' + q + n + q : m; });
  return css;
}

// ---------- main ----------
(async () => {
  await fsp.mkdir(OUT, { recursive: true });

  if (DO_FETCH) {
    console.log('== Фаза 1: скачивание ==');
    enqueue(new URL(ORIGIN + '/'), 'page');

    // Режим докачки: затравка — корни разделов плюс все ссылки на них,
    // найденные в уже скачанных страницах.
    if (ONLY_PREFIX) {
      for (const pre of ONLY_PREFIX) {
        const u = norm(ORIGIN + pre, ORIGIN);
        if (u) enqueue(u, 'page');
      }
      const re = new RegExp('(?:https?:)?//(?:www\\.)?' + HOST.replace(/\./g, '\\.') + '([^"\'\\s)>]*)', 'gi');
      const walkHtml = (dir, out) => {
        let ents = [];
        try { ents = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return out; }
        for (const e of ents) {
          const abs = path.join(dir, e.name);
          if (e.isDirectory()) walkHtml(abs, out);
          else if (/\.html?$/i.test(e.name)) out.push(abs);
        }
        return out;
      };
      let found = 0;
      for (const abs of walkHtml(OUT, [])) {
        let txt;
        try { txt = fs.readFileSync(abs, 'utf8'); } catch (e) { continue; }
        if (txt.indexOf(HOST) === -1) continue;
        let m; re.lastIndex = 0;
        while ((m = re.exec(txt))) {
          const p = (m[1] || '').toLowerCase();
          if (!ONLY_PREFIX.some(pre => p.startsWith(pre))) continue;
          const u = norm(ORIGIN + m[1], ORIGIN);
          if (u) { const n = seen.size; enqueue(u, 'page'); if (seen.size > n) found++; }
        }
      }
      console.log('найдено ссылок на разделы в уже скачанных страницах: ' + found);
    }
    const maps = process.env.SKIP_SITEMAP ? [] : ['', '-iblock-8', '-iblock-3', '-iblock-33', '-iblock-18'];
    for (const n of maps) {
      try {
        const r = await get(ORIGIN + '/sitemap' + n + '.xml');
        if (!r.ok) continue;
        const xml = await r.text();
        const locs = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
        for (const l of locs) {
          const href = l.replace(/<\/?loc>/g, '').trim();
          const u = norm(href, ORIGIN);
          if (u && !/sitemap.*\.xml$/i.test(u.pathname)) enqueue(u, 'page');
        }
      } catch (e) {}
    }
    console.log('затравка: ' + queue.length + ' URL');
    await runPool();
    console.log('Запросов: ' + done + ', html/css сохранено: ' + savedFiles.length +
      ', пропущено (уже на диске): ' + skipped + ', ошибок: ' + failed.length);
    await fsp.writeFile(MANIFEST, JSON.stringify({
      urlToLocal: Array.from(urlToLocal), savedFiles: savedFiles, failed: failed
    }), 'utf8');
  }

  if (DO_REWRITE) {
    console.log('== Фаза 2: перезапись ссылок ==');
    if (!DO_FETCH) {
      const m = JSON.parse(await fsp.readFile(MANIFEST, 'utf8'));
      m.urlToLocal.forEach(p => urlToLocal.set(p[0], p[1]));
      savedFiles.push.apply(savedFiles, m.savedFiles);
    }
    let n = 0;
    for (const f of savedFiles) {
      const abs = path.join(OUT, f.rel);
      let txt;
      try { txt = await fsp.readFile(abs, 'utf8'); } catch (e) { continue; }
      const outTxt = f.kind === 'html' ? rewriteHtml(txt, f.base, f.rel) : rewriteCss(txt, f.base, f.rel);
      if (outTxt !== txt) await fsp.writeFile(abs, outTxt, 'utf8');
      if (++n % 100 === 0) console.log('  переписано ' + n + '/' + savedFiles.length);
    }
    console.log('Переписано файлов: ' + n);
  }

  const pages = savedFiles.filter(f => f.kind === 'html').length;
  console.log('\nГотово. Страниц: ' + pages + '. Файлов в карте: ' + urlToLocal.size + '. Ошибок: ' + failed.length);
  if (failed.length) {
    console.log('Примеры ошибок:');
    failed.slice(0, 15).forEach(f => console.log('  ' + f.err + '  ' + f.url));
  }
})().catch(e => { console.error('ФАТАЛЬНО', e); process.exit(1); });
