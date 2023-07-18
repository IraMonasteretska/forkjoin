
$(document).ready(function () {

    // change header on scroll --------------------------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    // burger menu ---------------------------------------//
    $('.burger-btn').click(function () {
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('active');
    })

    // submenu ---------------------------------------//
    function submenu() {
        $('.submenu').off('click').on('click', function (e) {
            e.preventDefault();
            $(this).find('ul').slideToggle();
        })
    }
    if ($(window).width() < 992) {
        submenu();
    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            submenu();
        } else {
            $('.submenu').off('click');
            $('.submenu ul').slideDown();
        }
    })


    // approach slider --------------------------------- //
    var swiper = new Swiper(".approach__slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                var name = $('.approach__slide').eq(index).data('name');
                return '<span class="' + className + '">' + name + '</span>';
            },
        },
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
    });

});