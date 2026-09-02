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
      if (it.classList.contains('is-open')) {
        // повторный клик закрывает пункт; фото слева остаётся от него
        it.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        activate(it);
      }
    });
  });
})();

/* ---------- Уведомление о cookie ---------- */
(function () {
  var box = document.querySelector('[data-cookie]');
  var backdrop = document.querySelector('[data-cookie-backdrop]');
  if (!box) return;
  var KEY = 'olympia-cookie-ok';
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { stored = null; }
  if (stored === '1') return;

  box.hidden = false;
  if (backdrop) backdrop.hidden = false;
  // размытие включаем следующим кадром, чтобы отработал переход
  requestAnimationFrame(function () {
    document.documentElement.classList.add('has-cookie');
  });

  function accept() {
    try { localStorage.setItem(KEY, '1'); } catch (e) {}
    document.documentElement.classList.remove('has-cookie');
    setTimeout(function () {
      box.hidden = true;
      if (backdrop) backdrop.hidden = true;
    }, 280);
  }
  var btn = box.querySelector('[data-cookie-accept]');
  if (btn) btn.addEventListener('click', accept);
})();

/* ---------- Разделы в шапке: выпадающие меню + смена мира ---------- */
(function () {
  var groups = Array.prototype.slice.call(document.querySelectorAll('.nav-group'));
  if (!groups.length) return;
  function closeAll(except) {
    groups.forEach(function (g) {
      if (g === except) return;
      var btn = g.querySelector('.nav-group__btn');
      var menu = g.querySelector('.nav-group__menu');
      if (menu) menu.classList.remove('is-open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  groups.forEach(function (g) {
    var btn = g.querySelector('.nav-group__btn');
    var menu = g.querySelector('.nav-group__menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var willOpen = !menu.classList.contains('is-open');
      closeAll(g);
      menu.classList.toggle('is-open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
      // Палитру раздела меняет только сама страница раздела: в открытом
      // меню человек ещё выбирает из двух пунктов, перекрашивать рано.
      if (!willOpen) closeAll(null);
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-group')) closeAll(null);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
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
  var bars = Array.prototype.slice.call(document.querySelectorAll('.filter-pills[data-filter]'));
  bars.forEach(function (bar) {
    var kind = bar.getAttribute('data-filter');
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-cat]');
      if (!btn) return;
      var cat = btn.getAttribute('data-cat');
      Array.prototype.slice.call(bar.querySelectorAll('button')).forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      if (kind === 'team') {
        Array.prototype.slice.call(document.querySelectorAll('section.section[data-cat]')).forEach(function (sec) {
          sec.classList.toggle('is-hidden', cat !== 'all' && sec.getAttribute('data-cat') !== cat);
        });
        return;
      }
      if (kind === 'timetable') {
        Array.prototype.slice.call(document.querySelectorAll('.tickets-list > li[data-cat], .hub-cards > li[data-cat]')).forEach(function (li) {
          li.classList.toggle('is-hidden', cat !== 'all' && li.getAttribute('data-cat') !== cat);
        });
        return;
      }
      window.__rowFilter = window.__rowFilter || { cat: 'all', year: 'all' };
      window.__rowFilter.cat = cat;
      applyRowFilters();
    });
  });

  // Фильтр по году публикации работает вместе с фильтром по разделу
  var yearBar = document.querySelector('.filter-pills[data-filter-year]');
  if (yearBar) {
    yearBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-year]');
      if (!btn) return;
      Array.prototype.slice.call(yearBar.querySelectorAll('button')).forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      window.__rowFilter = window.__rowFilter || { cat: 'all', year: 'all' };
      window.__rowFilter.year = btn.getAttribute('data-year');
      applyRowFilters();
    });
  }

  function applyRowFilters() {
    var f = window.__rowFilter || { cat: 'all', year: 'all' };
    var rows = Array.prototype.slice.call(document.querySelectorAll('.rows > li[data-cat]'));
    var shown = 0;
    rows.forEach(function (li) {
      var okCat = f.cat === 'all' || li.getAttribute('data-cat') === f.cat;
      var okYear = f.year === 'all' || li.getAttribute('data-year') === f.year;
      var hide = !(okCat && okYear);
      li.classList.toggle('is-hidden', hide);
      if (!hide) shown++;
    });
    var empty = document.querySelector('[data-rows-empty]');
    if (empty) empty.hidden = shown !== 0;
  }
})();

