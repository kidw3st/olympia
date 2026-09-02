'use strict';
// Карусель бань и саун: у каждой своё фото и описание, переключение
// по названию. В оригинале это была owl-карусель, которая без своего
// скрипта разваливалась в сплошной текст.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');
const typo = require('./typography');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');
const REL = 'pools/baths';
const DEPTH = 2;

function balancedDiv(html, openIdx) {
  const start = html.indexOf('>', openIdx) + 1;
  let depth = 1;
  const re = /<div\b|<\/div>/gi;
  re.lastIndex = start;
  let m;
  while ((m = re.exec(html))) {
    if (m[0].toLowerCase() === '</div>') depth--; else depth++;
    if (depth === 0) return { inner: html.slice(start, m.index), end: m.index + 6 };
  }
  return { inner: html.slice(start), end: html.length };
}

function extractSaunas(html) {
  const list = [];
  const startIdx = html.indexOf('our_pools_slider');
  if (startIdx < 0) return list;
  const re = /<div class="slide"[^>]*>/gi;
  re.lastIndex = startIdx;
  let m;
  while ((m = re.exec(html))) {
    const cut = balancedDiv(html, m.index);
    const seg = cut.inner;
    const photo = (seg.match(/class="photo"[^>]*url\('([^']+)'\)/) || [])[1];
    const title = (seg.match(/class="title">([^<]+)</) || [])[1];
    if (!title || !photo) { re.lastIndex = cut.end; continue; }
    // описание сауны
    let desc = '';
    const di = seg.indexOf('_description');
    if (di >= 0) {
      const open = seg.lastIndexOf('<div', di);
      desc = balancedDiv(seg, open).inner;
    }
    list.push({ title: title.trim(), photo, desc });
    re.lastIndex = cut.end;
    if (list.length >= 8) break;
  }
  return list;
}

function cleanDesc(html, sitePrefix) {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\sstyle="[^"]*"/gi, '')
    .replace(/<div[^>]*>|<\/div>/gi, '')
    .replace(/\b(src|href)="([^"]+)"/gi, (m0, attr, url) => {
      const u = url.trim();
      if (/^(https?:|mailto:|tel:|#|data:)/i.test(u)) return m0;
      let r;
      try { r = path.posix.normalize(path.posix.join('/', REL, u)); } catch (e) { return m0; }
      if (r.startsWith('..')) return m0;
      return attr + '="' + sitePrefix + r.replace(/^\/+/, '') + '"';
    });
  return typo.polish(s);
}

const srcFile = path.join(SITE, REL, 'index.html');
if (!fs.existsSync(srcFile)) {
  console.log('Страница бань не найдена');
  process.exit(0);
}
const html = fs.readFileSync(srcFile, 'utf8');
const sitePrefix = '../'.repeat(DEPTH + 1) + 'site/';
const saunas = extractSaunas(html).filter(s =>
  /(сауна|баня|хаммам|парова|кабина|купель)/i.test(s.title));

if (!saunas.length) {
  console.log('Саун не найдено — страница оставлена как есть');
  process.exit(0);
}

const rr = '../'.repeat(DEPTH);
const tabs = saunas.map((s, i) =>
  `        <button type="button" class="sauna-tab${i === 0 ? ' is-active' : ''}"
                data-sauna-tab="${i}" role="tab" aria-selected="${i === 0}"
                aria-controls="sauna-panel-${i}">${lib.esc(s.title)}</button>`).join('\n');

const panels = saunas.map((s, i) => {
  let photo = s.photo;
  try {
    const r = path.posix.normalize(path.posix.join('/', REL, photo));
    photo = sitePrefix + r.replace(/^\/+/, '');
  } catch (e) { /* оставляем как есть */ }
  return `      <div class="sauna-panel${i === 0 ? ' is-active' : ''}" id="sauna-panel-${i}"
           data-sauna-panel="${i}" role="tabpanel"${i === 0 ? '' : ' hidden'}>
        <figure class="sauna-panel__media">
          <img src="${photo}" alt="${lib.esc(s.title)} в спорткомплексе «Олимпия»" loading="lazy">
        </figure>
        <div class="sauna-panel__text">
          <h3 class="sauna-panel__title">${lib.esc(s.title)}</h3>
          ${cleanDesc(s.desc, sitePrefix)}
        </div>
      </div>`;
}).join('\n');

const content = `  <div class="container">
    ${lib.breadcrumbs(DEPTH, lib.trailFromRel(REL, 'Бани и сауны'))}
    <div class="page-head">
      <h1>Бани и сауны</h1>
      <p class="page-head__lede">Комплекс саун «Олимпии»: финская, русская, турецкий хаммам,
      инфракрасная и паровая кабина. Выберите свою — у каждой свой характер и польза.</p>
    </div>

    <section class="saunas" aria-label="Бани и сауны комплекса">
      <div class="sauna-tabs" role="tablist" aria-label="Выбор сауны">
${tabs}
      </div>
      <div class="sauna-panels" data-saunas>
${panels}
      </div>
    </section>

    ${lib.ctaBand ? '' : ''}
    <div class="cta-band reveal-fill">
      <div>
        <h2>После тренировки — в сауну</h2>
        <p class="cta-band__sub">Комплекс саун входит в посещение бассейна.</p>
      </div>
      <div class="cta-band__actions">
        <a class="btn btn--ghost-light" href="${rr}price/index.html">Цены</a>
        <a class="btn btn--primary" href="${rr}zapis_cdp/index.html">Записаться</a>
      </div>
    </div>
  </div>`;

const page = lib.shell(DEPTH, {
  title: 'Бани и сауны — «Олимпия» Пермь',
  description: 'Комплекс саун спорткомплекса «Олимпия»: финская сауна, сауна с эффектом русской бани, турецкий хаммам, инфракрасная сауна и паровая кабина.',
  scripts: ['js/saunas.js'],
  content
});

fs.mkdirSync(path.join(OUT, REL), { recursive: true });
fs.writeFileSync(path.join(OUT, REL, 'index.html'), page, 'utf8');
console.log('Карусель бань: ' + saunas.length + ' — ' + saunas.map(s => s.title).join(', '));
