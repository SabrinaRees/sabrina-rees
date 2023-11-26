

$(document).ready(function() {
  $('.hamburger-wrapper').click(function() {
      $('.mobile-menu').fadeToggle(300);
      $(this).find('.hamburger-menu').toggleClass('active');
  });
});