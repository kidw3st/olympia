'use strict';
/* Универсальные табы хаба: бассейны, зоны фитнеса и т.д. */
(function () {
  document.querySelectorAll('[data-hub-tabs]').forEach(function (wrap) {
    var tabs = Array.prototype.slice.call(wrap.querySelectorAll('[data-hub-tab]'));
    var panels = Array.prototype.slice.call(wrap.querySelectorAll('[data-hub-panel]'));
    if (!tabs.length || !panels.length) return;

    function show(index) {
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-hub-tab') === String(index);
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
      });
      panels.forEach(function (p) {
        var on = p.getAttribute('data-hub-panel') === String(index);
        p.classList.toggle('is-active', on);
        p.hidden = !on;
        if (on) {
          p.classList.remove('is-enter');
          void p.offsetWidth;
          p.classList.add('is-enter');
        }
      });
      if (window.__revealSweep) window.__revealSweep();
    }

    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        show(t.getAttribute('data-hub-tab'));
      });
    });

    wrap.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      var current = tabs.findIndex(function (t) { return t.classList.contains('is-active'); });
      if (current < 0) return;
      var next = e.key === 'ArrowRight'
        ? (current + 1) % tabs.length
        : (current - 1 + tabs.length) % tabs.length;
      show(tabs[next].getAttribute('data-hub-tab'));
      tabs[next].focus();
    });
  });
})();
