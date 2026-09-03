'use strict';
// Вставляет Google Play в футеры уже собранных страниц (после App Store).
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'redesign');
const PLAY =
  '<a class="btn btn--ghost-light app-link" href="https://play.google.com/store/apps/details?id=com.itrack.sportivnyjkompl648840" rel="noopener">' +
  '<svg class="app-link__icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<rect x="6" y="2.5" width="12" height="19" rx="2.6"/><path d="M12 7.5v6.5"/><path d="m9.4 11.4 2.6 2.6 2.6-2.6"/><path d="M10.8 18.4h2.4"/></svg>' +
  '<span>Google Play</span></a>';

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, out);
    else if (e.name === 'index.html') out.push(abs);
  }
  return out;
}

let updated = 0, skipped = 0;
for (const f of walk(OUT, [])) {
  let html = fs.readFileSync(f, 'utf8');
  if (html.includes('play.google.com/store/apps')) { skipped++; continue; }
  if (!html.includes('App Store</span></a>')) { skipped++; continue; }
  const next = html.replace(
    /(<a class="btn btn--ghost-light app-link"[^>]*>[\s\S]*?<span>App Store<\/span><\/a>)/,
    '$1\n          ' + PLAY
  );
  if (next === html) { skipped++; continue; }
  fs.writeFileSync(f, next, 'utf8');
  updated++;
}
console.log('Google Play: обновлено', updated, ', пропущено', skipped);
