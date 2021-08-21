var ask = $('.ask')

ask.click(function () {
    // $(this).next().css({ "color": 'blue', 'display': 'block', 'background': 'red' })
    // $(this).next().slideToggle(500); // slideDown()
    // $(this).parent().find('.answer').slideDown()
    // $(this).parent().find('.answer').slideUp(1000)

    $(this).parent().find('.answer').slideToggle(1000)
})