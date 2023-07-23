
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

    // checked form policy ----------------------------------//
    $('.checkfield input').on('click', function () {
        $('.formbtn').toggleClass('disabled');
    });






    // OUR PROJECTS----------------------------------------------------------------
    
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.projectswelcomesect__logo').css('right', paddingContainer)


    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.projectswelcomesect__logo').css('right', paddingContainer)
    });



    $('.customselect').select2({
        minimumResultsForSearch: -1,
        // dropdownCssClass: "headerselectdropdown"
    });

    $(".projsidebox ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 105 }, 1500);
    });

    const links = document.querySelectorAll('.projsidebox li a');
    window.addEventListener('scroll', () => {
        const anchors = document.querySelectorAll('.projectcontent__wrap [id]');
        anchors.forEach(anchor => {
            if (anchor.closest('.projectcontent__wrap')) {
                const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                if (window.pageYOffset >= anchorTop - 110) {
                    links.forEach(link => {
                        const correspondingLink = document.querySelector(`.projsidebox li a[href="#${anchor.id}"]`);
                        if (correspondingLink) {
                            link.classList.remove('active');
                            correspondingLink.classList.add('active');
                        }
                    });
                }
            }
        });
    });

    // SERVICE----------------------------------------------------------------

    $('.accordeon__header').click(function(){
        $(this).toggleClass('open');
        $(this).next('.accordeon__body').slideToggle();
    });






});