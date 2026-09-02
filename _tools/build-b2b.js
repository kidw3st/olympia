'use strict';
// Раздел для юрлиц. В оригинале — вёрстка таблицей: иконки, заголовки и текст
// лежали в разных строках <tr>, на телефоне столбцы схлопывались в кашу.
// Пересобираем в сетку карточек и добавляем то, чего не хватало: порядок
// действий и выходы в смежные разделы.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'redesign');
const DEPTH = 2;                       // redesign/legal/corporate/
const R = '../'.repeat(DEPTH);

const PERKS = [
  { icon: 'pay-part', title: 'Частичная оплата',
    text: 'Компания оплачивает только часть стоимости — остальное сотрудники охотно доплачивают сами.' },
  { icon: 'dms', title: 'Полис ДМС',
    text: 'Занятия можно оплатить средствами добровольного медицинского страхования.' },
  { icon: 'discount', title: 'Накопительные скидки',
    text: 'Чем дольше и больше занимается коллектив, тем ниже цена посещения.' },
  { icon: 'special', title: 'Спецпредложение',
    text: 'Отдельное предложение для организации — скидка 10% на услуги спорткомплекса.' },
  { icon: 'flexible', title: 'Гибкий подход',
    text: 'Договор не обязателен: сотрудники могут оформить коллективную заявку и ходить со скидкой.' },
  { icon: 'care', title: 'Забота о людях',
    text: 'Более 300 компаний региона уже водят своих сотрудников в «Олимпию».' }
];

const STEPS = [
  { n: 1, title: 'Позвоните на горячую линию',
    text: 'Расскажите, сколько человек и какие направления интересуют — бассейн, фитнес, SPA или всё вместе.' },
  { n: 2, title: 'Подберём формат',
    text: 'Посчитаем стоимость под численность коллектива и график: абонементы, разовые посещения или оплата по ДМС.' },
  { n: 3, title: 'Заключим договор',
    text: 'Подготовим документы и выдадим карты. Дальше сотрудники приходят сами — по спискам или по картам.' }
];

const perks = PERKS.map(p => `        <li class="perk">
          <img class="perk__icon" src="${R}assets/b2b/${p.icon}.png" alt="" width="178" height="178" loading="lazy" decoding="async">
          <h3 class="perk__title">${lib.esc(p.title)}</h3>
          <p class="perk__text">${lib.esc(p.text)}</p>
        </li>`).join('\n');

const steps = STEPS.map(s => `        <li class="step">
          <span class="step__num">${s.n}</span>
          <div>
            <h3 class="step__title">${lib.esc(s.title)}</h3>
            <p class="step__text">${lib.esc(s.text)}</p>
          </div>
        </li>`).join('\n');

const content = `  <div class="container">
    ${lib.breadcrumbs(DEPTH, lib.trailFromRel('legal/corporate', 'Услуги для корпоративных клиентов'))}
    <div class="page-head">
      <h1>Корпоративным клиентам</h1>
      <p class="page-head__lede">Спорткомплекс работает с организациями напрямую: абонементы для
      сотрудников, оплата по ДМС, скидки и гибкие условия договора. Более 300 компаний
      Пермского края уже водят к нам свои коллективы.</p>
    </div>

    <section class="section" aria-label="Что получает организация">
      <div class="section-head reveal">
        <h2>Что получает организация</h2>
        <p class="section-head__aside">Шесть условий, о которых договариваемся индивидуально</p>
      </div>
      <ul class="perks reveal">
${perks}
      </ul>
    </section>

    <section class="section" aria-label="Как начать">
      <div class="section-head reveal">
        <h2>Как начать</h2>
        <p class="section-head__aside">От звонка до первых занятий — несколько дней</p>
      </div>
      <ol class="steps reveal">
${steps}
      </ol>
    </section>

    <section class="section" aria-label="Смежные разделы">
      <div class="section-head reveal">
        <h2>Что ещё пригодится</h2>
      </div>
      ${lib.rowList([
        { href: R + 'legal/dms/index.html', name: 'Услуги по полису ДМС',
          hint: 'перечень медицинских услуг и лицензия' },
        { href: R + 'price/index.html', name: 'Цены и абонементы',
          hint: 'от чего считаем корпоративную стоимость' },
        { href: R + 'about/docs/index.html', name: 'Документы',
          hint: 'правила, регламенты, закупочная документация' },
        { href: R + 'tender/index.html', name: 'Закупки и тендеры',
          hint: 'для поставщиков и подрядчиков' },
        { href: R + 'visitors/rules/index.html', name: 'Правила посещения',
          hint: 'что сообщить сотрудникам перед первым визитом' }
      ])}
    </section>

    ${lib.ctaBand('Идём в «Олимпию» коллективом',
      'Позвоните — посчитаем стоимость под вашу численность и график.',
      [['Контакты', R + 'contacts/index.html', 'btn--ghost-light'],
       ['+7 (342) 2-56789-2', 'tel:+73422567892', 'btn--primary']])}
  </div>`;

fs.mkdirSync(path.join(OUT, 'legal', 'corporate'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'legal', 'corporate', 'index.html'), lib.shell(DEPTH, {
  title: 'Корпоративным клиентам — «Олимпия» Пермь',
  description: 'Абонементы для сотрудников, оплата по ДМС, накопительные скидки и гибкие условия договора со спорткомплексом «Олимпия» в Перми.',
  canonical: 'https://olympiaperm.ru/legal/corporate/',
  content
}), 'utf8');

console.log('Раздел для юрлиц собран: преимущества ' + PERKS.length + ', шаги ' + STEPS.length);
