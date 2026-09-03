'use strict';
/* Карусели scroll-snap: промо на главной и в хабах */
(function () {
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('[data-carousel-track]');
    var prev = root.querySelector('[data-carousel-prev]');
    var next = root.querySelector('[data-carousel-next]');
    if (!track) return;

    var slides = Array.prototype.slice.call(track.querySelectorAll('.promo-carousel__slide, .scroll-strip__item'));
    if (slides.length < 2) {
      if (prev) prev.hidden = true;
      if (next) next.hidden = true;
      return;
    }

    function scrollBy(dir) {
      var w = slides[0].offsetWidth + 16;
      track.scrollBy({ left: dir * w, behavior: 'smooth' });
    }

    if (prev) prev.addEventListener('click', function () { scrollBy(-1); });
    if (next) next.addEventListener('click', function () { scrollBy(1); });

    var timer;
    function auto() {
      clearInterval(timer);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      timer = setInterval(function () {
        if (root.matches(':hover')) return;
        var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
        if (atEnd) track.scrollTo({ left: 0, behavior: 'smooth' });
        else scrollBy(1);
      }, 6000);
    }
    auto();
    root.addEventListener('mouseenter', function () { clearInterval(timer); });
    root.addEventListener('mouseleave', auto);
  });
})();
