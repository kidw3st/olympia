'use strict';
// Конвертер оставшихся страниц копии в новый дизайн — с нормализацией вёрстки:
// контент раскладывается по компонентам (галерея, проза, услуги, вопрос-ответ),
// мёртвые виджеты старого шаблона вырезаются.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');
const norm = require('./normalize');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'redesign');

const SKIP_DIRS = new Set(['bitrix', 'local', 'upload', 'images', '_external', 'news', 'actions']);
const ALREADY = new Set([
  '', 'pools', 'swimming_center', 'fitness_center', 'spa_center',
  'center_kinesitherapy', 'contacts', 'price', 'faq', 'team', 'pravila', 'zapis_cdp'
]);
function specialOwned(rel) {
  return rel.startsWith('team/') || rel.startsWith('timetable/');
}

function activeFor(rel) {
  if (rel.startsWith('timetable')) return 'timetable';
  if (rel.startsWith('actions')) return 'actions';
  if (rel.startsWith('contacts')) return 'contacts';
  if (rel.startsWith('price')) return 'price';
  if (/^(pools|swimming_center|fitness_center|spa_center|center_kinesitherapy)/.test(rel)) return 'dirs';
  return '';
}

function listPages(dir, out, relBase) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const abs = path.join(dir, e.name);
    const rel = relBase ? relBase + '/' + e.name : e.name;
    if (e.isDirectory()) {
      if (relBase === '' && SKIP_DIRS.has(e.name)) continue;
      listPages(abs, out, rel);
    } else if (e.name === 'index.html') {
      out.push(relBase);
    }
  }
  return out;
}

// подписи разделов для хлебных крошек
const SECTION_TITLES = {
  pools: 'Бассейны',
  swimming_center: 'Центр детского плавания',
  fitness_center: 'Фитнес-центр',
  spa_center: 'SPA-центр',
  center_kinesitherapy: 'Центр кинезитерапии',
  about: 'О комплексе',
  info: 'Информация',
  contacts: 'Контакты'
};

