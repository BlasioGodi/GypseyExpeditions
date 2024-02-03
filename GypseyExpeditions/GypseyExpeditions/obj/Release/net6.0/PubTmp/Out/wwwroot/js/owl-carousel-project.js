
//Owl Carousel
$(document).ready(function () {
    $('.owl-one').owlCarousel({
        startPosition: 3,
        loop: false,
        rewind: true,
        margin: 10,
        responsiveClass: true,
        center: true,
        nav: true,
        dots: true,
        dotsEach: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $('.owl-two').owlCarousel({
        startPosition: 3,
        loop: true,
        rewind: true,
        margin: 10,
        responsiveClass: true,
        center: false,
        nav: true,
        dots: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },

            1200: {
                items: 4,
            }
        }
    });
    $('.owl-three').owlCarousel({
        startPosition: 1,
        loop: false,
        rewind: true,
        margin: 10,
        responsiveClass: true,
        center: true,
        nav: true,
        dots: true,
        dotsEach: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
});


