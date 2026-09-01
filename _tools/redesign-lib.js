'use strict';
// Общие шаблоны редизайна: каркас, шапка, футер, крошки.
// depth — вложенность относительно redesign/ (0 = сама redesign/).

function p(depth) { return '../'.repeat(depth); }
function siteP(depth) { return '../'.repeat(depth + 1) + 'site/'; }

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const DIR_LABELS = {
  pools: 'Бассейны',
  swimming_center: 'Центр детского плавания',
  fitness_center: 'Фитнес-центр',
  spa_center: 'SPA-центр',
  center_kinesitherapy: 'Кинезитерапия'
};

const TEAM_CATS = {
  basseyn: 'Бассейны',
  'detskiy-tsentr-plavaniya': 'Центр детского плавания',
  'fitnes-tsentr': 'Фитнес-центр',
  'spa-tsentr': 'SPA-центр',
  kineziterapiya: 'Кинезитерапия'
};

const NEWS_CATS = {
  basseyn: 'Бассейны',
  'detskiy-tsentr-plavaniya': 'Центр детского плавания',
  'detskiy-tsentr-plavaniya6604': 'Центр детского плавания',
  'fitnes-tsentr': 'Фитнес-центр',
  'spa-tsentr': 'SPA-центр',
  kineziterapiya: 'Кинезитерапия',
  company: 'Комплекс'
};

const SPA_SUB = {
  'massazhi-telo': 'Массажи тела',
  'massazhi-litsa': 'Массажи лица',
  'massazhi': 'Массажи',
  'apparatnye-protsedury': 'Аппаратные процедуры',
  'spa-ritualy': 'SPA-ритуалы',
  'spa-ritualy-dlya-dvoikh': 'Ритуалы для двоих',
  'spa-protsedury-face': 'SPA-процедуры для лица',
  obertyvaniya: 'Обертывания',
  solyariy: 'Солярий',
  barrel: 'Фитобочка',
  pressoterapiya: 'Прессотерапия'
};

const VISITOR_PAGES = {
  faq: 'FAQ',
  rules: 'Правила посещения',
  'first-visit': 'Первый визит',
  parking: 'Парковка',
  cafe: 'Кафе',
  rental: 'Прокат',
  accessibility: 'Доступность',
  'tax-refund': 'Налоговый вычет'
};

const LEGAL_PAGES = {
  fz152: 'Политика персональных данных',
  'personal-data-consent': 'Согласие на обработку ПДн',
  corporate: 'Корпоратив',
  dms: 'ДМС'
};

function absUrl(dir) {
  const clean = String(dir || '').replace(/^\/+|\/+$/g, '');
  return 'https://olympiaperm.ru/' + (clean ? clean + '/' : '');
}

function normalizeRel(rel) {
  return String(rel || '').replace(/\\/g, '/').replace(/\/index\.html$/, '')
    .replace(/^\/+|\/+$/g, '');
}

/**
 * trail: массив [href|null, label, canonicalUrl]
 * rel — путь от корня redesign без index.html, например 'pools/aqua' или 'team/spa-tsentr/fio'
 */
