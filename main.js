document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerButton.addEventListener("click", function () {
      hamburgerButton.classList.toggle("active");
      mobileMenu.classList.toggle("mob-show");
  });
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });