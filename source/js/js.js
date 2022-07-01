const navToggleContainer = document.querySelector(".nav__toggle-container");

function burgerAnimation() {
  const lines = document.getElementsByClassName("nav__toggle-container");
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.toggle("change");
  }
}

navToggleContainer.addEventListener("click", burgerAnimation);

//Open mobile menu
const nav = document.querySelector(".nav__list");
function mobileMenu() {
  nav.classList.toggle("nav__list_opened");
}

navToggleContainer.addEventListener("click", mobileMenu);
