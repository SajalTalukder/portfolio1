//////////////////////////////////////////////////////////////
//  NAVIGATION
/////////////////////////////////////////////////////////////

const navbar = () => {
  const navigaton__overlay = document.querySelector(".navigation__overlay");
  const navigaton__burger = document.querySelector(".navigation__burger");
  const navigation = document.querySelector(".navigation");
  navigaton__burger.addEventListener("click", () => {
    navigaton__overlay.classList.toggle("navigation__overlay__show");
    navigaton__burger.classList.toggle("nav__toggle");
  });
  navigation.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      navigaton__overlay.classList.remove("navigation__overlay__show");
      navigaton__burger.classList.remove("nav__toggle");
    }
  });
};

navbar();
//////////////////////////////////////////////////////////////
//  SLIDER
/////////////////////////////////////////////////////////////
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  let curSlide = 0;
  const maxSlide = slides.length;
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };
  const init = function () {
    goToSlide(0);
  };
  init();
  setInterval(nextSlide, 7000);
};
slider();

/////////////////////////////////////////////////////////////
// Top to bottom
/////////////////////////////////////////////////////////////

const topBottom = () => {
  const top_bottom = document.querySelector(".top-bottom");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      top_bottom.classList.add("top-bottom__show");
    } else {
      top_bottom.classList.remove("top-bottom__show");
    }
  });
};
topBottom();

/////////////////////////////////////////////////////////////
// smoth scroll
/////////////////////////////////////////////////////////////

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
});

/////////////////////////////////////////////////////////////
// Animation
/////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
gsap.from(".about__content", {
  scrollTrigger: ".about__content",
  x: -300,
  duration: 1,
  opacity: 0,
});
gsap.from(".about__image", {
  scrollTrigger: ".about__image",
  x: 300,
  duration: 1,
  opacity: 0,
});
gsap.from(".project", {
  scrollTrigger: ".project",
  x: -300,
  duration: 1,
  opacity: 0,
  stagger: 0.6,
});
gsap.from(".services", {
  scrollTrigger: ".services",
  y: 300,
  duration: 0.9,
  opacity: 0,
  stagger: 0.3,
});
gsap.from(".work--1", {
  scrollTrigger: ".work--1",
  x: 300,
  duration: 1,
  opacity: 0,
});
gsap.from(".work--2", {
  scrollTrigger: ".work--2",
  x: -300,
  duration: 1,
  opacity: 0,
});
gsap.from(".recent-work", {
  scrollTrigger: ".recent-work",
  x: -300,
  duration: 1,
  opacity: 0,
  stagger: 0.6,
});
gsap.from(".price", {
  scrollTrigger: ".price",
  y: 300,
  duration: 0.9,
  opacity: 0,
  stagger: 0.3,
});
gsap.from(".post", {
  scrollTrigger: ".post",
  y: 300,
  duration: 0.9,
  opacity: 0,
  stagger: 0.3,
});
