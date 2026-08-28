'use strict';
// Разбор списка ошибок: отделяем мусорные URL (куски JS) от настоящих потерь.
const fs = require('fs');
const path = require('path');
const m = JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf8'));

// признаки того, что "URL" на самом деле обрывок кода, а не адрес
const JUNK = /[(),;{}=<>'"`\s]|\$|\+\+|\|\||&&|function|document\.|window\.|\.push|\.call|=>/;

const junk = [], real = [];
for (const f of m.failed) {
  let tail;
  try { tail = decodeURIComponent(new URL(f.url).pathname.split('/').pop() || ''); }
  catch (e) { tail = f.url; }
  (JUNK.test(tail) || tail === '' ? junk : real).push(f);
}

console.log('Всего ошибок: ' + m.failed.length);
console.log('  мусор (обрывки JS): ' + junk.length);
console.log('  похоже на настоящие: ' + real.length);

const byErr = {};
real.forEach(f => { byErr[f.err] = (byErr[f.err] || 0) + 1; });
console.log('\nНастоящие — по типу ошибки:');
Object.entries(byErr).sort((a, b) => b[1] - a[1]).forEach(e => console.log('  ' + e[0] + ': ' + e[1]));

// уникальные настоящие потери, сгруппированные по расширению
const byExt = {};
real.forEach(f => {
  const e = (f.url.split('?')[0].split('.').pop() || '').toLowerCase();
  const k = e.length <= 5 ? e : '(без расширения)';
  (byExt[k] = byExt[k] || []).push(f.url);
});
console.log('\nНастоящие — по расширению:');
Object.entries(byExt).sort((a, b) => b[1].length - a[1].length)
  .forEach(e => console.log('  .' + e[0] + ': ' + e[1].length));

console.log('\nПримеры настоящих потерь (до 30):');
real.slice(0, 30).forEach(f => console.log('  ' + f.err + '  ' + f.url));

fs.writeFileSync(path.join(__dirname, 'real-failures.json'),
  JSON.stringify(real.map(f => f.url), null, 1), 'utf8');
console.log('\nСписок сохранён: _tools/real-failures.json');
