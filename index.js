const items = document.querySelectorAll('#myList li');
  let currentIndex = 0;

  setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
  }, 4000);