'use strict';
// Класс js ставит инлайн-скрипт в head — до первой отрисовки, чтобы
// анимируемые блоки не мигали. Здесь только отметка, что сценарий поднялся:
// без неё страховка в head через 3,5 с показывает всё как есть.
document.documentElement.classList.add('js');
window.__olMotion = true;

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
        if (window.__revealSweep) window.__revealSweep();
        return;
      }
      if (kind === 'timetable') {
        Array.prototype.slice.call(document.querySelectorAll('.tickets-list > li[data-cat], .hub-cards > li[data-cat]')).forEach(function (li) {
          li.classList.toggle('is-hidden', cat !== 'all' && li.getAttribute('data-cat') !== cat);
        });
        if (window.__revealSweep) window.__revealSweep();
        return;
      }
      window.__rowFilter = window.__rowFilter || { cat: 'all', year: 'all' };
      window.__rowFilter.cat = cat;
      applyRowFilters();
    });
  });

  // Выбор периода датами работает вместе с фильтром по разделу
  var range = document.querySelector('[data-daterange]');
  if (range) {
    var from = range.querySelector('[data-date-from]');
    var to = range.querySelector('[data-date-to]');
    var reset = range.querySelector('[data-date-reset]');

    function syncRange() {
      window.__rowFilter = window.__rowFilter || { cat: 'all' };
      window.__rowFilter.from = from && from.value ? from.value : '';
      window.__rowFilter.to = to && to.value ? to.value : '';
      // конец периода не может быть раньше начала
      if (from && to) {
        to.min = from.value || to.getAttribute('min') || '';
        from.max = to.value || from.getAttribute('max') || '';
      }
      if (reset) reset.hidden = !(window.__rowFilter.from || window.__rowFilter.to);
      applyRowFilters();
    }
    if (from) from.addEventListener('change', syncRange);
    if (to) to.addEventListener('change', syncRange);
    if (reset) {
      reset.addEventListener('click', function () {
        if (from) from.value = '';
        if (to) to.value = '';
        syncRange();
      });
    }
  }

  function applyRowFilters() {
    var f = window.__rowFilter || { cat: 'all' };
    var rows = Array.prototype.slice.call(document.querySelectorAll('.rows > li[data-cat]'));
    var shown = 0;
    rows.forEach(function (li) {
      var okCat = !f.cat || f.cat === 'all' || li.getAttribute('data-cat') === f.cat;
      var d = li.getAttribute('data-date') || '';
      // даты в формате ГГГГ-ММ-ДД сравниваются как строки
      var okFrom = !f.from || (d && d >= f.from);
      var okTo = !f.to || (d && d <= f.to);
      var hide = !(okCat && okFrom && okTo);
      li.classList.toggle('is-hidden', hide);
      if (!hide) shown++;
    });
    var empty = document.querySelector('[data-rows-empty]');
    if (empty) empty.hidden = shown !== 0;
    var counter = document.querySelector('[data-date-count]');
    if (window.__revealSweep) window.__revealSweep();
    if (counter) {
      var total = rows.length;
      counter.textContent = shown === total ? '' : 'Найдено: ' + shown;
    }
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
      if (!el || data[key] == null) return;
      if (window.__countUp) window.__countUp(el, data[key]);
      else el.textContent = data[key];
    });
  }).catch(function () {});
})();

