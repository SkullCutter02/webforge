const hamburger = document.querySelector(".hamburger");
const navContent = document.getElementById("mobile-nav");
const body = document.querySelector("body");
const mobileNavButtons = document.querySelector(".mobileNavButtons");
hamburger.addEventListener("click", toggleMenu);
mobileNavButtons.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  hamburger.classList.toggle("open");
  navContent.classList.toggle("enabled");
  body.classList.toggle("noscroll");
}
