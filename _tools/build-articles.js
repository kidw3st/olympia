'use strict';
// Генератор статей новостей и акций из копии Битрикса в новый дизайн.
// Источник: site/news/<cat>/<slug>/index.html, site/actions/<cat>/<slug>/index.html
// Выход:   redesign/news/..., redesign/actions/... + списки.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');

const SECTIONS = [
  { key: 'news', src: 'news', title: 'Новости и объявления', crumb: 'Новости' },
  { key: 'actions', src: 'actions', title: 'Акции и специальные предложения', crumb: 'Акции' }
];

const CAT_NAMES = {
  'basseyn': 'Бассейн',
  'detskiy-tsentr-plavaniya6604': 'Детский центр плавания',
  'detskiy-tsentr-plavaniya': 'Детский центр плавания',
  'fitnes-tsentr': 'Фитнес-центр',
  'spa-tsentr': 'СПА-центр',
  'kineziterapiya': 'Кинезитерапия'
};

// lastmod из карт сайта для сортировки
function loadLastmod() {
  const map = new Map();
  for (const f of fs.readdirSync(path.join(ROOT, '_tools'))) {
    // карты скачаны в /tmp при обходе; вместо них читаем из site, если сохранены
  }
  // Карты сайта лежат в самой копии? Нет — тянем из manifest не выйдет. Читаем локальные sm-файлы, если есть.
  for (const name of ['sm-8.xml', 'sm-3.xml', 'sm-33.xml', 'sm-18.xml']) {
    const fp = '/tmp/' + name;
    try {
      const xml = fs.readFileSync(fp, 'utf8');
      const re = /<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g;
      let m;
      while ((m = re.exec(xml))) {
        try { map.set(new URL(m[1]).pathname, m[2]); } catch (e) {}
      }
    } catch (e) {}
  }
  return map;
}

// --- извлечение блока _description с балансом div ---
function extractDescription(html) {
  const start = html.indexOf('class="_description');
  if (start === -1) return null;
  const open = html.lastIndexOf('<div', start);
  if (open === -1) return null;
  // скан вперёд, баланс <div>
  let i = html.indexOf('>', start) + 1;
  let depth = 1;
  const re = /<div\b|<\/div>/g;
  re.lastIndex = i;
  let m;
  while ((m = re.exec(html))) {
    if (m[0] === '</div>') depth--; else depth++;
    if (depth === 0) return html.slice(i, m.index);
  }
  return null;
}

function extractTitle(descHtml, fileHtml) {
  const m = descHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  if (m) return m[1].replace(/<[^>]+>/g, '').trim();
  const t = fileHtml.match(/<title>([^<]+)<\/title>/);
  return t ? t[1].trim() : 'Без названия';
}

function stripMainTitle(descHtml) {
  // убрать <div class="main_title">…</div> (первый вложенный блок)
  const start = descHtml.indexOf('class="main_title"');
  if (start === -1) return descHtml;
  const open = descHtml.lastIndexOf('<div', start);
  let i = descHtml.indexOf('>', start) + 1;
  let depth = 1;
  const re = /<div\b|<\/div>/g;
  re.lastIndex = i;
  let m;
  while ((m = re.exec(descHtml))) {
    if (m[0] === '</div>') depth--; else depth++;
    if (depth === 0) return descHtml.slice(0, open) + descHtml.slice(m.index + 6);
  }
  return descHtml;
}

