'use strict';
// Сплошная проверка: все ли относительные ссылки в копии указывают на существующие файлы.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'site');
const RE_ATTR = /\b(href|src|poster|srcset|data-src)\s*=\s*("|')([\s\S]*?)\2/gi;

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, out);
    else if (/\.html?$/i.test(e.name)) out.push(abs);
  }
  return out;
}

const files = walk(ROOT, []);
const missing = new Map();   // цель -> сколько раз
let checked = 0, ok = 0, external = 0;
const okCache = new Map();

function fileExists(abs) {
  if (okCache.has(abs)) return okCache.get(abs);
  let r = false;
  try { r = fs.statSync(abs).isFile(); } catch (e) { r = false; }
  okCache.set(abs, r);
  return r;
}

for (const absFile of files) {
  const dir = path.dirname(absFile);
  const html = fs.readFileSync(absFile, 'utf8');
  let m;
  RE_ATTR.lastIndex = 0;
  while ((m = RE_ATTR.exec(html))) {
    const attr = m[1].toLowerCase();
    let vals = [m[3]];
    if (attr === 'srcset') vals = m[3].split(',').map(s => s.trim().split(/\s+/)[0]);
    for (let v of vals) {
      if (!v) continue;
      v = v.trim();
      if (!v || /^(https?:)?\/\//i.test(v)) { external++; continue; }
      if (/^(data:|mailto:|tel:|javascript:|about:|blob:|#)/i.test(v)) continue;
      checked++;
      let p = v.split('#')[0].split('?')[0];
      if (!p) { ok++; continue; }
      try { p = decodeURIComponent(p); } catch (e) {}
      let abs = path.resolve(dir, p);
      if (p.endsWith('/')) abs = path.join(abs, 'index.html');
      if (fileExists(abs)) { ok++; continue; }
      if (fileExists(path.join(abs, 'index.html'))) { ok++; continue; }
      const rel = path.relative(ROOT, abs).split(path.sep).join('/');
      missing.set(rel, (missing.get(rel) || 0) + 1);
    }
  }
}

const missTotal = Array.from(missing.values()).reduce((a, b) => a + b, 0);
console.log('HTML-файлов проверено:   ' + files.length);
console.log('Локальных ссылок:        ' + checked);
console.log('  разрешились:           ' + ok);
console.log('  битых:                 ' + missTotal + ' (уникальных целей: ' + missing.size + ')');
console.log('Внешних/абсолютных:      ' + external);

if (missing.size) {
  console.log('\nБитые цели (топ-25):');
  Array.from(missing.entries()).sort((a, b) => b[1] - a[1]).slice(0, 25)
    .forEach(e => console.log('  x' + e[1] + '  ' + e[0]));
}
