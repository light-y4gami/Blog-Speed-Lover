const $NAV = document.querySelector(".nav");
const $BTN = document.querySelector("button");
const $SECTION = document.querySelector("section");


window.addEventListener("DOMContentLoaded", () => {
  scrollBtn();
});

function scrollBtn() {
  window.addEventListener("scroll", () => {
    let scroll = Math.floor(scrollY);

    if (scroll > 800) {
      $BTN.classList.remove("hide");
      $NAV.classList.add("active");
    } else {
      $BTN.classList.add("hide");
      $NAV.classList.remove("active");
    }
  });

  $BTN.addEventListener("click", () => {
    scrollTo(0, 0);
  });
}
