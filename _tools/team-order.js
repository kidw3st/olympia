'use strict';
// Порядок карточек команды — как на olympiaperm.ru/team/<cat>/.
const fs = require('fs');
const path = require('path');

const TEAM_CAT_ORDER = [
  'detskiy-tsentr-plavaniya',
  'kineziterapiya',
  'spa-tsentr',
  'fitnes-tsentr',
  'basseyn'
];

const TEAM_CATS = {
  basseyn: 'Бассейн',
  'detskiy-tsentr-plavaniya': 'Центр детского плавания',
  'fitnes-tsentr': 'Фитнес-центр',
  'spa-tsentr': 'СПА-центр',
  kineziterapiya: 'Кинезитерапия'
};

function extractCategoryOrder(html, catSlug) {
  const order = [];
  const seen = new Set();
  const re = /class="read_more"[^>]*href="([^"]+)"/gi;
  let m;
  while ((m = re.exec(html))) {
    let normalized = m[1].replace(/^\.\//, '').replace(/\/index\.html$/, '');
    if (normalized.startsWith('../')) normalized = normalized.replace(/^\.\.\//, '');
    if (normalized.includes('/')) {
      const parts = normalized.split('/');
      if (parts[0] !== catSlug) continue;
      normalized = parts[parts.length - 1];
    }
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    order.push(normalized);
  }
  return order;
}

function loadOrder(siteRoot, catSlug) {
  const fp = path.join(siteRoot, 'team', catSlug, 'index.html');
  if (!fs.existsSync(fp)) return [];
  return extractCategoryOrder(fs.readFileSync(fp, 'utf8'), catSlug);
}

function sortPeople(people, order) {
  const rank = new Map(order.map((s, i) => [s, i]));
  return people.slice().sort((a, b) => {
    const ra = rank.has(a.slug) ? rank.get(a.slug) : 9999;
    const rb = rank.has(b.slug) ? rank.get(b.slug) : 9999;
    if (ra !== rb) return ra - rb;
    return a.name.localeCompare(b.name, 'ru');
  });
}

function loadPeople(siteRoot, catSlug) {
  const catDir = path.join(siteRoot, 'team', catSlug);
  if (!fs.existsSync(catDir)) return [];
  const people = [];
  for (const e of fs.readdirSync(catDir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const src = path.join(catDir, e.name, 'index.html');
    if (!fs.existsSync(src)) continue;
    const h = fs.readFileSync(src, 'utf8');
    if (h.includes('errortext')) continue;
    const ic = h.indexOf('info_coach');
    const seg = ic >= 0 ? h.slice(ic, ic + 2500) : '';
    const nm = ((seg.match(/class="title"[^>]*>([^<]+)</) || [])[1] || '').trim();
    const post = ((seg.match(/class="post"[^>]*>([^<]+)</) || [])[1] || '').trim();
    if (!nm) continue;
    const bg = (h.match(/coach_head" style="background-image: url\('([^']+)'\)/) || [])[1] || '';
    let img = '';
    if (bg) {
      try {
        const r = path.posix.normalize(path.posix.join('/team/' + catSlug + '/' + e.name, bg));
        if (!r.startsWith('..')) img = r.replace(/^\/+/, '');
      } catch (err) { /* ignore */ }
    }
    people.push({
      slug: e.name,
      img,
      name: nm,
      post,
      href: e.name + '/index.html'
    });
  }
  return sortPeople(people, loadOrder(siteRoot, catSlug));
}

module.exports = {
  TEAM_CAT_ORDER,
  TEAM_CATS,
  loadPeople,
  loadOrder,
  sortPeople,
  extractCategoryOrder
};