/* ---------- Льготы на таблице карт ---------- */
(function () {
  var bar = document.querySelector('.filter-pills[data-filter="benefit"]');
  var note = document.querySelector('.compare-note');
  if (!bar || !note) return;
  var texts = {
    all: '',
    pensioner: 'Льгота пенсионерам — уточняйте часы и размер скидки по акциям и в кассе.',
    student: 'Студенческая льгота — по действующему студенческому билету, детали в кассе.',
    family: 'Многодетным — по подтверждающим документам, актуальные условия в акциях.',
    svo: 'Участникам СВО — по действующей акции, сумма в кассе.'
  };
  bar.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-benefit]');
    if (!btn) return;
    Array.prototype.slice.call(bar.querySelectorAll('button')).forEach(function (b) {
      b.classList.toggle('is-active', b === btn);
    });
    var key = btn.getAttribute('data-benefit');
    var t = texts[key] || '';
    note.hidden = !t;
    note.textContent = t;
  });
})();

/* ---------- Пошаговые мастера ---------- */
(function () {
  var wizards = Array.prototype.slice.call(document.querySelectorAll('[data-wizard]'));
  wizards.forEach(function (box) {
    var nav = box.querySelector('.wizard-nav');
    if (!nav) return;
    function show(i) {
      Array.prototype.slice.call(box.querySelectorAll('.wizard-pane')).forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-step') === String(i));
      });
      Array.prototype.slice.call(nav.querySelectorAll('button')).forEach(function (b) {
        b.classList.toggle('is-active', b.getAttribute('data-step') === String(i));
      });
    }
    nav.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-step]');
      if (!btn) return;
      show(btn.getAttribute('data-step'));
    });
    var ageBar = box.querySelector('[data-cdp-age]');
    if (ageBar) {
      ageBar.addEventListener('click', function (e) {
        var btn = e.target.closest('button[data-age]');
        if (!btn) return;
        var age = btn.getAttribute('data-age');
        Array.prototype.slice.call(ageBar.querySelectorAll('button')).forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        Array.prototype.slice.call(box.querySelectorAll('[data-step="1"] li[data-age]')).forEach(function (li) {
          li.classList.toggle('is-hidden', li.getAttribute('data-age') !== age);
        });
        show(1);
      });
    }
  });
})();

/* ---------- Демо-загрузка ---------- */
(function () {
  var bar = document.querySelector('[data-occupancy]');
  if (!bar) return;
  var src = bar.getAttribute('data-src');
  if (!src) return;
  fetch(src).then(function (r) { return r.json(); }).then(function (data) {
    ['pools', 'fitness', 'lockers'].forEach(function (key) {
      var el = bar.querySelector('[data-occ="' + key + '"]');
      if (el && data[key] != null) el.textContent = data[key];
    });
  }).catch(function () {});
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

  // Подстраховка: элемент, скрытый через display:none на узком экране,
  // наблюдателю не виден и остаётся обрезанным даже после расширения окна.
  // Досматриваем такие вручную — при старте, после загрузки и на ресайзе.
  function sweep() {
    targets = targets.filter(function (el) {
      if (el.classList.contains('is-in')) { io.unobserve(el); return false; }
      var r = el.getBoundingClientRect();
      var visible = r.width > 0 && r.height > 0 &&
        r.top < window.innerHeight * 1.15 && r.bottom > -80;
      if (visible) {
        el.classList.add('is-in');
        io.unobserve(el);
        return false;
      }
      return true;
    });
  }
  // Элемент, обрезанный clip-path: inset(100%), имеет нулевую видимую площадь,
  // поэтому IntersectionObserver про него никогда не сообщит — замкнутый круг.
  // Поэтому досматриваем по прокрутке собственной геометрией элемента.
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      sweep();
      if (!targets.length) {
        window.removeEventListener('scroll', onScroll);
      }
    });
  }
  requestAnimationFrame(sweep);
  window.addEventListener('load', sweep);
  window.addEventListener('scroll', onScroll, { passive: true });
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(sweep, 150);
  });
})();
