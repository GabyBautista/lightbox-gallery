const menu = document.querySelector(".nav-bar");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click" , toggleMenu);
closeMenuBtn.addEventListener("click" , toggleMenu);
