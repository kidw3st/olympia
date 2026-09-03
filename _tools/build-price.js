'use strict';
// Сборка страницы цен: семантические секции из Google Sheets.
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const lib = require('./redesign-lib');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'redesign');
const CACHE = path.join(ROOT, '_tools', '_price_cache');
const S = '../../site/';
const R = '../';

const CATALOG = [
  { id: 'promo', name: 'Акции!', sheet: '1500295223' },
  {
    id: 'swim', name: 'Плавание',
    children: [
      { id: 'swim-adult', name: 'Взрослые', sheet: '1678324727' },
      { id: 'swim-benefit', name: 'Льготные', sheet: '1919315479' },
      { id: 'swim-kids', name: 'Дети', sheet: '815139424' },
      { id: 'swim-family', name: 'Семейные', sheet: '1066001526' }
    ]
  },
  { id: 'massage', name: 'Массажи', sheet: '50710768' },
  { id: 'cdp', name: 'Центр детского плавания', sheet: '753265863' },
  { id: 'fitness', name: 'Фитнес-центр', sheet: '1860193762' },
  { id: 'kinesi', name: 'Кинезитерапия', sheet: '332525492' },
  {
    id: 'spa', name: 'SPA-центр',
    children: [
      { id: 'spa-proc', name: 'SPA-процедуры', sheet: '1794431095' },
      { id: 'spa-massage', name: 'Массажи', sheet: '1678201634' },
      { id: 'spa-phyto', name: 'Фитобочка', sheet: '518453295' },
      { id: 'spa-ritual', name: 'Ритуалы и обёртывания', sheet: '1340214286' },
      { id: 'spa-micro', name: 'Микротоковая терапия', sheet: '258157624' },
      { id: 'spa-solarium', name: 'Солярий', sheet: '1499825196' },
      { id: 'spa-derm', name: 'Дермотония', sheet: '1266375143' },
      { id: 'spa-cosmo', name: 'Косметика', sheet: '1617754553' },
      { id: 'spa-press', name: 'Прессотерапия', sheet: '1091244057' }
    ]
  },
  { id: 'aqua', name: 'Аквааэробика', sheet: '1924776612' },
  { id: 'mama', name: 'Мама и малыш', sheet: '23474055' },
  { id: 'class', name: 'Программа «Класс»', sheet: '1060611774' },
  { id: 'aquamama', name: 'Аква-мама', sheet: '2066794552' },
  { id: 'ekg', name: 'ЭКГ', sheet: '105500510' },
  { id: 'parking', name: 'Парковка', sheet: '1003024939' },
  { id: 'rental', name: 'Прокат', sheet: '444892132' },
  { id: 'other', name: 'Прочее', sheet: '73113501' }
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'OlympiaRedesign/1.0' }, timeout: 30000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchUrl(res.headers.location).then(resolve, reject);
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout ' + url)); });
  });
}

async function loadSheet(id) {
  fs.mkdirSync(CACHE, { recursive: true });
  const cacheFile = path.join(CACHE, id + '.html');
  const localAlt = path.join(ROOT, '_tools', '_price_' + id + '.html');
  if (fs.existsSync(cacheFile) && fs.statSync(cacheFile).size > 1000) {
    return fs.readFileSync(cacheFile, 'utf8');
  }
  if (fs.existsSync(localAlt) && fs.statSync(localAlt).size > 1000) {
    fs.copyFileSync(localAlt, cacheFile);
    return fs.readFileSync(cacheFile, 'utf8');
  }
  const url = 'https://olympia.olympiaperm.ru/price_olympia/page/' + id + '.html';
  const html = await fetchUrl(url);
  fs.writeFileSync(cacheFile, html, 'utf8');
  return html;
}

function cellText(html) {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function cellLinks(html) {
  const links = [];
  const re = /<a[^>]+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    links.push({ href: m[1], text: cellText(m[2]) });
  }
  return links;
}

