const initSwiper = () => {
  new Swiper('.swiper', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
    },
    spaceBetween: 30,
    maxBackfaceHiddenSlides: 0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        initialSlide: 2,
      },
      993: {
        slidesPerView: 3,
      },
    },
  });
};

initSwiper();
