$(window).scroll(function() {
    if ($(this).scrollTop() > 30 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop: '0px' },"1200");return false})})