$('.js-number').hover(function() {
    console.log('hasan')
    var goNumber = $(this).text().replace('+', '');
    var number = 0;
    for (i = 0; goNumber.length; i++) {
        number += 1
        $(this).html(number)
    }
})