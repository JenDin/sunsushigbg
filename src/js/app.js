"use strict";

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenuBtn = document.getElementById("close-mobile-menu-btn");

mobileMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
  //   mobileMenuBtn.classList.add("hidden");
});

closeMobileMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
  //   mobileMenuBtn.classList.remove("hidden");
});
