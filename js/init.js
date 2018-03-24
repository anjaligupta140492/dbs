window.posts = false;
$(document).on('click', '.filters .nav-link', function(e) {
  e.preventDefault();
  var type = $(this).data('type');
  if (type !== "all") {
    $('.post-item').removeClass('animate');
    $('.post-item').hide();
    $('.post-item.' + type).show();
    $('.post-item.' + type).addClass('animate');
  } else {
    $('.post-item').show();
    $('.post-item').addClass('animate');
  }
});
$(document).ready(function() {
  $('#quick_links').addClass('animate');

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var className = ".nav-background";
    if (scroll >= 64) {
      $(className).slideDown('slow');
      $(className).addClass("navbar-fixed");
    } else {
      $(className).slideUp('slow');
      $(className).removeClass("navbar-fixed");
    }
    console.log(scroll);
    if (scroll >= 500 && !window.posts) {
      window.posts = true;
      $('.post-item').each(function(index, element) {
        $(element).addClass('animate');
      });
    }

  });
});
