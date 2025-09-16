//SCROLLING IMAGES
const scrolling_images = document.querySelector("#scrolling__images");

if (scrolling_images) {
  var swiper = new Swiper("#scrolling__images .mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    speed: 2000,
    allowTouchMove: false,
    simulateTouch: false,
    grabCursor: false,
    keyboard: false,
    mousewheel: false,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 10,
        spaceBetween: 50,
      },
    },
  });
}
