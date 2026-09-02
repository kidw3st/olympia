'use strict';
// Скрипт для запуска в браузере: проверяет вёрстку текущей страницы
// на дефекты, которые видно только в живом рендере.
// Вставляется в консоль через javascript_tool.
window.__deviceCheck = function () {
  const out = { vw: window.innerWidth, issues: [] };
  const de = document.documentElement;

  // 1. горизонтальная прокрутка страницы
  if (de.scrollWidth > de.clientWidth + 1) {
    out.issues.push({ kind: 'горизонтальный скролл', detail: de.scrollWidth + ' > ' + de.clientWidth });
    // виновники: элементы шире вьюпорта
    const wide = [];
    document.querySelectorAll('body *').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width > de.clientWidth + 2 && r.height > 0) {
        const cs = getComputedStyle(el);
        if (cs.position === 'fixed') return;
        wide.push((el.className || el.tagName).toString().slice(0, 40) + ' w=' + Math.round(r.width));
      }
    });
    out.wide = wide.slice(0, 6);
  }

  // 2. мелкие цели нажатия (норма 44×44)
  const small = [];
  document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') return;
    // строчные ссылки внутри текста меряются по-другому, их пропускаем
    if (el.closest('.post__body, .article, p, li') && el.tagName === 'A') return;
    if (r.height < 32 || r.width < 32) {
      small.push((el.className || el.tagName).toString().slice(0, 38) +
        ' ' + Math.round(r.width) + '×' + Math.round(r.height));
    }
  });
  if (small.length) out.smallTargets = small.slice(0, 8);

  // 3. налезание текста на соседей и обрезка
  const clipped = [];
  document.querySelectorAll('h1, h2, h3, .row-link__title, .ticket-row__name, .btn').forEach(el => {
    if (el.scrollWidth > el.clientWidth + 2) {
      clipped.push((el.className || el.tagName).toString().slice(0, 38) +
        ' ' + el.scrollWidth + '>' + el.clientWidth);
    }
  });
  if (clipped.length) out.clipped = clipped.slice(0, 8);

  // 4. незагруженные картинки
  const broken = [];
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) broken.push(img.getAttribute('src').slice(0, 60));
  });
  if (broken.length) out.brokenImages = broken.slice(0, 6);

  // 5. картинки без заданных пропорций (скачок при загрузке)
  let noDim = 0;
  document.querySelectorAll('img').forEach(img => {
    if (!img.getAttribute('width') && !img.style.aspectRatio) noDim++;
  });
  if (noDim) out.imagesWithoutSize = noDim;

  return out;
};
'ready';
