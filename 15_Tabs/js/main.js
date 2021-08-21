$(document).ready(function () {
  var $navLink = $("li");
  var $tabPane = $(".tab-pane");

  $navLink.click(function (e) {
    e.preventDefault();
    $navLink.removeClass("active");
    $tabPane.removeClass('active')
    $(this).attr("class", "active");
    var atr = $(this).find("a").attr("href");
    $(`${atr}`).attr('class', 'tab-pane active')
  });
});