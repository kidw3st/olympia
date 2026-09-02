'use strict';
// Фотобанк из присланного архива: сопоставляет фото со страницами сайта
// по manifest.csv (section + page), отбраковывает кнопки и иконки.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INCOMING = path.join(ROOT, '_incoming');
const MANIFEST = path.join(INCOMING, 'manifest.csv');

// разбор CSV с кавычками
function parseCsvLine(line) {
  const out = [];
  let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQ) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') inQ = false;
      else cur += c;
    } else if (c === '"') inQ = true;
    else if (c === ',') { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

// картинки-кнопки и иконки в качестве иллюстрации не годятся
const BAD_LABEL = /(записаться|запись|купить|онлайн|кнопк|баннер|логотип|icon|button|banner|стрелк|arrow)/i;
const BAD_ROLE = /(icon|logo|button)/i;

function load() {
  if (!fs.existsSync(MANIFEST)) return { byPage: new Map(), bySection: new Map() };
  const lines = fs.readFileSync(MANIFEST, 'utf8').split(/\r?\n/).filter(Boolean);
  const head = parseCsvLine(lines[0]);
  const idx = {};
  head.forEach((h, i) => idx[h.trim()] = i);

  const byPage = new Map();     // "section/page" -> [{file, bytes, label}]
  const bySection = new Map();  // "section"      -> [...]

  for (let i = 1; i < lines.length; i++) {
    const c = parseCsvLine(lines[i]);
    const file = c[idx.export_path];
    const section = (c[idx.section] || '').trim();
    const page = (c[idx.page] || '').trim();
    const role = (c[idx.role] || '').trim();
    const label = (c[idx.label] || '').trim();
    const bytes = Number(c[idx.bytes] || 0);
    if (!file) continue;
    if (BAD_ROLE.test(role) || BAD_LABEL.test(label) || BAD_LABEL.test(file)) continue;
    if (bytes < 25000) continue;                 // мелочь: иконки и полоски
    if (!/\.(jpe?g|png)$/i.test(file)) continue;

    const abs = path.join(INCOMING, file);
    if (!fs.existsSync(abs)) continue;
    const rec = { file, abs, bytes, label, section, page };

    const key = section + '/' + page;
    if (!byPage.has(key)) byPage.set(key, []);
    byPage.get(key).push(rec);

    if (!bySection.has(section)) bySection.set(section, []);
    bySection.get(section).push(rec);
  }

  // крупные снимки вперёд — они выразительнее
  for (const list of byPage.values()) list.sort((a, b) => b.bytes - a.bytes);
  for (const list of bySection.values()) list.sort((a, b) => b.bytes - a.bytes);
  return { byPage, bySection };
}

// устойчивый выбор из списка: одна и та же страница всегда получает то же фото
function pickFor(list, seed) {
  if (!list || !list.length) return null;
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return list[h % list.length];
}

/* ---------- выдача фото в сайт ----------
   Копируем только те снимки, которые реально используются, ужимая их
   до разумного размера: архив целиком в репозиторий не нужен.        */
const OUT_DIR = path.join(ROOT, 'redesign', 'photos');
let sharp = null;
try { sharp = require('sharp'); } catch (e) { /* обойдёмся копированием */ }

const exported = new Map();   // abs -> имя файла в redesign/photos
const pending = [];

function exportPhoto(rec) {
  if (!rec) return null;
  if (exported.has(rec.abs)) return exported.get(rec.abs);
  // сжимаем в JPEG, поэтому имя фиксируем сразу с нужным расширением —
  // иначе ссылка будет вести на .png, которого на диске нет
  const name = path.basename(rec.file)
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .replace(/\.(png|jpeg)$/i, '.jpg');
  exported.set(rec.abs, name);
  pending.push({ from: rec.abs, to: path.join(OUT_DIR, name) });
  return name;
}

// вызывать один раз в конце сборки
async function flush() {
  if (!pending.length) return 0;
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let done = 0;
  for (const job of pending) {
    try {
      if (fs.existsSync(job.to)) { done++; continue; }
      if (sharp) {
        const buf = await sharp(job.from)
          .resize({ width: 1280, withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true })
          .toBuffer();
        fs.writeFileSync(job.to, buf);
      } else {
        fs.copyFileSync(job.from, job.to);
      }
      done++;
    } catch (e) { /* пропускаем нечитаемый файл */ }
  }
  pending.length = 0;
  return done;
}

module.exports = { load, pickFor, exportPhoto, flush, OUT_DIR };
