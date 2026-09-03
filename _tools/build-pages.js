'use strict';
// Сборка ключевых страниц редизайна: направления, контакты, цены, FAQ, команда, правила.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');

const S = '../../site/';  // из страницы глубины 1 (redesign/<page>/index.html) до копии
const R = '../';          // корень редизайна с глубины 1

function write(rel, html) {
  const f = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html, 'utf8');
  console.log('  +', rel);
}

function rowList(items) {
  const li = items.map(it => `      <li${it.cat ? ` data-cat="${it.cat}"` : ''}>
        <a class="ticket-row" href="${it.href}">
          <span class="ticket-row__name">${lib.esc(it.name)}</span>
          <span class="ticket-row__hint">${lib.esc(it.hint || '')}</span>
        </a>
      </li>`).join('\n');
  return `<ul class="tickets-list reveal">\n${li}\n    </ul>`;
}

function specRows(pairs) {
  const rows = pairs.map(p => `        <div class="hours__row">
          <dt>${lib.esc(p[0])}</dt><dd>${lib.esc(p[1])}</dd>
        </div>`).join('\n');
  return `<dl class="hours spec-rows reveal">\n${rows}\n      </dl>`;
}

function ctaBand(title, sub, actions) {
  const btns = actions.map(a =>
    `<a class="btn ${a[2] || 'btn--primary'}" href="${a[1]}">${lib.esc(a[0])}</a>`).join('\n        ');
  return `<div class="cta-band reveal-fill">
      <div>
        <h2>${lib.esc(title)}</h2>
        <p class="cta-band__sub">${lib.esc(sub)}</p>
      </div>
      <div class="cta-band__actions">
        ${btns}
      </div>
    </div>`;
}

function dirPage(opt) {
  const crumbs = lib.breadcrumbs(1, lib.trailFromRel(opt.rel, opt.h1));
  const content = `  <div class="container">
    ${crumbs}
    <div class="page-head">
      <h1>${lib.esc(opt.h1)}</h1>
      <p class="page-head__lede">${opt.lede}</p>
    </div>

    <div class="dirpage-hero">
      <figure class="dirpage-hero__media reveal-fill">
        <img src="${R}assets/${opt.photo}" alt="${lib.esc(opt.photoAlt)}"${opt.photoPos ? ` style="object-position:${opt.photoPos}"` : ''}>
      </figure>
      <div class="reveal">
        ${opt.intro}
      </div>
    </div>
${opt.gallery && opt.gallery.length ? `
    <section class="section" aria-label="${lib.esc(opt.galleryTitle || 'Фото')}">
      ${opt.galleryTitle ? `<div class="section-head reveal">
        <h2>${lib.esc(opt.galleryTitle)}</h2>
      </div>` : ''}
      <div class="gallery-strip reveal">
      ${opt.gallery.map(g => `<figure>
        <img src="${S}${g.src}" alt="${lib.esc(g.alt)}" loading="lazy">
        ${g.caption ? `<figcaption>${lib.esc(g.caption)}</figcaption>` : ''}
      </figure>`).join('\n      ')}
      </div>
    </section>` : ''}

    <section class="section" aria-label="Услуги">
      <div class="section-head reveal">
        <h2>${lib.esc(opt.servicesTitle || 'Услуги и занятия')}</h2>
      </div>
      ${lib.cardList(opt.services)}
    </section>
${opt.specs ? `
    <section class="section" aria-label="Цифры и факты">
      <div class="section-head reveal">
        <h2>Цифры и факты</h2>
      </div>
      ${specRows(opt.specs)}
    </section>
` : ''}
    <section class="section" aria-label="Перед визитом">
      <div class="section-head reveal">
        <h2>Перед визитом</h2>
        <p class="section-head__aside">Что взять с собой, какие документы нужны
        и как всё устроено.</p>
      </div>
      ${rowList([
        { href: R + 'visitors/rules/index.html', name: 'Правила посещения', hint: 'обязательно к прочтению' },
        { href: R + 'visitors/first-visit/index.html', name: 'Я здесь впервые', hint: 'пошагово: от входа до бассейна' },
        { href: R + 'visitors/parking/index.html', name: 'Парковка', hint: 'как доехать и где оставить машину' },
        { href: R + 'visitors/faq/index.html', name: 'Вопросы и ответы', hint: 'о справках, абонементах и льготах' }
      ])}
    </section>

    ${ctaBand(opt.ctaTitle, opt.ctaSub, opt.ctaActions)}
  </div>`;
  return lib.shell(1, {
    title: opt.h1 + ' — «Олимпия» Пермь',
    description: opt.metaDesc,
    theme: opt.theme || '',
    content
  });
}

/* ============ 1. БАССЕЙНЫ — build-pools-hub.js ============ */

/* ============ 2–5. ХАБЫ НАПРАВЛЕНИЙ — build-hubs-extra.js ============ */

