$(function () {
    'use strict';
    // -----------------------

    $('#portfolio li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // portfolio js ends here


    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });

    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });
    $('.slider-client').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });

    // slider js ends here

    var mixer = mixitup('#portfolio .alltype-img');

});