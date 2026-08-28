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
const ALREADY = new Set([ // собраны вручную — не перетирать
  '', 'pools', 'swimming_center', 'fitness_center', 'spa_center',
  'center_kinesitherapy', 'contacts', 'price', 'faq', 'team', 'pravila',
  'zapis_cdp'
]);
// спец-сборщик владеет этими деревьями (build-special.js)
function specialOwned(rel) {
  return rel.startsWith('team/') || rel.startsWith('timetable/');
}

// активный пункт меню по разделу
function activeFor(rel) {
  if (rel.startsWith('timetable')) return 'timetable';
  if (rel.startsWith('actions')) return 'actions';
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

function cutBalanced(html, startIdx) {
  // startIdx указывает на '<div'; вернуть индекс конца закрывающего </div>
  let i = html.indexOf('>', startIdx) + 1;
  let depth = 1;
  const re = /<div\b|<\/div>/g;
  re.lastIndex = i;
  let m;
  while ((m = re.exec(html))) {
    if (m[0] === '</div>') depth--; else depth++;
    if (depth === 0) return m.index + 6;
  }
  return -1;
}

function removeBlock(html, markerRe) {
  let m;
  while ((m = markerRe.exec(html))) {
    const open = html.lastIndexOf('<div', m.index);
    if (open === -1) break;
    const end = cutBalanced(html, open);
    if (end === -1) break;
    html = html.slice(0, open) + html.slice(end);
    markerRe.lastIndex = 0;
  }
  return html;
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

  // 2. Лид из баннера (.description сразу после h1)
  let lede = '';
  if (h1m) {
    const after = html.slice(h1m.index, h1m.index + 1200);
    const dm = after.match(/class="description"[^>]*>([\s\S]*?)<\/div>/);
    if (dm) lede = dm[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

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
  // блоки подписки и обратной связи старого шаблона
  body = removeBlock(body, /class="subscribe/g);
  body = removeBlock(body, /class="contact_form/g);
  body = removeBlock(body, /class="callback/g);
  // пустые картинки
  body = body.replace(/<img[^>]*src=""[^>]*>/gi, '');

  // 5. Пути: относительные -> к копии site/ с учётом глубины страницы в редизайне
  const depth = rel === '' ? 0 : rel.split('/').length;
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
  const crumbs = lib.breadcrumbs(depth, [
    ['../'.repeat(depth) + 'index.html', 'Главная'],
    [null, title]
  ]);
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
    const out = convert(rel);
    if (!out) { failed.push(rel || '(корень)'); continue; }
    const f = path.join(OUT, rel, 'index.html');
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
