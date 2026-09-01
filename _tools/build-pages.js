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
    ${ctaBand(opt.ctaTitle, opt.ctaSub, opt.ctaActions)}
  </div>`;
  return lib.shell(1, {
    title: opt.h1 + ' — «Олимпия» Пермь',
    description: opt.metaDesc,
    content
  });
}

/* ============ 1. БАССЕЙНЫ ============ */
write('pools/index.html', dirPage({
  rel: 'pools',
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
    { href: './adult_groups/index.html', name: 'Занятия плаванием для взрослых', hint: 'группы и обучение', photo: S + 'upload/iblock/b2d/b2d270c05a5bca4c28ecf42edb7aa2b4.jpg', photoAlt: 'Занятия плаванием для взрослых' },
    { href: './aqua/index.html', name: 'Аквааэробика', hint: 'тренировки в воде', photo: S + 'upload/iblock/20e/20e55294d0fcb30d3546d491103d306d.jpg', photoAlt: 'Аквааэробика в бассейне «Олимпии»' },
    { href: './baths/index.html', name: 'Бани и сауны', hint: 'комплекс саун', photo: S + 'upload/iblock/400/400e17633308570c5d3edb474cb498d2.jpg', photoAlt: 'Комплекс саун' },
    { href: './clear_water/index.html', name: 'Система очистки воды', hint: 'санитарная безопасность', photo: S + 'upload/iblock/9bb/9bb7872ef4f68539bd247152069d64f5.jpg', photoAlt: 'Очистка воды в бассейнах' },
    { href: './grafik-sorevnovaniy/index.html', name: 'График соревнований', hint: 'календарь стартов' },
    { href: R + 'price/freeze/index.html', name: 'Заморозка клубной карты', hint: 'пауза действия карты' }
  ],
  galleryTitle: 'Шесть бассейнов',
  gallery: [
    { src: 'upload/iblock/7be/7beca203b451908c0d19327d856015d2.jpg', alt: 'Большой бассейн', caption: 'Большой бассейн, 50 м' },
    { src: 'upload/iblock/f33/f33f4c99c1c6e9bb06014347cdafd9f9.jpg', alt: 'Малый бассейн и гидромассажная зона', caption: 'Малый бассейн и гидромассаж' },
    { src: 'upload/iblock/c85/c85784ab2d72c6607c7733f1da38830d.jpg', alt: 'Детский бассейн «Олимпик»', caption: '«Олимпик»' },
    { src: 'upload/iblock/e33/e332ea703be1296c6f9e5f9f26b921a2.jpg', alt: 'Бассейн «Дельфины»', caption: '«Дельфины»' },
    { src: 'upload/iblock/4d4/4d43a396c7bbbb3e4e8a8497952f940c.jpg', alt: 'Бассейн «Рыбки»', caption: '«Рыбки»' },
    { src: 'upload/iblock/2ee/2eee13a394e71d02c6faad346b396045.jpg', alt: 'Бассейн «Киты»', caption: '«Киты»' }
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
    ['Расписание бассейна', R + 'timetable/big-pool/index.html', 'btn--ghost-light'],
    ['Цены', R + 'price/index.html', 'btn--primary']
  ]
}));

/* ============ 2. ДЕТСКИЙ ЦЕНТР ПЛАВАНИЯ ============ */
write('swimming_center/index.html', dirPage({
  rel: 'swimming_center',
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
          <a class="btn btn--primary" href="${R}zapis_cdp/index.html">Записаться</a>
          <a class="btn btn--ghost" href="${R}timetable/mama-i-malysh/index.html">Расписание занятий</a>
        </div>`,
  servicesTitle: 'Программы центра',
  services: [
    { href: './forkids/index.html', name: 'Обучение плаванию', hint: 'с раннего возраста', photo: S + 'upload/iblock/98b/98b4e272a77295f2bde9ca7b294d2ba0.jpg', photoAlt: 'Обучение плаванию' },
    { href: './mnm/index.html', name: 'Мама и малыш', hint: 'первые занятия вместе', photo: S + 'upload/iblock/c4a/h8jwo6hfvawyrlvfhkx2nop6c4m0fzu5.jpg', photoAlt: 'Занятие «Мама и малыш»' },
    { href: './profilaktika-ploskostopiya-i-skolioza/index.html', name: 'Профилактика плоскостопия и сколиоза', hint: 'оздоровительные группы', photo: S + 'upload/iblock/b55/o738a88mfqwkpdxmecee8lt6is2hos7a.jpg', photoAlt: 'Оздоровительное плавание' },
    { href: './training/index.html', name: 'Программа «Класс»', hint: 'плавание для школ и садов', photo: S + 'upload/iblock/0de/0de4aea8d956eb7b4937ea79906978dc.jpg', photoAlt: 'Программа «Класс»' },
    { href: './sport/index.html', name: 'Спортивное плавание', hint: 'путь в большой спорт', photo: S + 'upload/iblock/9f2/9f24b7edc6ebf0a240c528485364555a.jpg', photoAlt: 'Спортивное плавание' },
    { href: './waterpolo/index.html', name: 'Водное поло', hint: 'командная игра в воде', photo: S + 'upload/iblock/4a8/4a8386016212e00e0bf77143020e7ba6.jpg', photoAlt: 'Водное поло' },
    { href: './flipper/index.html', name: 'Плавание в ластах', hint: 'скоростное плавание', photo: S + 'upload/iblock/633/6339ea818fade84c1e78de3c31642068.jpg', photoAlt: 'Плавание в ластах' },
    { href: './pamyatka-dlya-roditeley/index.html', name: 'Памятка для родителей', hint: 'что взять на занятие' },
    { href: './pravila-bezopasnogo-povedeniya-na-vode/index.html', name: 'Правила безопасного поведения на воде', hint: 'обязательно к прочтению' }
  ],
  ctaTitle: 'Научите ребёнка плавать',
  ctaSub: 'Отдельный детский бассейн, тренеры-профессионалы и группы по возрастам.',
  ctaActions: [
    ['Записаться в детский центр', R + 'zapis_cdp/index.html', 'btn--primary'],
    ['Команда центра', R + 'team/index.html', 'btn--ghost-light']
  ]
}));

