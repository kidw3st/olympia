'use strict';
// Хаб бассейнов: 6 табов, преимущества, прокат, новости — из site/pools/.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');
const typo = require('./typography');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');
const REL = 'pools';
const DEPTH = 1;
const S = '../../site/';
const R = '../';

function balancedDiv(html, openIdx) {
  const start = html.indexOf('>', openIdx) + 1;
  let depth = 1;
  const re = /<div\b|<\/div>/gi;
  re.lastIndex = start;
  let m;
  while ((m = re.exec(html))) {
    if (m[0].toLowerCase() === '</div>') depth--; else depth++;
    if (depth === 0) return { inner: html.slice(start, m.index), end: m.index + 6 };
  }
  return { inner: html.slice(start), end: html.length };
}

function fixUrls(html, prefix) {
  return html
    .replace(/\b(src|href)="([^"]+)"/gi, (m0, attr, url) => {
      const u = url.trim();
      if (/^(https?:|mailto:|tel:|#|data:)/i.test(u)) return m0;
      try {
        const r = path.posix.normalize(path.posix.join('/', REL, u));
        if (r.startsWith('..')) return m0;
        return attr + '="' + prefix + r.replace(/^\/+/, '') + '"';
      } catch (e) { return m0; }
    });
}

function cleanProse(html, prefix) {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\sstyle="[^"]*"/gi, '')
    .replace(/<div[^>]*class="clear"[^>]*><\/div>/gi, '');
  s = fixUrls(s, prefix);
  return typo.polish(s);
}

