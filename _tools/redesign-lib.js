'use strict';
// Общие шаблоны редизайна: каркас страницы, шапка, футер.
// depth — вложенность относительно redesign/ (0 = сама redesign/).

function p(depth) { return '../'.repeat(depth); }          // до корня redesign/
function siteP(depth) { return '../'.repeat(depth + 1) + 'site/'; } // до копии site/

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function header(depth, active) {
  const r = p(depth), s = siteP(depth);
  const links = [
    ['dirs', r + 'index.html#dirs', 'Направления'],
    ['timetable', s + 'timetable/group/index.html', 'Расписание'],
    ['price', r + 'price/index.html', 'Цены'],
    ['actions', r + 'actions/index.html', 'Акции'],
    ['contacts', r + 'contacts/index.html', 'Контакты']
  ];
  const li = links.map(l =>
    `<li><a href="${l[1]}"${l[0] === active ? ' aria-current="page"' : ''}>${l[2]}</a></li>`).join('\n      ');
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
    <a class="btn btn--primary nav-cta" href="${s}zapis_cdp/index.html">Записаться</a>
    <button class="nav-burger" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>

<div class="mobile-menu" id="mobile-menu">
  ${mob}
  <a class="mobile-menu__phone" href="tel:+73422567892">+7 (342) 2-56789-2</a>
</div>`;
}

function footer(depth) {
  const r = p(depth), s = siteP(depth);
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
          <li><a href="${s}timetable/group/index.html">Расписание</a></li>
          <li><a href="${r}price/index.html">Цены</a></li>
          <li><a href="${r}actions/index.html">Акции</a></li>
          <li><a href="${r}news/index.html">Новости</a></li>
          <li><a href="${r}pravila/index.html">Правила посещения</a></li>
          <li><a href="${r}faq/index.html">Вопросы и ответы</a></li>
          <li><a href="${r}contacts/index.html">Контакты</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-legal">
      <span>© Спортивный комплекс «Олимпия», Пермь, ул. Мира, 41</span>
      <a href="${s}personal-data-consent/index.html">Обработка персональных данных</a>
      <a href="${s}fz152/index.html">Политика в отношении персональных данных</a>
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

function breadcrumbs(depth, trail) {
  // trail: [[href|null, label], ...] — последний элемент без ссылки
  const items = trail.map((t, i) => {
    const last = i === trail.length - 1;
    return last
      ? `<li aria-current="page">${esc(t[1])}</li>`
      : `<li><a href="${t[0]}">${esc(t[1])}</a></li>`;
  }).join('');
  return `<nav class="crumbs" aria-label="Вы здесь"><ol>${items}</ol></nav>`;
}

function shell(depth, opt) {
  const r = p(depth);
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
  <meta name="robots" content="index, follow">
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

<script src="${r}js/main.js" defer></script>${(opt.scripts || []).map(s => `\n<script src="${r}${s}" defer></script>`).join('')}
</body>
</html>
`;
}

module.exports = { shell, header, footer, breadcrumbs, esc, p, siteP };
