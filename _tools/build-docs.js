'use strict';
// Раздел документов: в оригинале показывались две ссылки «Скачать файл»,
// остальное подгружалось кнопкой «Показать ещё», мёртвой в статике.
// Собираем реальные PDF из копии и раскладываем по смыслу.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');

function walk(dir, out) {
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return out; }
  for (const e of entries) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, out);
    else if (/\.pdf$/i.test(e.name)) out.push(abs);
  }
  return out;
}

// человеческое название из имени файла
function niceName(file) {
  let n = path.basename(file, path.extname(file));
  n = n.replace(/[_+]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
  n = n.replace(/\(ред\.?\s*([\d.]+)\)/i, '(редакция от $1)');
  if (!n) return 'Документ';
  return n.charAt(0).toUpperCase() + n.slice(1);
}

function sizeLabel(abs) {
  try {
    const kb = fs.statSync(abs).size / 1024;
    return kb > 1024 ? (kb / 1024).toFixed(1) + ' МБ' : Math.round(kb) + ' КБ';
  } catch (e) { return ''; }
}

// раскладка по смыслу: где лежит файл — к тому разделу и относится
const GROUPS = [
  { key: 'pravila', title: 'Правила и регламенты',
    match: p => /(pravila|help|tehnika|pravil)/i.test(p) },
  { key: 'swim', title: 'Центр детского плавания',
    match: p => /swimming_center/i.test(p) },
  { key: 'timetable', title: 'Расписания и протоколы',
    match: p => /(timetable|schedule|protokol|итог|протокол)/i.test(p) },
  { key: 'tender', title: 'Закупки и тендеры',
    match: p => /tender/i.test(p) },
  { key: 'other', title: 'Прочие документы', match: () => true }
];

const files = walk(SITE, []);
const buckets = new Map(GROUPS.map(g => [g.key, []]));

for (const abs of files) {
  const rel = path.relative(SITE, abs).split(path.sep).join('/');
  const g = GROUPS.find(x => x.match(rel));
  buckets.get(g.key).push({ rel, abs });
}

const DEPTH = 2;                       // redesign/about/docs/
const sitePrefix = '../'.repeat(DEPTH + 1) + 'site/';
const rr = '../'.repeat(DEPTH);

const sections = GROUPS.map(g => {
  const list = buckets.get(g.key);
  if (!list || !list.length) return '';
  const rows = list
    .sort((a, b) => niceName(a.rel).localeCompare(niceName(b.rel), 'ru'))
    .map(f => `        <li>
          <a class="ticket-row" href="${sitePrefix}${f.rel.split('/').map(encodeURIComponent).join('/')}"
             target="_blank" rel="noopener">
            <span class="ticket-row__name">${lib.esc(niceName(f.rel))}</span>
            <span class="ticket-row__hint">PDF, ${sizeLabel(f.abs)}</span>
          </a>
        </li>`).join('\n');
  return `    <section class="section" aria-label="${lib.esc(g.title)}">
      <div class="section-head reveal">
        <h2>${lib.esc(g.title)}</h2>
        <p class="section-head__aside">${list.length} ${list.length === 1 ? 'документ'
          : (list.length % 10 >= 2 && list.length % 10 <= 4 && (list.length < 12 || list.length > 14) ? 'документа' : 'документов')}</p>
      </div>
      <ul class="tickets-list reveal">
${rows}
      </ul>
    </section>`;
}).filter(Boolean).join('\n\n');

const content = `  <div class="container">
    ${lib.breadcrumbs(DEPTH, lib.trailFromRel('about/docs', 'Документы'))}
    <div class="page-head">
      <h1>Документы</h1>
      <p class="page-head__lede">Правила посещения, регламенты, протоколы соревнований
      и закупочная документация. Файлы открываются в новой вкладке.</p>
    </div>

${sections}

    <div class="cta-band reveal-fill">
      <div>
        <h2>Не нашли нужный документ?</h2>
        <p class="cta-band__sub">Позвоните на горячую линию — подскажем и вышлем.</p>
      </div>
      <div class="cta-band__actions">
        <a class="btn btn--ghost-light" href="${rr}contacts/index.html">Контакты</a>
        <a class="btn btn--primary" href="tel:+73422567892">Позвонить</a>
      </div>
    </div>
  </div>`;

fs.mkdirSync(path.join(OUT, 'about', 'docs'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'about', 'docs', 'index.html'), lib.shell(DEPTH, {
  title: 'Документы — «Олимпия» Пермь',
  description: 'Документы спорткомплекса «Олимпия»: правила посещения, регламенты, протоколы соревнований, закупочная документация.',
  content
}), 'utf8');

console.log('Документов собрано: ' + files.length);
GROUPS.forEach(g => {
  const n = (buckets.get(g.key) || []).length;
  if (n) console.log('  ' + g.title + ': ' + n);
});