function extractPools(html) {
  const list = [];
  const startIdx = html.indexOf('our_pools_slider');
  if (startIdx < 0) return list;
  const re = /<div class="slide"[^>]*>/gi;
  re.lastIndex = startIdx;
  let m;
  while ((m = re.exec(html))) {
    const cut = balancedDiv(html, m.index);
    const seg = cut.inner;
    const photo = (seg.match(/class="photo"[^>]*url\('([^']+)'\)/) || [])[1];
    const title = (seg.match(/class="title">([^<]+)</) || [])[1];
    if (!title) { re.lastIndex = cut.end; continue; }
    let desc = '';
    const di = seg.indexOf('_description');
    if (di >= 0) {
      const open = seg.lastIndexOf('<div', di);
      desc = balancedDiv(seg, open).inner;
    }
    const specs = [];
    const specRe = /<div class="item">\s*<div class="val">([^<]*)<\/div>\s*<div class="text">([^<]*)<\/div>/gi;
    let sm;
    while ((sm = specRe.exec(seg))) {
      specs.push({ val: sm[1].trim(), label: sm[2].trim() });
    }
    const bullets = [];
    const ul = seg.match(/<ul>([\s\S]*?)<\/ul>/);
    if (ul) {
      const liRe = /<li>([^<]+)<\/li>/gi;
      let lm;
      while ((lm = liRe.exec(ul[1]))) bullets.push(lm[1].replace(/^—\s*/, '').trim());
    }
    list.push({ title: title.trim(), photo, desc, specs, bullets });
    re.lastIndex = cut.end;
    if (list.length >= 6) break;
  }
  return list;
}

function extractAdvantages(html) {
  const items = [];
  const block = html.match(/class="our_advantages"([\s\S]*?)class="first_time"/);
  if (!block) return items;
  const re = /<div class="title">([^<]+)<\/div>[\s\S]*?<div class="desc">\s*([\s\S]*?)<\/div>/gi;
  let m;
  while ((m = re.exec(block[1]))) {
    items.push({ title: m[1].trim(), text: cellText(m[2]) });
  }
  return items;
}

function extractFirstTime(html) {
  const items = [];
  const block = html.match(/class="first_time"([\s\S]*?)class="rental_procet"/);
  if (!block) return items;
  const re = /<div class="text">\s*([\s\S]*?)<\/div>/gi;
  let m;
  while ((m = re.exec(block[1]))) {
    const t = cellText(m[1]);
    if (t) items.push(t);
  }
  return items;
}

function extractRental(html) {
  const block = html.match(/class="rental_procet"([\s\S]*?)class="what_bring"/);
  if (!block) return null;
  const photo = (block[1].match(/url\('([^']+)'\)/) || [])[1];
  const p = block[1].match(/<p>\s*([\s\S]*?)<\/p>/);
  return {
    photo,
    text: p ? cellText(p[1]) : ''
  };
}

function cellText(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function latestNews(limit) {
  const dir = path.join(OUT, 'news', 'basseyn');
  if (!fs.existsSync(dir)) return [];
  const items = [];
  for (const slug of fs.readdirSync(dir)) {
    const fp = path.join(dir, slug, 'index.html');
    if (!fs.existsSync(fp)) continue;
    const h = fs.readFileSync(fp, 'utf8');
    const title = (h.match(/<h1[^>]*class="post__title">([^<]+)/) || [])[1];
    const date = (h.match(/datetime="([^"]+)"/) || [])[1];
    const img = ((h.match(/post__cover[^>]*>[\s\S]*?src="([^"]+)"/) || h.match(/<img[^>]+src="([^"]+)"[^>]+alt="[^"]*"/)) || [])[1];
    if (title) items.push({
      href: R + 'news/basseyn/' + slug + '/index.html',
      title: title.trim(),
      meta: date ? new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
      photo: img || R + 'assets/lanes-overhead.jpg'
    });
  }
  items.sort((a, b) => (b.meta || '').localeCompare(a.meta || ''));
  return items.slice(0, limit);
}

const srcFile = path.join(SITE, REL, 'index.html');
if (!fs.existsSync(srcFile)) {
  console.log('site/pools/index.html не найден');
  process.exit(1);
}

const html = fs.readFileSync(srcFile, 'utf8');
const sitePrefix = S;
const pools = extractPools(html);
const advantages = extractAdvantages(html);
const firstTime = extractFirstTime(html);
const rental = extractRental(html);

const tabItems = pools.map((pool, i) => {
  let photo = pool.photo || '';
  if (photo && !photo.startsWith('http')) {
    try {
      photo = sitePrefix + path.posix.normalize(path.posix.join('/', REL, photo)).replace(/^\/+/, '');
    } catch (e) { /* */ }
  }
  const specHtml = pool.specs.length ? lib.specGrid(pool.specs) : '';
  const bullets = pool.bullets.length
    ? `<ul>${pool.bullets.map((b) => `<li>${lib.esc(b)}</li>`).join('')}</ul>` : '';
  const panelHtml = `<div class="hub-panel__split">
        <figure class="hub-panel__media reveal-fill">
          <img src="${photo}" alt="${lib.esc(pool.title)}" loading="lazy">
        </figure>
        <div>
          <h3 class="hub-panel__title">${lib.esc(pool.title)}</h3>
          <div class="hub-panel__text">${cleanProse(pool.desc, sitePrefix)}${bullets}</div>
          ${specHtml}
        </div>
      </div>`;
  return { title: pool.title, html: panelHtml };
});

const hubTabs = tabItems.length ? lib.hubTabs({ id: 'pools', label: 'Наши бассейны', items: tabItems }) : '';

const factGrid = advantages.length ? `
    <section class="section" aria-label="Преимущества">
      <div class="section-head reveal">
        <h2>Наши преимущества</h2>
      </div>
      <div class="fact-grid reveal">
        ${advantages.map((a) => `<div class="fact-grid__item">
          <h3 class="fact-grid__title">${lib.esc(a.title)}</h3>
          <p class="fact-grid__text">${lib.esc(a.text)}</p>
        </div>`).join('\n        ')}
      </div>
    </section>` : '';

const firstTimeSec = firstTime.length ? `
    <section class="section" aria-label="Первый визит">
      <div class="section-head reveal">
        <h2>В первый раз?</h2>
      </div>
      <ol class="tickets-list reveal" style="list-style:none;padding:0">
        ${firstTime.map((t, i) => `<li>
          <span class="ticket-row" style="cursor:default">
            <span class="ticket-row__name">${String(i + 1).padStart(2, '0')}. ${lib.esc(t)}</span>
          </span>
        </li>`).join('\n        ')}
      </ol>
      <div class="hero-actions reveal" style="margin-top:20px">
        <a class="btn btn--primary" href="${R}price/index.html">Наши цены</a>
      </div>
    </section>` : '';

let rentalSec = '';
if (rental && rental.text) {
  let rPhoto = rental.photo ? sitePrefix + path.posix.normalize(path.posix.join('/', REL, rental.photo)).replace(/^\/+/, '') : '';
  rentalSec = `
    <section class="section" aria-label="Прокат">
      <div class="dirpage-hero reveal">
        <figure class="dirpage-hero__media reveal-fill">
          <img src="${rPhoto}" alt="Прокат инвентаря в «Олимпии»" loading="lazy">
        </figure>
        <div>
          <div class="section-head" style="margin-bottom:12px">
            <h2>Прокат инвентаря</h2>
          </div>
          <p class="page-head__lede">${lib.esc(rental.text)}</p>
          <div class="hero-actions" style="margin-top:16px">
            <a class="btn btn--ghost" href="${R}visitors/rental/index.html">Подробнее о прокате</a>
          </div>
        </div>
      </div>
    </section>`;
}

const news = latestNews(3);
const newsSec = news.length ? lib.scrollStrip(news, { label: 'Новости бассейнов', id: 'pools-news' }) : '';

const content = `  <div class="container">
    ${lib.breadcrumbs(DEPTH, lib.trailFromRel(REL, 'Бассейны'))}
    <div class="page-head">
      <h1>Бассейны</h1>
      <p class="page-head__lede">Шесть бассейнов для спорта и отдыха, включая 50-метровый олимпийского стандарта.</p>
    </div>

    <div class="dirpage-hero">
      <figure class="dirpage-hero__media reveal-fill">
        <img src="${R}assets/pool-50m.jpg" alt="50-метровый бассейн «Олимпии»" style="object-position:50% 72%" width="800" height="533" loading="eager">
      </figure>
      <div class="reveal">
        <p class="page-head__lede">Спорткомплекс «Олимпия» — шесть бассейнов для разнообразного отдыха.
        50-метровый олимпийский бассейн, детские зоны, гидромассаж и глубоководная часть для водного поло.</p>
        <p class="page-head__lede" style="margin-top:14px">Единственный в Перми бассейн с лицензией на соревнования
        регионального, всероссийского и международного уровня.</p>
      </div>
    </div>

    ${hubTabs}

    <section class="section" aria-label="Услуги">
      <div class="section-head reveal">
        <h2>Услуги и занятия</h2>
      </div>
      ${lib.cardList([
    { href: './adult_groups/index.html', name: 'Занятия плаванием для взрослых', hint: 'группы и обучение', photo: S + 'upload/iblock/b2d/b2d270c05a5bca4c28ecf42edb7aa2b4.jpg', photoAlt: 'Занятия плаванием' },
    { href: './aqua/index.html', name: 'Аквааэробика', hint: 'тренировки в воде', photo: S + 'upload/iblock/20e/20e55294d0fcb30d3546d491103d306d.jpg', photoAlt: 'Аквааэробика' },
    { href: './baths/index.html', name: 'Бани и сауны', hint: 'комплекс саун', photo: S + 'upload/iblock/400/400e17633308570c5d3edb474cb498d2.jpg', photoAlt: 'Сауны' },
    { href: './clear_water/index.html', name: 'Система очистки воды', hint: 'безопасность воды', photo: S + 'upload/iblock/9bb/9bb7872ef4f68539bd247152069d64f5.jpg', photoAlt: 'Очистка воды' },
    { href: './grafik-sorevnovaniy/index.html', name: 'График соревнований', hint: 'календарь стартов' },
    { href: R + 'price/freeze/index.html', name: 'Заморозка клубной карты', hint: 'пауза карты' }
  ])}
    </section>

    ${factGrid}
    ${firstTimeSec}
    ${rentalSec}
    ${newsSec}

    ${lib.ctaBand('Установите свой рекорд в «Олимпии»', 'Свободное плавание: будни с 07:00, выходные с 08:00.', [
      ['Расписание', R + 'timetable/big-pool/index.html', 'btn--ghost-light'],
      ['Цены', R + 'price/index.html', 'btn--primary']
    ])}
  </div>`;

const page = lib.shell(DEPTH, {
  title: 'Бассейны — «Олимпия» Пермь',
  description: 'Бассейны спорткомплекса «Олимпия» в Перми: 50-метровый олимпийского стандарта, детский, гидромассаж, сауны.',
  active: '',
  content,
  scripts: ['js/hub-tabs.js']
});

fs.mkdirSync(path.join(OUT, REL), { recursive: true });
fs.writeFileSync(path.join(OUT, REL, 'index.html'), page, 'utf8');
console.log('  + pools/index.html (' + pools.length + ' бассейнов)');
