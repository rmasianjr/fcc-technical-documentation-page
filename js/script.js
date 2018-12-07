var burger = document.querySelector('.burger');
var navbar = document.querySelector('#navbar');
var closeBtn = document.querySelector('.btn-close');

function openDrawer() {
  navbar.style.left = 0;
}

function closeDrawer() {
  navbar.style.left = '-25rem';
}

burger.addEventListener('click', openDrawer);
closeBtn.addEventListener('click', closeDrawer);
