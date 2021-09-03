const hamburger = document.querySelector(".hamburger");
const navContent = document.getElementById("mobile-nav");
const body = document.querySelector("body");
const mobileNavButtons = document.querySelectorAll("#mobile-nav li a");

hamburger.addEventListener("click", toggleMenu);

for (let i = 0; i < mobileNavButtons.length; i++) {
  mobileNavButtons[i].addEventListener("click", toggleMenu);
}

function toggleMenu(e) {
  hamburger.classList.toggle("open");
  navContent.classList.toggle("enabled");
  body.classList.toggle("noscroll");
}