function extractTables(sheetHtml) {
  const out = [];
  const re = /<table[^>]*class="[^"]*waffle[^"]*"[^>]*>([\s\S]*?)<\/table>/gi;
  let m;
  while ((m = re.exec(sheetHtml))) {
    const rows = [];
    const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let tr;
    while ((tr = trRe.exec(m[1]))) {
      const cells = [];
      const tdRe = /<t[dh][^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/t[dh]>|<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
      let td;
      while ((td = tdRe.exec(tr[1]))) {
        const cls = td[1] || '';
        const inner = td[2] != null ? td[2] : td[3];
        cells.push({
          text: cellText(inner),
          html: inner,
          cls,
          links: cellLinks(inner)
        });
      }
      if (cells.some((c) => c.text)) rows.push(cells);
    }
    if (rows.length >= 2) out.push(rows);
  }
  return out;
}

function isEmpty(s) {
  const t = String(s || '').trim();
  return !t || t === '—' || t === '-';
}

function isMoney(s) {
  const t = String(s).replace(/\u00a0/g, ' ').trim();
  if (!/^\d[\d\s]*([.,]\d{1,2})?$/.test(t)) return false;
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!Number.isFinite(n) || n < 100) return false;
  if (n <= 366 && !/\s/.test(t.replace(/\u00a0/g, ''))) return false;
  return true;
}

function formatMoney(s) {
  const n = Number(String(s).replace(/\s|\u00a0/g, '').replace(',', '.'));
  if (!Number.isFinite(n)) return lib.esc(s);
  return new Intl.NumberFormat('ru-RU').format(Math.round(n)) + '&nbsp;₽';
}

function fmtCell(s) {
  if (isEmpty(s)) return '—';
  if (isMoney(s)) return formatMoney(s);
  if (/^бесплатно$/i.test(s)) return 'бесплатно';
  return lib.esc(s);
}

function cleanRows(rows) {
  if (!rows.length) return rows;
  const col0 = rows.map((r) => (r[0] && r[0].text || '').replace(/\s/g, ''));
  const allInt = col0.every((c) => /^\d{1,4}$/.test(c));
  let start = 0;
  if (allInt) {
    const nums = col0.map(Number);
    let sequential = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] + 1) sequential++;
    }
    if (sequential >= Math.max(3, rows.length * 0.5)) start = 1;
  }
  let data = rows.map((r) => r.slice(start));
  while (data[0] && data[0].length > 2) {
    const empty = data.filter((r) => isEmpty(r[0] && r[0].text)).length;
    if (empty >= data.length * 0.7) data = data.map((r) => r.slice(1));
    else break;
  }
  return data.filter((r) => r.some((c) => c && !isEmpty(c.text)));
}

function rowTexts(row) {
  return row.map((c) => c.text);
}

function isSectionTitle(text) {
  if (!text || text.length < 4) return false;
  if (/^(АБОНЕМЕНТ|КЛУБН|РАССРО|РАЗОВ|ВЗРОСЛ|ЛЬГОТ|ДЕТСК|СЕМЕЙ|МАССАЖ|СПА-|ПРОГРАМ|ПАРКОВ|ПРОКАТ|ТАРИФ|СТОИМОСТ|НАИМЕНОВ)/i.test(text)) return true;
  const letters = text.replace(/[^A-Za-zА-Яа-яЁё]/g, '');
  if (letters.length >= 8 && text === text.toUpperCase() && /[А-Я]/.test(text)) return true;
  return false;
}

function isNoteRow(row) {
  const joined = rowTexts(row).join(' ');
  if (/подробн(ые|ая)\s+услов/i.test(joined)) return true;
  if (joined.length > 180 && !hasMoney(row)) return true;
  return false;
}

function hasMoney(row) {
  return row.some((c) => isMoney(c.text));
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-zа-я0-9]+/gi, '-').replace(/^-|-$/g, '').slice(0, 40) || 'section';
}