/* ============ 3. ФИТНЕС-ЦЕНТР ============ */
write('fitness_center/index.html', dirPage({
  rel: 'fitness_center',
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
    { href: './gym/index.html', name: 'Тренажёрный зал', hint: '1600 м², Technogym и Matrix', photo: S + 'upload/iblock/039/039baaae5c9bae0291b76a8d9e498127.jpg', photoAlt: 'Тренажёрный зал' },
    { href: './personalnye-trenirovki/index.html', name: 'Персональные тренировки', hint: 'индивидуальная программа' },
    { href: './group_programs/index.html', name: 'Групповые направления', hint: 'по расписанию', photo: S + 'upload/iblock/72d/j6mwdyta3xlp6si2r3a9qv6unrn04y8z.jpg', photoAlt: 'Зал групповых тренировок' },
    { href: R + 'pools/aqua/index.html', name: 'Аквааэробика', hint: 'канон — в разделе бассейнов', photo: S + 'upload/iblock/dc6/dc66dbc89ecaa75e6027a26583af448e.jpg', photoAlt: 'Аквапрограммы фитнес-центра' },
    { href: './meditsinskoe_testirovanie/index.html', name: 'Медицинское тестирование', hint: 'контроль состояния организма', photo: S + 'upload/iblock/071/071b94b96eabeeb8e0ad3e09f4a0a1c4.jpg', photoAlt: 'Медицинское тестирование MS FIT' },
    { href: './tehnika-bezopasnosti/index.html', name: 'Техника безопасности', hint: 'правила зала' },
    { href: R + 'price/freeze/index.html', name: 'Заморозка клубной карты', hint: 'пауза действия карты' }
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
    ['Расписание групповых', R + 'timetable/group/index.html', 'btn--ghost-light'],
    ['Цены и клубные карты', R + 'price/index.html', 'btn--primary']
  ]
}));

