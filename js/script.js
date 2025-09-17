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

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(
    ".independent-grid-card-text-description-items-count"
  );

  const animateCounter = (el) => {
    const from = parseInt(el.getAttribute("data-aniamte-count-from")) || 0;
    const to = parseInt(el.getAttribute("data-aniamte-count-to")) || 0;
    const duration = 2000; // animation time in ms
    const startTime = performance.now();

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(from + (to - from) * progress);
      el.textContent = value;

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target); // run once
        }
      });
    },
    { threshold: 0.3 } // trigger when 30% visible
  );

  counters.forEach((counter) => observer.observe(counter));
});