function extractNoteBody(row) {
  const joined = rowTexts(row).join(' ').trim();
  const m = joined.match(/подробн(ые|ая)\s+условия\s*(.*)/i);
  return (m ? m[2] : joined).trim();
}

function renderNote(row) {
  const body = lib.esc(extractNoteBody(row));
  if (!body) return '';
  return `<details class="price-note reveal">
        <summary>Подробные условия</summary>
        <div class="price-note__body">${body}</div>
      </details>`;
}

function renderPromoBlock(lines) {
  if (!lines.length) return '';
  const title = lines[0].title || lines[0].name || 'Акция';
  const prices = [];
  let sub = '';
  let ctaHref = '';
  let ctaLabel = '';
  for (const ln of lines) {
    if (ln.type === 'price') prices.push(ln);
    else if (ln.type === 'text' && ln.text) sub += (sub ? ' ' : '') + ln.text;
    else if (ln.type === 'cta') { ctaHref = ln.href; ctaLabel = ln.label; }
  }
  return lib.pricePromo({
    title,
    sub: sub.slice(0, 280),
    prices: prices.map((p) => ({ label: p.label, value: p.value })),
    ctaHref,
    ctaLabel
  });
}

function parseTableToSections(rows) {
  rows = cleanRows(rows);
  const sections = [];
  let current = { title: 'Прайс', id: 'price-main', blocks: [] };
  let matrixBuffer = [];
  let promoBuffer = [];
  let simpleBuffer = [];

  function flushSimple() {
    if (!simpleBuffer.length) return;
    current.blocks.push({ type: 'rows', items: simpleBuffer.slice() });
    simpleBuffer = [];
  }

  function flushMatrix() {
    if (matrixBuffer.length < 2) {
      matrixBuffer.forEach((r) => {
        const texts = rowTexts(r).filter((t) => !isEmpty(t));
        if (texts.length >= 2 && hasMoney(r)) {
          simpleBuffer.push({ name: texts[0], price: fmtCell(texts[texts.length - 1]) });
        }
      });
    } else {
      current.blocks.push({ type: 'matrix', rows: matrixBuffer.slice() });
    }
    matrixBuffer = [];
  }

  function flushPromo() {
    if (promoBuffer.length) {
      current.blocks.push({ type: 'promo', lines: promoBuffer.slice() });
      promoBuffer = [];
    }
  }

  function flushAll() {
    flushSimple();
    flushMatrix();
    flushPromo();
  }

  function newSection(title) {
    flushAll();
    sections.push(current);
    current = { title, id: slugify(title), blocks: [] };
  }

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const texts = rowTexts(row).filter((t) => !isEmpty(t));
    if (!texts.length) continue;

    if (isNoteRow(row)) {
      flushSimple();
      flushMatrix();
      current.blocks.push({ type: 'note', row });
      continue;
    }

    const first = texts[0];
    const moneyCount = row.filter((c) => isMoney(c.text)).length;

    if (isSectionTitle(first) && !hasMoney(row)) {
      newSection(first);
      continue;
    }

    if (/^условия акции/i.test(first)) {
      promoBuffer.push({ type: 'text', text: first });
      continue;
    }

    const links = row.flatMap((c) => c.links || []);
    const buyLink = links.find((l) => /купить|запис/i.test(l.text));
    if (buyLink) {
      promoBuffer.push({ type: 'cta', href: buyLink.href, label: buyLink.text });
      continue;
    }

    if (moneyCount >= 2 && texts.length >= 2 && texts[0].toLowerCase().includes('наименование')) {
      flushSimple();
      flushPromo();
      matrixBuffer = [row];
      continue;
    }

    if (matrixBuffer.length) {
      if (hasMoney(row) || texts.length >= 3) {
        matrixBuffer.push(row);
        continue;
      }
      flushMatrix();
    }

    if (moneyCount >= 1 && texts.length <= 4) {
      const name = texts.find((t) => !isMoney(t) && !/^(купить|запис)/i.test(t)) || texts[0];
      const priceCell = row.find((c) => isMoney(c.text));
      const price = priceCell ? fmtCell(priceCell.text) : '';
      if (/акци|сезон|карт/i.test(name) && moneyCount >= 1) {
        flushSimple();
        promoBuffer.push({ type: 'title', title: name });
        texts.filter((t) => t !== name).forEach((t) => {
          if (isMoney(t)) promoBuffer.push({ type: 'price', label: 'Стоимость', value: formatMoney(t) });
          else if (!isEmpty(t)) promoBuffer.push({ type: 'price', label: t, value: fmtCell(row.find((c) => c.text === t) && row[rowTexts(row).indexOf(t)] ? row[rowTexts(row).indexOf(t)].text : '') });
        });
        row.forEach((c) => {
          if (isMoney(c.text)) {
            const idx = row.indexOf(c);
            const label = idx > 0 ? rowTexts(row)[idx - 1] : 'Стоимость';
            if (label && !isMoney(label)) promoBuffer.push({ type: 'price', label, value: formatMoney(c.text) });
          }
        });
        continue;
      }
      if (name && price) {
        flushPromo();
        simpleBuffer.push({ name, price });
        continue;
      }
    }

    if (/^(ЗОЛОТАЯ|КАРТА НА СЕЗОН|ДЕНЬ ОТКРЫТЫХ|СКИДКА|МАМА И МАЛЫШ)/i.test(first)) {
      flushSimple();
      flushMatrix();
      promoBuffer.push({ type: 'title', title: first });
      texts.slice(1).forEach((t) => promoBuffer.push({ type: 'text', text: t }));
      row.forEach((c, idx) => {
        if (isMoney(c.text)) {
          const label = idx > 0 ? rowTexts(row)[idx - 1] : 'Цена';
          promoBuffer.push({ type: 'price', label: label || 'Цена', value: formatMoney(c.text) });
        }
      });
      continue;
    }

    if (hasMoney(row)) {
      flushPromo();
      matrixBuffer.push(row);
      continue;
    }

    if (texts.length === 1 && texts[0].length > 20) {
      promoBuffer.push({ type: 'text', text: texts[0] });
    }
  }

  flushAll();
  if (current.blocks.length) sections.push(current);

  if (sections.length === 1 && sections[0].title === 'Прайс') {
    sections[0].title = 'Услуги и тарифы';
    sections[0].id = 'services';
  }
  return sections.filter((s) => s.blocks.length);
}

