var swiper1 = new Swiper('.ci-header-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }
});