function sanitizeBody(html, srcDirFromSiteRoot, depth) {
  let out = html;
  // выкинуть скрипты и стили
  out = out.replace(/<script[\s\S]*?<\/script>/gi, '');
  out = out.replace(/<style[\s\S]*?<\/style>/gi, '');
  // выкинуть пустые <img src="">
  out = out.replace(/<img[^>]*src=""[^>]*>/gi, '');
  // почистить инлайн-стили цветов/шрифтов из ворда, сохранив выравнивание таблиц
  out = out.replace(/\sstyle="[^"]*"/gi, '');
  // ссылки и картинки: относительные -> к site/ с учётом глубины
  const prefix = '../'.repeat(depth) + '../site/';
  out = out.replace(/\b(src|href)="([^"]+)"/gi, function (m0, attr, url) {
    const u = url.trim();
    if (/^(https?:|mailto:|tel:|#|data:)/i.test(u)) return m0;
    // резолв относительно каталога исходной страницы
    let resolved;
    try {
      resolved = path.posix.normalize(path.posix.join('/', srcDirFromSiteRoot, u));
    } catch (e) { return m0; }
    if (resolved.startsWith('..')) return m0;
    return attr + '="' + prefix + resolved.replace(/^\/+/, '') + '"';
  });
  // ленивая загрузка для картинок тела
  out = out.replace(/<img\b(?![^>]*loading=)/gi, '<img loading="lazy" ');
  return out.trim();
}

function firstImage(bodyHtml) {
  const m = bodyHtml.match(/<img[^>]*src="([^"]+)"/i);
  return m ? m[1] : null;
}

function textPreview(bodyHtml, len) {
  const t = bodyHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return t.length > len ? t.slice(0, len - 1).replace(/\s+\S*$/, '') + '…' : t;
}

const waveThumb = `<span class="thumb-fallback" aria-hidden="true"><svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1 L13 1 L5 9 L0 9 Z" fill="#ed4432"/><path d="M16 1 L21 1 L9 13 L4 13 Z" fill="#fff"/><path d="M24 1 L29 1 L13 17 L8 17 Z" fill="#fff" opacity="0.65"/><path d="M32 1 L34 1 L14 21 L12 21 Z" fill="#fff" opacity="0.35"/></svg></span>`;

function buildSection(sec, lastmod) {
  const srcRoot = path.join(SITE, sec.src);
  if (!fs.existsSync(srcRoot)) return { articles: [], errors: [] };
  const articles = [];
  const errors = [];

  for (const cat of fs.readdirSync(srcRoot, { withFileTypes: true })) {
    if (!cat.isDirectory()) continue;
    const catDir = path.join(srcRoot, cat.name);
    for (const slug of fs.readdirSync(catDir, { withFileTypes: true })) {
      if (!slug.isDirectory()) continue;
      const srcFile = path.join(catDir, slug.name, 'index.html');
      if (!fs.existsSync(srcFile)) continue;
      const html = fs.readFileSync(srcFile, 'utf8');
      const desc = extractDescription(html);
      if (!desc) { errors.push(sec.src + '/' + cat.name + '/' + slug.name); continue; }
      const title = extractTitle(desc, html);
      const srcDirFromSiteRoot = [sec.src, cat.name, slug.name].join('/');
      const depth = 3; // redesign/<sec>/<cat>/<slug>/index.html -> глубина 3 от redesign/
      const body = sanitizeBody(stripMainTitle(desc), srcDirFromSiteRoot, depth);
      const hasText = body.replace(/<[^>]+>/g, '').trim().length >= 3;
      const hasImg = /<img\b/i.test(body);
      if (!hasText && !hasImg) { errors.push('ПУСТО: ' + srcDirFromSiteRoot); continue; }
      if (/errortext|Элемент не найден/i.test(body)) { errors.push('МЁРТВАЯ: ' + srcDirFromSiteRoot); continue; }

      const rel = [sec.key, cat.name, slug.name, 'index.html'].join('/');
      const urlPath = '/' + [sec.src, cat.name, slug.name].join('/') + '/';
      articles.push({
        sec: sec.key,
        cat: cat.name,
        catName: CAT_NAMES[cat.name] || cat.name,
        slug: slug.name,
        title, body, rel,
        img: firstImage(body),
        preview: textPreview(body, 160),
        lastmod: lastmod.get(urlPath) || ''
      });
    }
  }

  // рендер статей
  for (const a of articles) {
    const r = '../'.repeat(3);
    const crumbs = lib.breadcrumbs(3, [
      [r + 'index.html', 'Главная'],
      [r + a.sec + '/index.html', sec.crumb],
      [null, a.title]
    ]);
    const content = `  <div class="container">
    ${crumbs}
    <div class="page-head">
      <h1>${lib.esc(a.title)}</h1>
      <p class="page-head__lede">${lib.esc(a.catName)}</p>
    </div>
    <article class="article">
${a.body}
    </article>
    <div class="article-footer">
      <a class="btn btn--ghost" href="${r + a.sec}/index.html">Все ${a.sec === 'news' ? 'новости' : 'акции'}</a>
      <a class="btn btn--primary" href="${'../'.repeat(4)}site/zapis_cdp/index.html">Записаться</a>
    </div>
  </div>`;
    const page = lib.shell(3, {
      title: a.title + ' — «Олимпия» Пермь',
      description: a.preview,
      active: a.sec === 'actions' ? 'actions' : '',
      content
    });
    const outFile = path.join(OUT, a.rel);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, page, 'utf8');
  }

  return { articles, errors };
}