/* ============ КОНТАКТЫ ============ */
{
  const content = `  <div class="container">
    ${lib.breadcrumbs(1, lib.trailFromRel('contacts', 'Контакты'))}
    <div class="page-head">
      <h1>Контакты</h1>
      <p class="page-head__lede">Спортивный комплекс «Олимпия» находится в Индустриальном
      районе Перми, на пересечении улиц Мира и Стахановской.</p>
    </div>

    <div class="visit section" style="margin-top: clamp(36px, 5vw, 64px)">
      <div class="reveal">
        <h2>Адрес и телефоны</h2>
        <p class="visit__address">г. Пермь, ул. Мира, 41</p>
        <p class="visit__phone-line">Горячая линия <a href="tel:+73422567892">+7&nbsp;(342)&nbsp;2-56789-2</a> с 8:00 до 21:00</p>
        <ul class="visit__phones">
          <li>Бассейны и ЦДП — <a href="tel:+73422567892">+7 (342) 2-56789-2</a></li>
          <li>Фитнес-центр — <a href="tel:+73422567895">+7 (342) 2-56789-5</a></li>
          <li>SPA-центр — уточняйте на горячей линии</li>
        </ul>
        <div class="visit__actions">
          <a class="btn btn--primary" href="${R}zapis_cdp/index.html">Записаться</a>
          <a class="btn btn--ghost" href="#map">Схема проезда</a>
          <a class="btn btn--ghost" href="${R}visitors/faq/index.html">Вопросы и ответы</a>
        </div>
      </div>
      <dl class="hours reveal">
        <div class="hours__row">
          <dt>Понедельник&#8211;пятница</dt><dd>07:00&#8211;22:30</dd>
        </div>
        <div class="hours__row">
          <dt>Суббота, воскресенье и праздники</dt><dd>08:00&#8211;22:30</dd>
        </div>
        <div class="hours__row">
          <dt>Кассы и последний впуск</dt><dd>до 21:15</dd>
        </div>
        <p class="hours__note">Впервые у нас? Посмотрите
        <a href="${R}visitors/first-visit/index.html">памятку для первого визита</a>.</p>
      </dl>
    </div>

    <section class="section" id="map" aria-label="Схема проезда">
      <div class="section-head reveal">
        <h2>Как доехать</h2>
        <p class="section-head__aside">Индустриальный район, рядом с пересечением Мира и Стахановской.
        Парковка у комплекса — для владельцев клубных и парковочных карт.</p>
      </div>
      <div class="map-frame reveal">
        <iframe title="Карта: «Олимпия», ул. Мира, 41"
          src="https://yandex.ru/map-widget/v1/?ll=56.2685%2C58.0056&amp;z=16&amp;pt=56.2685%2C58.0056%2Cpm2rdm&amp;l=map"
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen></iframe>
      </div>
    </section>

    <section class="section" aria-label="Полезное перед визитом">
      <div class="section-head reveal">
        <h2>Полезное перед визитом</h2>
        <p class="section-head__aside">Коротко о том, что важно знать до прихода.</p>
      </div>
      <div class="fact-grid reveal">
        <article class="fact-card">
          <h3>Первый раз</h3>
          <p>Купальник или плавки, шапочка, сланцы, полотенце. Для бассейна нужна медсправка.
          Кассы работают до 21:15.</p>
          <a class="dir-link" href="${R}visitors/first-visit/index.html">Памятка для первого визита</a>
        </article>
        <article class="fact-card">
          <h3>Парковка</h3>
          <p>Въезд по клубной или парковочной карте. Оплата списывается с лицевого счёта
          на выезде. Без средств на карте выехать нельзя.</p>
          <a class="dir-link" href="${R}visitors/parking/index.html">Правила парковки</a>
        </article>
        <article class="fact-card">
          <h3>Частые вопросы</h3>
          <p>Абонементы, превышение времени, справки, льготы и группы — собрали в одном разделе
          с поиском по вопросам.</p>
          <a class="dir-link" href="${R}visitors/faq/index.html">Открыть вопросы и ответы</a>
        </article>
        <article class="fact-card">
          <h3>Правила и доступность</h3>
          <p>Регламенты посещения и условия для маломобильных гостей — до оплаты услуги.</p>
          <a class="dir-link" href="${R}visitors/rules/index.html">Правила посещения</a>
        </article>
      </div>
    </section>

    ${ctaBand('Мы на связи', 'Пишите нам во ВКонтакте и Телеграме: @olympiaperm.', [
      ['ВКонтакте', 'https://vk.com/olympiaperm', 'btn--ghost-light'],
      ['Телеграм', 'https://t.me/olympiaperm', 'btn--ghost-light']
    ])}
  </div>`;
  write('contacts/index.html', lib.shell(1, {
    title: 'Контакты — «Олимпия» Пермь',
    description: 'Адрес, телефоны и режим работы спорткомплекса «Олимпия»: Пермь, ул. Мира, 41. Горячая линия +7 (342) 2-56789-2.',
    active: 'contacts',
    content
  }));
}