function renderMatrix(rows) {
  rows = rows.map((r) => rowTexts(r).filter((t) => !isEmpty(t)));
  if (!rows.length) return '';
  const max = Math.max(...rows.map((r) => r.length));
  const head = rows[0];
  const body = rows.slice(1);
  const thead = head.length >= 2
    ? `<thead><tr>${head.map((h) => `<th>${lib.esc(h)}</th>`).join('')}</tr></thead>`
    : '';
  const tbody = body.map((r) => {
    const cells = [];
    for (let i = 0; i < max; i++) {
      const raw = r[i] || '';
      const tag = i === 0 ? 'th' : 'td';
      cells.push(`<${tag}>${raw ? fmtCell(raw) : '—'}</${tag}>`);
    }
    return '<tr>' + cells.join('') + '</tr>';
  }).join('\n');
  return `<div class="price-matrix-wrap reveal"><table class="price-matrix">${thead}<tbody>${tbody}</tbody></table></div>`;
}

function sectionsToHtml(sections) {
  if (!sections.length) return '<p class="hero-note">Таблица временно недоступна.</p>';

  const nav = sections.length > 1
    ? `<nav class="price-nav reveal" aria-label="Разделы прайса">${sections.map((s) =>
      `<a href="#${s.id}">${lib.esc(s.title)}</a>`).join('')}</nav>`
    : '';

  const body = sections.map((sec) => {
    const parts = sec.blocks.map((b) => {
      if (b.type === 'note') return renderNote(b.row);
      if (b.type === 'rows') return lib.priceRows(b.items);
      if (b.type === 'matrix') return renderMatrix(b.rows);
      if (b.type === 'promo') return renderPromoBlock(b.lines);
      return '';
    }).join('\n');
    return `<section class="price-section reveal" id="${sec.id}">
        <div class="price-section__head"><h3>${lib.esc(sec.title)}</h3></div>
        ${parts}
      </section>`;
  }).join('\n');

  return nav + body;
}

