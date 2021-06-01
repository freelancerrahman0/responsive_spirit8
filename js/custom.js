$(function () {
    'use strict';
    // -----------------------

    $('#portfolio li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // portfolio js ends here

    $(window).on('load', function () {
        $('.preloader').delay(2000).fadeOut(2000);
    });


    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });

    // $('.team-slider').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     dots: true,
    // });
    $('.slider-client').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });
    $('.team-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
        ]
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