/* ============ ЦЕНЫ ============ */
/* price/index.html собирает _tools/build-price.js (живые таблицы + фильтры).
   Здесь не перезаписываем, чтобы не стереть прайс. */
{
  // freeze и прочие подстраницы — ниже; хаб — только через build-price.js
}

/* ============ FAQ (извлечение) ============ */
{
  const S2 = '../../../site/';
  const cats = [
    ['basseyn', 'Бассейн'],
    ['detskiy-tsentr-plavaniya', 'Детский центр плавания'],
    ['fitnes-tsentr', 'Фитнес-центр'],
    ['spa-tsentr', 'СПА-центр'],
    ['kineziterapiya', 'Кинезитерапия']
  ];
  let sections = '';
  let total = 0;
  for (const [slug, name] of cats) {
    const fp = path.join(SITE, 'faq', slug, 'index.html');
    if (!fs.existsSync(fp)) continue;
    const html = fs.readFileSync(fp, 'utf8');
    const items = [];
    const re = /class="question"[^>]*>([\s\S]*?)<\/div>\s*<div class="arrow"><\/div>\s*<\/div>\s*<div class="content">([\s\S]*?)<\/div>\s*<\/div>/g;
    let m;
    while ((m = re.exec(html))) {
      const q = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      let a = m[2].replace(/<script[\s\S]*?<\/script>/gi, '').replace(/\sstyle="[^"]*"/gi, '').trim();
      a = a.replace(/\b(src|href)="([^"]+)"/gi, (m0, attr, url) => {
        const u = url.trim();
        if (/^(https?:|mailto:|tel:|#|data:)/i.test(u)) return m0;
        let resolved;
        try { resolved = path.posix.normalize(path.posix.join('/faq/' + slug, u)); }
        catch (e) { return m0; }
        if (resolved.startsWith('..')) return m0;
        const pageRel = resolved.replace(/^\/+/, '').replace(/\/index\.html$/, '') + '/index.html';
        if (attr === 'href' && fs.existsSync(path.join(OUT, pageRel))) {
          let relLink = path.relative(path.join(OUT, 'visitors/faq'), path.join(OUT, pageRel))
            .split(path.sep).join('/');
          if (!relLink.startsWith('.')) relLink = './' + relLink;
          return attr + '="' + relLink + '"';
        }
        return attr + '="' + S2 + resolved.replace(/^\/+/, '') + '"';
      });
      if (q && a) items.push({ q, a });
    }
    if (!items.length) continue;
    total += items.length;
    const qa = items.map(it => `      <div class="qa-item" data-cat="${slug}" data-q="${lib.esc(it.q.toLowerCase())}">
        <h3 style="margin:0"><button class="qa-item__head" aria-expanded="false">
          <span>${lib.esc(it.q)}</span>
          <span class="dir-item__toggle" aria-hidden="true"></span>
        </button></h3>
        <div class="qa-item__body"><div><div class="qa-item__inner">${it.a}</div></div></div>
      </div>`).join('\n');
    sections += `
    <section class="section" data-faq-section="${slug}" aria-label="${lib.esc(name)}">
      <div class="section-head reveal">
        <h2>${lib.esc(name)}</h2>
      </div>
      <div class="reveal">
${qa}
      </div>
    </section>`;
  }
  console.log('  FAQ: вопросов извлечено', total);
  const faqPills = `<div class="filter-pills" data-filter="faq">
      <button type="button" data-cat="all" class="is-active">Все</button>
      ${cats.map(([slug, name]) => `<button type="button" data-cat="${slug}">${lib.esc(name)}</button>`).join('\n      ')}
    </div>
    <label class="faq-search">
      <span class="faq-search__label">Поиск по вопросам</span>
      <input type="search" data-faq-search placeholder="Например: абонемент, справка, парковка" autocomplete="off">
    </label>
    <p class="hero-note" data-faq-empty hidden>Ничего не нашлось — попробуйте другие слова или позвоните на горячую линию.</p>`;
  const content = `  <div class="container">
    ${lib.breadcrumbs(2, lib.trailFromRel('visitors/faq', 'FAQ'))}
    <div class="page-head">
      <h1>Вопросы и ответы</h1>
      <p class="page-head__lede">Собрали то, о чём спрашивают чаще всего. Не нашли ответ?
      Позвоните на горячую линию <a href="tel:+73422567892">+7&nbsp;(342)&nbsp;2-56789-2</a>.</p>
    </div>
    ${faqPills}
${sections}
  </div>`;
  write('visitors/faq/index.html', lib.shell(2, {
    title: 'Вопросы и ответы — «Олимпия» Пермь',
    description: 'Ответы на частые вопросы о посещении спорткомплекса «Олимпия»: абонементы, клубные карты, правила, справки.',
    content
  }));
}

