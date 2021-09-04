let lastScroll = 0;

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;

  if (scroll > lastScroll) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }

  lastScroll = scroll;
});