function rowsToHtml(allRows) {
  const merged = [];
  for (const table of allRows) merged.push(...table);
  return sectionsToHtml(parseTableToSections(merged));
}

function flattenCatalog() {
  const panels = [];
  for (const cat of CATALOG) {
    if (cat.children) {
      for (const ch of cat.children) {
        panels.push({ ...ch, parent: cat.id, parentName: cat.name });
      }
    } else {
      panels.push({ ...cat, parent: cat.id, parentName: cat.name });
    }
  }
  return panels;
}

async function build() {
  const panels = flattenCatalog();
  const rendered = [];
  for (const p of panels) {
    process.stdout.write('  sheet ' + p.name + '… ');
    try {
      const html = await loadSheet(p.sheet);
      const tables = extractTables(html);
      const tablesHtml = tables.length ? rowsToHtml(tables) :
        '<p class="hero-note">Таблица временно недоступна. Откройте полный прайс на живом сайте.</p>';
      const src = 'https://olympia.olympiaperm.ru/price_olympia/page/' + p.sheet + '.html';
      rendered.push({ ...p, html: tablesHtml, source: src, tableCount: tables.length });
      console.log(tables.length + ' табл.');
    } catch (e) {
      console.log('ошибка: ' + e.message);
      rendered.push({
        ...p,
        html: '<p class="hero-note">Не удалось загрузить прайс. <a href="https://olympiaperm.ru/price/" rel="noopener">Открыть на olympiaperm.ru</a></p>',
        source: 'https://olympiaperm.ru/price/',
        tableCount: 0
      });
    }
  }

  const catPills = CATALOG.map((c, i) =>
    `<button type="button" data-price-cat="${c.id}"${i === 1 ? ' class="is-active"' : ''}>${lib.esc(c.name)}</button>`
  ).join('\n      ');

  const subBars = CATALOG.filter((c) => c.children).map((c) => {
    const kids = c.children.map((ch, i) =>
      `<button type="button" data-price-sub="${ch.id}"${i === 0 ? ' class="is-active"' : ''}>${lib.esc(ch.name)}</button>`
    ).join('\n        ');
    return `<div class="filter-pills price-sub" data-price-parent="${c.id}"${c.id === 'swim' ? '' : ' hidden'}>\n        ${kids}\n      </div>`;
  }).join('\n      ');

  const panelHtml = rendered.map((p) => {
    const active = p.id === 'swim-adult';
    return `<section class="price-panel${active ? ' is-active' : ''}" data-price-panel="${p.id}" data-price-parent="${p.parent}"${active ? '' : ' hidden'}>
      <div class="price-panel__head reveal">
        <div>
          <p class="price-panel__eyebrow">${lib.esc(p.parentName)}${p.parentName !== p.name ? ' · ' + lib.esc(p.name) : ''}</p>
          <h2>${lib.esc(p.name)}</h2>
          <p class="section-head__aside">Актуальные суммы с прайса «Олимпии». Перед покупкой уточняйте в кассе.</p>
        </div>
        <a class="btn btn--ghost" href="${p.source}" rel="noopener">Полный лист</a>
      </div>
      ${p.html}
    </section>`;
  }).join('\n');

  const content = `  <div class="container">
    ${lib.breadcrumbs(1, lib.trailFromRel('price', 'Цены и карты'))}
    <div class="page-head">
      <h1>Цены</h1>
      <p class="page-head__lede">Разовые посещения, абонементы и клубные карты — как на живом сайте,
      в фильтре по разделам. Суммы с актуального прайса; перед оплатой сверяйте в кассе
      или по телефону <a href="tel:+73422567892">+7&nbsp;(342)&nbsp;2-56789-2</a>.</p>
    </div>

    <section class="section" aria-label="Каталог цен">
      <div class="section-head reveal">
        <h2>Выберите раздел</h2>
        <p class="section-head__aside">Те же категории, что на olympiaperm.ru/price/.</p>
      </div>
      <div class="filter-pills" data-filter="price-cat" role="tablist" aria-label="Разделы прайса">
      ${catPills}
      </div>
      ${subBars}

      <div class="price-panels" data-price-panels>
${panelHtml}
      </div>
    </section>

    <section class="section" aria-label="Клубные карты">
      <div class="section-head reveal">
        <h2>Клубные карты — что входит</h2>
        <p class="section-head__aside">Сравнение доступа. Суммы — во вкладках «Плавание» и «Фитнес» выше.</p>
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
            <tr><th>Заморозка карты</th><td colspan="3"><a href="./freeze/index.html">условия</a></td></tr>
          </tbody>
        </table>
        <p class="hero-note compare-note" data-benefit-note hidden></p>
      </div>
    </section>

    <section class="section" aria-label="Ещё оформить">
      <div class="section-head reveal">
        <h2>Ещё можно оформить</h2>
      </div>
      ${lib.cardList([
        { href: R + 'actions/basseyn/podarochnaya-karta-ideya-dlya-podarka/index.html', name: 'Подарочная карта', hint: 'в кассе и онлайн', photo: R + 'photos/podarochnaya-karta-ideya-dlya-podarka--podarochnaya-karta-ideya-dlya-podarka--goriz-jpg--64deaa1d.jpg', photoAlt: 'Подарочная карта' },
        { href: R + 'price/freeze/index.html', name: 'Заморозка карты', hint: 'пауза клубной карты', photo: R + 'photos/actions--30-dney-zamorozki-na-klubnye-karty-360-dney--l-gotnye-tseny-dlya-pensionerov--slide--cefc16dc.jpg', photoAlt: 'Заморозка' },
        { href: R + 'actions/index.html', name: 'Акции и льготы', hint: 'скидки и спецпредложения', photo: R + 'photos/actions--klubnye-karty-v-rassrochku-bez-pereplaty--aktsii--92ee1124.jpg', photoAlt: 'Акции' },
        { href: R + 'kupit-online/index.html', name: 'Купить онлайн', hint: 'магазин «Олимпии»', photo: S + 'upload/iblock/7be/7beca203b451908c0d19327d856015d2.jpg', photoAlt: 'Купить онлайн' }
      ])}
    </section>

    ${lib.ctaBand('Готовы выбрать?', 'Кассы до 21:15. Или оформите карту онлайн.', [
      ['Купить онлайн', R + 'kupit-online/index.html', 'btn--primary'],
      ['Расписание', R + 'timetable/index.html', 'btn--ghost-light']
    ])}
  </div>`;

  const page = lib.shell(1, {
    title: 'Цены — «Олимпия» Пермь',
    description: 'Цены спорткомплекса «Олимпия»: плавание, фитнес, SPA, детский центр, кинезитерапия. Актуальный прайс с фильтрами по разделам.',
    active: 'price',
    content,
    scripts: ['js/price.js']
  });

  fs.mkdirSync(path.join(OUT, 'price'), { recursive: true });
  fs.writeFileSync(path.join(OUT, 'price', 'index.html'), page, 'utf8');
  console.log('Готово: redesign/price/index.html (' + rendered.length + ' панелей)');
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