/* ============ КОМАНДА (извлечение) ============ */
{
  const teamOrder = require('./team-order');
  const teamFocal = require('./team-focal');
  if (teamFocal.hasSharp) {
    require('child_process').execFileSync(process.execPath, [path.join(__dirname, 'team-focal.js')], { stdio: 'inherit' });
  }
  const cats = teamOrder.TEAM_CAT_ORDER.map(slug => [slug, teamOrder.TEAM_CATS[slug]]);
  let sections = '';
  let total = 0;
  for (const [slug, name] of cats) {
    const people = teamOrder.loadPeople(SITE, slug);
    if (!people.length) continue;
    total += people.length;
    const cards = people.map(p => {
      const pos = p.img ? (teamFocal.getFocalSync(p.img) ? teamFocal.focalStyle(teamFocal.getFocalSync(p.img), 'card') : '50% 22%') : '';
      const posAttr = pos ? ` style="object-position:${pos}"` : '';
      return `      <a class="team-card" href="${R}team/${slug}/${p.href}">
        <figure><img src="${p.img ? S + p.img : R + 'assets/lanes-overhead.jpg'}" alt="${lib.esc(p.name)}"${posAttr} loading="lazy"></figure>
        <div class="team-card__name">${lib.esc(p.name)}</div>
        <div class="team-card__role">${lib.esc(p.post)}</div>
      </a>`;
    }).join('\n');
    sections += `
    <section class="section" data-cat="${slug}" aria-label="${lib.esc(name)}">
      <div class="section-head reveal">
        <h2>${lib.esc(name)}</h2>
      </div>
      <div class="team-grid reveal">
${cards}
      </div>
    </section>`;
  }
  console.log('  Команда: карточек извлечено', total);
  const pills = `<div class="filter-pills" data-filter="team">
      <button type="button" data-cat="all" class="is-active">Все</button>
      ${cats.map(([slug, name]) => `<button type="button" data-cat="${slug}">${lib.esc(name)}</button>`).join('\n      ')}
    </div>`;
  const content = `  <div class="container">
    ${lib.breadcrumbs(1, lib.trailFromRel('team', 'Команда'))}
    <div class="page-head">
      <h1>Наша команда</h1>
      <p class="page-head__lede">Тренеры, врачи и специалисты, которые каждый день
      делают «Олимпию» лучшим местом для спорта и восстановления.</p>
    </div>
    ${pills}
${sections}
  </div>`;
  write('team/index.html', lib.shell(1, {
    title: 'Команда — «Олимпия» Пермь',
    description: 'Тренеры и специалисты спорткомплекса «Олимпия»: центр детского плавания, бассейн, фитнес, SPA, кинезитерапия.',
    active: 'team',
    content
  }));
}

/* ============ ПРАВИЛА (извлечение документов) ============ */
{
  const html = fs.readFileSync(path.join(SITE, 'pravila', 'index.html'), 'utf8');
  const docs = [];
  const re = /<a href="([^"]+\.pdf)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    const name = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!name) continue;
    const href = m[1].replace(/^(\.\.\/)+/, '');
    docs.push({ href: '../../../site/' + href, name: name.replace(/^Изучить\s+/i, ''), hint: 'PDF' });
  }
  // связанные регламенты и политики (реальные страницы копии)
  docs.push(
    { href: '../../help/index.html', name: 'Положение о пропускном и внутриобъектовом режиме', hint: 'регламент' },
    { href: '../../../site/about/docs/index.html', name: 'Документы организации', hint: 'уставные и разрешительные' },
    { href: '../../legal/fz152/index.html', name: 'Политика в отношении персональных данных', hint: 'политика' },
    { href: '../../legal/personal-data-consent/index.html', name: 'Согласие на обработку персональных данных', hint: 'форма согласия' },
    { href: '../accessibility/index.html', name: 'Доступная среда', hint: 'для маломобильных посетителей' }
  );
  console.log('  Правила: документов', docs.length);
  const content = `  <div class="container">
    ${lib.breadcrumbs(2, lib.trailFromRel('visitors/rules', 'Правила посещения'))}
    <div class="page-head">
      <h1>Правила посещения</h1>
      <p class="page-head__lede">Ознакомьтесь с правилами до начала пользования услугами:
      оплачивая услугу, вы соглашаетесь с правилами посещения спорткомплекса
      «Олимпия».</p>
    </div>
    <section class="section" aria-label="Документы">
      <div class="section-head reveal">
        <h2>Документы</h2>
      </div>
      ${rowList(docs)}
    </section>
    ${ctaBand('Остались вопросы?', 'Загляните в ответы на частые вопросы или позвоните нам.', [
      ['Вопросы и ответы', '../../visitors/faq/index.html', 'btn--ghost-light'],
      ['Контакты', '../../contacts/index.html', 'btn--primary']
    ])}
  </div>`;
  write('visitors/rules/index.html', lib.shell(2, {
    title: 'Правила посещения — «Олимпия» Пермь',
    description: 'Правила посещения спорткомплекса «Олимпия» в Перми: документы и регламенты.',
    content
  }));
}

