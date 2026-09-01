'use strict';
// Спец-страницы поверх универсальной конвертации:
// 1) профили сотрудников (team/<cat>/<slug>) — из coach_page
// 2) расписания (timetable/*) — чистые страницы с CTA и архивной интерактивной версией
// 3) zapis_cdp — запись
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');

function write(rel, html) {
  const f = path.join(OUT, rel, 'index.html');
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html, 'utf8');
}

function balanced(html, startIdx) {
  let i = html.indexOf('>', startIdx) + 1;
  let depth = 1;
  const re = /<div\b|<\/div>/g;
  re.lastIndex = i;
  let m;
  while ((m = re.exec(html))) {
    if (m[0] === '</div>') depth--; else depth++;
    if (depth === 0) return html.slice(i, m.index);
  }
  return '';
}

/* ============ 1. ПРОФИЛИ СОТРУДНИКОВ ============ */
const CATS = {
  'basseyn': 'Бассейн',
  'detskiy-tsentr-plavaniya': 'Центр детского плавания',
  'fitnes-tsentr': 'Фитнес-центр',
  'spa-tsentr': 'СПА-центр',
  'kineziterapiya': 'Кинезитерапия'
};
let persons = 0, personFail = [];
for (const cat of Object.keys(CATS)) {
  const catDir = path.join(SITE, 'team', cat);
  if (!fs.existsSync(catDir)) continue;
  for (const e of fs.readdirSync(catDir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const src = path.join(catDir, e.name, 'index.html');
    if (!fs.existsSync(src)) continue;
    const h = fs.readFileSync(src, 'utf8');
    const rel = ['team', cat, e.name].join('/');
    const depth = 3;
    const sPrefix = '../'.repeat(depth + 1) + 'site/';

    // фото из coach_head
    const bg = (h.match(/coach_head" style="background-image: url\('([^']+)'\)/) || [])[1];
    // имя/должность/стаж из первого info_coach
    const ic = h.indexOf('info_coach');
    const seg = ic >= 0 ? h.slice(ic, ic + 2500) : '';
    const name = ((seg.match(/class="title"[^>]*>([^<]+)</) || [])[1] || '').trim();
    const post = ((seg.match(/class="post"[^>]*>([^<]+)</) || [])[1] || '').trim();
    const desc = ((seg.match(/class="desc"[^>]*>([^<]+)</) || [])[1] || '').trim();
    // биография из coach_description .text
    let bio = '';
    const cd = h.indexOf('coach_description');
    if (cd >= 0) {
      const t = h.indexOf('class="text"', cd);
      if (t >= 0) {
        const open = h.lastIndexOf('<div', t);
        bio = balanced(h, open);
      }
    }
    if (!name) { personFail.push(rel); continue; }

    // чистка и пути в биографии
    bio = bio.replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/\sstyle="[^"]*"/gi, '')
      .replace(/\b(src|href)="([^"]+)"/gi, (m0, attr, url) => {
        const u = url.trim();
        if (/^(https?:|mailto:|tel:|#|data:)/i.test(u)) return m0;
        let r;
        try { r = path.posix.normalize(path.posix.join('/', rel, u)); } catch (err) { return m0; }
        if (r.startsWith('..')) return m0;
        return attr + '="' + sPrefix + r.replace(/^\/+/, '') + '"';
      });

    let photoAbs = '';
    if (bg) {
      let r;
      try { r = path.posix.normalize(path.posix.join('/', rel, bg)); } catch (err) { r = null; }
      if (r && !r.startsWith('..')) photoAbs = sPrefix + r.replace(/^\/+/, '');
    }

    const rr = '../'.repeat(depth);
    const crumbs = lib.breadcrumbs(depth, [
      [rr + 'index.html', 'Главная'],
      [rr + 'team/index.html', 'Команда'],
      [null, name]
    ]);
    const content = `  <div class="container">
    ${crumbs}
    <div class="dirpage-hero" style="margin-top: clamp(20px, 3vw, 36px)">
      ${photoAbs ? `<figure class="dirpage-hero__media reveal-fill" style="aspect-ratio: 4 / 4.4">
        <img src="${photoAbs}" alt="${lib.esc(name)}" style="object-position: top">
      </figure>` : ''}
      <div class="reveal">
        <div class="page-head" style="padding-top: 0">
          <h1 style="font-size: clamp(1.6rem, 3.6vw, 2.6rem)">${lib.esc(name)}</h1>
          ${post ? `<p class="page-head__lede">${lib.esc(post)}</p>` : ''}
          ${desc ? `<p class="hero-note" style="margin-top: 14px">${lib.esc(desc)}</p>` : ''}
        </div>
      </div>
    </div>
    ${bio.trim() ? `<article class="article">
${bio}
    </article>` : ''}
    <div class="article-footer">
      <a class="btn btn--ghost" href="${rr}team/index.html">Вся команда</a>
      <a class="btn btn--primary" href="${rr}zapis_cdp/index.html">Записаться</a>
    </div>
  </div>`;
    write(rel, lib.shell(depth, {
      title: name + ' — команда «Олимпии»',
      description: (post || 'Специалист спорткомплекса «Олимпия»') + '. ' + (desc || ''),
      content
    }));
    persons++;
  }
}
console.log('Профили сотрудников: ' + persons + ', не удалось: ' + personFail.length);
personFail.slice(0, 5).forEach(f => console.log('  !', f));