/* ============ 4. SPA-ЦЕНТР ============ */
write('spa_center/index.html', dirPage({
  rel: 'spa_center',
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
    { href: './massazhi-telo/index.html', name: 'Массажи тела', hint: 'классические и специальные', photo: S + 'upload/iblock/2b3/ejjsd6kcowpg11sqkqafb609hqr8fzl4.jpg', photoAlt: 'Массаж тела' },
    { href: './massazhi-litsa/index.html', name: 'Массажи лица', hint: 'уход и тонус', photo: S + 'upload/iblock/b01/o1rcjcywig14k2whoqpkvd5ql5e9m99b.jpg', photoAlt: 'Массаж лица' },
    { href: './spa-ritualy/index.html', name: 'SPA-ритуалы', hint: '«Очищение», «Возрождение» и другие', photo: S + 'upload/iblock/73c/73cbd0e5a7d3760325fa6c1c3b9f3679.jpg', photoAlt: 'SPA-ритуал' },
    { href: './spa-ritualy-dlya-dvoikh/index.html', name: 'SPA-ритуалы для двоих', hint: 'вдвоём приятнее', photo: S + 'upload/iblock/05b/jfa7oyxu95f7fy5q9xibdtjhaqter23q.jpg', photoAlt: 'SPA-ритуал для двоих' },
    { href: './spa-protsedury-face/index.html', name: 'SPA-процедуры для лица', hint: 'программы ухода', photo: S + 'upload/iblock/ce2/ce260038e341d8a654c72a0691140cdc.jpg', photoAlt: 'SPA-процедура для лица' },
    { href: './apparatnye-protsedury/index.html', name: 'Аппаратные процедуры', hint: 'медицинское оборудование', photo: S + 'upload/iblock/775/ot0hbee81gmt2p5wh227svsnbkd1y6uf.jpg', photoAlt: 'Аппаратные процедуры' },
    { href: './obertyvaniya/index.html', name: 'Обертывания', hint: 'детокс и тонус кожи', photo: S + 'upload/iblock/814/814a0ab959ab64dc86efca46b7621d0e.jpg', photoAlt: 'Обертывание' },
    { href: './barrel/index.html', name: 'Фитобочка', hint: 'кедровое прогревание' },
    { href: './solyariy/index.html', name: 'Солярий', hint: 'ровный тон кожи', photo: S + 'upload/iblock/422/422c3d74154be0a8233639686b2daee7.jpg', photoAlt: 'Солярий' }
  ],
  ctaTitle: 'Подарите себе восстановление',
  ctaSub: 'SPA-ритуалы и массажи после бассейна или тренировки. Действуют подарочные карты.',
  ctaActions: [
    ['Подарочная карта', R + 'price/index.html', 'btn--ghost-light'],
    ['Записаться', R + 'zapis_cdp/index.html', 'btn--primary']
  ]
}));