/* ============ ХАБЫ, ЗАМОРОЗКА, АКВА, ПЕРВЫЙ ВИЗИТ, ЗАГЛУШКИ ============ */
{
  const hubPage = (rel, h1, lede, items, extra) => {
    const depth = rel.split('/').length;
    const rr = '../'.repeat(depth);
    const content = `  <div class="container">
    ${lib.breadcrumbs(depth, lib.trailFromRel(rel, h1))}
    <div class="page-head">
      <h1>${lib.esc(h1)}</h1>
      <p class="page-head__lede">${lede}</p>
    </div>
    ${extra || ''}
    <section class="section" aria-label="${lib.esc(h1)}">
      ${lib.cardList(items)}
    </section>
  </div>`;
    write(rel + '/index.html', lib.shell(depth, {
      title: h1 + ' — «Олимпия» Пермь',
      description: h1 + ' спорткомплекса «Олимпия» в Перми.',
      active: rel === 'timetable' ? 'timetable' : '',
      content
    }));
  };

  hubPage('visitors', 'Посетителям',
    'Всё, что нужно знать до визита: первый раз, правила, парковка, FAQ.',
    [
      { href: './first-visit/index.html', name: 'Первый визит', hint: 'что взять, справка, как доехать', photo: S + 'upload/iblock/274/27478541b86add03e5d370172e16aa32.jpg', photoAlt: 'Первый визит в «Олимпию»' },
      { href: './rules/index.html', name: 'Правила посещения', hint: 'документы и регламенты' },
      { href: './faq/index.html', name: 'Вопросы и ответы', hint: 'частые вопросы', photo: S + 'upload/iblock/6f5/6f597b228262176030493ac0a7fa60d3.jpg', photoAlt: 'Вопросы и ответы' },
      { href: './parking/index.html', name: 'Парковка', hint: 'как приехать на машине', photo: S + 'upload/medialibrary/610/610866c8c221e9d45b8f2eaf38590dfe.jpg', photoAlt: 'Парковка у комплекса' },
      { href: './cafe/index.html', name: 'Кафе', hint: 'перекусить после тренировки', photo: S + 'upload/medialibrary/5fa/ycf692sstkyiuqr3pwljton1qnugf6ai.jpg', photoAlt: 'Кафе «Олимпии»' },
      { href: './rental/index.html', name: 'Прокат', hint: 'инвентарь' },
      { href: './accessibility/index.html', name: 'Доступность', hint: 'маломобильные посетители', photo: S + 'upload/iblock/aab/aab1dde40fd6a5bde4cebf05594fc20a.jpg', photoAlt: 'Доступная среда' },
      { href: './tax-refund/index.html', name: 'Налоговый вычет', hint: '13% за занятия спортом' },
      { href: '../admission/index.html', name: 'Медицинские справки', hint: 'допуск в бассейн и зал' },
      { href: '../kabinet_ekg/index.html', name: 'Кабинет ЭКГ', hint: 'справки-допуски', photo: S + 'upload/iblock/cdb/cdb13c0eb6e62f198a358d12daf88437.png', photoAlt: 'Кабинет ЭКГ' },
      { href: '../help/index.html', name: 'Пропускной режим', hint: 'положение об объекте' },
      { href: '../price/freeze/index.html', name: 'Заморозка карты', hint: 'пауза клубной карты' }
    ]);

  hubPage('legal', 'Юридическое и B2B',
    'Документы о персональных данных, корпоратив и ДМС. Не в основной навигации.',
    [
      { href: './fz152/index.html', name: 'Политика персональных данных', hint: '152-ФЗ' },
      { href: './personal-data-consent/index.html', name: 'Согласие на обработку ПДн', hint: 'форма согласия' },
      { href: './corporate/index.html', name: 'Корпоративным клиентам', hint: 'спорт для команд' },
      { href: './dms/index.html', name: 'Услуги по полису ДМС', hint: 'SPA и кинезитерапия' }
    ]);

  hubPage('timetable', 'Расписание',
    'Выберите сетку. Полные фильтры и слоты — внутри каждого раздела; актуальные времена уточняйте по телефону.',
    [
      { href: './big-pool/index.html', name: 'Большой бассейн', hint: 'свободное плавание', photo: S + 'upload/iblock/7be/7beca203b451908c0d19327d856015d2.jpg', photoAlt: 'Большой бассейн' },
      { href: './group/index.html', name: 'Группы фитнеса', hint: 'залы и аква', photo: S + 'upload/iblock/677/677034db6e113f1ceb3d75b6c33e647b.jpg', photoAlt: 'Тренажёрный зал' },
      { href: './group-cp/index.html', name: 'Дежурные группы ЦДП', hint: 'центр детского плавания', photo: S + 'upload/iblock/c4a/h8jwo6hfvawyrlvfhkx2nop6c4m0fzu5.jpg', photoAlt: 'Центр детского плавания' },
      { href: './mama-i-malysh/index.html', name: 'Мама и малыш', hint: 'совместные занятия', photo: S + 'upload/iblock/2ee/2eee13a394e71d02c6faad346b396045.jpg', photoAlt: 'Бассейн «Киты»' },
      { href: './ekg/index.html', name: 'Кабинет ЭКГ', hint: 'справки-допуски', photo: S + 'upload/iblock/cdb/cdb13c0eb6e62f198a358d12daf88437.png', photoAlt: 'Кабинет ЭКГ' }
    ]);
}

