$(document).ready(function() {

    var varsayilanFontBuyuklugu = $('.js-font').css('font-size');

    $('#t-bigger').click(function() {
        var fontBuyukluguFloat = parseFloat($(".js-font").css('font-size'));
        var yeniFontBuyuklugu = fontBuyukluguFloat * 1.1;

        if (yeniFontBuyuklugu < 30)
            $(".js-font").css({ 'font-size': yeniFontBuyuklugu });
    });
    $('#t-smaller').click(function() {
        var fontBuyukluguFloat = parseFloat($('.js-font').css('font-size'));
        var yeniFontBuyuklugu = fontBuyukluguFloat * 0.9;

        if (yeniFontBuyuklugu > 12)
            $('.js-font').css({ 'font-size': yeniFontBuyuklugu });
    });
})