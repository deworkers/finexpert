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
        $('.j-submenu').on('mouseenter', function() {
            $('.j-submenu').removeClass('open');
            $(this).addClass('open');
        });

        $('.menu-one').on('mouseleave', function() {
            $('.j-submenu').removeClass('open');
        });

        $('.j-submenu-box').overlayScrollbars({ });
    } else {

    }

    $('.personal-modal-descr').overlayScrollbars({ 
        overflowBehavior : {
            x : "hidden",
            y : "scroll"
        },
    });

    $('.tab-list__one').on('click', function() {
        $(this).parents('.tab-list').find('.tab-list__one').removeClass('active');
        $(this).addClass('active');
        idx = $(this).index();

        $(this).parents('.tabs').find('.tab-one').hide().removeClass('open');
        $(this).parents('.tabs').find('.tab-one').eq(idx).show().addClass('open');
    });

    $('.price-tab-list__one').on('click', function() {
        $(this).parents('.price-tab-list').find('.price-tab-list__one').removeClass('active');
        $(this).addClass('active');
        idx = $(this).index();

        $('.price-tabs').find('.price-tab').hide().removeClass('open');
        $('.price-tabs').find('.price-tab').eq(idx).show().addClass('open');
    });

    var mainSlider = new Swiper('.slider', {
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    mainSlider.on('slideChangeTransitionStart', function (event) {
        $('.slider-descr__title, .slider-descr__text, .slider-descr__more').removeClass('fadeInUpSlide').addClass('hidden');

    });

    mainSlider.on('slideChangeTransitionEnd', function (event) {
        $('.swiper-slide-active').find('.slider-descr__title, .slider-descr__text, .slider-descr__more').removeClass('hidden');
        $('.swiper-slide-active').find('.slider-descr__title, .slider-descr__text, .slider-descr__more').addClass('fadeInUpSlide');
    });

    $("#order-form").validate({
        errorElement: "em",
        rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            }
        },

        messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            },
        },

        submitHandler: function(form) {
            $('.order-form').html('<div class="order-form__title">Ваша заявка отправлена</div>')
        }
    });

    $("#service-order").validate({
        errorElement: "em",
        rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            },
            personal: {
                required: true
            }
        },

        messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            },
            personal: {
                required: "Вы должны согласиться на обработку персональных данных"
            }
        },

        submitHandler: function(form) {
            $('.service-order').html('<div class="content"><div class="form-title">Ваша заявка отправлена</div></div>')
        }
    });

    $('input[type="checkbox"]').on('change', function() {
        $(this).next('.error').remove();
    });

    $('input[name="phone"]').mask("+7(999) 999-99-99",{placeholder:"_"});

    var changeSert = function() {
        $('.changeSert').on('click', function(event) {
            event.preventDefault();
            var getid = $(this).data('id');
            $.ajax({
                type: 'POST',
                url: './ajax/sert.php',
                data: {'blockId': getid}, // передача ID блока
                success: function(data) {
                    $('#sert').find('.personal-modal').html(data);
                    changeSert();
                }
            });
        });
    } 

    changeSert();

    var changePersonal = function() {
        $('.changePersonal').on('click', function(event) {
            event.preventDefault();
            var getid = $(this).data('id');
            $.ajax({
                type: 'POST',
                url: './ajax/personal.php',
                data: {'blockId': getid}, // передача ID блока
                success: function(data) {
                    $('#personal').find('.personal-modal').html(data);
                }
            });
        });
    } 

    changePersonal();


    $('.table').each(function() {
        $(this).wrap('<div class="table-box"></div>')
    });
});



$(window).scroll(function() {
    if ( $('html, body').scrollTop() > 100 ) {
        $('.head-menu, .head-order, .go-top').addClass('srcolled');
    } else {
        $('.head-menu, .head-order, .go-top').removeClass('srcolled');
    }
});