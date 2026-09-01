'use strict';
// Спец-страницы поверх универсальной конвертации:
// 1) профили сотрудников (team/<cat>/<slug>) — из coach_page
// 2) расписания (timetable/*) — пример сетки + CTA на цены
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
    const crumbs = lib.breadcrumbs(depth, lib.trailFromRel(rel, name));
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
      active: 'team',
      content
    }));
    persons++;
  }
}
console.log('Профили сотрудников: ' + persons + ', не удалось: ' + personFail.length);
personFail.slice(0, 5).forEach(f => console.log('  !', f));

/* ============ 2. РАСПИСАНИЯ ============ */
const SLOT_PX = 40;
const DAY_START = 7 * 60 + 15; // 7:15
const DAY_END = 22 * 60 + 15;  // 22:15
const SLOT_MIN = 15;
const SLOTS = (DAY_END - DAY_START) / SLOT_MIN;
const LANES = 11;

function toMin(t) {
  const p = String(t).trim().split(/[:.]/).map(Number);
  return p[0] * 60 + (p[1] || 0);
}
function mapBar(hex) {
  const h = (hex || '').toUpperCase();
  if (h.includes('00FF00') || h.includes('#0F0')) return 'var(--blue)';
  return 'var(--red)';
}
function parsePoolCards(html) {
  const marker = 'class="schedule_content"';
  let from = 0;
  let body = '';
  while (true) {
    const i = html.indexOf(marker, from);
    if (i < 0) break;
    const open = html.lastIndexOf('<div', i);
    const inner = balanced(html, open);
    if (inner.includes('card_schedule')) { body = inner; break; }
    from = i + marker.length;
  }
  const cards = [];
  if (!body) return cards;
  const rows = body.split(/<div class="row"[^>]*>/).slice(1);
  for (const chunk of rows) {
    const parts = chunk.split(/<div class="col\b[^"]*"/);
    for (let i = 1; i < parts.length && i <= LANES; i++) {
      const lane = i - 1;
      const title = ((parts[i].match(/class="title">\s*([^<]+)/) || [])[1] || '').trim();
      const time = ((parts[i].match(/class="time">\s*([^<]+)/) || [])[1] || '').trim();
      const col = (parts[i].match(/border-left:\s*7px solid\s*(#[0-9A-Fa-f]+)/) || [])[1];
      if (!title || !time) continue;
      const bits = time.split(/\s*-\s*/);
      cards.push({
        lane, title, time: time.replace(/\s+/g, ''),
        start: toMin(bits[0]), end: toMin(bits[1] || bits[0]),
        bar: mapBar(col)
      });
    }
  }
  return cards;
}

function laneBoard(cards) {
  const labels = [];
  for (let i = 0; i < SLOTS; i++) {
    const m = DAY_START + i * SLOT_MIN;
    const hh = String(Math.floor(m / 60)).padStart(2, '0');
    const mm = String(m % 60).padStart(2, '0');
    labels.push(hh + ':' + mm);
  }
  const head = ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Малый']
    .map(x => `<span>${x}</span>`).join('');
  const times = labels.map(t => `<div>${t}</div>`).join('');
  const cols = [];
  for (let lane = 0; lane < LANES; lane++) {
    const items = cards.filter(c => c.lane === lane).map(c => {
      const top = ((c.start - DAY_START) / SLOT_MIN) * SLOT_PX;
      const h = Math.max(((c.end - c.start) / SLOT_MIN) * SLOT_PX, SLOT_PX);
      return `<article class="lane-card" style="top:${top}px;height:${h}px;--bar:${c.bar}">
            <span class="lane-card__title">${lib.esc(c.title)}</span>
            <span class="lane-card__time">${lib.esc(c.time.replace(/-/g, '–'))}</span>
          </article>`;
    }).join('\n          ');
    cols.push(`<div class="lane-col">${items}</div>`);
  }
  const height = SLOTS * SLOT_PX;
  return `<div class="lane-scroll">
      <div class="lane-board">
        <div class="lane-head">${head}</div>
        <div class="lane-body" style="height:${height}px">
          <div class="lane-times">${times}</div>
          <div class="lane-cols">
          ${cols.join('\n          ')}
          </div>
        </div>
      </div>
    </div>`;
}

function classWeek(days) {
  const names = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  return `<div class="class-week">
    ${names.map((n, i) => {
      const cards = (days[i] || []).map(c =>
        `<article class="class-card"><time>${lib.esc(c[0])}</time><strong>${lib.esc(c[1])}</strong><span>${lib.esc(c[2] || '')}</span></article>`
      ).join('\n          ');
      return `<div class="class-day"><h3>${n}</h3>${cards || '<p class="sched__note">—</p>'}</div>`;
    }).join('\n    ')}
  </div>`;
}

function schedTabs(current, depth) {
  const r = '../'.repeat(depth);
  const items = [
    ['timetable/big-pool', 'Бассейны'],
    ['timetable/group', 'Фитнес-центр'],
    ['timetable/group-cp', 'Дежурные группы ЦП'],
    ['timetable/mama-i-malysh', 'Мама и малыш'],
    ['timetable/ekg', 'ЭКГ']
  ];
  return `<nav class="sched-tabs" aria-label="Тип расписания">
    ${items.map(([rel, name]) => {
      const cur = rel === current ? ' aria-current="page"' : '';
      return `<a href="${r}${rel}/index.html"${cur}>${lib.esc(name)}</a>`;
    }).join('\n    ')}
  </nav>`;
}

function schedShell(rel, title, ledeTxt, photo, photoAlt, inner, mode) {
  const depth = rel.split('/').length;
  const rr = '../'.repeat(depth);
  const sp = lib.siteP(depth);
  const crumbs = lib.breadcrumbs(depth, lib.trailFromRel(rel, title));
  const isLanes = mode === 'lanes';
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const pills = isLanes
    ? `<div class="filter-pills" aria-label="День недели">
        ${days.map((d, i) =>
          `<button type="button"${i === 0 ? ' class="is-active"' : ''}>${d}</button>`
        ).join('\n        ')}
      </div>`
    : '';
  const note = isLanes
    ? 'Пример буднего дня из архива копии. Не касса и не запись.'
    : 'Пример недели. Актуальное расписание — по телефону.';
  return `  <div class="container">
    ${crumbs}
    <div class="page-head">
      <h1>${lib.esc(title)}</h1>
      <p class="page-head__lede">${ledeTxt} Актуальное расписание уточняйте
      по телефону <a href="tel:+73422567892">+7&nbsp;(342)&nbsp;2-56789-2</a> —
      горячая линия работает с 8:00 до 21:00.</p>
    </div>
    ${schedTabs(rel, depth)}
    <figure class="sched-hero reveal-fill">
      <img src="${sp}${photo}" alt="${lib.esc(photoAlt)}" loading="lazy">
    </figure>

    <section class="section" aria-label="Расписание">
      <div class="section-head reveal">
        <h2>Сетка</h2>
        <p class="section-head__aside">Как на сайте комплекса.</p>
      </div>
      ${pills}
      <div class="sched reveal">
        <div class="sched__meta">
          <p class="sched__note">${note}</p>
          <span class="sched__demo">пример</span>
        </div>
        ${inner}
      </div>
    </section>

    <div class="cta-band reveal-fill">
      <div>
        <h2>Планируете первый визит?</h2>
        <p class="cta-band__sub">Будни с 07:00, выходные с 08:00. Кассы до 21:15.</p>
      </div>
      <div class="cta-band__actions">
        <a class="btn btn--ghost-light" href="${rr}visitors/first-visit/index.html">Памятка новичку</a>
        <a class="btn btn--primary" href="${rr}price/index.html">Выбрать абонемент</a>
      </div>
    </div>
  </div>`;
}

{
  const rel = 'timetable/big-pool';
  const src = path.join(SITE, rel, 'index.html');
  if (fs.existsSync(src)) {
    const cards = parsePoolCards(fs.readFileSync(src, 'utf8'));
    console.log('  дорожек-карточек:', cards.length);
    write(rel, lib.shell(2, {
      title: 'Расписание большого бассейна — «Олимпия» Пермь',
      description: 'Свободное плавание и занятия в 50-метровом бассейне. Спорткомплекс «Олимпия», Пермь.',
      active: 'timetable',
      content: schedShell(rel,
        'Расписание большого бассейна',
        'Свободное плавание и занятия в 50-метровом бассейне.',
        'upload/iblock/7be/7beca203b451908c0d19327d856015d2.jpg',
        'Большой бассейн «Олимпии»',
        laneBoard(cards), 'lanes')
    }));
    console.log('  расписание: ' + rel);
  }
}

{
  const rel = 'timetable/group';
  if (fs.existsSync(path.join(SITE, rel, 'index.html'))) {
    write(rel, lib.shell(2, {
      title: 'Расписание групповых занятий — «Олимпия» Пермь',
      description: 'Групповые программы фитнес-центра: залы и аквааэробика.',
      active: 'timetable',
      content: schedShell(rel,
        'Расписание групповых занятий',
        'Групповые программы фитнес-центра: залы и аквааэробика.',
        'upload/iblock/677/677034db6e113f1ceb3d75b6c33e647b.jpg',
        'Тренажёрный зал «Олимпии»',
        classWeek([
          [['08:00–08:50', 'Утренняя группа', 'Зал аэробики'], ['09:00–09:45', 'AQUA DANCE', 'Бассейн'], ['18:00–18:50', 'Силовая', 'Зал']],
          [['09:00–09:45', 'AQUA FREESTYLE', 'Бассейн'], ['19:00–19:45', 'AQUA INTERVAL', 'Бассейн']],
          [['08:00–08:50', 'Утренняя группа', 'Зал аэробики'], ['10:00–10:45', 'AQUA PRENATAL', 'Бассейн'], ['18:00–18:50', 'Силовая', 'Зал']],
          [['09:00–09:45', 'AQUA DANCE', 'Бассейн'], ['19:00–19:45', 'AQUA FREESTYLE', 'Бассейн']],
          [['08:00–08:50', 'Утренняя группа', 'Зал аэробики'], ['19:00–19:45', 'AQUA INTERVAL', 'Бассейн']],
          [['10:00–10:45', 'AQUA DANCE', 'Бассейн'], ['11:00–11:45', 'AQUA FREESTYLE', 'Бассейн']],
          [['10:00–10:45', 'AQUA FREESTYLE', 'Бассейн']]
        ]), 'week')
    }));
    console.log('  расписание: ' + rel);
  }
}

{
  const rel = 'timetable/group-cp';
  if (fs.existsSync(path.join(SITE, rel, 'index.html'))) {
    write(rel, lib.shell(2, {
      title: 'Расписание дежурных групп — «Олимпия» Пермь',
      description: 'Дежурные группы Центра детского плавания.',
      active: 'timetable',
      content: schedShell(rel,
        'Расписание дежурных групп центра плавания',
        'Дежурные группы Центра детского плавания.',
        'upload/iblock/c4a/h8jwo6hfvawyrlvfhkx2nop6c4m0fzu5.jpg',
        'Занятие в центре детского плавания',
        classWeek([
          [['16:00–16:45', 'Дежурная 7–8 лет', 'Детский бассейн'], ['18:00–18:45', 'Дежурная 7–14 лет', 'Детский бассейн']],
          [['16:00–16:45', 'Дежурная 9–10 лет', 'Детский бассейн'], ['18:00–18:45', 'Дежурная 7–14 лет', 'Детский бассейн']],
          [['16:00–16:45', 'Дежурная 11–12 лет', 'Детский бассейн'], ['18:00–18:45', 'Дежурная 7–14 лет', 'Детский бассейн']],
          [['16:00–16:45', 'Дежурная 7–8 лет', 'Детский бассейн'], ['18:00–18:45', 'Дежурная 7–14 лет', 'Детский бассейн']],
          [['16:00–16:45', 'Дежурная 9–10 лет', 'Детский бассейн'], ['18:00–18:45', 'Дежурная 7–14 лет', 'Детский бассейн']],
          [['10:00–10:45', 'Дежурная 7–10 лет', 'Детский бассейн'], ['12:00–12:45', 'Дежурная 11–14 лет', 'Детский бассейн']],
          [['10:00–10:45', 'Дежурная 7–14 лет', 'Детский бассейн']]
        ]), 'week')
    }));
    console.log('  расписание: ' + rel);
  }
}

{
  const rel = 'timetable/mama-i-malysh';
  if (fs.existsSync(path.join(SITE, rel, 'index.html'))) {
    write(rel, lib.shell(2, {
      title: 'Расписание «Мама и малыш» — «Олимпия» Пермь',
      description: 'Совместные занятия для родителей с малышами в детском бассейне.',
      active: 'timetable',
      content: schedShell(rel,
        'Расписание занятий «Мама и малыш»',
        'Совместные занятия для родителей с малышами в детском бассейне.',
        'upload/iblock/2ee/2eee13a394e71d02c6faad346b396045.jpg',
        'Бассейн «Киты»',
        classWeek([
          [['10:00–10:40', 'Мама и малыш', '0–1 год'], ['11:00–11:40', 'Мама и малыш', '1–2 года']],
          [['10:00–10:40', 'Мама и малыш', '1–2 года'], ['16:00–16:40', 'Мама и малыш', '2–3 года']],
          [['10:00–10:40', 'Мама и малыш', '0–1 год'], ['11:00–11:40', 'Мама и малыш', '2–3 года']],
          [['10:00–10:40', 'Мама и малыш', '1–2 года'], ['16:00–16:40', 'Мама и малыш', '0–1 год']],
          [['10:00–10:40', 'Мама и малыш', '2–3 года'], ['11:00–11:40', 'Мама и малыш', '1–2 года']],
          [['10:00–10:40', 'Мама и малыш', '0–1 год'], ['11:00–11:40', 'Мама и малыш', '1–2 года'], ['12:00–12:40', 'Мама и малыш', '2–3 года']],
          [['10:00–10:40', 'Мама и малыш', '0–3 года']]
        ]), 'week')
    }));
    console.log('  расписание: ' + rel);
  }
}

{
  const rel = 'timetable/ekg';
  if (fs.existsSync(path.join(SITE, rel, 'index.html'))) {
    const slots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '16:00', '17:00', '18:00', '19:00', '20:00']
      .map(t => [t, 'Приём', 'Кабинет ЭКГ']);
    write(rel, lib.shell(2, {
      title: 'Расписание кабинета ЭКГ — «Олимпия» Пермь',
      description: 'Работа кабинета ЭКГ для оформления справок-допусков.',
      active: 'timetable',
      content: schedShell(rel,
        'Расписание кабинета ЭКГ',
        'Работа кабинета ЭКГ для оформления справок-допусков. Перерыв 15:00–16:00, суббота и воскресенье — выходной.',
        'upload/iblock/cdb/cdb13c0eb6e62f198a358d12daf88437.png',
        'Кабинет ЭКГ',
        classWeek([slots, slots, slots, slots, slots, [], []]), 'week')
    }));
    console.log('  расписание: ' + rel);
  }
}

/* ============ 3. ЗАПИСЬ ============ */
{
  const rel = 'zapis_cdp';
  const depth = 1;
  const rr = '../';
  const crumbs = lib.breadcrumbs(depth, lib.trailFromRel(rel, 'Запись'));
  const content = `  <div class="container">
    ${crumbs}
    <div class="page-head">
      <h1>Запись в «Олимпию»</h1>
      <p class="page-head__lede">Три шага для детского центра — без перезагрузки.
      Записывают по телефону, в кассе или сообщением во ВКонтакте.</p>
    </div>

    <div class="wizard" data-wizard="cdp">
      <div class="filter-pills wizard-nav">
        <button type="button" data-step="0" class="is-active">1. Возраст</button>
        <button type="button" data-step="1">2. Группа</button>
        <button type="button" data-step="2">3. Запись</button>
      </div>
      <section class="wizard-pane is-active" data-step="0">
        <h2>Возраст ребёнка</h2>
        <p>Выберите диапазон — от него зависят группы центра детского плавания.</p>
        <div class="filter-pills" data-cdp-age>
          <button type="button" data-age="0-3">0–3 года · мама и малыш</button>
          <button type="button" data-age="4-6">4–6 лет · обучение</button>
          <button type="button" data-age="7-14">7–14 лет · спорт и дежурные</button>
        </div>
      </section>
      <section class="wizard-pane" data-step="1">
        <h2>Группа</h2>
        <ul class="tickets-list">
          <li data-age="0-3"><a class="ticket-row" href="${rr}swimming_center/mnm/index.html"><span class="ticket-row__name">Мама и малыш</span><span class="ticket-row__hint">первые занятия вместе</span></a></li>
          <li data-age="4-6"><a class="ticket-row" href="${rr}swimming_center/forkids/index.html"><span class="ticket-row__name">Обучение плаванию</span><span class="ticket-row__hint">с раннего возраста</span></a></li>
          <li data-age="7-14"><a class="ticket-row" href="${rr}timetable/group-cp/index.html"><span class="ticket-row__name">Дежурные группы</span><span class="ticket-row__hint">по расписанию ЦДП</span></a></li>
          <li data-age="7-14"><a class="ticket-row" href="${rr}swimming_center/sport/index.html"><span class="ticket-row__name">Спортивное плавание</span><span class="ticket-row__hint">путь в большой спорт</span></a></li>
        </ul>
      </section>
      <section class="wizard-pane" data-step="2">
        <h2>Как записаться</h2>
        <p>Макет заявки не принимает. Выберите канал записи.</p>
        <ul class="tickets-list">
          <li><a class="ticket-row" href="tel:+73422567892"><span class="ticket-row__name">По телефону</span><span class="ticket-row__hint">+7 (342) 2-56789-2, 8:00–21:00</span></a></li>
          <li><a class="ticket-row" href="https://vk.com/olympiaperm" rel="noopener"><span class="ticket-row__name">Во ВКонтакте</span><span class="ticket-row__hint">сообщение сообществу</span></a></li>
          <li><a class="ticket-row" href="${rr}contacts/index.html"><span class="ticket-row__name">В кассах</span><span class="ticket-row__hint">ул. Мира, 41 · до 21:15</span></a></li>
        </ul>
      </section>
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
