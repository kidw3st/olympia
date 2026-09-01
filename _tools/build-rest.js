'use strict';
// Универсальный конвертер: ВСЕ оставшиеся страницы копии -> новый дизайн.
// Затем глобальная перепривязка ссылок: если страница пересобрана,
// ссылки по всему редизайну ведут на неё, а не в старую копию.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');

const SKIP_DIRS = new Set(['bitrix', 'local', 'upload', 'images', '_external',
  'news', 'actions']); // news/actions уже собраны генератором статей
const ALREADY = new Set([
  '', 'pools', 'swimming_center', 'fitness_center', 'spa_center',
  'center_kinesitherapy', 'contacts', 'price', 'faq', 'team', 'pravila',
  'zapis_cdp', 'visitors', 'legal', 'timetable', 'kupit-online'
]);
const SKIP_RELS = new Set([
  'fitness_center/aqua',
  'vpervye-v-olimpii',
  'price/freeze',
  'info',
  'kupit-online'
]);
const RELOCATE = {
  parking: 'visitors/parking',
  cafe: 'visitors/cafe',
  prokat: 'visitors/rental',
  dostupnost: 'visitors/accessibility',
  'nalogoviy-vychet': 'visitors/tax-refund',
  fz152: 'legal/fz152',
  'personal-data-consent': 'legal/personal-data-consent',
  'uslugi_dlya_korporativnykh_klientov': 'legal/corporate',
  uslugi_dms: 'legal/dms'
};
// спец-сборщик владеет этими деревьями (build-special.js)
function specialOwned(rel) {
  return rel.startsWith('team/') || rel.startsWith('timetable/') ||
    rel.startsWith('visitors/') || rel.startsWith('legal/') ||
    SKIP_RELS.has(rel);
}

// активный пункт меню по разделу
function activeFor(rel) {
  if (rel.startsWith('timetable')) return 'timetable';
  if (rel.startsWith('actions')) return 'actions';
  if (rel.startsWith('news')) return 'news';
  if (rel.startsWith('team')) return 'team';
  if (rel.startsWith('contacts')) return 'contacts';
  if (rel.startsWith('price')) return 'price';
  return '';
}

function listPages(dir, out, relBase) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const abs = path.join(dir, e.name);
    const rel = relBase ? relBase + '/' + e.name : e.name;
    if (e.isDirectory()) {
      if (relBase === '' && SKIP_DIRS.has(e.name)) continue;
      listPages(abs, out, rel);
    } else if (e.name === 'index.html') {
      out.push(relBase); // '' для корня
    }
  }
  return out;
}

function cutBalancedTag(html, startIdx) {
  // startIdx указывает на '<tag'; вернуть индекс после парного закрывающего тега
  const tagM = html.slice(startIdx).match(/^<([a-zA-Z][a-zA-Z0-9]*)\b/);
  if (!tagM) return -1;
  const tag = tagM[1];
  const gt = html.indexOf('>', startIdx);
  if (gt === -1) return -1;
  if (html[gt - 1] === '/') return gt + 1;
  const re = new RegExp('<' + tag + '\\b|<\\/' + tag + '>', 'gi');
  re.lastIndex = gt + 1;
  let depth = 1;
  let m;
  while ((m = re.exec(html))) {
    if (m[0][1] === '/') depth--;
    else depth++;
    if (depth === 0) return m.index + m[0].length;
  }
  return -1;
}

function removeBlock(html, markerRe) {
  let m;
  while ((m = markerRe.exec(html))) {
    const open = html.lastIndexOf('<', m.index);
    if (open === -1) break;
    const end = cutBalancedTag(html, open);
    if (end === -1) break;
    html = html.slice(0, open) + html.slice(end);
    markerRe.lastIndex = 0;
  }
  return html;
}

