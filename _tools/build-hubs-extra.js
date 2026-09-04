'use strict';
// Расширенные хабы: fitness, spa, swimming_center, kinesi — табы, преимущества, ленты.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');
const typo = require('./typography');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');
const S = '../../site/';
const R = '../';

function write(rel, html) {
  const f = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html, 'utf8');
  console.log('  +', rel);
}

function specRows(pairs) {
  const rows = pairs.map(p => `        <div class="hours__row">
          <dt>${lib.esc(p[0])}</dt><dd>${lib.esc(p[1])}</dd>
        </div>`).join('\n');
  return `<dl class="hours spec-rows reveal">\n${rows}\n      </dl>`;
}

function rowList(items) {
  const li = items.map(it => `      <li>
        <a class="ticket-row" href="${it.href}">
          <span class="ticket-row__name">${lib.esc(it.name)}</span>
          <span class="ticket-row__hint">${lib.esc(it.hint || '')}</span>
        </a>
      </li>`).join('\n');
  return `<ul class="tickets-list reveal">\n${li}\n    </ul>`;
}

function fixSiteUrl(url, rel) {
  if (!url || /^(https?:|mailto:|tel:|#|data:)/i.test(url)) return url;
  try {
    return S + path.posix.normalize(path.posix.join('/', rel, url)).replace(/^\/+/, '');
  } catch (e) { return url; }
}

function cellText(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractCapabilitySlides(html, rel) {
  const out = [];
  const start = html.indexOf('our_capabilities_slider');
  if (start < 0) return out;
  const re = /<div class="slide"[^>]*>/gi;
  re.lastIndex = start;
  let m;
  while ((m = re.exec(html))) {
    const segStart = m.index;
    const segEnd = html.indexOf('</div>', segStart);
    const seg = html.slice(segStart, segEnd > 0 ? segEnd + 6 : segStart + 2000);
    const photo = (seg.match(/background-image:\s*url\('([^']+)'\)/) || [])[1];
    const title = (seg.match(/class="title">([^<]+)</) || [])[1];
    const desc = (seg.match(/class="desc">\s*([\s\S]*?)<\/div>/) || [])[1] || '';
    const href = (seg.match(/class="simple_red_btn"[^>]*href="([^"]+)"/) || [])[1];
    if (title) {
      out.push({
        title: title.trim(),
        photo: fixSiteUrl(photo, rel),
        desc: typo.polish(desc),
        href: href ? './' + href.replace(/^\.\//, '') : ''
      });
    }
  }
  return out;
}

function extractAdvantages(html, cls) {
  const out = [];
  const idx = html.indexOf(cls);
  if (idx < 0) return out;
  const chunk = html.slice(idx, idx + 12000);
  const re = /<div class="item"[^>]*>([\s\S]*?)<\/div>\s*(?:<\/div>\s*){0,2}(?:<\/div>|$)/gi;
  let m;
  const itemRe = /<div class="item"[\s\S]*?<\/div>\s*<\/div>/gi;
  let im;
  while ((im = itemRe.exec(chunk))) {
    const seg = im[0];
    const title = (seg.match(/class="title">([^<]+)</) || [])[1];
    const desc = (seg.match(/class="desc">\s*([\s\S]*?)<\/div>/) || [])[1];
    const pOnly = (seg.match(/<p>([\s\S]*?)<\/p>/) || [])[1];
    if (title) {
      out.push({ title: cellText(title), text: cellText(desc || pOnly || '') });
    } else if (pOnly) {
      out.push({ title: '', text: cellText(pOnly) });
    }
  }
  return out;
}

function extractPhotoGrid(html, rel) {
  const out = [];
  const idx = html.indexOf('programs_list') >= 0 ? html.indexOf('programs_list') : html.indexOf('our_programs');
  if (idx < 0) {
    const re = /<a class="item" href="([^"]+)"[\s\S]*?background-image:\s*url\('([^']+)'\)[\s\S]*?class="name">([^<]+)</gi;
    let m;
    while ((m = re.exec(html))) {
      out.push({
        href: './' + m[1].replace(/^\.\//, ''),
        photo: fixSiteUrl(m[2], rel),
        title: m[3].trim()
      });
    }
    return out;
  }
  const chunk = html.slice(idx, idx + 8000);
  const re = /<a class="item" href="([^"]+)"[\s\S]*?background-image:\s*url\('([^']+)'\)[\s\S]*?class="name">([^<]+)</gi;
  let m;
  while ((m = re.exec(chunk))) {
    out.push({
      href: './' + m[1].replace(/^\.\//, ''),
      photo: fixSiteUrl(m[2], rel),
      title: m[3].trim()
    });
  }
  return out;
}

function extractPromo(html, rel) {
  const m = html.match(/class="promotion_banner"[^>]*href="([^"]+)"[\s\S]*?<img src="([^"]+)"[^>]*alt="([^"]*)"/);
  if (!m) return null;
  let href = m[1];
  if (!/^https?:/.test(href)) href = R + path.posix.normalize(path.posix.join('/', rel, href)).replace(/^\/+/, '');
  return {
    href,
    photo: fixSiteUrl(m[2], rel),
    title: m[3].trim(),
    photoAlt: m[3].trim()
  };
}

function latestArticles(section, catSlug, limit) {
  const dir = path.join(OUT, section, catSlug);
  if (!fs.existsSync(dir)) return [];
  const items = [];
  for (const slug of fs.readdirSync(dir)) {
    const fp = path.join(dir, slug, 'index.html');
    if (!fs.existsSync(fp)) continue;
    const h = fs.readFileSync(fp, 'utf8');
    const title = (h.match(/<h1[^>]*class="post__title">([^<]+)/) || h.match(/<h1[^>]*>([^<]+)/) || [])[1];
    const date = (h.match(/datetime="([^"]+)"/) || [])[1];
    const img = ((h.match(/post__cover[^>]*>[\s\S]*?src="([^"]+)"/) || h.match(/<img[^>]+src="([^"]+)"/)) || [])[1];
    if (title) {
      items.push({
        href: R + section + '/' + catSlug + '/' + slug + '/index.html',
        title: title.trim(),
        meta: date ? new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
        photo: lib.rebasePhoto(img || '', 1) || (R + 'assets/lanes-overhead.jpg'),
        sort: date || ''
      });
    }
  }
  items.sort((a, b) => (b.sort || '').localeCompare(a.sort || ''));
  return items.slice(0, limit);
}

function factGrid(items, title) {
  if (!items.length) return '';
  return `
    <section class="section" aria-label="${lib.esc(title)}">
      <div class="section-head reveal">
        <h2>${lib.esc(title)}</h2>
      </div>
      <div class="fact-grid reveal">
        ${items.map(a => `<div class="fact-grid__item">
          ${a.title ? `<h3 class="fact-grid__title">${lib.esc(a.title)}</h3>` : ''}
          <p class="fact-grid__text">${lib.esc(a.text)}</p>
        </div>`).join('\n        ')}
      </div>
    </section>`;
}

function zoneTabs(slides, id, label) {
  if (!slides.length) return '';
  const items = slides.map(s => {
    const cta = s.href
      ? `<div class="hero-actions" style="margin-top:16px"><a class="btn btn--primary" href="${s.href}">Подробнее</a></div>`
      : '';
    return {
      title: s.title,
      html: `<div class="hub-panel__split">
        <figure class="hub-panel__media reveal-fill">
          <img src="${s.photo}" alt="${lib.esc(s.title)}" loading="lazy">
        </figure>
        <div>
          <h3 class="hub-panel__title">${lib.esc(s.title)}</h3>
          <div class="hub-panel__text">${s.desc}</div>
          ${cta}
        </div>
      </div>`
    };
  });
  return lib.hubTabs({ id, label, items });
}

function hubPage(opt) {
  const crumbs = lib.breadcrumbs(1, lib.trailFromRel(opt.rel, opt.h1));
  const extra = opt.extra || '';
  const scripts = opt.scripts || (opt.needsTabs ? ['js/hub-tabs.js'] : []);
  const content = `  <div class="container">
    ${crumbs}
    <div class="page-head">
      <h1>${lib.esc(opt.h1)}</h1>
      <p class="page-head__lede">${opt.lede}</p>
    </div>

    <div class="dirpage-hero">
      <figure class="dirpage-hero__media reveal-fill">
        <img src="${R}assets/${opt.photo}" alt="${lib.esc(opt.photoAlt)}"${opt.photoPos ? ` style="object-position:${opt.photoPos}"` : ''} loading="eager">
      </figure>
      <div class="reveal">
        ${opt.intro}
      </div>
    </div>

    ${extra}

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

    ${lib.ctaBand(opt.ctaTitle, opt.ctaSub, opt.ctaActions)}
  </div>`;

  return lib.shell(1, {
    title: opt.h1 + ' — «Олимпия» Пермь',
    description: opt.metaDesc,
    theme: opt.theme || '',
    content,
    scripts
  });
}

/* ============ FITNESS ============ */
{
  const rel = 'fitness_center';
  const html = fs.readFileSync(path.join(SITE, rel, 'index.html'), 'utf8');
  const zones = extractCapabilitySlides(html, rel);
  const advantages = extractAdvantages(html, 'our_advantages');
  const promo = extractPromo(html, rel);
  const news = latestArticles('news', 'fitnes-tsentr', 3);
  const actions = latestArticles('actions', 'fitnes-tsentr', 3);

  let extra = zoneTabs(zones, 'fitness-zones', 'Наши залы');
  if (promo) {
    extra += `\n    <section class="section container" aria-label="Акция">
      ${lib.promoCarousel([promo], { id: 'fitness-promo', label: 'Акция фитнес-центра' })}
    </section>`;
  }
  extra += factGrid(advantages, 'Преимущества фитнес-центра');
  if (actions.length) extra += lib.scrollStrip(actions, { label: 'Акции фитнес-центра', id: 'fitness-actions' });
  if (news.length) extra += lib.scrollStrip(news, { label: 'Новости фитнес-центра', id: 'fitness-news' });

  write('fitness_center/index.html', hubPage({
    rel,
    theme: 'fitness',
    h1: 'Фитнес-центр',
    lede: 'Самый большой фитнес-центр Пермского края: более 3500 м² под одной крышей с бассейнами.',
    metaDesc: 'Фитнес-центр «Олимпии» в Перми: тренажёрный зал 1600 м², Technogym и Matrix, групповые программы, аквааэробика.',
    photo: 'fitness-hall.jpg',
    photoAlt: 'Тренажёрный зал «Олимпии»',
    intro: `<p class="page-head__lede">Тренажёрный зал площадью 1600&nbsp;м² с потолками
        6&nbsp;метров и панорамным остеклением. Оборудование Technogym и Matrix,
        40 кардиотренажёров, зона функционального тренинга и зона единоборств.</p>
        <p class="page-head__lede" style="margin-top:14px">Клубные карты действуют
        и в большом спортивном бассейне.</p>`,
    services: [
      { href: './gym/index.html', name: 'Тренажёрный зал', hint: '1600 м², Technogym и Matrix', photo: S + 'upload/iblock/039/039baaae5c9bae0291b76a8d9e498127.jpg', photoAlt: 'Тренажёрный зал' },
      { href: './personalnye-trenirovki/index.html', name: 'Персональные тренировки', hint: 'индивидуальная программа' },
      { href: './group_programs/index.html', name: 'Групповые направления', hint: 'по расписанию', photo: S + 'upload/iblock/72d/j6mwdyta3xlp6si2r3a9qv6unrn04y8z.jpg', photoAlt: 'Групповые тренировки' },
      { href: R + 'pools/aqua/index.html', name: 'Аквааэробика', hint: 'в разделе бассейнов', photo: S + 'upload/iblock/dc6/dc66dbc89ecaa75e6027a26583af448e.jpg', photoAlt: 'Аквапрограммы' },
      { href: './meditsinskoe_testirovanie/index.html', name: 'Медицинское тестирование', hint: 'MS FIT', photo: S + 'upload/iblock/071/071b94b96eabeeb8e0ad3e09f4a0a1c4.jpg', photoAlt: 'MS FIT' },
      { href: './tehnika-bezopasnosti/index.html', name: 'Техника безопасности', hint: 'правила зала' },
      { href: R + 'price/freeze/index.html', name: 'Заморозка клубной карты', hint: 'пауза карты' }
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
    ],
    extra,
    needsTabs: zones.length > 0,
    scripts: zones.length ? ['js/hub-tabs.js', 'js/carousel.js'] : ['js/carousel.js']
  }));
}

/* ============ SPA ============ */
{
  const rel = 'spa_center';
  const html = fs.readFileSync(path.join(SITE, rel, 'index.html'), 'utf8');
  const advantages = extractAdvantages(html, 'our_advantages2');
  const promo = extractPromo(html, rel);
  const news = latestArticles('news', 'spa-tsentr', 3);
  const actions = latestArticles('actions', 'spa-tsentr', 3);

  let extra = '';
  if (promo) {
    extra += `\n    <section class="section" aria-label="Акция SPA">
      ${lib.promoCarousel([promo, ...actions.slice(0, 4)], { id: 'spa-promo', label: 'Акции SPA-центра' })}
    </section>`;
  } else if (actions.length) {
    extra += `\n    <section class="section" aria-label="Акции SPA">
      ${lib.promoCarousel(actions.slice(0, 5), { id: 'spa-promo', label: 'Акции SPA-центра' })}
    </section>`;
  }
  extra += factGrid(advantages, 'Наши преимущества');
  if (news.length) extra += lib.scrollStrip(news, { label: 'Новости SPA-центра', id: 'spa-news' });

  write('spa_center/index.html', hubPage({
    rel,
    h1: 'SPA-центр',
    lede: 'Центр красоты и восстановления с медицинской лицензией.',
    metaDesc: 'SPA-центр «Олимпии»: массажи, SPA-ритуалы, обертывания, солярий. Медицинская лицензия, налоговый вычет, ДМС.',
    photo: 'spa-massage.jpg',
    photoAlt: 'Сеанс массажа в SPA-центре',
    intro: `<p class="page-head__lede">SPA-центр «Олимпии» — широкий спектр процедур
        для кожи и всего организма, специалисты с медицинским образованием,
        сертифицированная косметика с натуральными компонентами.</p>
        <p class="page-head__lede" style="margin-top:14px">На ряд процедур можно получить
        налоговый вычет или пройти их по полису ДМС.</p>`,
    servicesTitle: 'Процедуры',
    services: [
      { href: './massazhi-telo/index.html', name: 'Массажи тела', hint: 'классические и специальные', photo: S + 'upload/iblock/2b3/ejjsd6kcowpg11sqkqafb609hqr8fzl4.jpg', photoAlt: 'Массаж тела' },
      { href: './massazhi-litsa/index.html', name: 'Массажи лица', hint: 'уход и тонус', photo: S + 'upload/iblock/b01/o1rcjcywig14k2whoqpkvd5ql5e9m99b.jpg', photoAlt: 'Массаж лица' },
      { href: './spa-ritualy/index.html', name: 'SPA-ритуалы', hint: '«Очищение», «Возрождение»', photo: S + 'upload/iblock/73c/73cbd0e5a7d3760325fa6c1c3b9f3679.jpg', photoAlt: 'SPA-ритуал' },
      { href: './spa-ritualy-dlya-dvoikh/index.html', name: 'SPA-ритуалы для двоих', hint: 'вдвоём', photo: S + 'upload/iblock/05b/jfa7oyxu95f7fy5q9xibdtjhaqter23q.jpg', photoAlt: 'SPA для двоих' },
      { href: './spa-protsedury-face/index.html', name: 'SPA-процедуры для лица', hint: 'программы ухода', photo: S + 'upload/iblock/ce2/ce260038e341d8a654c72a0691140cdc.jpg', photoAlt: 'SPA для лица' },
      { href: './apparatnye-protsedury/index.html', name: 'Аппаратные процедуры', hint: 'медоборудование', photo: S + 'upload/iblock/775/ot0hbee81gmt2p5wh227svsnbkd1y6uf.jpg', photoAlt: 'Аппаратные процедуры' },
      { href: './obertyvaniya/index.html', name: 'Обертывания', hint: 'детокс и тонус', photo: S + 'upload/iblock/814/814a0ab959ab64dc86efca46b7621d0e.jpg', photoAlt: 'Обертывание' },
      { href: './barrel/index.html', name: 'Фитобочка', hint: 'кедровое прогревание' },
      { href: './solyariy/index.html', name: 'Солярий', hint: 'ровный тон кожи', photo: S + 'upload/iblock/422/422c3d74154be0a8233639686b2daee7.jpg', photoAlt: 'Солярий' }
    ],
    ctaTitle: 'Подарите себе восстановление',
    ctaSub: 'SPA-ритуалы и массажи после бассейна или тренировки. Действуют подарочные карты.',
    ctaActions: [
      ['Подарочная карта', R + 'price/index.html', 'btn--ghost-light'],
      ['Записаться в SPA', 'https://dikidi.net/870188', 'btn--primary']
    ],
    extra,
    scripts: ['js/carousel.js']
  }));
}

/* ============ SWIMMING CENTER ============ */
{
  const rel = 'swimming_center';
  const html = fs.readFileSync(path.join(SITE, rel, 'index.html'), 'utf8');
  const programs = extractPhotoGrid(html, rel);
  const promo = extractPromo(html, rel);
  const news = latestArticles('news', 'detskiy-tsentr-plavaniya6604', 3);
  if (!news.length) latestArticles('news', 'detskiy-tsentr-plavaniya', 3).forEach(n => news.push(n));

  const tabItems = programs.slice(0, 8).map(p => ({
    title: p.title.length > 28 ? p.title.slice(0, 26) + '…' : p.title,
    html: `<div class="hub-panel__split">
        <figure class="hub-panel__media reveal-fill">
          <img src="${p.photo}" alt="${lib.esc(p.title)}" loading="lazy">
        </figure>
        <div>
          <h3 class="hub-panel__title">${lib.esc(p.title)}</h3>
          <div class="hero-actions" style="margin-top:16px">
            <a class="btn btn--primary" href="${p.href}">Подробнее о программе</a>
            <a class="btn btn--ghost" href="${R}zapis_cdp/index.html">Записаться</a>
          </div>
        </div>
      </div>`
  }));

  let extra = tabItems.length ? lib.hubTabs({ id: 'cdp-programs', label: 'Программы центра', items: tabItems }) : '';
  if (promo) {
    extra += `\n    <section class="section" aria-label="Акция ЦДП">
      ${lib.promoCarousel([promo], { id: 'cdp-promo', label: 'Акции центра' })}
    </section>`;
  }
  if (news.length) extra += lib.scrollStrip(news, { label: 'Новости центра плавания', id: 'cdp-news' });

  write('swimming_center/index.html', hubPage({
    rel,
    h1: 'Центр детского плавания',
    lede: 'Более двух с половиной тысяч ребят учатся плавать и делают первые шаги к будущим победам.',
    metaDesc: 'Центр детского плавания «Олимпии»: обучение с раннего возраста, «Мама и малыш», спортивное плавание.',
    photo: 'kids-training.jpg',
    photoAlt: 'Мальчик в очках плывёт с доской',
    intro: `<p class="page-head__lede">Плавание — жизненно необходимый навык и наименее
        травматичный вид спорта. Регулярные занятия улучшают кровообращение,
        развивают дыхание, исправляют осанку и укрепляют иммунитет.</p>
        <div class="hero-actions" style="margin-top:26px">
          <a class="btn btn--primary" href="${R}zapis_cdp/index.html">Записаться</a>
          <a class="btn btn--ghost" href="${R}timetable/mama-i-malysh/index.html">Расписание</a>
        </div>`,
    servicesTitle: 'Программы центра',
    services: [
      { href: './forkids/index.html', name: 'Обучение плаванию', hint: 'с раннего возраста', photo: S + 'upload/iblock/98b/98b4e272a77295f2bde9ca7b294d2ba0.jpg', photoAlt: 'Обучение' },
      { href: './mnm/index.html', name: 'Мама и малыш', hint: 'первые занятия вместе', photo: S + 'upload/iblock/c4a/h8jwo6hfvawyrlvfhkx2nop6c4m0fzu5.jpg', photoAlt: 'Мама и малыш' },
      { href: './profilaktika-ploskostopiya-i-skolioza/index.html', name: 'Профилактика плоскостопия и сколиоза', hint: 'оздоровление', photo: S + 'upload/iblock/b55/o738a88mfqwkpdxmecee8lt6is2hos7a.jpg', photoAlt: 'Оздоровление' },
      { href: './training/index.html', name: 'Программа «Класс»', hint: 'школы и сады', photo: S + 'upload/iblock/0de/0de4aea8d956eb7b4937ea79906978dc.jpg', photoAlt: 'Класс' },
      { href: './sport/index.html', name: 'Спортивное плавание', hint: 'большой спорт', photo: S + 'upload/iblock/9f2/9f24b7edc6ebf0a240c528485364555a.jpg', photoAlt: 'Спорт' },
      { href: './waterpolo/index.html', name: 'Водное поло', hint: 'командная игра', photo: S + 'upload/iblock/4a8/4a8386016212e00e0bf77143020e7ba6.jpg', photoAlt: 'Водное поло' },
      { href: './flipper/index.html', name: 'Плавание в ластах', hint: 'скорость', photo: S + 'upload/iblock/633/6339ea818fade84c1e78de3c31642068.jpg', photoAlt: 'Ласты' },
      { href: './pamyatka-dlya-roditeley/index.html', name: 'Памятка для родителей', hint: 'что взять' },
      { href: './pravila-bezopasnogo-povedeniya-na-vode/index.html', name: 'Правила безопасности на воде', hint: 'обязательно' }
    ],
    ctaTitle: 'Научите ребёнка плавать',
    ctaSub: 'Отдельный детский бассейн, тренеры-профессионалы и группы по возрастам.',
    ctaActions: [
      ['Записаться', R + 'zapis_cdp/index.html', 'btn--primary'],
      ['Команда центра', R + 'team/detskiy-tsentr-plavaniya/index.html', 'btn--ghost-light']
    ],
    extra,
    needsTabs: tabItems.length > 0,
    scripts: tabItems.length ? ['js/hub-tabs.js', 'js/carousel.js'] : ['js/carousel.js']
  }));
}

/* ============ KINESI ============ */
{
  const rel = 'center_kinesitherapy';
  const html = fs.readFileSync(path.join(SITE, rel, 'index.html'), 'utf8');
  const banners = [];
  const bannerRe = /<div class="info_banner">([\s\S]*?)<\/div>\s*<\/div>/gi;
  let bm;
  while ((bm = bannerRe.exec(html))) {
    const seg = bm[1];
    const title = (seg.match(/class="title">\s*<a[^>]*>([^<]+)/) || seg.match(/class="title">([^<]+)/) || [])[1];
    const text = (seg.match(/<p>\s*([\s\S]*?)<\/p>/) || [])[1];
    if (title || text) banners.push({ title: cellText(title || ''), text: cellText(text || '') });
  }
  const news = latestArticles('news', 'kineziterapiya', 3);
  const actions = latestArticles('actions', 'kineziterapiya', 3);

  let extra = factGrid(banners.length ? banners : [
    { title: 'Клиническая база ПГМУ', text: 'Кафедра медицинской реабилитации и спортивной медицины.' },
    { title: 'Полный комплекс', text: 'Зал кинезитерапии, бассейн, массаж, кинезиотейпирование, физиопроцедуры.' }
  ], 'О центре');
  if (actions.length) {
    extra += `\n    <section class="section" aria-label="Акции кинезитерапии">
      ${lib.promoCarousel(actions.slice(0, 4), { id: 'kinesi-promo', label: 'Акции центра' })}
    </section>`;
  }
  if (news.length) extra += lib.scrollStrip(news, { label: 'Новости кинезитерапии', id: 'kinesi-news' });

  write('center_kinesitherapy/index.html', hubPage({
    rel,
    theme: 'fitness',
    h1: 'Центр кинезитерапии',
    lede: 'Движение — естественное лекарственное средство.',
    metaDesc: 'Центр кинезитерапии «Олимпии»: реабилитация ОДА, ЛФК, кинезиотейпирование, плантоскопия.',
    photo: 'kinesi-gym.jpg',
    photoAlt: 'Занятие в зале кинезитерапии',
    intro: `<p class="page-head__lede">Единственный центр в Перми с полным комплексом услуг
        по восстановлению опорно-двигательного аппарата: зал кинезитерапии,
        плавание, медицинский массаж, кинезиотейпирование и физиопроцедуры.</p>
        <p class="page-head__lede" style="margin-top:14px">Клиническая база кафедры медицинской
        реабилитации ПГМУ им.&nbsp;академика Е.&nbsp;А.&nbsp;Вагнера.</p>`,
    services: [
      { href: './pervichnyy-priyem/index.html', name: 'Первичный приём', hint: 'осмотр и план' },
      { href: './reabilitatsionnaya-programma/index.html', name: 'Реабилитационная программа', hint: 'курс под контролем врача', photo: S + 'upload/iblock/32c/32c8f9fd1810f5b17473cc25870b7c78.jpg', photoAlt: 'Реабилитация' },
      { href: './profilakticheskiy-kurs/index.html', name: 'Профилактический курс', hint: 'предупреждение', photo: S + 'upload/iblock/52e/52e9c3d6c94fefc211f298457a512c7c.jpg', photoAlt: 'Профилактика' },
      { href: './kinezioteypirovanie/index.html', name: 'Кинезиотейпирование', hint: 'поддержка мышц' },
      { href: './plantoskop/index.html', name: 'Плантоскопия', hint: 'диагностика стопы', photo: S + 'upload/iblock/3bc/3bcc5982e2452cd1bc8d2720c20bf900.jpg', photoAlt: 'Плантоскопия' },
      { href: './perkussionnyy-massazh/index.html', name: 'Перкуссионный массаж', hint: 'восстановление', photo: S + 'upload/iblock/d5e/qcahgjrwfdkxvig30342kg4x9v4a0o7k.jpg', photoAlt: 'Массаж' }
    ],
    ctaTitle: 'Вернитесь к движению без боли',
    ctaSub: 'Врачи-кинезитерапевты составят программу под вас.',
    ctaActions: [
      ['Команда центра', R + 'team/kineziterapiya/index.html', 'btn--ghost-light'],
      ['Записаться', R + 'zapis_cdp/index.html', 'btn--primary']
    ],
    extra,
    scripts: ['js/carousel.js']
  }));
}

console.log('Готово: 4 расширенных хаба');
