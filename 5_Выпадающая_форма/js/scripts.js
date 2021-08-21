$(function () {
    var search = $('.search')
    var btnOpen = $('#search')
    var btnClose = $('#close')

    btnOpen.on('click', function () {
        search.animate({
            "top": 0
        }, 600)
    })

    btnClose.on('click', function () {
        search.animate({
            "top": '-150px'
        }, 600)
    })
});