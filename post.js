// Highlight the current section in the left contents rail.
(function () {
  var links = document.querySelectorAll('.rail a');
  if (!links.length) return;
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  var heads = Array.prototype.filter.call(document.querySelectorAll('article h2[id], article h3[id]'), function (h) { return map[h.id]; });
  function update() {
    var cur = heads[0];
    for (var i = 0; i < heads.length; i++) { if (heads[i].getBoundingClientRect().top < 120) cur = heads[i]; else break; }
    links.forEach(function (a) { a.classList.remove('on'); });
    if (cur) map[cur.id].classList.add('on');
  }
  document.addEventListener('scroll', update, { passive: true });
  update();
})();
