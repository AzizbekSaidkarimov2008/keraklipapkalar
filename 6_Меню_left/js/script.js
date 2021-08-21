$(function () {
    var $menuBtn = $('.show_hide-menu')
    var $menu = $('.menu')
    var $icon = $('.fa-sign-in')

    $menuBtn.on('click', function () {

        if ($menu.css('left') === '-300px') {
            $menu.animate({
                "left": 0
            }, 500)
            $icon.css('transform', 'rotate(180deg)')
        } else {
            $menu.animate({
                "left": '-300px'
            }, 500)
            $icon.css('transform', 'rotate(0deg)')
        }
    })
});
