console.log("Manish Yogi website");

// JavaScript for the navigation bar 
const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector("nav");

navToggler.addEventListener("click", function() {
  nav.classList.toggle("active");
});
