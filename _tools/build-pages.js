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
  // items: [{href, name, hint}]
  const li = items.map(it => `      <li>
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
  const crumbs = lib.breadcrumbs(1, [[R + 'index.html', 'Главная'], [null, opt.h1]]);
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

    <section class="section" aria-label="Услуги">
      <div class="section-head reveal">
        <h2>${lib.esc(opt.servicesTitle || 'Услуги и занятия')}</h2>
      </div>
      ${rowList(opt.services)}
    </section>
${opt.specs ? `
    <section class="section" aria-label="Цифры и факты">
      <div class="section-head reveal">
        <h2>Цифры и факты</h2>
      </div>
      ${specRows(opt.specs)}
    </section>
` : ''}
    ${ctaBand(opt.ctaTitle, opt.ctaSub, opt.ctaActions)}
  </div>`;
  return lib.shell(1, {
    title: opt.h1 + ' — «Олимпия» Пермь',
    description: opt.metaDesc,
    active: 'dirs',
    content
  });
}

/* ============ 1. БАССЕЙНЫ ============ */
write('pools/index.html', dirPage({
  h1: 'Бассейны',
  lede: 'Шесть бассейнов для спорта и отдыха, включая 50-метровый олимпийского стандарта.',
  metaDesc: 'Бассейны спорткомплекса «Олимпия» в Перми: 50-метровый олимпийского стандарта, детский, глубоководный, гидромассажная зона, сауны.',
  photo: 'pool-50m.jpg',
  photoAlt: '50-метровый бассейн «Олимпии» с десятью дорожками',
  photoPos: '50% 72%',
  intro: `<p class="page-head__lede">Спорткомплекс «Олимпия» — это шесть бассейнов для
        разнообразного отдыха. Для спортивного плавания есть 50-метровый бассейн
        олимпийского стандарта. Для малышей и их родителей оборудован детский бассейн.
        Часть малого бассейна глубиной 5,5&nbsp;м предназначена для водного поло,
        вторая часть — гидромассажная зона, где можно расслабиться после активного
        плавания.</p>
        <p class="page-head__lede" style="margin-top:14px">В бассейнах, подобных большому бассейну «Олимпии»,
        устанавливаются мировые рекорды. Здесь регулярно проводятся соревнования
        регионального, всероссийского и международного уровня: наш бассейн —
        единственный в городе с лицензией на проведение таких мероприятий.</p>`,
  services: [
    { href: S + 'pools/adult_groups/index.html', name: 'Занятия плаванием для взрослых', hint: 'группы и обучение' },
    { href: S + 'pools/aqua/index.html', name: 'Аквааэробика', hint: 'тренировки в воде' },
    { href: S + 'pools/baths/index.html', name: 'Бани и сауны', hint: 'комплекс саун' },
    { href: S + 'pools/clear_water/index.html', name: 'Система очистки воды', hint: 'санитарная безопасность' },
    { href: S + 'pools/grafik-sorevnovaniy/index.html', name: 'График соревнований', hint: 'календарь стартов' }
  ],
  specs: [
    ['Большой бассейн', '50 метров, олимпийский стандарт'],
    ['Дорожки', '10'],
    ['Глубоководная часть малого бассейна', '5,5 метра — водное поло и дайвинг'],
    ['Для самых маленьких', 'отдельный детский бассейн'],
    ['После плавания', 'гидромассажная зона и комплекс саун']
  ],
  ctaTitle: 'Установите свой рекорд в «Олимпии»',
  ctaSub: 'Свободное плавание ежедневно: будни с 07:00, выходные с 08:00.',
  ctaActions: [
    ['Расписание бассейна', S + 'timetable/big-pool/index.html', 'btn--ghost-light'],
    ['Цены', R + 'price/index.html', 'btn--primary']
  ]
}));

