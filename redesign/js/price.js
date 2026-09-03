'use strict';
/* Фильтры прайса: раздел → подраздел → панель с секциями */
(function () {
  var catBar = document.querySelector('[data-filter="price-cat"]');
  var panelsRoot = document.querySelector('[data-price-panels]');
  if (!catBar || !panelsRoot) return;

  var subBars = Array.prototype.slice.call(document.querySelectorAll('[data-price-parent]'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('[data-price-panel]'));
  var subEls = Array.prototype.slice.call(document.querySelectorAll('.price-sub[data-price-parent]'));

  function showPanel(id) {
    panels.forEach(function (p) {
      var on = p.getAttribute('data-price-panel') === id;
      p.hidden = !on;
      p.classList.toggle('is-active', on);
      if (on) {
        p.classList.remove('is-enter');
        void p.offsetWidth;
        p.classList.add('is-enter');
      }
    });
    if (window.__revealSweep) window.__revealSweep();
  }

  function setCat(cat) {
    Array.prototype.slice.call(catBar.querySelectorAll('button')).forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-price-cat') === cat);
    });
    subBars.forEach(function (bar) {
      var on = bar.getAttribute('data-price-parent') === cat;
      bar.hidden = !on;
      if (on) {
        var first = bar.querySelector('button[data-price-sub]');
        Array.prototype.slice.call(bar.querySelectorAll('button')).forEach(function (b, i) {
          b.classList.toggle('is-active', i === 0);
        });
        if (first) showPanel(first.getAttribute('data-price-sub'));
        else showPanel(cat);
      }
    });
    if (!document.querySelector('.price-sub[data-price-parent="' + cat + '"]')) {
      showPanel(cat);
    }
  }

  catBar.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-price-cat]');
    if (!btn) return;
    setCat(btn.getAttribute('data-price-cat'));
  });

  subBars.forEach(function (bar) {
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-price-sub]');
      if (!btn) return;
      Array.prototype.slice.call(bar.querySelectorAll('button')).forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      showPanel(btn.getAttribute('data-price-sub'));
    });
  });

  /* sticky sub-filter */
  if (subEls.length && 'IntersectionObserver' in window) {
    var sentinel = document.createElement('div');
    sentinel.className = 'price-sub-sentinel';
    sentinel.setAttribute('aria-hidden', 'true');
    var anchor = subEls[0].parentElement;
    if (anchor) {
      anchor.insertBefore(sentinel, subEls[0]);
      var io = new IntersectionObserver(function (entries) {
        subEls.forEach(function (bar) {
          bar.classList.toggle('is-stuck', !entries[0].isIntersecting);
        });
      }, { rootMargin: '-80px 0px 0px 0px', threshold: 0 });
      io.observe(sentinel);
    }
  }

  setCat('swim');
})();