function buildList(sec, articles) {
  // сортировка: по lastmod убыв., без даты — в конец в исходном порядке
  const sorted = articles.slice().sort((a, b) => (b.lastmod || '').localeCompare(a.lastmod || ''));
  const cats = [...new Set(sorted.map(a => a.cat))];

  const pills = ['<div class="filter-pills" data-filter>',
    '<button data-cat="all" class="is-active">Все</button>',
    ...cats.map(c => `<button data-cat="${c}">${lib.esc(CAT_NAMES[c] || c)}</button>`),
    '</div>'].join('\n      ');

  const rowsHtml = sorted.map(a => {
    // миниатюра: img уже с путём глубины 3; для списка глубина 1 — пересчёт
    let thumb = waveThumb;
    if (a.img) {
      // в статье путь с глубины 3 (../../../../site/...), в списке глубина 1 (../../site/...)
      const fixed = a.img.replace(/^(\.\.\/)+/, '../../');
      thumb = `<img src="${fixed}" alt="" loading="lazy">`;
    }
    return `      <li data-cat="${a.cat}">
        <a class="row-link" href="${a.cat}/${a.slug}/index.html">
          <span class="row-link__thumb">${thumb}</span>
          <span class="row-link__title">${lib.esc(a.title)}</span>
          <span class="row-link__cat">${lib.esc(a.catName)}</span>
        </a>
      </li>`;
  }).join('\n');

  const content = `  <div class="container">
    ${lib.breadcrumbs(1, [['../index.html', 'Главная'], [null, sec.crumb]])}
    <div class="page-head">
      <h1>${sec.title}</h1>
    </div>
    ${pills}
    <ul class="rows">
${rowsHtml}
    </ul>
  </div>`;

  const page = lib.shell(1, {
    title: sec.title + ' — «Олимпия» Пермь',
    description: sec.title + ' спортивного комплекса «Олимпия» в Перми.',
    active: sec.key === 'actions' ? 'actions' : '',
    content
  });
  fs.mkdirSync(path.join(OUT, sec.key), { recursive: true });
  fs.writeFileSync(path.join(OUT, sec.key, 'index.html'), page, 'utf8');
}

// ---- main ----
const lastmod = loadLastmod();
let total = 0, errTotal = 0;
for (const sec of SECTIONS) {
  const { articles, errors } = buildSection(sec, lastmod);
  buildList(sec, articles);
  console.log(sec.key + ': статей ' + articles.length + ', ошибок ' + errors.length);
  errors.slice(0, 5).forEach(e => console.log('   !', e));
  total += articles.length; errTotal += errors.length;
}
console.log('Итого статей: ' + total + ', ошибок: ' + errTotal);
