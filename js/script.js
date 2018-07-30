(function () {
  var bar = document.getElementById('bar');
  var menu = document.getElementById('menu');

  bar.addEventListener('click' ,function() {
  menu.classList.remove('hidden');
  bar.classList.remove('bar')
  });
})();