function trailFromRel(rel, title) {
  rel = normalizeRel(rel);
  const depth = rel ? rel.split('/').length : 0;
  const r = p(depth);
  const parts = rel ? rel.split('/') : [];
  const trail = [[r + 'index.html', 'Главная', absUrl('')]];
  const pageUrl = absUrl(rel);
  const label = title || parts[parts.length - 1] || 'Страница';

  function hub(file, name, url) {
    trail.push([r + file, name, url]);
  }
  function current(name, url) {
    trail.push([null, name, url || pageUrl]);
  }

  const root = parts[0] || '';

  if (DIR_LABELS[root]) {
    const dirName = DIR_LABELS[root];
    if (parts.length === 1) {
      current(title || dirName, absUrl(root));
    } else {
      hub(root + '/index.html', dirName, absUrl(root));
      if (parts.length === 2) {
        current(label);
      } else {
        const sub = SPA_SUB[parts[1]] || parts[1];
        hub(root + '/' + parts[1] + '/index.html', sub, absUrl(root + '/' + parts[1]));
        current(label);
      }
    }
    return trail;
  }

  if (root === 'team') {
    hub('team/index.html', 'Команда', absUrl('team'));
    if (parts.length === 1) {
      trail[trail.length - 1][0] = null;
    } else if (parts.length === 2) {
      current(TEAM_CATS[parts[1]] || label, absUrl('team/' + parts[1]));
    } else {
      hub('team/' + parts[1] + '/index.html', TEAM_CATS[parts[1]] || parts[1], absUrl('team/' + parts[1]));
      current(label);
    }
    return trail;
  }

  if (root === 'news' || root === 'actions') {
    const hubName = root === 'news' ? 'Новости' : 'Акции';
    hub(root + '/index.html', hubName, absUrl(root));
    if (parts.length === 1) {
      trail[trail.length - 1][0] = null;
    } else if (parts.length === 2) {
      current(NEWS_CATS[parts[1]] || label);
    } else {
      // категория без своей страницы: текст в крошках, без второй ссылки на хаб
      trail.push([null, NEWS_CATS[parts[1]] || parts[1], null]);
      current(label);
    }
    return trail;
  }

  if (root === 'timetable') {
    hub('timetable/index.html', 'Расписание', absUrl('timetable'));
    if (parts.length === 1) trail[trail.length - 1][0] = null;
    else current(label);
    return trail;
  }

  if (root === 'visitors') {
    hub('visitors/index.html', 'Посетителям', absUrl('visitors'));
    if (parts.length === 1) trail[trail.length - 1][0] = null;
    else current(title || VISITOR_PAGES[parts[1]] || label);
    return trail;
  }

  if (root === 'legal') {
    hub('legal/index.html', 'Юридическое / B2B', absUrl('legal'));
    if (parts.length === 1) trail[trail.length - 1][0] = null;
    else current(title || LEGAL_PAGES[parts[1]] || label);
    return trail;
  }

  if (root === 'price') {
    hub('price/index.html', 'Цены и карты', absUrl('price'));
    if (parts.length === 1) trail[trail.length - 1][0] = null;
    else current(label);
    return trail;
  }

  if (root === 'contacts') {
    current(title || 'Контакты', absUrl('contacts'));
    return trail;
  }

  if (root === 'zapis_cdp') {
    current(title || 'Запись', absUrl('zapis_cdp'));
    return trail;
  }

  if (root === 'kupit-online') {
    current(title || 'Купить онлайн', absUrl('kupit-online'));
    return trail;
  }

  current(label, pageUrl);
  return trail;
}

function breadcrumbs(depth, trail) {
  const items = trail.map((t, i) => {
    const last = i === trail.length - 1;
    return last
      ? `<li aria-current="page">${esc(t[1])}</li>`
      : t[0]
        ? `<li><a href="${t[0]}">${esc(t[1])}</a></li>`
        : `<li>${esc(t[1])}</li>`;
  }).join('');
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => {
      const node = {
        '@type': 'ListItem',
        position: i + 1,
        name: t[1]
      };
      if (t[2]) node.item = t[2];
      return node;
    })
  };
  return `<nav class="crumbs" aria-label="Вы здесь"><ol>${items}</ol></nav>
    <script type="application/ld+json">${JSON.stringify(ld)}</script>`;
}

function occupancyBar(depth) {
  const r = p(depth);
  return `<div class="occupancy" data-occupancy data-src="${r}js/occupancy.json">
    <span class="occupancy__item">В бассейнах <strong data-occ="pools">—</strong></span>
    <span class="occupancy__item">В фитнесе <strong data-occ="fitness">—</strong></span>
    <span class="occupancy__item">Шкафчиков <strong data-occ="lockers">—</strong></span>
    <span class="occupancy__demo">демо</span>
  </div>`;
}

