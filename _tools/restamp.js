'use strict';
// Пересчёт версий css/js во всех страницах. Нужен, когда стили или сценарии
// правились после сборки: адрес не менялся — браузер отдал бы старую копию.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const OUT = path.resolve(__dirname, '..', 'redesign');
const cache = {};

function ver(rel) {
  if (cache[rel]) return cache[rel];
  try {
    const buf = fs.readFileSync(path.join(OUT, rel));
    cache[rel] = crypto.createHash('sha1').update(buf).digest('hex').slice(0, 8);
  } catch (e) { cache[rel] = '1'; }
  return cache[rel];
}

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, out);
    else if (/\.html$/i.test(e.name)) out.push(abs);
  }
  return out;
}

let changed = 0;
const seen = new Set();
for (const file of walk(OUT, [])) {
  const src = fs.readFileSync(file, 'utf8');
  // href/src вида ../../css/style.css?v=abc123
  const next = src.replace(/((?:\.\.\/)*)((?:css|js)\/[A-Za-z0-9._-]+)\?v=[a-f0-9]+/g,
    (m, up, rel) => { seen.add(rel); return up + rel + '?v=' + ver(rel); });
  if (next !== src) { fs.writeFileSync(file, next, 'utf8'); changed++; }
}

console.log('страниц обновлено: ' + changed);
[...seen].sort().forEach(rel => console.log('  ' + rel + ' → ' + ver(rel)));
