const lightField = document.querySelector('.new-head-dropdown');
const grayField = document.querySelector('.new-gray-field');
const mobileMenu = document.querySelector('.new-mob-menu');
const body = document.getElementById('body');
const btn = document.querySelector('.new-header-burger');


function openMobile(e) {
  e.preventDefault();
  lightField.classList.add('open');
  mobileMenu.classList.add('slide');
  body.classList.add('no-scroll');
  grayField.addEventListener('click', closeMobile);
}

function closeMobile(e) {
  e.preventDefault();
  lightField.classList.remove('open');
  mobileMenu.classList.remove('slide');
  body.classList.remove('no-scroll');
}


const items = document.querySelectorAll('#myList li');
  let currentIndex = 0;

  setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
  }, 4000);


  btn.addEventListener('click', openMobile);