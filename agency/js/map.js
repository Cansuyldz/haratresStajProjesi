$('.js-number').each(function() {
    var count = $(this).children('[data-count]');
    $(this).mouseenter(function() {

        if (count.data('count') > 3) {
            count.prop('Counter', 0).animate({
                Counter: count.data('count')
            }, {
                duration: 800,
                easing: 'swing',
                step: function(now) {
                    count.text(Math.ceil(now));
                }
            });
        } else {
            count.prop('Counter', 8).animate({
                Counter: count.data('count')
            }, {
                duration: 800,
                easing: 'swing',
                step: function(now) {
                    count.text(Math.ceil(now));
                }
            });
        }
    });
});
$('.js-location').click(function() {
    if ($(window).width() < 768) {
        window.location.href = 'https://www.google.com/maps/search/40.981564,29.086037'
    }
})
$('.menu-ac').click(function(e) {
    e.preventDefault()
    if ($('.mobil-menu').hasClass('active')) {
        $('.mobil-menu').removeClass('active');
        $('.row').removeClass('active')
    } else {
        $('.mobil-menu').addClass('active');
        $('.row').addClass('active')
    }
})
$('.menu-kapat').click(function() {
    if ($('.mobil-menu').hasClass('active')) {
        $('.mobil-menu').removeClass('active');
        $('.row').removeClass('active')
    }
})
$('.cas-item').click(function() {
    var _t = $(this);
    if (_t.hasClass('active')) {
        _t.removeClass('active')
    } else {
        _t.closest('.mobile-accordion').find('.cas-item.active').removeClass('active')
        _t.addClass('active')

    }



})