const lightField = document.querySelector('.new-head-dropdown');
const grayField = document.querySelector('.new-gray-field');
const mobileMenu = document.querySelector('.new-mob-menu');
const body = document.getElementById('body');
const btn = document.querySelector('.new-header-burger');
const xxx = document.querySelector('.new-mob-btn-close');
const buttons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
const headModal = document.querySelector('.header-modal');
const topMenuClose = document.querySelector('.top-menu-close');
const headerBurger = document.getElementById('header-burger')
const sentinel = document.querySelector('.sticky-sentinel');
const menu = document.querySelector('.header-bottom');




function openModal(e) {
  e.preventDefault();
  headModal.classList.add('active')
  topMenuClose.addEventListener('click', closeModal)
  headModal.addEventListener('click', closeModal)
}

function closeModal(e) {
  e.preventDefault();
  headModal.classList.remove('active')
}

headerBurger.addEventListener('click', openModal)

function openMobile(e) {
  e.preventDefault();
  lightField.classList.add('open');
  mobileMenu.classList.add('slide');
  body.classList.add('no-scroll');
  grayField.addEventListener('click', closeMobile);
  xxx.addEventListener('click', closeMobile);
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

  

function switchTab(event) {
  const targetBtn = event.currentTarget;
  const targetPanelId = targetBtn.getAttribute('data-tab');
  // Очищаем активные классы у кнопок и панелей
  buttons.forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  panels.forEach(panel => panel.classList.remove('active'));
  // Добавляем активный класс текущей кнопке и панели
  targetBtn.classList.add('active');
  targetBtn.setAttribute('aria-selected', 'true');
  document.getElementById(targetPanelId).classList.add('active');
}
// Вешаем обработчики на наведение (mouseenter) и фокус (focus)
buttons.forEach(button => {
  button.addEventListener('mouseenter', switchTab);
  button.addEventListener('focus', switchTab);
});



const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Если маркер полностью ушел выше экрана (boundingClientRect.top < 0)
    // и он больше не пересекает область видимости (!entry.isIntersecting)
    if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
      menu.classList.add('is-sticky');
    } else {
      menu.classList.remove('is-sticky');
    }
  });
}, {
  threshold: [0] // Срабатывает ровно в момент пересечения границы
});

observer.observe(sentinel);