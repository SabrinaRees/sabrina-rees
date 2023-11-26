$(document).ready(function() {
  $('.hamburger-wrapper').click(function() {
      $('.mobile-menu').fadeToggle(300);
      $('.hamburger-wrapper .hamburger-menu').toggleClass('active');
  });
});