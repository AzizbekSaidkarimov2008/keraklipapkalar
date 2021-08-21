// jqdoc
$(document).ready(function () {
    $('.ask').on('click', function () {
        // $('.ask').parent().find('.answer').slideUp()
        // $(this).parent().find('.answer').slideToggle()

        var answ = $(this).parent().find('.answer')
        $('.ask').parent().find('.answer').not(answ).slideUp()
        answ.slideToggle()
    })



});

