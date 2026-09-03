'use strict';
// Удаляет gallery-strip, добавленные enrich-photos.js перед </main> (orphan galleries).
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'redesign');

function walk(dir, out, base) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    const rel = base ? base + '/' + e.name : e.name;
    if (e.isDirectory()) walk(abs, out, rel);
    else if (e.name === 'index.html') out.push({ abs, rel: base || '' });
  }
  return out;
}

function stripOrphanGallery(html) {
  // Паттерн enrich-photos: container > gallery-strip перед </main>
  const re = /\s*<div class="container"><div class="gallery-strip reveal">\s*[\s\S]*?<\/div><\/div>\s*(?=<\/main>)/;
  if (!re.test(html)) return html;
  return html.replace(re, '\n');
}

function main() {
  const pages = walk(OUT, [], '');
  let stripped = 0;
  for (const page of pages) {
    let html = fs.readFileSync(page.abs, 'utf8');
    const next = stripOrphanGallery(html);
    if (next !== html) {
      fs.writeFileSync(page.abs, next, 'utf8');
      stripped++;
    }
  }
  console.log('Orphan gallery-strip удалено со страниц:', stripped);
}

main();
