'use strict';
// Проверка, что все <img src> в redesign указывают на существующие файлы.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'redesign');

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, out);
    else if (e.name === 'index.html') out.push(abs);
  }
  return out;
}

const files = walk(OUT, []);
let checked = 0;
let missing = [];
let skippedExt = 0;

for (const file of files) {
  const relPage = path.relative(OUT, file).split(path.sep).join('/');
  // команду не трогаем / не считаем ошибкой по ТЗ
  if (relPage.startsWith('team/')) continue;
  const html = fs.readFileSync(file, 'utf8');
  const re = /<img\b[^>]*\bsrc="([^"]+)"/gi;
  let m;
  while ((m = re.exec(html))) {
    let src = m[1].trim();
    if (!src || /^(https?:|data:|mailto:)/i.test(src)) { skippedExt++; continue; }
    src = src.split('?')[0];
    const abs = path.resolve(path.dirname(file), decodeURIComponent(src));
    checked++;
    if (!fs.existsSync(abs)) {
      missing.push({ page: relPage, src, abs: path.relative(ROOT, abs) });
    }
  }
}

console.log('pages (excl. team):', files.filter(f => !path.relative(OUT, f).startsWith('team')).length);
console.log('img checked:', checked, 'external skipped:', skippedExt);
console.log('missing:', missing.length);
missing.slice(0, 40).forEach(x => console.log(' !', x.page, '→', x.src));
if (missing.length > 40) console.log(' ... +' + (missing.length - 40));
process.exitCode = missing.length ? 1 : 0;