{
  const content = `  <div class="container">
    ${lib.breadcrumbs(2, lib.trailFromRel('price/freeze', 'Заморозка карты'))}
    <div class="page-head">
      <h1>Заморозка и проверка карты</h1>
      <p class="page-head__lede">Единственная страница об этом. Ссылки из бассейна,
      фитнеса и раздела посетителям ведут сюда.</p>
    </div>
    <article class="article">
      <p>По штрих-коду абонемента, клубной или подарочной карты можно узнать
      число посещений, срок действия, срок медицинских справок и заморозить
      карту (для карт, купленных с 01.01.2024).</p>
      <p>Проверка работает в системе комплекса. Откройте виджет или подойдите к кассе.</p>
    </article>
    <ul class="tickets-list reveal">
      <li>
        <a class="ticket-row" href="https://olympia.olympiaperm.ru/cardInfo/site.php" rel="noopener">
          <span class="ticket-row__name">Проверить карту по штрих-коду</span>
          <span class="ticket-row__hint">виджет на сервере «Олимпии»</span>
        </a>
      </li>
      <li>
        <a class="ticket-row" href="https://olympiaperm.ru/info/">
          <span class="ticket-row__name">Страница на живом сайте</span>
          <span class="ticket-row__hint">olympiaperm.ru/info/</span>
        </a>
      </li>
    </ul>
  </div>`;
  write('price/freeze/index.html', lib.shell(2, {
    title: 'Заморозка карты — «Олимпия» Пермь',
    description: 'Заморозка и проверка клубной карты спорткомплекса «Олимпия».',
    active: 'price',
    content
  }));
}

{
  const content = `  <div class="container">
    ${lib.breadcrumbs(2, lib.trailFromRel('fitness_center/aqua', 'Аквааэробика'))}
    <div class="page-head">
      <h1>Аквааэробика</h1>
      <p class="page-head__lede">Каноническая страница — в разделе бассейнов.
      Эта ссылка оставлена, чтобы старые адреса не ломались.</p>
    </div>
    ${lib.ctaBand('Перейти к канону', 'Описание, расписание и запись — на странице аквааэробики в бассейнах.', [
      ['Аквааэробика в бассейнах', '../../pools/aqua/index.html', 'btn--primary']
    ])}
  </div>`;
  write('fitness_center/aqua/index.html', lib.shell(2, {
    title: 'Аквааэробика — «Олимпия» Пермь',
    description: 'Аквааэробика спорткомплекса «Олимпия»: канон в разделе бассейнов.',
    canonical: 'https://olympiaperm.ru/pools/aqua/',
    robots: 'noindex, follow',
    content
  }));
}

{
  const steps = [
    ['Что взять', 'Купальник или плавки, шапочка, сланцы, полотенце. Для зала — сменная обувь и одежда. Замок для шкафчика можно взять на прокате.'],
    ['Медсправка', 'Для бассейна нужна справка об отсутствии противопоказаний. Кабинет ЭКГ и справки-допуски оформляются в комплексе по расписанию.'],
    ['Как доехать', 'Пермь, ул. Мира, 41. Парковка у комплекса. Горячая линия +7 (342) 2-56789-2 с 8:00 до 21:00.'],
    ['Первая покупка', 'Кассы до 21:15. Разовое посещение, абонемент или клубная карта. Онлайн-оплата — в разделе «Купить онлайн».']
  ];
  const panes = steps.map((s, i) => `      <section class="wizard-pane${i === 0 ? ' is-active' : ''}" data-step="${i}">
        <h2>${lib.esc(s[0])}</h2>
        <p>${s[1]}</p>
      </section>`).join('\n');
  const content = `  <div class="container">
    ${lib.breadcrumbs(2, lib.trailFromRel('visitors/first-visit', 'Первый визит'))}
    <div class="page-head">
      <h1>Я здесь впервые</h1>
      <p class="page-head__lede">Четыре шага, не лонгрид. Дальше — касса или запись.</p>
    </div>
    <figure class="sched-hero reveal-fill">
      <img src="../../../site/upload/iblock/274/27478541b86add03e5d370172e16aa32.jpg" alt="Первый визит в спорткомплекс «Олимпия»" loading="lazy">
    </figure>
    <div class="wizard" data-wizard>
      <div class="filter-pills wizard-nav">
        ${steps.map((s, i) => `<button type="button" data-step="${i}"${i === 0 ? ' class="is-active"' : ''}>${i + 1}. ${lib.esc(s[0])}</button>`).join('\n        ')}
      </div>
${panes}
      <div class="hero-actions" style="margin-top:28px">
        <a class="btn btn--ghost" href="../parking/index.html">Парковка</a>
        <a class="btn btn--primary" href="../../price/index.html">Цены</a>
      </div>
    </div>
  </div>`;
  write('visitors/first-visit/index.html', lib.shell(2, {
    title: 'Первый визит — «Олимпия» Пермь',
    description: 'Что взять, какая справка нужна, как доехать и как купить первый билет в «Олимпии».',
    content
  }));
}

