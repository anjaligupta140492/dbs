$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var className = ".nav-background";
    console.log(scroll);
    if (scroll >= 64) {
      $(className).slideDown('slow');
      $(className).addClass("navbar-fixed");
    } else {
      $(className).slideUp('slow');
      $(className).removeClass("navbar-fixed");
    }
  });
});
