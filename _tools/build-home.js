'use strict';
// Обновляет главную: promo carousel под hero, scroll-snap новости и акции.
const fs = require('fs');
const path = require('path');
const lib = require('./redesign-lib');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'redesign');
const HOME = path.join(OUT, 'index.html');

function normalizeHomePhoto(src) {
  if (!src) return '';
  if (/^assets\//.test(src)) return src;
  if (/^photos\//.test(src)) return src;
  const base = src.replace(/^(\.\.\/)+/, '');
  if (/^assets\//.test(base) || /^photos\//.test(base)) return base;
  if (/^https?:/.test(src)) return src;
  return 'assets/lanes-overhead.jpg';
}

function latestArticles(section, limit) {
  const base = path.join(OUT, section);
  if (!fs.existsSync(base)) return [];
  const items = [];
  for (const cat of fs.readdirSync(base)) {
    const catDir = path.join(base, cat);
    if (!fs.statSync(catDir).isDirectory()) continue;
    for (const slug of fs.readdirSync(catDir)) {
      const fp = path.join(catDir, slug, 'index.html');
      if (!fs.existsSync(fp)) continue;
      const h = fs.readFileSync(fp, 'utf8');
      const title = (h.match(/<h1[^>]*class="post__title">([^<]+)/) || [])[1];
      const date = (h.match(/datetime="([^"]+)"/) || [])[1];
      const img = ((h.match(/post__cover[^>]*>[\s\S]*?src="([^"]+)"/) || h.match(/<img[^>]+src="([^"]+)"/)) || [])[1];
      const catLabel = (h.match(/post__cat[^>]*>([^<]+)/) || [])[1] || cat;
      if (title) {
        items.push({
          href: section + '/' + cat + '/' + slug + '/index.html',
          title: title.trim(),
          meta: (catLabel.trim() + (date ? ' · ' + new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) : '')).trim(),
          photo: normalizeHomePhoto(img || ''),
          sort: date || ''
        });
      }
    }
  }
  items.sort((a, b) => (b.sort || '').localeCompare(a.sort || ''));
  return items.slice(0, limit);
}

function featuredPromos(limit) {
  const picks = [
    'actions/fitnes-tsentr/start-sezona-2026-2027/index.html',
    'actions/basseyn/basseyn-besplatno-dlya-detey-do-14-let-/index.html',
    'actions/basseyn/-30-dney-zamorozki-na-klubnye-karty-360-dney/index.html',
    'actions/fitnes-tsentr/fitnes-idyet-v-basseyn-besplatno/index.html',
    'actions/kineziterapiya/skidka-50-na-konsultatsiyu-vracha-kineziterapevta/index.html',
    'actions/spa-tsentr/goryashchie-predlozheniya-v-spa-tsentre/index.html',
    'actions/basseyn/leto-kruglyy-god-/index.html'
  ];
  const slides = [];
  for (const rel of picks) {
    if (slides.length >= limit) break;
    const fp = path.join(OUT, rel);
    if (!fs.existsSync(fp)) continue;
    const h = fs.readFileSync(fp, 'utf8');
    const title = (h.match(/<h1[^>]*class="post__title">([^<]+)/) || [])[1];
    const date = (h.match(/datetime="([^"]+)"/) || [])[1];
    const img = ((h.match(/post__cover[^>]*>[\s\S]*?src="([^"]+)"/) || h.match(/<img[^>]+src="([^"]+)"/)) || [])[1];
    if (title) {
      slides.push({
        href: rel,
        title: title.trim(),
        meta: date ? new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
        photo: normalizeHomePhoto(img || 'assets/fitness-hall.jpg'),
        photoAlt: title.trim()
      });
    }
  }
  return slides;
}

if (!fs.existsSync(HOME)) {
  console.log('redesign/index.html не найден');
  process.exit(1);
}

let html = fs.readFileSync(HOME, 'utf8');
const promos = featuredPromos(7);
const news = latestArticles('news', 6);
const actions = latestArticles('actions', 5);

const promoBlock = promos.length ? `
  <!-- ================= ПРОМО-КАРУСЕЛЬ ================= -->
  <section class="section container" aria-label="Актуальные акции">
    ${lib.promoCarousel(promos, { id: 'home-promo', label: 'Акции и спецпредложения' })}
    <div class="hero-actions reveal" style="margin-top:16px">
      <a class="btn btn--ghost" href="actions/index.html">Все акции</a>
    </div>
  </section>
` : '';

// Вставить promo carousel после ticker (перед направлениями)
if (promoBlock && !html.includes('data-carousel="home-promo"')) {
  html = html.replace(
    /(<\/aside>\s*\n\s*<!-- ================= НАПРАВЛЕНИЯ)/,
    `</aside>\n${promoBlock}\n  $1`
  );
}

// Заменить секцию новостей на scroll-strip
const newsStrip = news.length ? `
  <!-- ================= НОВОСТИ ================= -->
  <section class="section container" aria-labelledby="home-news-title">
    <div class="section-head reveal">
      <h2 id="home-news-title">Новости комплекса</h2>
      <p class="section-head__aside">Режим работы, соревнования и объявления.</p>
    </div>
    ${lib.scrollStrip(news, { id: 'home-news-strip' })}
    <div class="hero-actions reveal" style="margin-top:24px">
      <a class="btn btn--ghost" href="news/index.html">Все новости</a>
    </div>
  </section>` : '';

if (newsStrip) {
  html = html.replace(
    /<!-- ================= НОВОСТИ ================= -->[\s\S]*?<!-- ================= ВИЗИТ ================= -->/,
    newsStrip + '\n\n  <!-- ================= ВИЗИТ ================= -->'
  );
}

// Акции — carousel на мобайле через promo в секции «Сейчас выгодно»
if (actions.length && html.includes('home-actions-title')) {
  const actionsCarousel = lib.promoCarousel(actions.slice(0, 5), { id: 'home-actions', label: 'Сейчас выгодно' });
  html = html.replace(
    /<section class="section container" aria-labelledby="home-actions-title">[\s\S]*?<\/section>\s*\n\s*<!-- ================= НОВОСТИ/,
    `<section class="section container" aria-labelledby="home-actions-title">
    <div class="section-head reveal">
      <h2 id="home-actions-title">Сейчас выгодно</h2>
      <p class="section-head__aside">Актуальные акции — листайте или откройте все.</p>
    </div>
    ${actionsCarousel}
    <div class="hero-actions reveal" style="margin-top:16px">
      <a class="btn btn--ghost" href="actions/index.html">Все акции</a>
    </div>
  </section>

  <!-- ================= НОВОСТИ`
  );
}

// Подключить carousel.js
if (!html.includes('js/carousel.js')) {
  html = html.replace(
    '<script src="js/main.js',
    '<script src="js/carousel.js" defer></script>\n<script src="js/main.js'
  );
}

fs.writeFileSync(HOME, html, 'utf8');
console.log('Готово: redesign/index.html (promo', promos.length, ', news', news.length, ')');