/* ============ 1b. СТРАНИЦЫ КАТЕГОРИЙ КОМАНДЫ ============ */
const CAT_ORDER = ['basseyn', 'fitnes-tsentr', 'detskiy-tsentr-plavaniya', 'spa-tsentr', 'kineziterapiya'];
for (const slug of CAT_ORDER) {
  const fp = path.join(SITE, 'team', slug, 'index.html');
  if (!fs.existsSync(fp)) continue;
  const html = fs.readFileSync(fp, 'utf8');
  const people = [];
  const chunks = html.split('class="photo_mobile"').slice(1);
  for (const ch of chunks) {
    const seg = ch.slice(0, 3000);
    const img = (seg.match(/^ style="background-image: url\('([^']+)'\)/) || [])[1];
    const nm = (seg.match(/class="name">([^<]+)</) || [])[1];
    const post = (seg.match(/class="post">([^<]*)</) || [])[1] || '';
    const href = (seg.match(/class="read_more" href="([^"]+)"/) || [])[1];
    if (!nm || !href) continue;
    try {
      if (fs.readFileSync(path.join(SITE, 'team', slug, href), 'utf8').includes('errortext')) continue;
    } catch (e) { continue; }
    people.push({ img: (img || '').replace(/^(\.\.\/)+/, ''), name: nm.trim(), post: post.trim(), href });
  }
  if (!people.length) continue;

  const depth = 2;
  const rr = '../'.repeat(depth);
  const sp = '../'.repeat(depth + 1) + 'site/';
  const catName = CATS[slug];
  const cards = people.map(p => `        <a class="team-card" href="${p.href.replace(/index\.html$/, '')}index.html">
          <figure><img src="${sp}${p.img}" alt="${lib.esc(p.name)}" loading="lazy"></figure>
          <div class="team-card__name">${lib.esc(p.name)}</div>
          <div class="team-card__role">${lib.esc(p.post)}</div>
        </a>`).join('\n');

  const others = CAT_ORDER.filter(s => s !== slug && fs.existsSync(path.join(SITE, 'team', s, 'index.html')))
    .map(s => `<a href="${rr}team/${s}/index.html">${lib.esc(CATS[s])}</a>`).join('');

  const content = `  <div class="container">
    ${lib.breadcrumbs(depth, [
      [rr + 'index.html', 'Главная'],
      [rr + 'team/index.html', 'Команда'],
      [null, catName]
    ])}
    <div class="page-head">
      <h1>${lib.esc(catName)}</h1>
      <p class="page-head__lede">${people.length} ${people.length === 1 ? 'специалист' : (people.length < 5 ? 'специалиста' : 'специалистов')} направления. Нажмите на карточку, чтобы прочитать об образовании и опыте.</p>
    </div>
    <div class="filter-pills">
      <a class="is-active" href="#">${lib.esc(catName)}</a>
      ${others}
    </div>
    <div class="team-grid reveal">
${cards}
    </div>
    <div class="cta-band reveal-fill">
      <div>
        <h2>Записаться на занятие</h2>
        <p class="cta-band__sub">Подберём тренера и удобное время.</p>
      </div>
      <div class="cta-band__actions">
        <a class="btn btn--ghost-light" href="${rr}team/index.html">Вся команда</a>
        <a class="btn btn--primary" href="${rr}zapis_cdp/index.html">Записаться</a>
      </div>
    </div>
  </div>`;

  write('team/' + slug, lib.shell(depth, {
    title: catName + ' — команда «Олимпии»',
    description: 'Тренеры и специалисты направления «' + catName + '» спорткомплекса «Олимпия» в Перми.',
    content
  }));
  console.log('  категория команды: ' + slug + ' (' + people.length + ')');
}

/* ============ 2. РАСПИСАНИЯ ============ */
const TIMETABLES = [
  ['timetable/group', 'Расписание групповых занятий', 'Групповые программы фитнес-центра: залы и аквааэробика.', 'group,aqua'],
  ['timetable/big-pool', 'Расписание большого бассейна', 'Свободное плавание и занятия в 50-метровом бассейне.', 'pool'],
  ['timetable/group-cp', 'Расписание дежурных групп центра плавания', 'Дежурные группы Центра детского плавания.', 'kids'],
  ['timetable/mama-i-malysh', 'Расписание занятий «Мама и малыш»', 'Совместные занятия для родителей с малышами в детском бассейне.', 'kids'],
  ['timetable/ekg', 'Расписание кабинета ЭКГ', 'Работа кабинета ЭКГ для оформления справок-допусков.', '']
];
for (const [rel, title, ledeTxt, tracks] of TIMETABLES) {
  if (!fs.existsSync(path.join(SITE, rel, 'index.html'))) continue;
  const depth = rel.split('/').length;
  const rr = '../'.repeat(depth);
  const sp = '../'.repeat(depth + 1) + 'site/';
  const crumbs = lib.breadcrumbs(depth, [
    [rr + 'index.html', 'Главная'],
    [null, title]
  ]);
  const content = `  <div class="container">
    ${crumbs}
    <div class="page-head">
      <h1>${lib.esc(title)}</h1>
      <p class="page-head__lede">${lib.esc(ledeTxt)} Нажмите на занятие, чтобы
      прочитать описание и записаться. Уточнить детали можно по телефону
      <a href="tel:+73422567892">+7&nbsp;(342)&nbsp;2-56789-2</a>.</p>
    </div>

${tracks ? `
    <section class="section" aria-label="Сетка занятий" style="margin-top: clamp(28px, 4vw, 44px)">
      <div class="sched" data-schedule="${tracks}"
           data-schedule-src="${rr}data/schedule.json"
           data-book-href="${rr}zapis_cdp/index.html">
        <p class="sched__empty">Загружаем расписание…</p>
      </div>
    </section>
` : `
    <section class="section" aria-label="Режим работы">
      <div class="section-head reveal"><h2>Режим работы</h2></div>
      <dl class="hours reveal">
        <div class="hours__row"><dt>Понедельник&#8211;пятница</dt><dd>07:00&#8211;22:30</dd></div>
        <div class="hours__row"><dt>Суббота, воскресенье и праздники</dt><dd>08:00&#8211;22:30</dd></div>
        <div class="hours__row"><dt>Последний впуск</dt><dd>до 21:15</dd></div>
      </dl>
    </section>
`}
    <section class="section" aria-label="Полезное">
      <ul class="tickets-list reveal">
        <li>
          <a class="ticket-row" href="${rr}contacts/index.html">
            <span class="ticket-row__name">Уточнить по телефону</span>
            <span class="ticket-row__hint">+7 (342) 2-56789-2, с 8:00 до 21:00</span>
          </a>
        </li>
        <li>
          <a class="ticket-row" href="${sp + rel}/index.html">
            <span class="ticket-row__name">Архивная версия страницы</span>
            <span class="ticket-row__hint">исходный виджет системы записи</span>
          </a>
        </li>
      </ul>
    </section>

    <div class="cta-band reveal-fill">
      <div>
        <h2>Планируете первый визит?</h2>
        <p class="cta-band__sub">Будни с 07:00, выходные с 08:00. Кассы до 21:15.</p>
      </div>
      <div class="cta-band__actions">
        <a class="btn btn--ghost-light" href="${rr}vpervye-v-olimpii/index.html">Памятка новичку</a>
        <a class="btn btn--primary" href="${rr}zapis_cdp/index.html">Записаться</a>
      </div>
    </div>
  </div>`;
  write(rel, lib.shell(depth, {
    title: title + ' — «Олимпия» Пермь',
    description: ledeTxt + ' Спорткомплекс «Олимпия», Пермь.',
    active: 'timetable',
    scripts: tracks ? ['js/schedule.js'] : [],
    content
  }));
  console.log('  расписание: ' + rel);
}

/* ============ 3. ЗАПИСЬ ============ */
{
  const rel = 'zapis_cdp';
  const depth = 1;
  const rr = '../';
  const sp = '../../site/';
  const crumbs = lib.breadcrumbs(depth, [
    [rr + 'index.html', 'Главная'],
    [null, 'Запись']
  ]);
  const content = `  <div class="container">
    ${crumbs}
    <div class="page-head">
      <h1>Запись в «Олимпию»</h1>
      <p class="page-head__lede">Запишитесь в Центр детского плавания, на занятия
      и процедуры — любым удобным способом.</p>
    </div>

    <section class="section" aria-label="Способы записи">
      <div class="section-head reveal">
        <h2>Как записаться</h2>
      </div>
      <ul class="tickets-list reveal">
        <li>
          <a class="ticket-row" href="tel:+73422567892">
            <span class="ticket-row__name">По телефону</span>
            <span class="ticket-row__hint">+7 (342) 2-56789-2, горячая линия 8:00–21:00</span>
          </a>
        </li>
        <li>
          <a class="ticket-row" href="https://vk.com/olympiaperm" rel="noopener">
            <span class="ticket-row__name">Во ВКонтакте</span>
            <span class="ticket-row__hint">напишите сообщение сообществу</span>
          </a>
        </li>
        <li>
          <a class="ticket-row" href="https://t.me/olympiaperm" rel="noopener">
            <span class="ticket-row__name">В Телеграме</span>
            <span class="ticket-row__hint">@olympiaperm</span>
          </a>
        </li>
        <li>
          <a class="ticket-row" href="${sp}zapis_cdp/index.html">
            <span class="ticket-row__name">Онлайн-форма</span>
            <span class="ticket-row__hint">архивная версия; на живом сайте — форма обратного звонка</span>
          </a>
        </li>
        <li>
          <a class="ticket-row" href="${rr}contacts/index.html">
            <span class="ticket-row__name">В кассах комплекса</span>
            <span class="ticket-row__hint">ул. Мира, 41 · ежедневно до 21:15</span>
          </a>
        </li>
      </ul>
    </section>

    <div class="cta-band reveal-fill">
      <div>
        <h2>Не знаете, с чего начать?</h2>
        <p class="cta-band__sub">Посмотрите направления: бассейны, детское плавание,
        фитнес, SPA и кинезитерапия.</p>
      </div>
      <div class="cta-band__actions">
        <a class="btn btn--ghost-light" href="${rr}index.html#dirs">Направления</a>
        <a class="btn btn--primary" href="${rr}price/index.html">Цены</a>
      </div>
    </div>
  </div>`;
  write(rel, lib.shell(depth, {
    title: 'Запись — «Олимпия» Пермь',
    description: 'Запись в Центр детского плавания и на услуги спорткомплекса «Олимпия»: телефон, соцсети, кассы.',
    content
  }));
  console.log('  запись: zapis_cdp');
}

console.log('Готово.');