/* ============ 2. ДЕТСКИЙ ЦЕНТР ПЛАВАНИЯ ============ */
write('swimming_center/index.html', dirPage({
  h1: 'Центр детского плавания',
  lede: 'Более двух с половиной тысяч ребят учатся плавать и делают первые шаги к будущим победам.',
  metaDesc: 'Центр детского плавания «Олимпии» в Перми: обучение с раннего возраста, «Мама и малыш», спортивное плавание, водное поло, плавание в ластах.',
  photo: 'kids-training.jpg',
  photoAlt: 'Мальчик в очках и шапочке плывёт с доской',
  intro: `<p class="page-head__lede">Плавание — жизненно необходимый каждому ребёнку
        навык и наименее травматичный вид спорта. Регулярные занятия улучшают
        кровообращение, развивают органы дыхания, исправляют осанку и укрепляют
        иммунитет, а здоровый образ жизни становится для ребёнка нормой.</p>
        <div class="hero-actions" style="margin-top:26px">
          <a class="btn btn--primary" href="${S}zapis_cdp/index.html">Записаться</a>
          <a class="btn btn--ghost" href="${S}timetable/mama-i-malysh/index.html">Расписание занятий</a>
        </div>`,
  servicesTitle: 'Программы центра',
  services: [
    { href: S + 'swimming_center/forkids/index.html', name: 'Обучение плаванию', hint: 'с раннего возраста' },
    { href: S + 'swimming_center/mnm/index.html', name: 'Мама и малыш', hint: 'первые занятия вместе' },
    { href: S + 'swimming_center/profilaktika-ploskostopiya-i-skolioza/index.html', name: 'Профилактика плоскостопия и сколиоза', hint: 'оздоровительные группы' },
    { href: S + 'swimming_center/training/index.html', name: 'Программа «Класс»', hint: 'плавание для школ и садов' },
    { href: S + 'swimming_center/sport/index.html', name: 'Спортивное плавание', hint: 'путь в большой спорт' },
    { href: S + 'swimming_center/waterpolo/index.html', name: 'Водное поло', hint: 'командная игра в воде' },
    { href: S + 'swimming_center/flipper/index.html', name: 'Плавание в ластах', hint: 'скоростное плавание' },
    { href: S + 'swimming_center/pamyatka-dlya-roditeley/index.html', name: 'Памятка для родителей', hint: 'что взять на занятие' },
    { href: S + 'swimming_center/pravila-bezopasnogo-povedeniya-na-vode/index.html', name: 'Правила безопасного поведения на воде', hint: 'обязательно к прочтению' }
  ],
  ctaTitle: 'Научите ребёнка плавать',
  ctaSub: 'Отдельный детский бассейн, тренеры-профессионалы и группы по возрастам.',
  ctaActions: [
    ['Записаться в детский центр', S + 'zapis_cdp/index.html', 'btn--primary'],
    ['Команда центра', R + 'team/index.html', 'btn--ghost-light']
  ]
}));

/* ============ 3. ФИТНЕС-ЦЕНТР ============ */
write('fitness_center/index.html', dirPage({
  h1: 'Фитнес-центр',
  lede: 'Самый большой фитнес-центр Пермского края: более 3500 м² под одной крышей с бассейнами.',
  metaDesc: 'Фитнес-центр «Олимпии» в Перми: тренажёрный зал 1600 м², оборудование Technogym и Matrix, групповые программы, аквааэробика, доступ в 50-метровый бассейн.',
  photo: 'fitness-hall.jpg',
  photoAlt: 'Тренажёрный зал «Олимпии» с силовыми рамами Matrix',
  intro: `<p class="page-head__lede">Тренажёрный зал площадью 1600&nbsp;м² с потолками
        6&nbsp;метров и панорамным остеклением. Оборудование премиум-сегмента
        Technogym и Matrix, линейка из 40 кардиотренажёров, зона функционального
        тренинга и зона единоборств с рингом.</p>
        <p class="page-head__lede" style="margin-top:14px">Посетители фитнес-центра могут заниматься
        и в большом спортивном бассейне: клубные карты действуют на оба
        пространства.</p>`,
  services: [
    { href: S + 'fitness_center/gym/index.html', name: 'Тренажёрный зал', hint: '1600 м², Technogym и Matrix' },
    { href: S + 'fitness_center/personalnye-trenirovki/index.html', name: 'Персональные тренировки', hint: 'индивидуальная программа' },
    { href: S + 'fitness_center/group_programs/index.html', name: 'Групповые направления', hint: 'по расписанию' },
    { href: S + 'fitness_center/aqua/index.html', name: 'Аквааэробика', hint: 'тренировки в бассейне' },
    { href: S + 'fitness_center/meditsinskoe_testirovanie/index.html', name: 'Медицинское тестирование', hint: 'контроль состояния организма' },
    { href: S + 'fitness_center/tehnika-bezopasnosti/index.html', name: 'Техника безопасности', hint: 'правила зала' }
  ],
  specs: [
    ['Площадь фитнес-центра', 'более 3500 м²'],
    ['Тренажёрный зал', '1600 м², потолки 6 м'],
    ['Кардиозона', '40 тренажёров'],
    ['Оборудование', 'Technogym, Matrix'],
    ['Бонус', 'доступ в большой бассейн по клубной карте']
  ],
  ctaTitle: 'Начните тренироваться в «Олимпии»',
  ctaSub: 'Клубные карты «Фитнес» и «Фитнес+плавание» с доступом в бассейн.',
  ctaActions: [
    ['Расписание групповых', S + 'timetable/group/index.html', 'btn--ghost-light'],
    ['Цены и клубные карты', R + 'price/index.html', 'btn--primary']
  ]
}));