function convert(rel) {
  const src = path.join(SITE, rel, 'index.html');
  const html = fs.readFileSync(src, 'utf8');
  const depth = rel === '' ? 0 : rel.split('/').length;
  const rr = '../'.repeat(depth);
  const sitePrefix = '../'.repeat(depth + 1) + 'site/';

  // заголовок
  const h1m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  let title = h1m ? norm.clean(h1m[1]) : '';
  if (!title) {
    const tm = html.match(/<title>([^<]*)<\/title>/);
    title = tm ? tm[1].split(' - ')[0].split(' — ')[0].trim() : rel;
  }
  // лид из баннера
  let lede = '';
  if (h1m) {
    const dm = html.slice(h1m.index, h1m.index + 1400).match(/class="description"[^>]*>([\s\S]*?)<\/div>/);
    if (dm) lede = norm.clean(dm[1]);
  }
  if (lede.length > 320) lede = '';

  // тело: от конца баннера до футера
  let start = h1m ? html.indexOf('</section>', h1m.index) : -1;
  if (start === -1) start = html.indexOf('</header>') + 9;
  else start += 10;
  let end = html.indexOf('<footer', start);
  if (end === -1) end = html.length;
  const rawBody = html.slice(start, end);

  // разрешение относительных путей исходной страницы
  const resolveUrl = (u) => {
    const s = String(u || '').trim();
    if (!s) return null;
    if (/^(https?:|mailto:|tel:|#|data:|javascript:)/i.test(s)) return s;
    let r;
    try { r = path.posix.normalize(path.posix.join('/', rel, s)); } catch (e) { return null; }
    if (r.startsWith('..')) return null;
    return sitePrefix + r.replace(/^\/+/, '');
  };

  const parts = norm.buildContent({ html: rawBody, resolveUrl, title });
  if (parts.textLen < 40 && !parts.gallery.length && !parts.qa.length) return null;

  // ---- сборка секций ----
  const sections = [];

  if (parts.gallery.length) {
    const figs = parts.gallery.slice(0, 9).map(u =>
      `        <figure><img src="${u}" alt="" loading="lazy"></figure>`).join('\n');
    sections.push(`    <section class="section" aria-label="Фотографии">
      <div class="gallery-strip reveal">
${figs}
      </div>
    </section>`);
  }

  if (parts.proseHtml.trim()) {
    sections.push(`    <article class="article reveal">
${parts.proseHtml}
    </article>`);
  }

  if (parts.links.length) {
    const seen = new Set();
    const li = parts.links.filter(l => {
      const k = l.href + l.text;
      if (seen.has(k)) return false;
      seen.add(k); return true;
    }).slice(0, 14).map(l => `        <li>
          <a class="ticket-row" href="${l.href}">
            <span class="ticket-row__name">${norm.esc(l.text)}</span>
          </a>
        </li>`).join('\n');
    sections.push(`    <section class="section" aria-label="Разделы">
      <div class="section-head reveal"><h2>Смотрите также</h2></div>
      <ul class="tickets-list reveal">
${li}
      </ul>
    </section>`);
  }

  if (parts.qa.length) {
    const items = parts.qa.map(it => `        <div class="qa-item">
          <h3 style="margin:0"><button class="qa-item__head" aria-expanded="false">
            <span>${norm.esc(it.q)}</span>
            <span class="dir-item__toggle" aria-hidden="true"></span>
          </button></h3>
          <div class="qa-item__body"><div><div class="qa-item__inner">${it.a}</div></div></div>
        </div>`).join('\n');
    sections.push(`    <section class="section" aria-label="Вопросы и ответы">
      <div class="section-head reveal"><h2>Вопросы и ответы</h2></div>
      <div class="reveal">
${items}
      </div>
    </section>`);
  }

  // CTA
  sections.push(`    <div class="cta-band reveal-fill">
      <div>
        <h2>Записаться в «Олимпию»</h2>
        <p class="cta-band__sub">Горячая линия работает с 8:00 до 21:00.</p>
      </div>
      <div class="cta-band__actions">
        <a class="btn btn--ghost-light" href="${rr}price/index.html">Цены</a>
        <a class="btn btn--primary" href="${rr}zapis_cdp/index.html">Записаться</a>
      </div>
    </div>`);

  // хлебные крошки с промежуточным разделом
  const trail = [[rr + 'index.html', 'Главная']];
  const seg = rel.split('/');
  if (seg.length > 1 && SECTION_TITLES[seg[0]]) {
    trail.push([rr + seg[0] + '/index.html', SECTION_TITLES[seg[0]]]);
  }
  trail.push([null, title]);

  const content = `  <div class="container">
    ${lib.breadcrumbs(depth, trail)}
    <div class="page-head">
      <h1>${norm.esc(title)}</h1>${lede ? `
      <p class="page-head__lede">${norm.esc(lede)}</p>` : ''}
    </div>
${sections.join('\n\n')}
  </div>`;

  return lib.shell(depth, {
    title: title + ' — «Олимпия» Пермь',
    description: (lede || title + ' — спорткомплекс «Олимпия», Пермь.').slice(0, 300),
    active: activeFor(rel),
    content
  });
}

// ---- запуск ----
const pages = listPages(SITE, [], '');
let done = 0, skipped = 0;
const failed = [];
for (const rel of pages) {
  if (ALREADY.has(rel) || specialOwned(rel)) { skipped++; continue; }
  try {
    const out = convert(rel);
    if (!out) { failed.push(rel || '(корень)'); continue; }
    const f = path.join(OUT, rel, 'index.html');
    fs.mkdirSync(path.dirname(f), { recursive: true });
    fs.writeFileSync(f, out, 'utf8');
    done++;
  } catch (e) {
    failed.push(rel + ' :: ' + e.message);
  }
}
console.log('Нормализовано: ' + done + ', пропущено: ' + skipped + ', без контента: ' + failed.length);
failed.slice(0, 12).forEach(f => console.log('  !', f));
