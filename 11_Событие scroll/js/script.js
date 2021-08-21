$(document).ready(function () {
  var $top = $("#top");

  $(window).scroll(function () {
    var $windowtop = $(this).scrollTop();

    if ($windowtop >= 200) {
      $top.fadeIn();
    } else {
      $top.fadeOut();
    }
    // $('#top').html('')
    // $('#top').append('Top : ' + $('#top').scrollTop(300).$('#top').css('display', 'block'))
    // $('#top').append('<br>Left : ' + $('#top').scrollLeft())
  });
});