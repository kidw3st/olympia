'use strict';
// Временная сетка расписания: рендер из data/schedule.json,
// кликабельные события с описанием, масштабирование.
(function () {
  var root = document.querySelector('[data-schedule]');
  if (!root) return;

  var dataUrl = root.getAttribute('data-schedule-src');
  var initialTracks = (root.getAttribute('data-schedule') || '').split(',')
    .map(function (s) { return s.trim(); }).filter(Boolean);

  var state = { data: null, track: initialTracks[0] || 'group', zoom: 'm' };

  function pad(n) { return String(n).padStart(2, '0'); }
  function toMin(hhmm) {
    var p = String(hhmm).split(':');
    return Number(p[0]) * 60 + Number(p[1] || 0);
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------- разметка каркаса ---------- */
  function renderShell() {
    var d = state.data;
    var tracks = d.tracks.filter(function (t) {
      return !initialTracks.length || initialTracks.indexOf(t.id) !== -1;
    });

    var trackBtns = tracks.length > 1
      ? '<div class="filter-pills" data-tg-tracks>' +
        tracks.map(function (t) {
          return '<button type="button" data-track="' + esc(t.id) + '"' +
            (t.id === state.track ? ' class="is-active"' : '') + '>' +
            esc(t.name) + '</button>';
        }).join('') + '</div>'
      : '<div></div>';

    root.innerHTML =
      '<div class="tg__bar">' +
        trackBtns +
        '<div class="tg__zoom">' +
          '<span>Масштаб</span>' +
          '<div class="tg__zoom-btns" data-tg-zoom>' +
            '<button type="button" data-zoom="s" aria-label="Компактный вид">−</button>' +
            '<button type="button" data-zoom="m" class="is-active" aria-label="Обычный вид">▫</button>' +
            '<button type="button" data-zoom="l" aria-label="Крупный вид">+</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="tg__scroll"><div class="tg__grid" data-tg-grid></div></div>' +
      '<p class="tg__note" data-tg-note></p>';
  }

  /* ---------- сетка ---------- */
  function renderGrid() {
    var d = state.data;
    var grid = root.querySelector('[data-tg-grid]');
    var fromMin = toMin(d.hours.from);
    var toMinEnd = toMin(d.hours.to);
    var hours = Math.ceil((toMinEnd - fromMin) / 60);

    var events = d.events.filter(function (e) { return e.track === state.track; });

    var html = '<div class="tg__head tg__head--time">Время</div>';
    for (var i = 0; i < 7; i++) {
      html += '<div class="tg__head">' + esc(d.daysShort[i]) +
        '<small>' + esc(d.days[i]) + '</small></div>';
    }

    // колонка часов
    html += '<div class="tg__times">';
    for (var h = 0; h < hours; h++) {
      html += '<div class="tg__hour">' + pad(Math.floor((fromMin + h * 60) / 60)) + ':00</div>';
    }
    html += '</div>';

    // колонки дней
    for (var dd = 0; dd < 7; dd++) {
      html += '<div class="tg__col' + (dd >= 5 ? ' tg__col--weekend' : '') +
        '" style="height:' + (hours * 100) + 'px">';
      var dayEvents = events.filter(function (e) { return e.day === dd; });
      dayEvents.forEach(function (e) {
        var s = toMin(e.start) - fromMin;
        var dur = Math.max(30, toMin(e.end) - toMin(e.start));
        var topPct = (s / (hours * 60)) * 100;
        var hPct = (dur / (hours * 60)) * 100;
        html += '<button type="button" class="tg__event" data-track="' + esc(e.track) + '"' +
          ' data-id="' + esc(e.id) + '"' +
          ' style="top:' + topPct.toFixed(3) + '%;height:' + hPct.toFixed(3) + '%">' +
          '<span class="tg__event-time">' + esc(e.start) + '–' + esc(e.end) + '</span>' +
          '<span class="tg__event-name">' + esc(e.name) + '</span>' +
          '<span class="tg__event-room">' + esc(e.room) + '</span>' +
          '</button>';
      });
      html += '</div>';
    }

    grid.innerHTML = html;
    // высота колонок через переменную часа
    var cols = grid.querySelectorAll('.tg__col, .tg__times');
    for (var c = 0; c < cols.length; c++) {
      cols[c].style.height = 'calc(' + hours + ' * var(--hour-h))';
    }

    var note = root.querySelector('[data-tg-note]');
    if (note && d._note) note.textContent = d._note;
  }

  /* ---------- панель описания ---------- */
  var panel, backdrop, lastFocus;

  function ensurePanel() {
    if (panel) return;
    backdrop = document.createElement('div');
    backdrop.className = 'tg-backdrop';
    panel = document.createElement('aside');
    panel.className = 'tg-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Описание занятия');
    document.body.appendChild(backdrop);
    document.body.appendChild(panel);
    backdrop.addEventListener('click', closePanel);
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') closePanel();
    });
  }

  function openPanel(e) {
    ensurePanel();
    var d = state.data;
    var bookHref = root.getAttribute('data-book-href') || '#';
    panel.innerHTML =
      '<button type="button" class="tg-panel__close" aria-label="Закрыть">×</button>' +
      '<div class="tg-panel__cat">' + esc(e.category) + '</div>' +
      '<h3>' + esc(e.name) + '</h3>' +
      '<dl class="tg-panel__meta">' +
        '<div><dt>День</dt><dd>' + esc(d.days[e.day]) + '</dd></div>' +
        '<div><dt>Время</dt><dd>' + esc(e.start) + '–' + esc(e.end) + '</dd></div>' +
        '<div><dt>Место</dt><dd>' + esc(e.room) + '</dd></div>' +
      '</dl>' +
      (e.desc ? '<p class="tg-panel__desc">' + esc(e.desc) + '</p>' : '') +
      '<div class="tg-panel__actions">' +
        '<a class="btn btn--primary" href="' + esc(bookHref) + '">Записаться</a>' +
        '<a class="btn btn--ghost" href="tel:+73422567892">Позвонить</a>' +
      '</div>';
    panel.querySelector('.tg-panel__close').addEventListener('click', closePanel);
    lastFocus = document.activeElement;
    backdrop.classList.add('is-open');
    panel.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    var c = panel.querySelector('.tg-panel__close');
    if (c) c.focus();
  }

  function closePanel() {
    if (!panel) return;
    panel.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    var sel = root.querySelector('.tg__event.is-selected');
    if (sel) sel.classList.remove('is-selected');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---------- события интерфейса ---------- */
  function bind() {
    root.addEventListener('click', function (ev) {
      var evtBtn = ev.target.closest('.tg__event');
      if (evtBtn) {
        var id = evtBtn.getAttribute('data-id');
        var e = state.data.events.filter(function (x) { return x.id === id; })[0];
        if (!e) return;
        var prev = root.querySelector('.tg__event.is-selected');
        if (prev) prev.classList.remove('is-selected');
        evtBtn.classList.add('is-selected');
        openPanel(e);
        return;
      }
      var zoomBtn = ev.target.closest('[data-tg-zoom] button');
      if (zoomBtn) {
        state.zoom = zoomBtn.getAttribute('data-zoom');
        root.setAttribute('data-zoom', state.zoom);
        var zs = root.querySelectorAll('[data-tg-zoom] button');
        for (var i = 0; i < zs.length; i++) zs[i].classList.toggle('is-active', zs[i] === zoomBtn);
        return;
      }
      var trackBtn = ev.target.closest('[data-tg-tracks] button');
      if (trackBtn) {
        state.track = trackBtn.getAttribute('data-track');
        var ts = root.querySelectorAll('[data-tg-tracks] button');
        for (var j = 0; j < ts.length; j++) ts[j].classList.toggle('is-active', ts[j] === trackBtn);
        renderGrid();
      }
    });
  }

  /* ---------- загрузка ---------- */
  fetch(dataUrl)
    .then(function (r) { return r.json(); })
    .then(function (json) {
      state.data = json;
      if (initialTracks.length) state.track = initialTracks[0];
      renderShell();
      root.setAttribute('data-zoom', state.zoom);
      renderGrid();
      bind();
    })
    .catch(function () {
      root.innerHTML = '<p class="tg__empty">Не удалось загрузить расписание. ' +
        'Откройте страницу через веб-сервер или позвоните: ' +
        '<a href="tel:+73422567892">+7 (342) 2-56789-2</a>.</p>';
    });
})();