function stripTags(s) {
  return String(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractLede(html) {
  // Не брать .description из head_section — это общий баннер («самый большой фитнес…»).
  const desc = html.match(/class="_description"[^>]*>([\s\S]{0,6000})/);
  if (desc) {
    const p = desc[1].match(/<p[^>]*>([\s\S]*?)<\/p>/);
    if (p) {
      const t = stripTags(p[1]);
      if (t.length > 20) return t.length > 280 ? t.slice(0, 277) + '…' : t;
    }
  }
  return '';
}

function convert(rel) {
  const src = path.join(SITE, rel, 'index.html');
  const html = fs.readFileSync(src, 'utf8');

  // 1. Заголовок
  const h1m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  let title = h1m ? h1m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  if (!title) {
    const tm = html.match(/<title>([^<]*)<\/title>/);
    title = tm ? tm[1].split(' - ')[0].trim() : rel;
  }

  // 2. Лид из реального описания, не из шаблонного баннера
  const lede = extractLede(html);

  // 3. Контент: от закрытия баннерной секции до футера
  let start = h1m ? html.indexOf('</section>', h1m.index) : -1;
  if (start === -1) start = h1m ? h1m.index + h1m[0].length : html.indexOf('</header>') + 9;
  else start += 10;
  let end = html.indexOf('<footer', start);
  if (end === -1) end = html.search(/<div class="footer/);
  if (end === -1 || end <= start) return null;
  let body = html.slice(start, end);

  // 4. Чистка
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');
  body = body.replace(/<link[^>]*>/gi, '');
  body = body.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  body = body.replace(/<!--[\s\S]*?-->/g, '');
  // наши крошки вместо битриксовых
  body = body.replace(/<ul class="breadcrumbs"[\s\S]*?<\/ul>/gi, '');
  // блоки подписки и обратной связи старого шаблона (section/div/form)
  body = removeBlock(body, /class="subscribe/g);
  body = removeBlock(body, /class="questions_section/g);
  body = removeBlock(body, /class="contact_form/g);
  body = removeBlock(body, /class="callback/g);
  body = removeBlock(body, /class="wrapper_order_online/g);
  body = removeBlock(body, /class="mobile_block_992/g);
  body = removeBlock(body, /class="select_dropdown/g);
  body = removeBlock(body, /class="online_payment dispnone/g);
  // пустые картинки
  body = body.replace(/<img[^>]*src=""[^>]*>/gi, '');

  // 5. Пути: относительные -> к копии site/ с учётом глубины страницы в редизайне
  const outRel = RELOCATE[rel] || rel;
  const depth = outRel === '' ? 0 : outRel.split('/').length;
  const prefix = '../'.repeat(depth + 1) + 'site/';
  const srcDir = rel; // от корня site
  body = body.replace(/\b(src|href|data-src)="([^"]+)"/gi, (m0, attr, url) => {
    const u = url.trim();
    if (/^(https?:|mailto:|tel:|#|data:|javascript:)/i.test(u)) return m0;
    let resolved;
    try { resolved = path.posix.normalize(path.posix.join('/', srcDir, u)); }
    catch (e) { return m0; }
    if (resolved.startsWith('..')) return m0;
    return attr + '="' + prefix + resolved.replace(/^\/+/, '') + '"';
  });
  // фоновые картинки в инлайн-стилях
  body = body.replace(/url\('([^']+)'\)/gi, (m0, u) => {
    if (/^(https?:|data:)/i.test(u)) return m0;
    let resolved;
    try { resolved = path.posix.normalize(path.posix.join('/', srcDir, u)); }
    catch (e) { return m0; }
    if (resolved.startsWith('..')) return m0;
    return "url('" + prefix + resolved.replace(/^\/+/, '') + "')";
  });
  body = body.replace(/<img\b(?![^>]*loading=)/gi, '<img loading="lazy" ');

  const textLen = body.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().length;
  if (textLen < 40 && !/<img|<table/i.test(body)) return null; // пустышка

  // 6. Обёртка
  const crumbs = lib.breadcrumbs(depth, lib.trailFromRel(outRel, title));
  const content = `  <div class="container">
    ${crumbs}
    <div class="page-head">
      <h1>${lib.esc(title)}</h1>${lede ? `
      <p class="page-head__lede">${lib.esc(lede)}</p>` : ''}
    </div>
    <div class="article legacy-content" style="max-width: 100%">
${body}
    </div>
  </div>`;

  return lib.shell(depth, {
    title: title + ' — «Олимпия» Пермь',
    description: lede || (title + ' — спортивный комплекс «Олимпия», Пермь.'),
    active: activeFor(rel),
    content
  });
}

// ---- конвертация ----
const pages = listPages(SITE, [], '');
let done = 0, skipped = 0, failed = [];
for (const rel of pages) {
  if (ALREADY.has(rel) || specialOwned(rel)) { skipped++; continue; }
  try {
    const outRel = RELOCATE[rel] || rel;
    const out = convert(rel);
    if (!out) { failed.push(rel || '(корень)'); continue; }
    const f = path.join(OUT, outRel, 'index.html');
    fs.mkdirSync(path.dirname(f), { recursive: true });
    fs.writeFileSync(f, out, 'utf8');
    done++;
  } catch (e) {
    failed.push(rel + ' :: ' + e.message);
  }
}
console.log('Сконвертировано: ' + done + ', пропущено (уже есть): ' + skipped + ', не удалось: ' + failed.length);
failed.slice(0, 20).forEach(f => console.log('  !', f));

// ---- глобальная перепривязка: ссылки на копию -> на редизайн, если страница есть ----
function walkHtml(d, out) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const a = path.join(d, e.name);
    if (e.isDirectory()) walkHtml(a, out);
    else if (/\.html$/i.test(e.name)) out.push(a);
  }
  return out;
}
const redesignPages = new Set();
walkHtml(OUT, []).forEach(f => {
  redesignPages.add(path.relative(OUT, f).split(path.sep).join('/'));
});

let relinked = 0, filesTouched = 0;
for (const f of walkHtml(OUT, [])) {
  const dir = path.dirname(f);
  let h = fs.readFileSync(f, 'utf8');
  let n = 0;
  h = h.replace(/\bhref="([^"]+)"/g, (m0, url) => {
    const u = url.trim();
    if (/^(https?:|mailto:|tel:|#|data:)/i.test(u)) return m0;
    const [pathPart, hash] = [u.split('#')[0], u.includes('#') ? '#' + u.split('#')[1] : ''];
    if (!/\/site\//.test(pathPart)) return m0;
    if (!/index\.html$/.test(pathPart)) return m0;      // только страницы, не файлы
    // абсолютный путь цели
    const abs = path.resolve(dir, pathPart);
    const relFromSite = path.relative(SITE, abs).split(path.sep).join('/');
    if (relFromSite.startsWith('..')) return m0;
    if (!redesignPages.has(relFromSite)) return m0;      // нет новой версии
    const target = path.join(OUT, relFromSite);
    let relLink = path.relative(dir, target).split(path.sep).join('/');
    if (!relLink.startsWith('.')) relLink = './' + relLink;
    n++;
    return 'href="' + relLink + hash + '"';
  });
  if (n > 0) { fs.writeFileSync(f, h, 'utf8'); relinked += n; filesTouched++; }
}
console.log('Перепривязано ссылок на новый дизайн: ' + relinked + ' в ' + filesTouched + ' файлах');
