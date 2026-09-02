'use strict';
// Сплошной аудит редизайна: битые картинки, пустые ссылки, доступность,
// дубли id. Проверяет статику по всем страницам — то, что глазами не обойти.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'redesign');

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, out);
    else if (/\.html$/i.test(e.name)) out.push(abs);
  }
  return out;
}

const findings = {};
const samples = {};
function flag(kind, file, detail) {
  findings[kind] = (findings[kind] || 0) + 1;
  if (!samples[kind]) samples[kind] = path.relative(ROOT, file) + (detail ? '  — ' + detail : '');
}

const files = walk(OUT, []);
const fileCache = new Map();
function exists(abs) {
  if (fileCache.has(abs)) return fileCache.get(abs);
  let ok = false;
  try { ok = fs.statSync(abs).isFile(); } catch (e) { ok = false; }
  fileCache.set(abs, ok);
  return ok;
}

let redirects = 0;
for (const f of files) {
  const dir = path.dirname(f);
  const html = fs.readFileSync(f, 'utf8');

  // страницы-редиректы переехавших адресов: у них нет и не должно быть
  // ни заголовка, ни описания — это перевалочный пункт, а не страница
  if (/http-equiv="refresh"/i.test(html)) { redirects++; continue; }

  // ---- изображения ----
  const imgRe = /<img\b([^>]*)>/gi;
  let m;
  while ((m = imgRe.exec(html))) {
    const tag = m[1];
    const src = (tag.match(/\bsrc="([^"]*)"/i) || [])[1];
    if (!src) { flag('img без src', f); continue; }
    if (!/^(https?:|data:)/i.test(src)) {
      const abs = path.resolve(dir, decodeURIComponent(src.split('?')[0]));
      if (!exists(abs)) flag('битая картинка', f, src.slice(0, 70));
    }
    if (!/\balt=/i.test(tag)) flag('картинка без alt', f, src.slice(0, 60));
    // размеры важны против скачков вёрстки при загрузке
    if (!/\bwidth=/i.test(tag) && !/\bstyle="[^"]*aspect/i.test(tag)) {
      flag('картинка без размеров (скачок вёрстки)', f, src.slice(0, 60));
    }
    if (!/loading=/i.test(tag) && !/fetchpriority/i.test(tag)) {
      flag('картинка без loading', f, src.slice(0, 60));
    }
  }

  // ---- ссылки ----
  const aRe = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  while ((m = aRe.exec(html))) {
    const attrs = m[1];
    const inner = m[2];
    const href = (attrs.match(/\bhref="([^"]*)"/i) || [])[1];
    const text = inner.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
    const hasAria = /aria-label="/i.test(attrs);
    const hasImg = /<img|<svg/i.test(inner);
    if (href === undefined) { flag('ссылка без href', f); continue; }
    if (href === '' || href === '#') flag('ссылка в никуда (href="#")', f, text.slice(0, 40));
    if (!text && !hasAria && !hasImg) flag('пустая ссылка без подписи', f, href.slice(0, 50));
    if (/^https?:/i.test(href) && !/rel="[^"]*noopener/i.test(attrs) && /target="_blank"/i.test(attrs)) {
      flag('внешняя ссылка без rel=noopener', f, href.slice(0, 50));
    }
  }

  // ---- кнопки ----
  const bRe = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi;
  while ((m = bRe.exec(html))) {
    const attrs = m[1];
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (!text && !/aria-label="/i.test(attrs)) flag('кнопка без подписи', f);
  }

  // ---- уникальность id ----
  const ids = (html.match(/\sid="([^"]+)"/g) || []).map(s => s.slice(5, -1));
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) flag('повторяющийся id', f, id);
    seen.add(id);
  }

  // ---- заголовки ----
  const h1 = (html.match(/<h1\b/gi) || []).length;
  if (h1 === 0) flag('нет заголовка h1', f);
  if (h1 > 1) flag('несколько h1', f);

  // ---- мета ----
  if (!/<meta name="description" content="[^"]{20,}"/i.test(html)) {
    flag('нет описания страницы', f);
  }
  if (!/<html lang="ru"/i.test(html)) flag('не указан язык', f);
}

console.log('Страниц проверено: ' + (files.length - redirects) +
  ' (плюс ' + redirects + ' редиректов пропущено)\n');
const rows = Object.entries(findings).sort((a, b) => b[1] - a[1]);
if (!rows.length) console.log('  замечаний нет');
rows.forEach(r => console.log('  ' + String(r[1]).padStart(5) + '  ' + r[0] +
  '\n         ' + samples[r[0]]));