/* ============ 4. SPA-ЦЕНТР ============ */
write('spa_center/index.html', dirPage({
  h1: 'SPA-центр',
  lede: 'Центр красоты и восстановления с медицинской лицензией.',
  metaDesc: 'SPA-центр «Олимпии» в Перми: массажи, SPA-ритуалы, обертывания, аппаратные процедуры, фитобочка и солярий. Медицинская лицензия, налоговый вычет, ДМС.',
  photo: 'spa-massage.jpg',
  photoAlt: 'Сеанс массажа в SPA-центре',
  intro: `<p class="page-head__lede">SPA-центр «Олимпии» — для тех, кто выбирает лучшее:
        широкий спектр процедур для кожи и всего организма, специалисты
        с медицинским образованием, оборудование с регистрационными
        удостоверениями Минздрава РФ и сертифицированная косметика
        с натуральными компонентами.</p>
        <p class="page-head__lede" style="margin-top:14px">На ряд процедур можно получить налоговый
        вычет или пройти их по полису ДМС.</p>`,
  servicesTitle: 'Процедуры',
  services: [
    { href: S + 'spa_center/massazhi-telo/index.html', name: 'Массажи тела', hint: 'классические и специальные' },
    { href: S + 'spa_center/massazhi-litsa/index.html', name: 'Массажи лица', hint: 'уход и тонус' },
    { href: S + 'spa_center/spa-ritualy/index.html', name: 'SPA-ритуалы', hint: '«Очищение», «Возрождение» и другие' },
    { href: S + 'spa_center/spa-ritualy-dlya-dvoikh/index.html', name: 'SPA-ритуалы для двоих', hint: 'вдвоём приятнее' },
    { href: S + 'spa_center/spa-protsedury-face/index.html', name: 'SPA-процедуры для лица', hint: 'программы ухода' },
    { href: S + 'spa_center/apparatnye-protsedury/index.html', name: 'Аппаратные процедуры', hint: 'медицинское оборудование' },
    { href: S + 'spa_center/obertyvaniya/index.html', name: 'Обертывания', hint: 'детокс и тонус кожи' },
    { href: S + 'spa_center/barrel/index.html', name: 'Фитобочка', hint: 'кедровое прогревание' },
    { href: S + 'spa_center/solyariy/index.html', name: 'Солярий', hint: 'ровный тон кожи' }
  ],
  ctaTitle: 'Подарите себе восстановление',
  ctaSub: 'SPA-ритуалы и массажи после бассейна или тренировки. Действуют подарочные карты.',
  ctaActions: [
    ['Подарочная карта', S + 'podarochnaya-karta-ideya-dlya-podarka/index.html', 'btn--ghost-light'],
    ['Записаться', S + 'zapis_cdp/index.html', 'btn--primary']
  ]
}));

