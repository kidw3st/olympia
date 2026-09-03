'use strict';
// Чистит самые тяжёлые «стены текста»: нумерованные <p> → списки,
// выносит длинные sibling-<ul> из article в блок «Смотрите также».
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'redesign');

const TARGETS = [
  'swimming_center/pravila-bezopasnogo-povedeniya-na-vode',
  'swimming_center/pamyatka-dlya-roditeley',
  'fitness_center/tehnika-bezopasnosti',
  'legal/fz152',
  'legal/personal-data-consent',
  'help'
];

function walkSpa(dir, out, base) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    const rel = base ? base + '/' + e.name : e.name;
    if (e.isDirectory()) walkSpa(abs, out, rel);
    else if (e.name === 'index.html' && base && base.split('/').length >= 2) {
      out.push(base.replace(/\\/g, '/'));
    }
  }
  return out;
}

function numberedPsToList(article) {
  // группы подряд идущих <p>1. ...</p> / <p>1.1. ...</p>
  return article.replace(/(?:<p>\s*(?:\d+\.)+\s*[\s\S]*?<\/p>\s*){3,}/gi, (block) => {
    const items = [];
    const re = /<p>\s*((?:\d+\.)+)\s*([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = re.exec(block))) {
      const num = m[1].trim();
      const body = m[2].replace(/\s+/g, ' ').trim();
      if (!body) continue;
      items.push(`<li><span class="rules-num">${num}</span> ${body}</li>`);
    }
    if (items.length < 3) return block;
    return `<ol class="rules-list rules-list--numbered">\n${items.join('\n')}\n</ol>\n`;
  });
}

function dashPsToList(article) {
  return article.replace(/(?:<p>\s*[-–—]\s*[\s\S]*?<\/p>\s*){3,}/gi, (block) => {
    const items = [];
    const re = /<p>\s*[-–—]\s*([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = re.exec(block))) {
      const body = m[1].replace(/\s+/g, ' ').trim();
      if (body) items.push(`<li>${body}</li>`);
    }
    if (items.length < 3) return block;
    return `<ul class="rules-list">\n${items.join('\n')}\n</ul>\n`;
  });
}

function extractSiblingNav(html) {
  // длинный ul в конце article с одними ссылками — вынести
  return html.replace(
    /(<article class="article[^"]*"[^>]*>)([\s\S]*?)(<\/article>)/i,
    (m0, open, body, close) => {
      let cleaned = numberedPsToList(body);
      cleaned = dashPsToList(cleaned);

      const ulRe = /<ul>([\s\S]*?)<\/ul>/gi;
      let last = null;
      let m;
      while ((m = ulRe.exec(cleaned))) {
        const inner = m[1];
        const links = (inner.match(/<a\b/gi) || []).length;
        if (links >= 5) last = { start: m.index, end: m.index + m[0].length, inner };
      }
      if (!last) return open + cleaned + close;

      const before = cleaned.slice(0, last.start).trim();
      const after = cleaned.slice(last.end).trim();
      const lis = [];
      const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      let li;
      while ((li = liRe.exec(last.inner))) {
        const a = li[1].match(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
        if (!a) continue;
        const name = a[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        if (!name || /index\.html["']?\s*>?\s*$/i.test(a[1]) && a[1].includes('./index.html')) continue;
        if (a[1].includes('./index.html')) continue;
        lis.push(`      <li><a class="hub-card" href="${a[1]}"><span class="hub-card__name">${name}</span></a></li>`);
      }
      if (lis.length < 5) return open + cleaned + close;
      const nav =
        `\n    <section class="section" aria-label="Смотрите также">\n` +
        `      <div class="section-head reveal"><h2>Смотрите также</h2></div>\n` +
        `      <ul class="hub-cards reveal">\n${lis.join('\n')}\n      </ul>\n` +
        `    </section>\n`;
      return open + before + (after ? '\n' + after : '') + close + nav;
    }
  );
}

let n = 0;
const spaLeaves = walkSpa(path.join(OUT, 'spa_center'), [], 'spa_center');
const all = TARGETS.concat(spaLeaves);

for (const rel of all) {
  const f = path.join(OUT, rel, 'index.html');
  if (!fs.existsSync(f)) continue;
  let html = fs.readFileSync(f, 'utf8');
  const next = extractSiblingNav(html);
  if (next !== html) {
    fs.writeFileSync(f, next, 'utf8');
    n++;
  }
}
console.log('Prose cleanup: обновлено страниц', n);
