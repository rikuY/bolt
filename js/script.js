(function() {

  var open = document.getElementById('open');
  var contact = document.getElementById('contact');
  var contactText = document.getElementById('contactText');
  var head = document.getElementById('head');
  var main = document.getElementById('main');

  open.addEventListener('click' ,function() {
    contact.classList.remove('hidden');
    head.classList.add('bottom');
    contactText.classList.remove('hidden');
    main.classList.add('main__margin');
    })
})();