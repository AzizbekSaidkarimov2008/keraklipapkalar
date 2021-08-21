$(document).ready(function () {
  var $show = $(".show");
  var $hide = $(".hide");
  var $section = $("section");
  var $success = $(".success");
  var $footer = $("footer");
  $show.on("click", function () {
    $hide.css({ display: "block" });
    $show.css({ display: "none" });
    $section.slideToggle(1000);
  });
  $hide.on("click", function () {
    $show.css({ display: "block" });
    $hide.css({ display: "none" });
    // $footer.slideToggle();
    $footer.slideUp()
    // $footer.css({display:'none'})
    $section.slideToggle(1000);
  });
  $success.on("click", function () {
    $footer.slideToggle();
  });
});