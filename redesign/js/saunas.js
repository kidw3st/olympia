'use strict';
// Переключение бань: смена фото и описания по выбранному названию.
(function () {
  var wrap = document.querySelector('[data-saunas]');
  if (!wrap) return;
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-sauna-tab]'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('[data-sauna-panel]'));
  if (!tabs.length || !panels.length) return;

  function show(index) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-sauna-tab') === String(index);
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
    });
    panels.forEach(function (p) {
      var on = p.getAttribute('data-sauna-panel') === String(index);
      p.classList.toggle('is-active', on);
      p.hidden = !on;
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      show(t.getAttribute('data-sauna-tab'));
    });
  });

  // стрелками влево-вправо, как принято во вкладках
  wrap.closest('.saunas').addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    var current = tabs.findIndex(function (t) { return t.classList.contains('is-active'); });
    if (current < 0) return;
    var next = e.key === 'ArrowRight'
      ? (current + 1) % tabs.length
      : (current - 1 + tabs.length) % tabs.length;
    show(tabs[next].getAttribute('data-sauna-tab'));
    tabs[next].focus();
  });
})();