/* ============ 5. КИНЕЗИТЕРАПИЯ ============ */
write('center_kinesitherapy/index.html', dirPage({
  rel: 'center_kinesitherapy',
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
    { href: './pervichnyy-priyem/index.html', name: 'Первичный приём', hint: 'осмотр и план восстановления' },
    { href: './reabilitatsionnaya-programma/index.html', name: 'Реабилитационная программа', hint: 'курс занятий под контролем врача', photo: S + 'upload/iblock/32c/32c8f9fd1810f5b17473cc25870b7c78.jpg', photoAlt: 'Реабилитационная программа' },
    { href: './profilakticheskiy-kurs/index.html', name: 'Профилактический курс', hint: 'предупредить проще, чем лечить', photo: S + 'upload/iblock/52e/52e9c3d6c94fefc211f298457a512c7c.jpg', photoAlt: 'Профилактический курс' },
    { href: './kinezioteypirovanie/index.html', name: 'Кинезиотейпирование', hint: 'поддержка мышц и суставов' },
    { href: './plantoskop/index.html', name: 'Плантоскопия', hint: 'диагностика стопы', photo: S + 'upload/iblock/3bc/3bcc5982e2452cd1bc8d2720c20bf900.jpg', photoAlt: 'Плантоскопия' },
    { href: './perkussionnyy-massazh/index.html', name: 'Перкуссионный массаж', hint: 'восстановление мышц', photo: S + 'upload/iblock/d5e/qcahgjrwfdkxvig30342kg4x9v4a0o7k.jpg', photoAlt: 'Перкуссионный массаж' }
  ],
  ctaTitle: 'Вернитесь к движению без боли',
  ctaSub: 'Врачи-кинезитерапевты и инструкторы-методисты составят программу под вас.',
  ctaActions: [
    ['Команда центра', R + 'team/index.html', 'btn--ghost-light'],
    ['Записаться', R + 'zapis_cdp/index.html', 'btn--primary']
  ]
}));

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
        <div class="visit__actions">
          <a class="btn btn--primary" href="${R}zapis_cdp/index.html">Записаться</a>
          <a class="btn btn--ghost" href="${R}contacts/index.html">Схема проезда и все телефоны</a>
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

    <section class="section" aria-label="Полезные страницы">
      <div class="section-head reveal">
        <h2>Полезное перед визитом</h2>
      </div>
      ${rowList([
        { href: R + 'visitors/parking/index.html', name: 'Парковка', hint: 'как припарковаться у комплекса' },
        { href: R + 'visitors/rules/index.html', name: 'Правила посещения', hint: 'документы и регламенты' },
        { href: R + 'visitors/faq/index.html', name: 'Вопросы и ответы', hint: 'самое часто спрашиваемое' },
        { href: R + 'visitors/accessibility/index.html', name: 'Доступная среда', hint: 'для маломобильных посетителей' },
        { href: R + 'visitors/cafe/index.html', name: 'Кафе', hint: 'перекусить после тренировки' },
        { href: R + 'visitors/rental/index.html', name: 'Прокат', hint: 'инвентарь напрокат' }
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
    ${lib.breadcrumbs(1, lib.trailFromRel('price', 'Цены и карты'))}
    <div class="page-head">
      <h1>Билеты и абонементы</h1>
      <p class="page-head__lede">Разовые посещения, абонементы и клубные карты.
      Суммы зависят от времени и льгот — актуальный прайс в кассах
      и по телефону <a href="tel:+73422567892">+7&nbsp;(342)&nbsp;2-56789-2</a>.</p>
    </div>

    <section class="section" aria-label="Сравнение клубных карт">
      <div class="section-head reveal">
        <h2>Клубные карты</h2>
        <p class="section-head__aside">Сравните доступ, не три одинаковые карточки.
        Цену уточняйте в кассе — здесь только состав услуг.</p>
      </div>
      <div class="filter-pills" data-filter="benefit">
        <button type="button" data-benefit="all" class="is-active">Все</button>
        <button type="button" data-benefit="pensioner">Пенсионер</button>
        <button type="button" data-benefit="student">Студент</button>
        <button type="button" data-benefit="family">Многодетные</button>
        <button type="button" data-benefit="svo">СВО</button>
      </div>
      <div class="compare reveal">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Что входит</th>
              <th>Плавание</th>
              <th>Фитнес</th>
              <th>Фитнес+плавание</th>
            </tr>
          </thead>
          <tbody>
            <tr><th>Свободное плавание, 50&nbsp;м</th><td>да</td><td>—</td><td>да</td></tr>
            <tr><th>Тренажёрный зал и группы</th><td>—</td><td>да</td><td>да</td></tr>
            <tr><th>Комплекс саун</th><td>да</td><td>да</td><td>да</td></tr>
            <tr><th>Заморозка карты</th><td colspan="3"><a href="./freeze/index.html">условия на отдельной странице</a></td></tr>
            <tr class="compare-price"><th>Стоимость</th><td colspan="3">в кассе / по телефону, без сумм на сайте</td></tr>
          </tbody>
        </table>
        <p class="hero-note compare-note" data-benefit-note hidden></p>
      </div>
    </section>

    <section class="section" aria-label="Категории">
      <div class="section-head reveal">
        <h2>Что можно оформить</h2>
      </div>
      ${lib.cardList([
        { href: R + 'pools/index.html', name: 'Разовое посещение бассейна', hint: 'взрослые и дети, будни и выходные', photo: S + 'upload/iblock/7be/7beca203b451908c0d19327d856015d2.jpg', photoAlt: 'Большой бассейн' },
        { href: R + 'pools/adult_groups/index.html', name: 'Абонементы на плавание', hint: 'свободное плавание и группы', photo: S + 'upload/iblock/b2d/b2d270c05a5bca4c28ecf42edb7aa2b4.jpg', photoAlt: 'Занятия плаванием' },
        { href: R + 'swimming_center/index.html', name: 'Абонементы детского центра', hint: 'обучение плаванию по возрастам', photo: S + 'upload/iblock/c4a/h8jwo6hfvawyrlvfhkx2nop6c4m0fzu5.jpg', photoAlt: 'Центр детского плавания' },
        { href: R + 'fitness_center/index.html', name: 'Клубные карты фитнеса', hint: '«Фитнес» и «Фитнес+плавание»', photo: S + 'upload/iblock/039/039baaae5c9bae0291b76a8d9e498127.jpg', photoAlt: 'Тренажёрный зал' },
        { href: R + 'spa_center/index.html', name: 'SPA-процедуры', hint: 'по прайсу центра', photo: S + 'upload/iblock/73c/73cbd0e5a7d3760325fa6c1c3b9f3679.jpg', photoAlt: 'SPA-центр' },
        { href: R + 'center_kinesitherapy/index.html', name: 'Программы кинезитерапии', hint: 'приёмы и курсы', photo: S + 'upload/iblock/32c/32c8f9fd1810f5b17473cc25870b7c78.jpg', photoAlt: 'Кинезитерапия' },
        { href: R + 'actions/basseyn/podarochnaya-karta-ideya-dlya-podarka/index.html', name: 'Подарочная карта', hint: 'в кассе и онлайн', photo: S + 'upload/iblock/c20/c20c46fe34da4a7e0fd98a36e6f30be1.jpg', photoAlt: 'Подарочная карта' },
        { href: R + 'price/freeze/index.html', name: 'Заморозка карты', hint: 'пауза действия клубной карты' }
      ])}
    </section>

    <section class="section" aria-label="Льготы">
      <div class="section-head reveal">
        <h2>Льготы и выгода</h2>
      </div>
      ${rowList([
        { href: R + 'actions/index.html', name: 'Все акции и скидки', hint: 'пенсионерам, студентам, многодетным' },
        { href: R + 'visitors/tax-refund/index.html', name: 'Налоговый вычет', hint: 'верните 13% за занятия спортом' },
        { href: R + 'legal/dms/index.html', name: 'Услуги по полису ДМС', hint: 'SPA и кинезитерапия' },
        { href: R + 'legal/corporate/index.html', name: 'Корпоративным клиентам', hint: 'спорт для команд' }
      ])}
    </section>

    ${ctaBand('Приходите сегодня', 'Кассы работают до 21:15. Будни с 07:00, выходные с 08:00.', [
      ['Расписание', R + 'timetable/index.html', 'btn--ghost-light'],
      ['Купить онлайн', R + 'kupit-online/index.html', 'btn--primary']
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
    ${lib.breadcrumbs(2, lib.trailFromRel('visitors/faq', 'FAQ'))}
    <div class="page-head">
      <h1>Вопросы и ответы</h1>
      <p class="page-head__lede">Собрали то, о чём спрашивают чаще всего. Не нашли ответ?
      Позвоните на горячую линию <a href="tel:+73422567892">+7&nbsp;(342)&nbsp;2-56789-2</a>.</p>
    </div>
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
  const cats = [
    ['detskiy-tsentr-plavaniya', 'Центр детского плавания'],
    ['basseyn', 'Бассейн'],
    ['fitnes-tsentr', 'Фитнес-центр'],
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
    const cards = people.map(p => `      <a class="team-card" href="${R}team/${slug}/${p.href}">
        <figure><img src="${S}${p.img}" alt="${lib.esc(p.name)}" loading="lazy"></figure>
        <div class="team-card__name">${lib.esc(p.name)}</div>
        <div class="team-card__role">${lib.esc(p.post)}</div>
      </a>`).join('\n');
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
    'Выберите сетку. Ниже — пример на макете; актуальные слоты уточняйте по телефону.',
    [
      { href: './big-pool/index.html', name: 'Большой бассейн', hint: 'свободное плавание', cat: 'pool', photo: S + 'upload/iblock/7be/7beca203b451908c0d19327d856015d2.jpg', photoAlt: 'Большой бассейн' },
      { href: './group/index.html', name: 'Группы фитнеса', hint: 'залы и аква', cat: 'group', photo: S + 'upload/iblock/677/677034db6e113f1ceb3d75b6c33e647b.jpg', photoAlt: 'Тренажёрный зал' },
      { href: './group-cp/index.html', name: 'Дежурные группы ЦДП', hint: 'центр детского плавания', cat: 'cdp', photo: S + 'upload/iblock/c4a/h8jwo6hfvawyrlvfhkx2nop6c4m0fzu5.jpg', photoAlt: 'Центр детского плавания' },
      { href: './mama-i-malysh/index.html', name: 'Мама и малыш', hint: 'совместные занятия', cat: 'mnm', photo: S + 'upload/iblock/2ee/2eee13a394e71d02c6faad346b396045.jpg', photoAlt: 'Бассейн «Киты»' },
      { href: './ekg/index.html', name: 'Кабинет ЭКГ', hint: 'справки-допуски', cat: 'ekg', photo: S + 'upload/iblock/cdb/cdb13c0eb6e62f198a358d12daf88437.png', photoAlt: 'Кабинет ЭКГ' }
    ],
    `<div class="filter-pills" data-filter="timetable">
      <button type="button" data-cat="all" class="is-active">Все</button>
      <button type="button" data-cat="pool">Бассейн</button>
      <button type="button" data-cat="group">Группы</button>
      <button type="button" data-cat="cdp">ЦДП</button>
      <button type="button" data-cat="mnm">Мама и малыш</button>
      <button type="button" data-cat="ekg">ЭКГ</button>
    </div>
    <p class="hero-note">Фильтр отмечает карточки ниже. Полные сетки — внутри каждого раздела.</p>`);
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
