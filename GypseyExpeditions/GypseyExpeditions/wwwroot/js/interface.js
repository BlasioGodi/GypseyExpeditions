(function ($) {
    'use strict';

	/* Detect Mobile Device  */
	var mobileDevice = false;

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('html').addClass('mobile');
		mobileDevice = true;
	}

	else {
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}

    /* Projects Gallery  */
    $('.projects-gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 300,
            tLoading: 'Loading image #%curr%...',
            tCounter: '<span class="mfp-counter">%curr% / %total%</span>',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });
    });

})(jQuery);