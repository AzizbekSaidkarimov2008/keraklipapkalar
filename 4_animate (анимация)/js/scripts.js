$(function () {
    var ask = $('.ask')
    ask.next().css('opacity', '0')
    ask.on('click', function () {
        var answ = $(this).next()
        answ.animate({
            "opacity": '1',
            "height": "500px",
            "fontSize": '50px'
        }, 1000).animate({
            "opacity": 0.7,
            "width": '700px'
        }, 2000).animate({
            "opacity": 0.9,
            "width": '1000px',
            "height": "600px",
        }, 2000).animate({
            "opacity": 0.5,
            "width": '700px'
        }, 2000)
    })
});