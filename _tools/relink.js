'use strict';
// Перепривязка ссылок по всему редизайну: если для страницы копии есть
// новая версия — ссылка ведёт на неё. Запускать последним шагом сборки.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');

function walk(d, out) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const a = path.join(d, e.name);
    if (e.isDirectory()) walk(a, out);
    else if (/\.html$/i.test(e.name)) out.push(a);
  }
  return out;
}

const redesignPages = new Set(
  walk(OUT, []).map(f => path.relative(OUT, f).split(path.sep).join('/'))
);

let relinked = 0, dropped = 0, touched = 0;
for (const f of walk(OUT, [])) {
  const dir = path.dirname(f);
  let h = fs.readFileSync(f, 'utf8');
  let n = 0;
  h = h.replace(/\bhref="([^"]+)"/g, (m0, url) => {
    const u = url.trim();
    if (/^(https?:|mailto:|tel:|#|data:)/i.test(u)) return m0;
    const pathPart = u.split('#')[0];
    const hash = u.includes('#') ? '#' + u.split('#').slice(1).join('#') : '';
    if (!/\/site\//.test(pathPart) || !/index\.html$/.test(pathPart)) return m0;
    const abs = path.resolve(dir, pathPart);
    const relFromSite = path.relative(SITE, abs).split(path.sep).join('/');
    if (relFromSite.startsWith('..')) return m0;
    if (!redesignPages.has(relFromSite)) return m0;
    let relLink = path.relative(dir, path.join(OUT, relFromSite)).split(path.sep).join('/');
    if (!relLink.startsWith('.')) relLink = './' + relLink;
    n++;
    return 'href="' + relLink + hash + '"';
  });
  if (n > 0) { fs.writeFileSync(f, h, 'utf8'); relinked += n; touched++; }
}
console.log('Перепривязано: ' + relinked + ' ссылок в ' + touched + ' файлах');

// Ссылки в старую копию на страницы, которых нет в новом дизайне и которые
// битые ещё в оригинале, разворачиваем в обычный текст: иначе посетитель
// проваливается из редизайна в старый сайт.
const deadCache = new Map();
function isDeadTarget(abs) {
  if (deadCache.has(abs)) return deadCache.get(abs);
  let dead = true;
  try {
    dead = fs.readFileSync(abs, 'utf8').includes('errortext');
  } catch (e) { dead = true; }
  deadCache.set(abs, dead);
  return dead;
}

let unlinked = 0, unlinkedFiles = 0;
for (const f of walk(OUT, [])) {
  const dir = path.dirname(f);
  let h = fs.readFileSync(f, 'utf8');
  let n = 0;
  h = h.replace(/<a\b[^>]*href="([^"]*\/site\/[^"]*\.html)"[^>]*>([\s\S]*?)<\/a>/gi,
    (m0, href, inner) => {
      const abs = path.resolve(dir, href.split('#')[0]);
      const relFromSite = path.relative(SITE, abs).split(path.sep).join('/');
      if (relFromSite.startsWith('..')) return m0;
      if (redesignPages.has(relFromSite)) return m0;   // новая версия есть — оставит relink выше
      if (!isDeadTarget(abs)) return m0;               // страница живая — пусть ведёт в архив
      n++;
      return inner;                                     // разворачиваем в текст
    });
  if (n > 0) { fs.writeFileSync(f, h, 'utf8'); unlinked += n; unlinkedFiles++; }
}
console.log('Развёрнуто в текст (битые ссылки в архив): ' + unlinked + ' в ' + unlinkedFiles + ' файлах');

// Ремонт: ссылки внутрь редизайна на несуществующие страницы -> назад к копии
let repaired = 0, repairedFiles = 0;
for (const f of walk(OUT, [])) {
  const dir = path.dirname(f);
  let h = fs.readFileSync(f, 'utf8');
  let n = 0;
  h = h.replace(/\bhref="([^"]+)"/g, (m0, url) => {
    const u = url.trim();
    if (/^(https?:|mailto:|tel:|#|data:)/i.test(u)) return m0;
    const pathPart = u.split('#')[0];
    if (!/index\.html$/.test(pathPart) || /\/site\//.test(pathPart)) return m0;
    const abs = path.resolve(dir, pathPart);
    const relFromOut = path.relative(OUT, abs).split(path.sep).join('/');
    if (relFromOut.startsWith('..')) return m0;
    if (redesignPages.has(relFromOut)) return m0;          // цель существует
    const siteAbs = path.join(SITE, relFromOut);
    try { if (!fs.statSync(siteAbs).isFile()) return m0; } catch (e) { return m0; }
    let relLink = path.relative(dir, siteAbs).split(path.sep).join('/');
    if (!relLink.startsWith('.')) relLink = './' + relLink;
    n++;
    return 'href="' + relLink + '"';
  });
  if (n > 0) { fs.writeFileSync(f, h, 'utf8'); repaired += n; repairedFiles++; }
}
console.log('Отремонтировано: ' + repaired + ' ссылок в ' + repairedFiles + ' файлах');
