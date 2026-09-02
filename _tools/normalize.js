'use strict';
// Нормализатор legacy-страниц: вместо «взять всё между шапкой и футером»
// избирательно извлекает реальный контент и раскладывает его в наши компоненты.
const path = require('path');

/* ---------- утилиты разбора ---------- */

// Вырезать сбалансированный <div>, начиная с индекса открывающего тега
function sliceDiv(html, openIdx) {
  const bodyStart = html.indexOf('>', openIdx) + 1;
  let depth = 1;
  const re = /<div\b|<\/div>/gi;
  re.lastIndex = bodyStart;
  let m;
  while ((m = re.exec(html))) {
    if (m[0].toLowerCase() === '</div>') depth--; else depth++;
    if (depth === 0) return { inner: html.slice(bodyStart, m.index), end: m.index + 6 };
  }
  return { inner: html.slice(bodyStart), end: html.length };
}

// Удалить все блоки, чей открывающий div содержит один из классов
function stripBlocks(html, classNames) {
  for (const cls of classNames) {
    const re = new RegExp('<div[^>]*class="[^"]*\\b' + cls + '\\b[^"]*"', 'i');
    let guard = 0;
    let m;
    while ((m = re.exec(html)) && guard++ < 200) {
      const cut = sliceDiv(html, m.index);
      html = html.slice(0, m.index) + html.slice(cut.end);
    }
  }
  return html;
}

function clean(s) {
  return String(s || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&laquo;/g, '«').replace(/&raquo;/g, '»')
    .replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–').replace(/&rsquo;/g, '’')
    .replace(/\s+/g, ' ').trim();
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ---------- мёртвые виджеты старого шаблона ---------- */
const DEAD_WIDGETS = [
  'calendar', 'wr_calendar', 'choose_service', 'close_modal', 'modal',
  'contact_form', 'feedback_form', 'callback', 'subscribe', 'reminder',
  'back_arrow', 'title_fixed', 'filter_categories', 'categories_tabs',
  'breadcrumbs', 'wr_medical_table', 'visit_analytics', 'search_form',
  'select_dropdown', 'bottom_menu', 'panel-default', 'pop_up', 'popup',
  'lk_btn', 'call_back', 'basket', 'wr_categories_tabs', 'team_head',
  'coach_head', 'arrow_up', 'clear'
];

/* ---------- извлечение блоков ---------- */

// Галерея: из owl-слайдеров и .photo с background-image
function extractGallery(html, resolveUrl) {
  const urls = [];
  const push = u => {
    if (!u) return;
    const r = resolveUrl(u);
    if (r && urls.indexOf(r) === -1 && !/\.svg$/i.test(r)) urls.push(r);
  };
  // background-image в слайдах
  const reBg = /class="[^"]*\b(?:slide|photo)\b[^"]*"[^>]*style="[^"]*background-image:\s*url\(['"]?([^'")]+)/gi;
  let m;
  while ((m = reBg.exec(html))) push(m[1]);
  // <img> внутри слайдеров и смартфото
  const reImg = /<a[^>]*class="[^"]*js-smartPhoto[^"]*"[^>]*href="([^"]+)"/gi;
  while ((m = reImg.exec(html))) push(m[1]);
  return urls;
}

// Вопрос-ответ
function extractQA(html) {
  const items = [];
  const re = /class="question"[^>]*>([\s\S]*?)<\/div>\s*<div class="arrow"><\/div>\s*<\/div>\s*<div class="content">([\s\S]*?)<\/div>\s*<\/div>/g;
  let m;
  while ((m = re.exec(html))) {
    const q = clean(m[1]);
    const a = m[2].replace(/<script[\s\S]*?<\/script>/gi, '').replace(/\sstyle="[^"]*"/gi, '').trim();
    if (q && clean(a)) items.push({ q, a });
  }
  return items;
}

// Смысловой текст: заголовки, абзацы, списки, таблицы
function extractProse(html) {
  const out = [];
  const re = /<(h2|h3|h4|p|ul|ol|table|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(html))) {
    const tag = m[1].toLowerCase();
    const raw = m[2];
    const txt = clean(raw);
    if (!txt) continue;
    // мусорные обрывки шаблона
    if (/^(подробнее|записаться|закрыть|далее|назад|\d+)$/i.test(txt)) continue;
    if (tag === 'p' && txt.length < 3) continue;
    out.push({ tag, raw, txt });
  }
  return out;
}