/* ============ ПАРКОВКА ============ */
{
  const S2 = '../../../site/';
  const content = `  <div class="container">
    ${lib.breadcrumbs(2, lib.trailFromRel('visitors/parking', 'Парковка'))}
    <div class="page-head">
      <h1>Парковка</h1>
      <p class="page-head__lede">Воспользоваться парковкой могут владельцы клубных или парковочных карт «Олимпии».
      При разовом визите парковочную карту оформляют в кассах.</p>
    </div>
    <div class="gallery-strip reveal">
      <figure><img src="${S2}upload/medialibrary/610/610866c8c221e9d45b8f2eaf38590dfe.jpg" alt="Въезд на парковку спорткомплекса «Олимпия»" loading="lazy" width="410" height="410"></figure>
      <figure><img src="${S2}upload/medialibrary/1af/1af1b20183392c2ceb388d93c96a1100.png" alt="Считыватель карты на шлагбауме" loading="lazy"></figure>
    </div>
    <div class="fact-grid reveal">
      <article class="fact-card">
        <h3>Оплата</h3>
        <ul class="rules-list">
          <li>Пополните лицевой счёт карты на кассах главной рецепции. После 21:15 — на кассах фитнеса, SPA или на турникетах.</li>
          <li>Списание — автоматически на выезде по тарифу и времени стоянки.</li>
          <li>Без достаточной суммы на счёте выезд невозможен.</li>
          <li>Оплата за каждый полный или неполный час по стоимости полного часа.</li>
        </ul>
      </article>
      <article class="fact-card">
        <h3>Въезд и выезд</h3>
        <ul class="rules-list">
          <li>Только по клубным или парковочным картам «Олимпии».</li>
          <li>Приложите карту к считывателю (жёлтый крест на синем фоне) и дождитесь поднятия шлагбаума.</li>
        </ul>
        <p><a href="${S2}upload/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%BF%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%BA%D0%B8%20%D0%A1%D0%BF%D0%BE%D1%80%D1%82%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%20%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D1%8F.pdf">Правила парковки (PDF)</a></p>
      </article>
    </div>
    ${ctaBand('Нужна помощь на въезде?', 'Подробности по телефону горячей линии.', [
      ['Позвонить', 'tel:+73422567892', 'btn--primary'],
      ['Контакты', '../../contacts/index.html', 'btn--ghost-light']
    ])}
  </div>`;
  write('visitors/parking/index.html', lib.shell(2, {
    title: 'Парковка — «Олимпия» Пермь',
    description: 'Правила парковки спорткомплекса «Олимпия»: въезд по карте, оплата с лицевого счёта, тарифы.',
    content
  }));
}

