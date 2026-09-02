'use strict';
// Финальный проход по собранным страницам: то, что дешевле починить
// один раз на выходе, чем в каждом сборщике.
//  - реальные width/height картинкам (страница не прыгает при загрузке)
//  - loading/decoding
//  - осмысленный alt вместо пустого
//  - rel="noopener" внешним ссылкам в новом окне
//  - уникальные id (Битрикс дублировал их между блоками)
//  - один h1 на страницу
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'redesign');

let sharp = null;
try { sharp = require('sharp'); } catch (e) { /* размеры возьмём из заголовков сами */ }

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, out);
    else if (/\.html$/i.test(e.name)) out.push(abs);
  }
  return out;
}

/* ---------- размеры изображения без внешних зависимостей ---------- */
const sizeCache = new Map();
function imageSize(abs) {
  if (sizeCache.has(abs)) return sizeCache.get(abs);
  let res = null;
  try {
    const buf = fs.readFileSync(abs);
    if (buf.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
      res = { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };           // PNG
    } else if (buf[0] === 0xff && buf[1] === 0xd8) {                         // JPEG
      let i = 2;
      while (i < buf.length - 9) {
        if (buf[i] !== 0xff) { i++; continue; }
        const marker = buf[i + 1];
        if (marker >= 0xc0 && marker <= 0xcf &&
            marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
          res = { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
          break;
        }
        i += 2 + buf.readUInt16BE(i + 2);
      }
    } else if (buf.slice(0, 4).toString() === 'GIF8') {
      res = { w: buf.readUInt16LE(6), h: buf.readUInt16LE(8) };             // GIF
    }
  } catch (e) { res = null; }
  sizeCache.set(abs, res);
  return res;
}

/* ---------- подпись картинки по имени раздела ---------- */
function altFromContext(src, pageTitle) {
  if (/logo/i.test(src)) return 'Олимпия';
  return pageTitle ? pageTitle + ' — фото' : 'Фотография спорткомплекса «Олимпия»';
}

const stats = { sized: 0, lazy: 0, alt: 0, noopener: 0, ids: 0, h1: 0, files: 0 };

for (const file of walk(OUT, [])) {
  const dir = path.dirname(file);
  let html = fs.readFileSync(file, 'utf8');
  const before = html;
  if (/http-equiv="refresh"/i.test(html)) continue;   // редиректы не трогаем

  const titleM = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const pageTitle = titleM ? titleM[1].replace(/<[^>]+>/g, '').trim() : '';

  let imgIndex = 0;
  html = html.replace(/<img\b([^>]*)>/gi, (tag, attrs) => {
    let a = attrs;
    const src = (a.match(/\bsrc="([^"]*)"/i) || [])[1] || '';
    imgIndex++;

    // реальные размеры — против скачков вёрстки
    if (!/\bwidth=/i.test(a) && src && !/^(https?:|data:)/i.test(src)) {
      const abs = path.resolve(dir, decodeURIComponent(src.split('?')[0]));
      const size = imageSize(abs);
      if (size && size.w && size.h) {
        a += ` width="${size.w}" height="${size.h}"`;
        stats.sized++;
      }
    }
    // первая картинка страницы важна для первого экрана, остальные ленивые
    if (!/loading=/i.test(a) && !/fetchpriority/i.test(a)) {
      a += imgIndex === 1 ? ' fetchpriority="high" decoding="async"'
        : ' loading="lazy" decoding="async"';
      stats.lazy++;
    }
    if (!/\balt=/i.test(a)) {
      a += ` alt="${altFromContext(src, pageTitle).replace(/"/g, '')}"`;
      stats.alt++;
    }
    return '<img' + a + '>';
  });

  // внешние ссылки в новом окне — без утечки контекста вкладки
  html = html.replace(/<a\b([^>]*target="_blank"[^>]*)>/gi, (m0, attrs) => {
    if (/rel="/i.test(attrs)) return m0;
    stats.noopener++;
    return '<a' + attrs + ' rel="noopener">';
  });

  // дубли id из старой разметки ломают якоря и подписи
  const seen = new Set();
  html = html.replace(/\sid="([^"]+)"/g, (m0, id) => {
    if (!seen.has(id)) { seen.add(id); return m0; }
    stats.ids++;
    let n = 2;
    while (seen.has(id + '-' + n)) n++;
    seen.add(id + '-' + n);
    return ' id="' + id + '-' + n + '"';
  });

  // Второй и последующие h1 — это подзаголовки контента, а не заголовок
  // страницы. Понижаем целой парой, чтобы не разъехалась разметка.
  let h1n = 0;
  html = html.replace(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/gi, (m0, attrs, inner) => {
    h1n++;
    if (h1n === 1) return m0;
    stats.h1++;
    return '<h2' + attrs + '>' + inner + '</h2>';
  });

  if (html !== before) {
    fs.writeFileSync(file, html, 'utf8');
    stats.files++;
  }
}

console.log('Файлов изменено: ' + stats.files);
console.log('  размеры проставлены: ' + stats.sized);
console.log('  loading/decoding:    ' + stats.lazy);
console.log('  alt добавлен:        ' + stats.alt);
console.log('  rel=noopener:        ' + stats.noopener);
console.log('  id разведены:        ' + stats.ids);
console.log('  лишние h1 понижены:  ' + stats.h1);
