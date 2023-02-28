import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

// Зміна кольору бекграунду хедера при скролі
const header = document.querySelector(".header");
window.onscroll = () => {
  if (window.scrollY > 50) {
    header.classList.add("header--scrolling");
  } else {
    header.classList.remove("header--scrolling");
  }
};

// Мобільне меню
let viewportWidth = window.innerWidth;
if (viewportWidth < 768) {
  const body = document.querySelector("body");
  const nav = document.querySelector(".nav");
  const mobileMenuButton = document.querySelector(".mobile-menu");
  const openButton = document.querySelector(".mobile-menu__open-icon");
  const closeButton = document.querySelector(".mobile-menu__close-button");
  const links = document.querySelectorAll(".nav__link");

  // слухаємо клік по кнопці меню
  mobileMenuButton.addEventListener("click", onMenuClick);
  // слухаємо натискання клавіші Esc
  document.addEventListener("keydown", onEsc);
  // слухаємо клік по пункту меню
  links.forEach((each) => {
    each.addEventListener("click", onMenuLinkClick);
  });

  function onMenuClick() {
    nav.classList.toggle("nav__open");
    openButton.classList.toggle("mobile-menu__open-icon--active");
    closeButton.classList.toggle("mobile-menu__close-button--active");
    body.classList.toggle("body__lock");
  }

  function onEsc(event) {
    if (event.key === "Escape") {
      nav.classList.remove("nav__open");
      openButton.classList.add("mobile-menu__open-icon--active");
      closeButton.classList.remove("mobile-menu__close-button--active");
      body.classList.toggle("body__lock");
    }
  }

  function onMenuLinkClick() {
    nav.classList.remove("nav__open");
    openButton.classList.add("mobile-menu__open-icon--active");
    closeButton.classList.remove("mobile-menu__close-button--active");
    body.classList.remove("body__lock");
  }
}
