document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".main__navbar");
  const navUl = document.querySelector(".main__navbarList");
  const headerMenuButtons = document.querySelector(".header__menu-icon");
  const menuBackground = document.querySelector(".menuBackground");
  const slideToggler = document.querySelector(".slide-toggle");
  const slide = document.querySelectorAll(".slide");
  const priceLaptop = document.querySelector(".price_position");
  const callButton = document.querySelector(".header__callButtonWrapper");
  const formCloseBtn = document.querySelector(".application__close-btn");
  const application = document.querySelector(".application-form__area");
  const formBackground = document.querySelector(".form__background");
  const wrapper = document.querySelector(".wrapper");
  const footerBtn = document.querySelector(".footer__btn");

  headerMenuButtons.addEventListener("click", () => {
    nav.classList.toggle("main__navbar_active");
    menuBackground.classList.toggle("menuBackground_active");
    navUl.classList.toggle("main__navbarList_active");
    headerMenuButtons.classList.toggle("header__menu-icon_active");
  });

  menuBackground.addEventListener("click", () => {
    menuBackground.classList.toggle("menuBackground_active");
    nav.classList.toggle("main__navbar_active");
    navUl.classList.toggle("main__navbarList_active");
    headerMenuButtons.classList.toggle("header__menu-icon_active");
  });

  slideToggler.addEventListener("click", () => {
    slide.forEach((slide) => {
      slide.classList.toggle("slide_active");
    });
  });

  slideToggler.addEventListener("click", () => {
    slideToggler.classList.toggle("slide-toggle_active");
    priceLaptop.classList.toggle("price_position_active");
    wrapper.classList.toggle("wrapper_active");
  });

  callButton.addEventListener("click", () => {
    application.classList.toggle("application-form__area_active");
    formBackground.classList.toggle("form__background-active");
  });

  footerBtn.addEventListener("click", () => {
    application.classList.toggle("application-form__area_active");
    formBackground.classList.toggle("form__background-active");
  });

  formCloseBtn.addEventListener("click", () => {
    application.classList.toggle("application-form__area_active");
    formBackground.classList.toggle("form__background-active");
  });
});