function header(depth, active) {
  const r = p(depth);
  const links = [
    ['dirs', r + 'index.html#dirs', 'Направления'],
    ['timetable', r + 'timetable/index.html', 'Расписание'],
    ['price', r + 'price/index.html', 'Цены'],
    ['actions', r + 'actions/index.html', 'Акции'],
    ['news', r + 'news/index.html', 'Новости'],
    ['team', r + 'team/index.html', 'Команда'],
    ['contacts', r + 'contacts/index.html', 'Контакты']
  ];
  const li = links.map(l =>
    `<li><a href="${l[1]}"${l[0] === active && l[0] !== 'dirs' ? ' aria-current="page"' : ''}>${l[2]}</a></li>`
  ).join('\n      ');
  const mob = links.map(l => `<a href="${l[1]}">${l[2]}</a>`).join('\n  ');
  return `<header class="site-header">
  <nav class="nav-pill" aria-label="Главная навигация">
    <a class="nav-logo" href="${r}index.html" aria-label="Олимпия — на главную">
      <img class="nav-logo__img" src="${r}assets/logo-white.png" alt="Олимпия" width="1366" height="115">
    </a>
    <ul class="nav-links">
      ${li}
    </ul>
    <a class="nav-phone" href="tel:+73422567892">+7 (342) 2-56789-2</a>
    <a class="btn btn--primary nav-cta" href="${r}price/index.html">Записаться</a>
    <button class="nav-burger" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>
${occupancyBar(depth)}

<div class="mobile-menu" id="mobile-menu">
  ${mob}
  <a class="mobile-menu__phone" href="tel:+73422567892">+7 (342) 2-56789-2</a>
  <a class="btn btn--primary" href="${r}price/index.html">Записаться</a>
</div>
<a class="sticky-cta" href="${r}price/index.html">Выбрать абонемент</a>`;
}

function footer(depth) {
  const r = p(depth);
  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="nav-logo" href="${r}index.html" aria-label="Олимпия">
          <img class="nav-logo__img" src="${r}assets/logo-white.png" alt="Олимпия" width="1366" height="115">
        </a>
        <p>Спортивный комплекс в Перми: бассейны, детское плавание,
        фитнес, SPA и кинезитерапия.</p>
        <div class="footer-social">
          <a href="https://vk.com/olympiaperm" aria-label="Олимпия во ВКонтакте" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 7.5c.3 6 3.6 9.5 9 9.5h.8v-3.4c2 .2 3.4 1.6 4 3.4h3.2c-.7-2.6-2.4-4-3.6-4.6 1.2-.7 2.9-2.3 3.3-4.9h-3c-.4 2-1.9 3.7-3.9 3.9V7.5h-3v6.6c-2-.5-3.7-2.4-3.8-6.6z"/></svg>
          </a>
          <a href="https://t.me/olympiaperm" aria-label="Олимпия в Телеграме" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 4.5 3.4 11.2c-.9.4-.9 1.2 0 1.5l4.4 1.4 1.7 5.2c.3.8 1 .9 1.5.3l2.4-2.4 4.6 3.4c.7.4 1.4.1 1.6-.8l3-13.9c.2-1-.5-1.6-1.6-1.4z"/><path d="m8 14 9.5-7.4"/></svg>
          </a>
          <a href="https://rutube.ru/channel/54775427/" aria-label="Олимпия на Rutube" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="4"/><path d="m10 9.5 5 2.5-5 2.5z"/></svg>
          </a>
        </div>
        <div class="app-links app-links--footer">
          <a class="btn btn--ghost-light" href="https://apps.apple.com/us/app/%D0%BE%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D1%8F-%D0%BF%D0%B5%D1%80%D0%BC%D1%8C/id1483461606?l=ru&amp;ls=1" rel="noopener">App Store</a>
          <a class="btn btn--ghost-light" href="https://appgallery.huawei.com/#/app/C104697445" rel="noopener">AppGallery</a>
          <a class="btn btn--ghost-light" href="https://rustore.ru/catalog/app/com.itrack.sportivnyjkompl648840" rel="noopener">RuStore</a>
        </div>
      </div>
      <nav class="footer-col" aria-label="Направления">
        <h3>Направления</h3>
        <ul>
          <li><a href="${r}pools/index.html">Бассейны</a></li>
          <li><a href="${r}swimming_center/index.html">Детское плавание</a></li>
          <li><a href="${r}fitness_center/index.html">Фитнес-центр</a></li>
          <li><a href="${r}spa_center/index.html">SPA-центр</a></li>
          <li><a href="${r}center_kinesitherapy/index.html">Кинезитерапия</a></li>
        </ul>
      </nav>
      <nav class="footer-col" aria-label="Посетителям">
        <h3>Посетителям</h3>
        <ul>
          <li><a href="${r}visitors/faq/index.html">Вопросы и ответы</a></li>
          <li><a href="${r}timetable/index.html">Расписание</a></li>
          <li><a href="${r}price/index.html">Цены</a></li>
          <li><a href="${r}visitors/first-visit/index.html">Первый визит</a></li>
          <li><a href="${r}team/index.html">Команда</a></li>
          <li><a href="${r}news/index.html">Новости</a></li>
          <li><a href="${r}contacts/index.html">Контакты</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-legal">
      <span>© Спортивный комплекс «Олимпия», Пермь, ул. Мира, 41</span>
      <a href="${r}legal/index.html">Юридическое и B2B</a>
      <a href="${r}legal/personal-data-consent/index.html">Обработка персональных данных</a>
      <a href="${r}legal/fz152/index.html">Политика в отношении персональных данных</a>
    </div>
  </div>
  <div class="footer-watermark" aria-hidden="true">
    <svg viewBox="0 0 1200 150" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="128" text-anchor="middle"
        font-family="Unbounded, sans-serif" font-weight="300" font-size="150"
        letter-spacing="8" fill="#1668c0">ОЛИМПИЯ</text>
    </svg>
  </div>
</footer>`;
}

function shell(depth, opt) {
  const r = p(depth);
  const canon = opt.canonical
    ? `\n  <link rel="canonical" href="${esc(opt.canonical)}">`
    : '';
  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(opt.title)}</title>
  <meta name="description" content="${esc(opt.description || '')}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ru_RU">
  <meta property="og:title" content="${esc(opt.title)}">
  <meta property="og:image" content="https://olympiaperm.ru/og-logo-new.png">
  <meta name="robots" content="${opt.robots || 'index, follow'}">${canon}
  <link rel="icon" href="${siteP(depth)}local/templates/olympia/new_img/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400&family=Onest:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${r}css/style.css">${opt.head || ''}
</head>
<body>
${header(depth, opt.active || '')}

<main id="main">
${opt.content}
</main>

${footer(depth)}

<script src="${r}js/main.js" defer></script>
</body>
</html>
`;
}

