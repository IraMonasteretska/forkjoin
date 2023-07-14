
$(document).ready(function () {

    // change header on scroll --------------------------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

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
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop:true,
    });

});