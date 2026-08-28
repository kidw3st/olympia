'use strict';
// Прогрессивное улучшение: без JS контент виден полностью.
document.documentElement.classList.add('js');

/* ---------- Мобильное меню ---------- */
(function () {
  var burger = document.querySelector('.nav-burger');
  var menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  function close() {
    document.body.classList.remove('menu-open');
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
  }
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

/* ---------- Аккордеон направлений + смена фото ---------- */
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.dir-item'));
  var photos = Array.prototype.slice.call(document.querySelectorAll('.dirs-photo img'));
  if (!items.length) return;

  function activate(target) {
    items.forEach(function (it) {
      var open = it === target;
      it.classList.toggle('is-open', open);
      var btn = it.querySelector('.dir-item__head');
      if (btn) btn.setAttribute('aria-expanded', String(open));
    });
    var key = target.getAttribute('data-dir');
    photos.forEach(function (img) {
      img.classList.toggle('is-active', img.getAttribute('data-dir-img') === key);
    });
  }

  items.forEach(function (it) {
    var btn = it.querySelector('.dir-item__head');
    if (!btn) return;
    btn.addEventListener('click', function () {
      // Всегда один открыт: повторный клик по открытому не схлопывает в пустоту.
      if (!it.classList.contains('is-open')) activate(it);
    });
  });
})();

/* ---------- Вопрос-ответ (независимые аккордеоны) ---------- */
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.qa-item'));
  items.forEach(function (it) {
    var btn = it.querySelector('.qa-item__head');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var open = it.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
})();

/* ---------- Фильтр списков по категории ---------- */
(function () {
  var bar = document.querySelector('.filter-pills[data-filter]');
  if (!bar) return;
  var rows = Array.prototype.slice.call(document.querySelectorAll('.rows > li[data-cat]'));
  bar.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-cat]');
    if (!btn) return;
    var cat = btn.getAttribute('data-cat');
    Array.prototype.slice.call(bar.querySelectorAll('button')).forEach(function (b) {
      b.classList.toggle('is-active', b === btn);
    });
    rows.forEach(function (li) {
      li.classList.toggle('is-hidden', cat !== 'all' && li.getAttribute('data-cat') !== cat);
    });
  });
})();

/* ---------- Появление при скролле («вода наполняет») ---------- */
(function () {
  var targets = Array.prototype.slice.call(document.querySelectorAll('.reveal, .reveal-fill'));
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
  targets.forEach(function (el) { io.observe(el); });
})();