function redirectPage(fromDepth, targetRel, title) {
  const href = p(fromDepth) + targetRel.replace(/^\//, '') +
    (targetRel.endsWith('index.html') ? '' : (targetRel.endsWith('/') ? 'index.html' : '/index.html'));
  const canon = absUrl(normalizeRel(targetRel));
  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0;url=${esc(href)}">
  <link rel="canonical" href="${esc(canon)}">
  <title>${esc(title)} — перенос</title>
  <script>location.replace(${JSON.stringify(href)});</script>
</head>
<body>
  <p>Страница переехала: <a href="${esc(href)}">${esc(title)}</a>.</p>
</body>
</html>
`;
}

function rowList(items) {
  const li = items.map(it => `      <li>
        <a class="ticket-row" href="${it.href}">
          <span class="ticket-row__name">${esc(it.name)}</span>
          <span class="ticket-row__hint">${esc(it.hint || '')}</span>
        </a>
      </li>`).join('\n');
  return `<ul class="tickets-list reveal">\n${li}\n    </ul>`;
}

function cardList(items) {
  const li = items.map(it => {
    const media = it.photo
      ? `<figure class="hub-card__media"><img src="${it.photo}" alt="${esc(it.photoAlt || it.name)}" loading="lazy"></figure>`
      : '';
    return `      <li${it.cat ? ` data-cat="${it.cat}"` : ''}>
        <a class="hub-card${it.photo ? ' hub-card--media' : ''}" href="${it.href}">
          ${media}
          <span class="hub-card__name">${esc(it.name)}</span>
          <span class="hub-card__hint">${esc(it.hint || '')}</span>
        </a>
      </li>`;
  }).join('\n');
  return `<ul class="hub-cards reveal">\n${li}\n    </ul>`;
}

function ctaBand(title, sub, actions) {
  const btns = actions.map(a => {
    const extra = /^(https?:)/i.test(a[1]) ? ' rel="noopener"' : '';
    return `<a class="btn ${a[2] || 'btn--primary'}" href="${a[1]}"${extra}>${esc(a[0])}</a>`;
  }).join('\n        ');
  return `<div class="cta-band reveal-fill">
      <div>
        <h2>${esc(title)}</h2>
        <p class="cta-band__sub">${esc(sub)}</p>
      </div>
      <div class="cta-band__actions">
        ${btns}
      </div>
    </div>`;
}

module.exports = {
  shell, header, footer, breadcrumbs, trailFromRel, redirectPage,
  rowList, cardList, ctaBand, esc, p, siteP, absUrl, normalizeRel,
  DIR_LABELS, TEAM_CATS, NEWS_CATS, VISITOR_PAGES, LEGAL_PAGES
};
