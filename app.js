const navigaton__overlay = document.querySelector(".navigation__overlay");
const navigaton__burger = document.querySelector(".navigation__burger");

navigaton__burger.addEventListener("click", () => {
  navigaton__overlay.classList.toggle("navigation__overlay__show");
  navigaton__burger.classList.toggle("nav__toggle");
});
