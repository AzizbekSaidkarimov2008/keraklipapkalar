$(document).ready(function () {
  var $menu = $("menu");
  var $link = $(".menu-link");
  var $btn = $(".close-btn");
  var $navLink = $("menu a");
  var $main = $("#main");
  var $news = $("#news");
  var $feedback = $("#feedback");
  var $maps = $("#maps");
  var $section = $('section')
  $link.on("click", function () {
    $menu.css({ transform: "translateX(0)", transition: "1s" });
  });
  $btn.on("click", function () {
    $menu.css({ transform: "translateX(-100%)", transition: "1s" });
  });
  $navLink.click(function () {
    var $attr = $(this).addClass('active').attr('href')
    var $top = $($attr).offset().top
    $('html, body').animate({
      scrollTop: $top
  }, 1000)
  });
 
});