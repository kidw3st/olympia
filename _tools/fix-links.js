'use strict';
// Чинит ссылки вида https://olympiaperm.ru/<путь>, для которых локальный файл существует.
// Идемпотентен: повторный запуск ничего не портит.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'site');
const HOST = 'olympiaperm.ru';
const RE = new RegExp('(?:https?:)?//(?:www\\.)?' + HOST.replace(/\./g, '\\.') + '([^"\'\\s)>]*)', 'gi');

const existsCache = new Map();
function localFor(rawPath) {
  if (existsCache.has(rawPath)) return existsCache.get(rawPath);
  let p = rawPath.split('#')[0].split('?')[0];
  let res = null;
  try { p = decodeURIComponent(p); } catch (e) {}
  if (p === '') p = '/';
  const cands = p.endsWith('/') ? [p + 'index.html'] : [p, p + '/index.html'];
  for (const c of cands) {
    const abs = path.join(ROOT, c.replace(/^\/+/, ''));
    if (!abs.startsWith(ROOT)) continue;
    try {
      if (fs.statSync(abs).isFile()) { res = c.replace(/^\/+/, ''); break; }
    } catch (e) {}
  }
  existsCache.set(rawPath, res);
  return res;
}

function relFrom(fromRel, toRel) {
  const r = path.posix.relative(path.posix.dirname('/' + fromRel), '/' + toRel);
  return r || path.posix.basename(toRel);
}

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, out);
    else if (/\.(html?|css)$/i.test(e.name)) out.push(abs);
  }
  return out;
}

const files = walk(ROOT, []);
let changedFiles = 0, changedLinks = 0;

for (const abs of files) {
  const rel = path.relative(ROOT, abs).split(path.sep).join('/');
  let txt;
  try { txt = fs.readFileSync(abs, 'utf8'); } catch (e) { continue; }
  if (txt.indexOf(HOST) === -1) continue;

  let n = 0;
  const out = txt.replace(RE, (m, tail) => {
    const frag = tail.indexOf('#') !== -1 ? tail.slice(tail.indexOf('#')) : '';
    const target = localFor(tail);
    if (!target) return m;                 // локального файла нет — оставляем как есть
    n++;
    return relFrom(rel, target) + frag;
  });

  if (n > 0 && out !== txt) {
    fs.writeFileSync(abs, out, 'utf8');
    changedFiles++; changedLinks += n;
  }
}

console.log('Просмотрено файлов: ' + files.length);
console.log('Исправлено файлов: ' + changedFiles);
console.log('Исправлено ссылок: ' + changedLinks);