/* ============ 5. КИНЕЗИТЕРАПИЯ ============ */
write('center_kinesitherapy/index.html', dirPage({
  h1: 'Центр кинезитерапии',
  lede: 'Движение — естественное лекарственное средство.',
  metaDesc: 'Центр кинезитерапии «Олимпии» в Перми: реабилитация опорно-двигательного аппарата, ЛФК, кинезиотейпирование, плантоскопия, медицинский массаж.',
  photo: 'kinesi-gym.jpg',
  photoAlt: 'Занятие с инструктором в зале кинезитерапии',
  intro: `<p class="page-head__lede">Единственный центр в Перми с полным комплексом услуг
        по восстановлению опорно-двигательного аппарата: занятия в зале
        кинезитерапии, плавание в бассейне, медицинский массаж,
        кинезиотейпирование и физиопроцедуры.</p>
        <p class="page-head__lede" style="margin-top:14px">Центр — клиническая база кафедры медицинской
        реабилитации и спортивной медицины Пермского государственного медицинского
        университета им.&nbsp;академика Е.&nbsp;А.&nbsp;Вагнера. Помощь
        врача-кинезитерапевта усиливает эффект традиционной терапии и часто
        помогает избежать лекарств и операций.</p>`,
  services: [
    { href: S + 'center_kinesitherapy/pervichnyy-priyem/index.html', name: 'Первичный приём', hint: 'осмотр и план восстановления' },
    { href: S + 'center_kinesitherapy/reabilitatsionnaya-programma/index.html', name: 'Реабилитационная программа', hint: 'курс занятий под контролем врача' },
    { href: S + 'center_kinesitherapy/profilakticheskiy-kurs/index.html', name: 'Профилактический курс', hint: 'предупредить проще, чем лечить' },
    { href: S + 'center_kinesitherapy/kinezioteypirovanie/index.html', name: 'Кинезиотейпирование', hint: 'поддержка мышц и суставов' },
    { href: S + 'center_kinesitherapy/plantoskop/index.html', name: 'Плантоскопия', hint: 'диагностика стопы' },
    { href: S + 'center_kinesitherapy/perkussionnyy-massazh/index.html', name: 'Перкуссионный массаж', hint: 'восстановление мышц' }
  ],
  ctaTitle: 'Вернитесь к движению без боли',
  ctaSub: 'Врачи-кинезитерапевты и инструкторы-методисты составят программу под вас.',
  ctaActions: [
    ['Команда центра', R + 'team/index.html', 'btn--ghost-light'],
    ['Записаться', S + 'zapis_cdp/index.html', 'btn--primary']
  ]
}));

