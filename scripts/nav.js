let lastScroll = 0;

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;

  if (scroll > lastScroll) {
    navbar.style.top =
      "-" + getComputedStyle(document.body).getPropertyValue("--navbarHeight");
  } else {
    navbar.style.top = "0";
  }

  lastScroll = scroll;
});