/* ---------- Появление при скролле («вода наполняет») ---------- */
(function () {
  // Каскад: карточки одного списка всплывают друг за другом, а не разом.
  // Задержку считаем по пачке, которую наблюдатель отдал за один раз, —
  // так работает и на списке из трёх карточек, и на ленте из трёхсот.
  var STAGGER = '.rows > *, .tickets-list > *, .hub-cards > *, .team-grid > *,' +
    '.gallery-strip > *, .lead-strip__grid > *, .dirs-list > *,' +
    '.class-day > *, .sauna-tabs > *';
  var SELECTOR = '.reveal, .reveal-fill, .section-head, ' + STAGGER;

  var targets;
  try {
    targets = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
  } catch (e) {
    targets = Array.prototype.slice.call(document.querySelectorAll('.reveal, .reveal-fill'));
  }
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var STEP = 70, MAX_STEPS = 7;
  // Высота экрана: в редких окружениях (превью, печать) innerHeight равен нулю,
  // и тогда ни один блок не считался бы видимым — страница осталась бы пустой.
  function vh() { return window.innerHeight || document.documentElement.clientHeight || 800; }
  function show(el, order) {
    if (order) el.style.transitionDelay = Math.min(order, MAX_STEPS) * STEP + 'ms';
    el.classList.add('is-in');
  }

  var io = new IntersectionObserver(function (entries) {
    var order = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      show(entry.target, order++);
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
  targets.forEach(function (el) { io.observe(el); });

  // Подстраховка: элемент, скрытый через display:none на узком экране,
  // наблюдателю не виден и остаётся обрезанным даже после расширения окна.
  // Досматриваем такие вручную — при старте, после загрузки и на ресайзе.
  function sweep() {
    var order = 0;
    targets = targets.filter(function (el) {
      if (el.classList.contains('is-in')) { io.unobserve(el); return false; }
      var r = el.getBoundingClientRect();
      var visible = r.width > 0 && r.height > 0 &&
        r.top < vh() * 1.15 && r.bottom > -80;
      if (visible) {
        show(el, order++);
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
  // после смены фильтра часть карточек показывается заново — досмотреть
  window.__revealSweep = sweep;
})();

/* ---------- Шапка уплотняется, когда страница ушла вверх ---------- */
(function () {
  var root = document.documentElement;
  var ticking = false;
  function update() {
    ticking = false;
    root.classList.toggle('is-scrolled', window.pageYOffset > 40);
  }
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
})();

/* ---------- Полоса прочитанного в статье ---------- */
(function () {
  var article = document.querySelector('article.post');
  if (!article) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var bar = document.createElement('div');
  bar.className = 'read-progress';
  bar.setAttribute('role', 'progressbar');
  bar.setAttribute('aria-label', 'Прочитано');
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  var ticking = false;
  function update() {
    ticking = false;
    var box = article.getBoundingClientRect();
    // отсчёт: от появления верха статьи до ухода её низа за верх экрана
    var h = window.innerHeight || document.documentElement.clientHeight || 800;
    var total = box.height - h;
    // короткая заметка помещается на экран целиком — отмерять нечего
    if (total <= 0) { bar.style.opacity = '0'; return; }
    bar.style.opacity = '';
    var done = Math.max(0, Math.min(1, (-box.top) / total));
    bar.style.transform = 'scaleX(' + done + ')';
  }
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* ---------- Обложки: снимок отстаёт от прокрутки ---------- */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var imgs = Array.prototype.slice.call(document.querySelectorAll(
    '.hero-porthole img, .page-cover img, .post__cover img, .dirpage-hero__media img'));
  if (!imgs.length) return;

  var AMP = 14;              // ход в пикселях в каждую сторону
  var live = [];

  function paint() {
    var h = window.innerHeight || document.documentElement.clientHeight || 800;
    live.forEach(function (img) {
      var box = img.parentNode.getBoundingClientRect();
      // -1 — блок ниже экрана, +1 — выше; 0 — ровно по центру
      var t = ((box.top + box.height / 2) - h / 2) / (h / 2 + box.height / 2);
      t = Math.max(-1, Math.min(1, t));
      img.style.transform = 'translate3d(0,' + (t * AMP).toFixed(1) + 'px,0) scale(1.08)';
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking || !live.length) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; paint(); });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var i = live.indexOf(e.target);
        if (e.isIntersecting && i < 0) live.push(e.target);
        else if (!e.isIntersecting && i >= 0) live.splice(i, 1);
      });
      paint();
    }, { rootMargin: '120px 0px' });
    imgs.forEach(function (img) { io.observe(img); });
  } else {
    live = imgs;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', paint);
  paint();
})();

/* ---------- Числа набегают, а не появляются ---------- */
window.__countUp = function (el, value) {
  var target = parseInt(value, 10);
  if (isNaN(target)) { el.textContent = value; return; }
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = String(target);
    return;
  }
  var dur = 900, start = null;
  function frame(now) {
    if (start === null) start = now;
    var p = Math.min(1, (now - start) / dur);
    // замедление к концу — число «доезжает», а не обрывается
    var eased = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
};
