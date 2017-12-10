$(document).ready(function() {
    $('.menu-one').each(function() {
        if ( $(this).children('ul').length > 0 ) {
            $(this).addClass('j-submenu');
            $(this).find('ul').addClass('j-submenu-box');
        }
    });

    $('.j-submenu em').on('click', function(event) {
        event.preventDefault() 

        if ( !$(this).parents('.j-submenu').hasClass('open') ) {
            $('.j-submenu').removeClass('open');
            $(this).parents('.j-submenu').addClass('open');
        } else {
            $(this).parents('.j-submenu').removeClass('open');
        }
    });

    if ( $('body').width() > 1023 ) {
        $('.menu-one').on('mouseenter', function() {
            $('.j-submenu').removeClass('open');
            $(this).addClass('open');
        });

        $('.menu-one').on('mouseleaves', function() {
            $(this).removeClass('open');
        });
    }

    $('.tab-list__one').on('click', function() {
        $(this).parents('.tab-list').find('.tab-list__one').removeClass('active');
        $(this).addClass('active');
        idx = $(this).index();

        $(this).parents('.tabs').find('.tab-one').hide().removeClass('open');
        $(this).parents('.tabs').find('.tab-one').eq(idx).show().addClass('open');
    });

    var mainSlider = new Swiper('.slider', {
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
    });

});



$(window).scroll(function() {
    if ( $('html, body').scrollTop() > 100 ) {
        $('.head-menu, .head-order, .go-top').addClass('srcolled');
    } else {
        $('.head-menu, .head-order, .go-top').removeClass('srcolled');
    }
});