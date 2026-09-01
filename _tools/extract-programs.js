'use strict';
// Извлекает реальные программы занятий (категория / название / описание)
// из страниц копии в redesign/data/programs.json
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign', 'data');

const SOURCES = [
  { file: 'fitness_center/group_programs/index.html', area: 'fitness', areaName: 'Фитнес-центр' },
  { file: 'fitness_center/aqua/index.html', area: 'aqua', areaName: 'Аквааэробика' },
  { file: 'pools/aqua/index.html', area: 'aqua', areaName: 'Аквааэробика' },
  { file: 'pools/adult_groups/index.html', area: 'pool', areaName: 'Бассейн' },
  { file: 'swimming_center/forkids/index.html', area: 'kids', areaName: 'Детское плавание' },
  { file: 'swimming_center/mnm/index.html', area: 'kids', areaName: 'Мама и малыш' }
];

function clean(s) {
  return s.replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&laquo;/g, '«').replace(/&raquo;/g, '»')
    .replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&mdash;/g, '—')
    .replace(/\s+/g, ' ').trim();
}

const programs = [];
const seen = new Set();

for (const src of SOURCES) {
  const fp = path.join(SITE, src.file);
  if (!fs.existsSync(fp)) continue;
  const html = fs.readFileSync(fp, 'utf8');
  const di = html.indexOf('_description');
  if (di === -1) continue;
  const body = html.slice(di, html.indexOf('<footer', di) === -1 ? di + 60000 : html.indexOf('<footer', di));

  // категории <h2> и программы <h3> + следующий <p>
  let category = src.areaName;
  const re = /<(h2|h3|p)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m, pending = null;
  while ((m = re.exec(body))) {
    const tag = m[1].toLowerCase();
    const text = clean(m[2]);
    if (!text || text.length < 2) continue;
    if (tag === 'h2') {
      if (/вопрос|набор|уважаем|внимани/i.test(text)) { category = src.areaName; continue; }
      if (text.length < 60) category = text.replace(/["«»]/g, '').trim();
      continue;
    }
    if (tag === 'h3') {
      if (text.length > 90) continue;
      if (/вопрос|набор|уважаем|внимани|записаться|подробн/i.test(text)) { pending = null; continue; }
      pending = { name: text, category, area: src.area, areaName: src.areaName, desc: '' };
      continue;
    }
    if (tag === 'p' && pending) {
      if (text.length > 25) {
        pending.desc = text.slice(0, 600);
        const key = pending.name.toLowerCase();
        if (!seen.has(key)) { seen.add(key); programs.push(pending); }
        pending = null;
      }
    }
  }
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'programs.json'),
  JSON.stringify(programs, null, 1), 'utf8');

console.log('Программ извлечено: ' + programs.length);
const byCat = {};
programs.forEach(p => { byCat[p.category] = (byCat[p.category] || 0) + 1; });
Object.entries(byCat).forEach(e => console.log('  ' + e[0] + ': ' + e[1]));
