const tl = gsap.timeline();

const open = document.querySelector(".ri-menu-line");
const close = document.querySelector(".ri-close-line");

tl.to("#nav-open", {
  right: 0,
  duration: 0.5,
});

tl.from("ul li", {
  x: 100,
  duration: 0.6,
  stagger: 0.2,
  opacity: 0,
});

tl.from("#nav-open i", {
  opacity: 0,
  duration: 0.35,
});

tl.pause();

open.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
