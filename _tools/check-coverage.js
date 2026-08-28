'use strict';
// Сверяет все URL из карт сайта с файлами на диске: что скачано, а что пропущено.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'site');
const ORIGIN = 'https://olympiaperm.ru';
const MAPS = ['', '-iblock-8', '-iblock-3', '-iblock-33', '-iblock-18'];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Safari/537.36';

function localFor(pathname) {
  let p = pathname;
  try { p = decodeURIComponent(p); } catch (e) {}
  const cands = p.endsWith('/') ? [p + 'index.html'] : [p + '.html', p + '/index.html', p];
  for (const c of cands) {
    const abs = path.join(ROOT, c.replace(/^\/+/, ''));
    try { if (fs.statSync(abs).isFile()) return c; } catch (e) {}
  }
  return null;
}

(async () => {
  const all = new Set();
  for (const n of MAPS) {
    const r = await fetch(ORIGIN + '/sitemap' + n + '.xml', { headers: { 'User-Agent': UA } });
    if (!r.ok) continue;
    const xml = await r.text();
    (xml.match(/<loc>([^<]+)<\/loc>/g) || []).forEach(l => {
      const href = l.replace(/<\/?loc>/g, '').trim();
      if (/sitemap.*\.xml$/i.test(href)) return;
      try { all.add(new URL(href).pathname); } catch (e) {}
    });
  }

  const missing = [];
  for (const p of all) if (!localFor(p)) missing.push(p);

  console.log('URL в картах сайта:  ' + all.size);
  console.log('  есть на диске:     ' + (all.size - missing.length));
  console.log('  ПРОПУЩЕНО:         ' + missing.length);
  if (missing.length) {
    console.log('\nПропущенные:');
    missing.slice(0, 40).forEach(p => console.log('  ' + p));
    fs.writeFileSync(path.join(__dirname, 'missing.json'), JSON.stringify(missing, null, 1), 'utf8');
    console.log('\nСписок: _tools/missing.json');
  }
})();
