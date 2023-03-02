 $('.nav-holder').click(function() {
     $('body').removeClass('menu-open');
     $('.nav-holder').find('.menu').removeClass('active')
     $('.overlay').removeClass('bg-1');


 })
 $('#full-menu-1 .active').click(function() {
     $('body').removeClass('menu-open');
     $('.nav-holder').find('.menu').removeClass('active')
     $('.overlay').removeClass('bg-1');


 })
 $('#full-menu-1').click(function() {
     $('body').addClass('menu-open');

     setTimeout(function() {
         if ($('.nav-holder.main').hasClass('active')) {
             $('.nav-holder').find('.menu').addClass('active');
             $('.overlay').addClass('bg-1')
         }
     }, 750)
 });