/* ============ ОБ ОЛИМПИИ ============ */
{
  const content = `  <div class="container">
    ${lib.breadcrumbs(1, lib.trailFromRel('about', 'Об Олимпии'))}
    <div class="page-head">
      <h1>Об Олимпии</h1>
      <p class="page-head__lede">Крупнейший спортивный комплекс Пермского края: бассейны олимпийского стандарта,
      центр детского плавания, фитнес, SPA и кинезитерапия под одной крышей.</p>
    </div>
    <div class="gallery-strip reveal">
      <figure><img src="${S}upload/iblock/e0a/e0a8eee18233907c04748845e99a3aa0.jpg" alt="Бассейн «Олимпии»" loading="lazy" width="468" height="485"></figure>
      <figure><img src="${S}upload/iblock/b5d/b5d15f1c3c836a57c4ddb69c24013db6.jpg" alt="Зал спорткомплекса" loading="lazy" width="468" height="485"></figure>
      <figure><img src="${S}upload/iblock/2b1/2b143108dfa0a0c190619847064c92ad.jpg" alt="Интерьер комплекса" loading="lazy" width="468" height="485"></figure>
    </div>
    <section class="section" aria-label="Направления">
      <div class="section-head reveal">
        <h2>Пять направлений</h2>
      </div>
      ${lib.cardList([
        { href: R + 'pools/index.html', name: 'Бассейны', hint: '50 м, детский, гидромассаж, сауны', photo: S + 'upload/iblock/7be/7beca203b451908c0d19327d856015d2.jpg', photoAlt: 'Большой бассейн' },
        { href: R + 'swimming_center/index.html', name: 'Центр детского плавания', hint: 'обучение с раннего возраста', photo: S + 'upload/iblock/c4a/h8jwo6hfvawyrlvfhkx2nop6c4m0fzu5.jpg', photoAlt: 'Детский центр' },
        { href: R + 'fitness_center/index.html', name: 'Фитнес-центр', hint: '3500 м², тренажёры и группы', photo: S + 'upload/iblock/039/039baaae5c9bae0291b76a8d9e498127.jpg', photoAlt: 'Фитнес-зал' },
        { href: R + 'spa_center/index.html', name: 'SPA-центр', hint: 'массаж, ритуалы, восстановление', photo: S + 'upload/iblock/73c/73cbd0e5a7d3760325fa6c1c3b9f3679.jpg', photoAlt: 'SPA' },
        { href: R + 'center_kinesitherapy/index.html', name: 'Кинезитерапия', hint: 'реабилитация движением', photo: S + 'upload/iblock/32c/32c8f9fd1810f5b17473cc25870b7c78.jpg', photoAlt: 'Кинезитерапия' },
        { href: R + 'about/docs/index.html', name: 'Документы организации', hint: 'уставные и разрешительные' }
      ])}
    </section>
    <article class="article reveal">
      <p>В зоне бассейнов — 50-метровый бассейн олимпийского стандарта, глубоководный бассейн 5,5&nbsp;м,
      гидромассажная зона и четыре бассейна в детском центре плавания. Рядом — самый большой
      фитнес-центр Перми, центр кинезитерапии и SPA.</p>
    </article>
  </div>`;
  write('about/index.html', lib.shell(1, {
    title: 'Об Олимпии — спортивный комплекс в Перми',
    description: 'О спорткомплексе «Олимпия»: бассейны, детское плавание, фитнес, SPA и кинезитерапия в Перми, ул. Мира, 41.',
    content
  }));
}

{
  const STUBS = [
    ['faq', 'visitors/faq/', 'FAQ'],
    ['pravila', 'visitors/rules/', 'Правила посещения'],
    ['vpervye-v-olimpii', 'visitors/first-visit/', 'Первый визит'],
    ['parking', 'visitors/parking/', 'Парковка'],
    ['cafe', 'visitors/cafe/', 'Кафе'],
    ['prokat', 'visitors/rental/', 'Прокат'],
    ['dostupnost', 'visitors/accessibility/', 'Доступность'],
    ['nalogoviy-vychet', 'visitors/tax-refund/', 'Налоговый вычет'],
    ['fz152', 'legal/fz152/', 'Политика ПДн'],
    ['personal-data-consent', 'legal/personal-data-consent/', 'Согласие на ПДн'],
    ['uslugi_dlya_korporativnykh_klientov', 'legal/corporate/', 'Корпоратив'],
    ['uslugi_dms', 'legal/dms/', 'ДМС'],
    ['podarochnaya-karta-ideya-dlya-podarka', 'price/', 'Подарочная карта'],
    ['info', 'price/freeze/', 'Заморозка карты']
  ];
  for (const [from, to, title] of STUBS) {
    write(from + '/index.html', lib.redirectPage(1, to, title));
  }
}

{
  const content = `  <div class="container">
    ${lib.breadcrumbs(1, lib.trailFromRel('kupit-online', 'Купить онлайн'))}
    <div class="page-head">
      <h1>Купить онлайн</h1>
      <p class="page-head__lede">Оплата абонементов и карт идёт на живом сайте комплекса.
      Здесь нет виджета кассы — суммы и корзина там.</p>
    </div>
    <article class="article">
      <p>Статическая копия не принимает платежи. Откройте магазин на
      olympiaperm.ru или оформите билет в кассе на ул.&nbsp;Мира,&nbsp;41
      (до 21:15).</p>
    </article>
    ${lib.ctaBand('Перейти к покупке', 'Живой магазин «Олимпии». Цены на этой странице не публикуем.', [
      ['Открыть olympiaperm.ru', 'https://olympiaperm.ru/kupit-online/', 'btn--primary']
    ])}
  </div>`;
  write('kupit-online/index.html', lib.shell(1, {
    title: 'Купить онлайн — «Олимпия» Пермь',
    description: 'Покупка абонементов и клубных карт спорткомплекса «Олимпия» — на живом сайте olympiaperm.ru.',
    content
  }));
}

console.log('Готово.');
