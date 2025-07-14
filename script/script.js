const burgerMenuBtn = document.querySelector("#burger-menu-btn")
const burgerMenu = document.querySelector("#burger-menu")
const burgerMenuClose = document.querySelector("#burger-menu-close")


burgerMenuBtn.addEventListener("click", () => {
    burgerMenu.style.left = "0px"
})

burgerMenuClose.addEventListener("click", () => {
    burgerMenu.style.left = "-400px"
})

 const sliderItems = document.querySelector('.slider-items');
  const photos = document.querySelectorAll('.slider-photo');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');


  let currentPosition = 0;
  let slideWidth = photos[0].offsetWidth + 20; // ширина слайда + margin-right
  const sliderWrapper = document.querySelector('.slider-wrapper');
  let visibleCount = Math.floor(sliderWrapper.offsetWidth / slideWidth);
  let maxPosition = -(slideWidth * (photos.length - visibleCount));

  function updateSlider() {
    sliderItems.style.transform = `translateX(${currentPosition}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentPosition < 0) {
      currentPosition += slideWidth;
      if (currentPosition > 0) currentPosition = 0;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPosition > maxPosition) {
      currentPosition -= slideWidth;
      if (currentPosition < maxPosition) currentPosition = maxPosition;
      updateSlider();
    }
  });

  window.addEventListener('resize', () => {
    slideWidth = photos[0].offsetWidth + 20;
    visibleCount = Math.floor(sliderWrapper.offsetWidth / slideWidth);
    maxPosition = -(slideWidth * (photos.length - visibleCount));
    if (currentPosition < maxPosition) currentPosition = maxPosition;
    if (currentPosition > 0) currentPosition = 0;
    updateSlider();
  });

  updateSlider();




   