/* ============ КОНТАКТЫ ============ */
{
  const content = `  <div class="container">
    ${lib.breadcrumbs(1, [[R + 'index.html', 'Главная'], [null, 'Контакты']])}
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
        <div class="visit__actions">
          <a class="btn btn--primary" href="${S}zapis_cdp/index.html">Записаться</a>
          <a class="btn btn--ghost" href="${S}contacts/index.html">Схема проезда и все телефоны</a>
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
        <a href="${S}vpervye-v-olimpii/index.html">памятку для первого визита</a>.</p>
      </dl>
    </div>

    <section class="section" aria-label="Полезные страницы">
      <div class="section-head reveal">
        <h2>Полезное перед визитом</h2>
      </div>
      ${rowList([
        { href: S + 'parking/index.html', name: 'Парковка', hint: 'как припарковаться у комплекса' },
        { href: R + 'pravila/index.html', name: 'Правила посещения', hint: 'документы и регламенты' },
        { href: R + 'faq/index.html', name: 'Вопросы и ответы', hint: 'самое часто спрашиваемое' },
        { href: S + 'dostupnost/index.html', name: 'Доступная среда', hint: 'для маломобильных посетителей' },
        { href: S + 'cafe/index.html', name: 'Кафе', hint: 'перекусить после тренировки' },
        { href: S + 'prokat/index.html', name: 'Прокат', hint: 'инвентарь напрокат' }
      ])}
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
{
  const content = `  <div class="container">
    ${lib.breadcrumbs(1, [[R + 'index.html', 'Главная'], [null, 'Цены']])}
    <div class="page-head">
      <h1>Билеты и абонементы</h1>
      <p class="page-head__lede">Разовые посещения, абонементы и клубные карты для взрослых
      и детей. Актуальный прайс уточняйте по телефону
      <a href="tel:+73422567892">+7&nbsp;(342)&nbsp;2-56789-2</a> или в кассах комплекса:
      цены зависят от времени посещения и категории льгот.</p>
    </div>

    <section class="section" aria-label="Категории">
      <div class="section-head reveal">
        <h2>Что можно оформить</h2>
      </div>
      ${rowList([
        { href: S + 'pools/index.html', name: 'Разовое посещение бассейна', hint: 'взрослые и дети, будни и выходные' },
        { href: S + 'pools/adult_groups/index.html', name: 'Абонементы на плавание', hint: 'свободное плавание и группы' },
        { href: R + 'swimming_center/index.html', name: 'Абонементы детского центра', hint: 'обучение плаванию по возрастам' },
        { href: R + 'fitness_center/index.html', name: 'Клубные карты фитнеса', hint: '«Фитнес» и «Фитнес+плавание»' },
        { href: R + 'spa_center/index.html', name: 'SPA-процедуры', hint: 'по прайсу центра' },
        { href: R + 'center_kinesitherapy/index.html', name: 'Программы кинезитерапии', hint: 'приёмы и курсы' },
        { href: S + 'podarochnaya-karta-ideya-dlya-podarka/index.html', name: 'Подарочная карта', hint: 'номинал на любые услуги' }
      ])}
    </section>

    <section class="section" aria-label="Льготы">
      <div class="section-head reveal">
        <h2>Льготы и выгода</h2>
        <p class="section-head__aside">Скидки действуют по будням и в определённые
        часы: подробности внутри каждой акции.</p>
      </div>
      ${rowList([
        { href: R + 'actions/index.html', name: 'Все акции и скидки', hint: 'пенсионерам, студентам, многодетным' },
        { href: S + 'nalogoviy-vychet/index.html', name: 'Налоговый вычет', hint: 'верните 13% за занятия спортом' },
        { href: S + 'uslugi_dms/index.html', name: 'Услуги по полису ДМС', hint: 'SPA и кинезитерапия' },
        { href: S + 'uslugi_dlya_korporativnykh_klientov/index.html', name: 'Корпоративным клиентам', hint: 'спорт для команд' }
      ])}
    </section>

    ${ctaBand('Приходите сегодня', 'Кассы работают до 21:15. Будни с 07:00, выходные с 08:00.', [
      ['Расписание', S + 'timetable/group/index.html', 'btn--ghost-light'],
      ['Записаться', S + 'zapis_cdp/index.html', 'btn--primary']
    ])}
  </div>`;
  write('price/index.html', lib.shell(1, {
    title: 'Цены и абонементы — «Олимпия» Пермь',
    description: 'Билеты, абонементы и клубные карты спорткомплекса «Олимпия» в Перми: бассейны, детский центр плавания, фитнес, SPA, кинезитерапия.',
    active: 'price',
    content
  }));
}

/* ============ FAQ (извлечение) ============ */
{
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
      // ссылки ответа: относительные пути из site/faq/<slug>/ -> к копии
      a = a.replace(/\b(src|href)="([^"]+)"/gi, (m0, attr, url) => {
        const u = url.trim();
        if (/^(https?:|mailto:|tel:|#|data:)/i.test(u)) return m0;
        let resolved;
        try { resolved = path.posix.normalize(path.posix.join('/faq/' + slug, u)); }
        catch (e) { return m0; }
        if (resolved.startsWith('..')) return m0;
        return attr + '="' + S + resolved.replace(/^\/+/, '') + '"';
      });
      if (q && a) items.push({ q, a });
    }
    if (!items.length) continue;
    total += items.length;
    const qa = items.map(it => `      <div class="qa-item">
        <h3 style="margin:0"><button class="qa-item__head" aria-expanded="false">
          <span>${lib.esc(it.q)}</span>
          <span class="dir-item__toggle" aria-hidden="true"></span>
        </button></h3>
        <div class="qa-item__body"><div><div class="qa-item__inner">${it.a}</div></div></div>
      </div>`).join('\n');
    sections += `
    <section class="section" aria-label="${lib.esc(name)}">
      <div class="section-head reveal">
        <h2>${lib.esc(name)}</h2>
      </div>
      <div class="reveal">
${qa}
      </div>
    </section>`;
  }
  console.log('  FAQ: вопросов извлечено', total);
  const content = `  <div class="container">
    ${lib.breadcrumbs(1, [[R + 'index.html', 'Главная'], [null, 'Вопросы и ответы']])}
    <div class="page-head">
      <h1>Вопросы и ответы</h1>
      <p class="page-head__lede">Собрали то, о чём спрашивают чаще всего. Не нашли ответ?
      Позвоните на горячую линию <a href="tel:+73422567892">+7&nbsp;(342)&nbsp;2-56789-2</a>.</p>
    </div>
${sections}
  </div>`;
  write('faq/index.html', lib.shell(1, {
    title: 'Вопросы и ответы — «Олимпия» Пермь',
    description: 'Ответы на частые вопросы о посещении спорткомплекса «Олимпия»: абонементы, клубные карты, правила, справки.',
    content
  }));
}

/* ============ КОМАНДА (извлечение) ============ */
{
  const cats = [
    ['basseyn', 'Бассейн'],
    ['fitnes-tsentr', 'Фитнес-центр'],
    ['detskiy-tsentr-plavaniya', 'Центр детского плавания'],
    ['spa-tsentr', 'СПА-центр'],
    ['kineziterapiya', 'Кинезитерапия']
  ];
  let sections = '';
  let total = 0;
  for (const [slug, name] of cats) {
    const fp = path.join(SITE, 'team', slug, 'index.html');
    if (!fs.existsSync(fp)) continue;
    const html = fs.readFileSync(fp, 'utf8');
    const people = [];
    // разбор по карточкам: каждая начинается с photo_mobile
    const chunks = html.split('class="photo_mobile"').slice(1);
    for (const ch of chunks) {
      const seg = ch.slice(0, 3000);
      const img = (seg.match(/^ style="background-image: url\('([^']+)'\)/) || [])[1];
      const nm = (seg.match(/class="name">([^<]+)</) || [])[1];
      const post = (seg.match(/class="post">([^<]*)</) || [])[1] || '';
      const href = (seg.match(/class="read_more" href="([^"]+)"/) || [])[1];
      if (!nm || !href) continue;
      // отсечь мёртвые в оригинале профили («Элемент не найден!»)
      try {
        const detail = fs.readFileSync(path.join(SITE, 'team', slug, href), 'utf8');
        if (detail.includes('errortext')) continue;
      } catch (e) { continue; }
      people.push({
        img: (img || '').replace(/^(\.\.\/)+/, ''),
        name: nm.trim(),
        post: post.trim(),
        href
      });
    }
    if (!people.length) continue;
    total += people.length;
    const cards = people.map(p => `      <a class="team-card" href="${S}team/${slug}/${p.href}">
        <figure><img src="${S}${p.img}" alt="${lib.esc(p.name)}" loading="lazy"></figure>
        <div class="team-card__name">${lib.esc(p.name)}</div>
        <div class="team-card__role">${lib.esc(p.post)}</div>
      </a>`).join('\n');
    sections += `
    <section class="section" aria-label="${lib.esc(name)}">
      <div class="section-head reveal">
        <h2>${lib.esc(name)}</h2>
      </div>
      <div class="team-grid reveal">
${cards}
      </div>
    </section>`;
  }
  console.log('  Команда: карточек извлечено', total);
  const content = `  <div class="container">
    ${lib.breadcrumbs(1, [[R + 'index.html', 'Главная'], [null, 'Команда']])}
    <div class="page-head">
      <h1>Наша команда</h1>
      <p class="page-head__lede">Тренеры, врачи и специалисты, которые каждый день
      делают «Олимпию» лучшим местом для спорта и восстановления.</p>
    </div>
${sections}
  </div>`;
  write('team/index.html', lib.shell(1, {
    title: 'Команда — «Олимпия» Пермь',
    description: 'Тренеры и специалисты спорткомплекса «Олимпия»: центр детского плавания, бассейн, фитнес, SPA, кинезитерапия.',
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
    docs.push({ href: S + href, name: name.replace(/^Изучить\s+/i, ''), hint: 'PDF' });
  }
  // связанные регламенты и политики (реальные страницы копии)
  docs.push(
    { href: S + 'help/index.html', name: 'Положение о пропускном и внутриобъектовом режиме', hint: 'регламент' },
    { href: S + 'about/docs/index.html', name: 'Документы организации', hint: 'уставные и разрешительные' },
    { href: S + 'fz152/index.html', name: 'Политика в отношении персональных данных', hint: 'политика' },
    { href: S + 'personal-data-consent/index.html', name: 'Согласие на обработку персональных данных', hint: 'форма согласия' },
    { href: S + 'dostupnost/index.html', name: 'Доступная среда', hint: 'для маломобильных посетителей' }
  );
  console.log('  Правила: документов', docs.length);
  const content = `  <div class="container">
    ${lib.breadcrumbs(1, [[R + 'index.html', 'Главная'], [null, 'Правила посещения']])}
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
      ['Вопросы и ответы', R + 'faq/index.html', 'btn--ghost-light'],
      ['Контакты', R + 'contacts/index.html', 'btn--primary']
    ])}
  </div>`;
  write('pravila/index.html', lib.shell(1, {
    title: 'Правила посещения — «Олимпия» Пермь',
    description: 'Правила посещения спорткомплекса «Олимпия» в Перми: документы и регламенты.',
    content
  }));
}

console.log('Готово.');
