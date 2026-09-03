'use strict';
// Добавляет тематические фото на страницы, где меньше двух контентных картинок.
// Источник — _incoming/manifest.csv через photo-bank.js.
const fs = require('fs');
const path = require('path');
const bank = require('./photo-bank');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'redesign');
const PHOTOS = bank.load();

const SKIP_PREFIX = [
  'legal/fz152',
  'legal/personal-data-consent',
  'personal-data-consent',
  'fz152',
  'about/docs',
  'price/freeze'
];

function walk(dir, out, base) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    const rel = base ? base + '/' + e.name : e.name;
    if (e.isDirectory()) walk(abs, out, rel);
    else if (e.name === 'index.html') out.push({ abs, rel: base || '' });
  }
  return out;
}

function depthOf(rel) {
  if (!rel) return 0;
  return rel.split('/').filter(Boolean).length;
}

function isRedirect(html) {
  return /http-equiv=["']refresh["']/i.test(html) || /location\.replace\s*\(/i.test(html);
}

function contentImgs(html) {
  const re = /<img\b[^>]*\bsrc=["']([^"']+)["']/gi;
  const out = [];
  let m;
  while ((m = re.exec(html))) {
    const src = m[1];
    if (/logo|favicon|occupancy|app-link|watermark/i.test(src)) continue;
    if (/logo-white/i.test(src)) continue;
    out.push(src);
  }
  return out;
}

function sectionGuess(rel) {
  const root = (rel || '').split('/')[0] || 'home';
  const map = {
    pools: 'pools',
    swimming_center: 'swimming-center',
    fitness_center: 'fitness-center',
    spa_center: 'spa-center',
    center_kinesitherapy: 'center-kinesitherapy',
    news: 'news',
    actions: 'actions',
    team: 'team',
    visitors: 'visitors',
    timetable: 'pools',
    contacts: 'pools',
    price: 'pools',
    about: 'about',
    cafe: 'pools',
    parking: 'visitors'
  };
  return map[root] || root;
}

function pageGuess(rel) {
  const parts = (rel || '').split('/').filter(Boolean);
  return parts[parts.length - 1] || 'index';
}

function pickTwo(rel) {
  const section = sectionGuess(rel);
  const page = pageGuess(rel);
  const key = section + '/' + page;
  const primary = PHOTOS.byPage.get(key) || [];
  const secondary = PHOTOS.bySection.get(section) || [];
  const fallbacks = []
    .concat(PHOTOS.bySection.get('pools') || [])
    .concat(PHOTOS.bySection.get('swimming-center') || [])
    .concat(PHOTOS.bySection.get('fitness-center') || [])
    .concat(PHOTOS.bySection.get('spa-center') || []);

  const pool = [];
  const seen = new Set();
  for (const list of [primary, secondary, fallbacks]) {
    for (const rec of list) {
      if (seen.has(rec.abs)) continue;
      seen.add(rec.abs);
      pool.push(rec);
      if (pool.length >= 12) break;
    }
    if (pool.length >= 12) break;
  }
  if (!pool.length) return [];
  const a = bank.pickFor(pool, rel + '|a');
  let b = bank.pickFor(pool, rel + '|b');
  if (b && a && b.abs === a.abs && pool.length > 1) {
    b = pool.find(x => x.abs !== a.abs) || b;
  }
  return [a, b].filter(Boolean);
}

function insertGallery(html, stripHtml) {
  if (/class="gallery-strip"/.test(html)) {
    // уже есть лента — допишем фигуры, если в ней мало фото
    return html.replace(
      /(<div class="gallery-strip[^"]*"[^>]*>)([\s\S]*?)(<\/div>)/,
      (m0, open, inner, close) => {
        const n = (inner.match(/<img\b/gi) || []).length;
        if (n >= 2) return m0;
        return open + inner + stripHtml + close;
      }
    );
  }
  if (/class="page-cover"/.test(html) || /class="post__cover"/.test(html) || /class="dirpage-hero__media"/.test(html)) {
    // после обложки — вторая/третья фотография лентой
    return html.replace(
      /(<\/figure>\s*)(<article\b|<section\b|<div class="cta-band|<ul class="tickets-list|<ul class="hub-cards|<div class="fact-grid)/i,
      '$1\n    <div class="gallery-strip reveal">\n' + stripHtml + '    </div>\n    $2'
    );
  }
  // после page-head
  if (/class="page-head"/.test(html)) {
    return html.replace(
      /(<\/div>\s*)(\s*<(?:article|section|div class="cta-band|ul class="tickets-list|ul class="hub-cards|div class="wizard|div class="visit))/i,
      (m0, a, b, offset, full) => {
        // только первый page-head
        const before = full.slice(0, offset + a.length);
        if ((before.match(/class="page-head"/g) || []).length > 1) return m0;
        return a + '\n    <div class="gallery-strip reveal">\n' + stripHtml + '    </div>\n' + b;
      }
    );
  }
  // orphan gallery-strip перед </main> отключён — см. DESIGN.md
  return html;
}

async function main() {
  const pages = walk(OUT, [], '');
  let touched = 0, skipped = 0, enriched = 0;

  for (const page of pages) {
    const rel = page.rel;
    if (SKIP_PREFIX.some(p => rel === p || rel.startsWith(p + '/'))) { skipped++; continue; }
    let html = fs.readFileSync(page.abs, 'utf8');
    if (isRedirect(html)) { skipped++; continue; }

    const imgs = contentImgs(html);
    if (imgs.length >= 2) { skipped++; continue; }

    const need = 2 - imgs.length;
    const picks = pickTwo(rel).slice(0, Math.max(need, 2));
    if (!picks.length) { skipped++; continue; }

    const depth = depthOf(rel);
    const prefix = '../'.repeat(depth) + 'photos/';
    const figures = picks.map((rec, i) => {
      const name = bank.exportPhoto(rec);
      if (!name) return '';
      const alt = (rec.label || 'Спорткомплекс «Олимпия»').replace(/"/g, '');
      return `      <figure><img src="${prefix}${name}" alt="${alt}" loading="lazy"></figure>\n`;
    }).filter(Boolean).join('');

    if (!figures) { skipped++; continue; }

    // если обложки нет и картинок 0 — добавим page-cover из первого фото
    if (imgs.length === 0 && !/class="page-cover"|class="post__cover"|class="dirpage-hero__media"|class="hero-porthole"/.test(html)) {
      const first = picks[0];
      const name = bank.exportPhoto(first);
      if (name) {
        const cover =
          `    <figure class="page-cover reveal-fill">\n` +
          `      <img src="${prefix}${name}" alt="${(first.label || 'Олимпия').replace(/"/g, '')}" loading="lazy">\n` +
          `    </figure>\n`;
        if (/class="page-head"/.test(html)) {
          html = html.replace(
            /(<\/div>\s*)(\s*<(?:article|section|div|ul))/i,
            (m0, a, b, offset, full) => {
              const before = full.slice(0, offset);
              if ((before.match(/class="page-head"/g) || []).length !== 1) return m0;
              return a + cover + b;
            }
          );
        }
      }
    }

    const afterImgs = contentImgs(html);
    if (afterImgs.length < 2) {
      html = insertGallery(html, figures);
    }

    // fallback перед </main> отключён — только inline gallery после page-head

    fs.writeFileSync(page.abs, html, 'utf8');
    touched++;
    if (contentImgs(html).length >= 2) enriched++;
  }

  const flushed = await bank.flush();
  console.log('Фото: страниц обновлено', touched, ', с ≥2 фото после прохода', enriched,
    ', пропущено', skipped, ', файлов в photos/', flushed);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