// Документы старого шаблона свёрстаны через <br>, а не абзацами.
// Разбиваем такой текст на абзацы, заголовки пунктов выделяем.
function extractBrProse(html) {
  // берём самый насыщенный блок .text / .description
  let best = '';
  const re = /<div[^>]*class="[^"]*\b(?:text|description)\b[^"]*"/gi;
  let m;
  while ((m = re.exec(html))) {
    const cut = sliceDiv(html, m.index);
    if (cut.inner.length > best.length) best = cut.inner;
  }
  if (!best) best = html;
  if (clean(best).length < 400) return '';

  const chunks = best
    .replace(/<\/?(?:div|span|font)\b[^>]*>/gi, '')
    .split(/(?:<br\s*\/?>\s*){1,}/i);

  const out = [];
  for (const raw of chunks) {
    const txt = clean(raw);
    if (!txt) continue;
    // нумерованный или заглавный пункт — подзаголовок
    const isHead = /^(?:\d+(?:\.\d+)*\.?\s+)?[А-ЯЁ][А-ЯЁ\s,«»"-]{6,}$/.test(txt) && txt.length < 90;
    const keepTags = raw.replace(/\sstyle="[^"]*"/gi, '').trim();
    if (isHead) out.push('<h3>' + esc(txt) + '</h3>');
    else out.push('<p>' + keepTags + '</p>');
  }
  return out.join('\n');
}

/* ---------- сборка контента ---------- */

function buildContent(opt) {
  const { html, resolveUrl, title } = opt;

  // 1. Чистим служебное
  let body = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<link[^>]*>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  body = stripBlocks(body, DEAD_WIDGETS);

  // Ссылка, внутри которой только пробелы или пустые обёртки, — невидимая
  // цель для клика: развернём её содержимое наружу.
  body = body.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, (m0, inner) => {
    if (/<img|<svg/i.test(inner)) return m0;
    const text = inner.replace(/<[^>]+>/g, '').replace(/&nbsp;/gi, ' ').trim();
    return text ? m0 : inner;
  });
  // ссылка в никуда: пустой протокол вместо адреса
  body = body.replace(/<a\b[^>]*href="https?:\/\/"[^>]*>([\s\S]*?)<\/a>/gi, '$1');
  // <a> без адреса — остаток крошек Битрикса (текущая страница была ссылкой);
  // разворачиваем в текст, иначе выглядит кликабельным, но не ведёт никуда
  body = body.replace(/<a(?![^>]*\bhref=)[^>]*>([\s\S]*?)<\/a>/gi, '$1');
  // якоря старого формата <a name="…"> переводим в современный id
  body = body.replace(/<a\s+name="([^"]+)"[^>]*>\s*<\/a>/gi, '<span id="$1"></span>');
  // картинки без источника
  body = body.replace(/<img[^>]*\bsrc=""[^>]*>/gi, '');

  // 2. Извлекаем составляющие
  const qa = extractQA(body);
  // QA-блоки убираем из тела, чтобы не задваивать
  let proseSource = body.replace(/<div class="pop_questions"[\s\S]*?(?=<div class="(?!question|arrow|content|item|head)|$)/gi, '');
  const gallery = extractGallery(body, resolveUrl);
  let prose = extractProse(proseSource);

  // документ свёрстан через <br> — восстанавливаем абзацы
  let brProse = '';
  const proseText = prose.reduce((a, p) => a + p.txt.length, 0);
  if (proseText < 400 && clean(body).length > 800) {
    brProse = extractBrProse(body);
  }

  // 3. Ссылки на подстраницы (услуги раздела)
  const links = [];
  const reLink = /<a[^>]*class="[^"]*\b(?:read_more|simple_red_btn|more)\b[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let lm;
  while ((lm = reLink.exec(body))) {
    const raw = (lm[1] || '').trim();
    // якоря-заглушки старого шаблона ведут в никуда — в новый список не берём
    if (!raw || raw === '#' || /^javascript:/i.test(raw)) continue;
    const href = resolveUrl(raw);
    const text = clean(lm[2]);
    if (href && text && text.length > 2 && !/подробнее/i.test(text)) {
      links.push({ href, text: text.charAt(0).toUpperCase() + text.slice(1) });
    }
  }

  // 4. Рендер прозы с нормализацией путей
  const proseHtml = prose.map(p => {
    let inner = p.raw
      .replace(/\sstyle="[^"]*"/gi, '')
      .replace(/\b(src|href)="([^"]+)"/gi, (m0, a, u) => {
        const r = resolveUrl(u);
        return r ? a + '="' + r + '"' : m0;
      });
    // заголовок дублирующий h1 — пропускаем
    if ((p.tag === 'h2' || p.tag === 'h3') && title &&
        p.txt.toLowerCase() === title.toLowerCase()) return '';
    if (p.tag === 'table') return '<div class="table-wrap"><table>' + inner + '</table></div>';
    return '<' + p.tag + '>' + inner + '</' + p.tag + '>';
  }).filter(Boolean).join('\n');

  const finalProse = (proseHtml.trim() ? proseHtml + '\n' : '') + brProse;
  const textLen = prose.reduce((a, p) => a + p.txt.length, 0) + clean(brProse).length;
  return { proseHtml: finalProse, gallery, qa, links, textLen };
}

module.exports = { buildContent, clean, esc, stripBlocks, sliceDiv };
