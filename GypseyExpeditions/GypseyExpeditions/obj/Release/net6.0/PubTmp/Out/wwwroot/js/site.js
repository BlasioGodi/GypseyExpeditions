"use strict";

console.log("Script Init");

/* Page Loader */
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
});

/* OffCanvas Menu Button */
const OffCanvas = {
    offCanvasButton: document.getElementById("offcanvasButton"),
    menu: document.getElementById("menu"),
    navButtonclose: document.getElementById("nav-button-close"),
    collapsePackages: document.getElementById("collapsePackages"),
    collapseDestinations: document.getElementById("collapseDestinations"),
    offcanvas: document.getElementById("offcanvasGypsey"),
    overlay: document.getElementById("overlay"),
}

const mobnavAngle = {
    navlinkAngle1: document.getElementById("nav-link-mob-angle-1"),
    navlinkAngle2: document.getElementById("nav-link-mob-angle-2"),
    navlinkAngle3: document.getElementById("nav-link-mob-angle-3"),
    navlinkAngle4: document.getElementById("nav-link-mob-angle-4"),
    navlinkAngle5: document.getElementById("nav-link-mob-angle-5")
}

const mobnavButton = {
    mobnavButton1: document.getElementById("nav-link-btn-1"),
    mobnavButton2: document.getElementById("nav-link-btn-2"),
    mobnavButton3: document.getElementById("nav-link-btn-3"),
    mobnavButton4: document.getElementById("nav-link-btn-4"),
    mobnavButton5: document.getElementById("nav-link-btn-5")
};

const toggleClass = (element) => {
    element.classList.toggle("nav-link-mobile-btn");
};

// Toggle NavLinkButton corresponding to clicked NavLinkAngle
for (const buttonKey in mobnavButton) {
    if (mobnavButton.hasOwnProperty(buttonKey)) {
        const navmobButton = mobnavButton[buttonKey];
        navmobButton.addEventListener('click', () => {
            console.log('Button clicked:', navmobButton.id);
            const correspondingAngleId = navmobButton.dataset.correspondingAngle;
            const correspondingAngle = mobnavAngle[correspondingAngleId];
            console.log('CorrespondingAngleId:', correspondingAngleId);

            toggleClass(correspondingAngle);
        });
    }
}

OffCanvas.offCanvasButton.onclick = function () {
    OffCanvas.menu.classList.toggle("open-menu");
}

/* OffCanvas Custom Overlay */
function toggleOffcanvas() {  
    document.body.classList.toggle('offcanvas-open'); // Toggle class to prevent scrolling
    OffCanvas.offcanvas.classList.toggle('show'); // Toggle Bootstrap's 'show' class
    OffCanvas.collapsePackages.classList.remove('show');
    OffCanvas.collapseDestinations.classList.remove('show');
    OffCanvas.overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block'; // Toggle the overlay

    for (const angles in mobnavAngle) {
        mobnavAngle[angles].classList.remove("nav-link-mobile-btn");
    }  
}
// Event Listener
OffCanvas.offCanvasButton.addEventListener('click', toggleOffcanvas);

/* Button Submit */
const HES_L = {
    submit: document.getElementById("sub_button"),
    email: document.getElementById("emailForm"),
    loading: document.getElementById("btn-loading"),
    contactform: document.getElementById("contact-form")
};

let canSubmit = false;

function HES_can_submit() {
    let email = HES_L.email.value.trim();
    if (email.length > 4) {
        HES_enable_submit()
    } else {
        HES_disable_submit()
    }
}

function HES_enable_submit() {
    HES_L.submit.classList.add("submit_enabled");
    HES_L.submit.disabled = false;
    canSubmit = true;
}

function HES_disable_submit() {
    HES_L.submit.classList.remove("submit_enabled");
    HES_L.submit.disabled = true;
    canSubmit = false;
}

function HES_set_event_listeners() {
    HES_L.email.addEventListener("keyup", HES_can_submit);
}


var Gypsey = {
    init: function () {
        this.Component.init();
    },
    Component: {
        init: function () {
            this.forms();
        },
        forms: function () {
            // Contact Form
            var $contactForm = $('#contact-form');

            if ($contactForm.length > 0) {
                HES_set_event_listeners();
            }
        }
    }
};

$(document).ready(function () {

    Gypsey.init();

    /* Animation SlideIn */
    if ($(".contact-box").length > 0) {
        var animationDone = false;

        $(window).scroll(function () {

            if (!animationDone) {
                var scrollPos = $(window).scrollTop();
                var contactBox = $(".contact-box");
                var sectionOffset = contactBox.offset().top;

                if (scrollPos > sectionOffset - $(window).height() / 2) {
                    contactBox.removeClass("is-notvisible").addClass("animated slideInDown");
                    animationDone = true;
                }
            }
        });
    }

    /* Sticky Setting */
    $(function () {
        "use strict";
        if ($(".navbar-sticky").length > 0) {
            $(".navbar-sticky").sticky({ topSpacing: 0 });
            $(".navbar-sticky").css('z-index', '100');
            $(".navbar-sticky").addClass("top-nav-collapse");
        };
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 56) { // Adjusted based on navbar height
            $(".navbar-sticky").addClass("animated slideInDown");
            /*$(".navbar-sticky").addClass('bg-light');*/
        } else {
            $(".navbar-sticky").removeClass("animated slideInDown");
            /*$(".navbar-sticky").removeClass('bg-light');*/
        }
    });

    /* Count */
    $(function () {
        "use strict";
        $(".fact-number").appear(function () {
            var dataperc = $(this).attr('data-perc');
            $(this).each(function () {
                $(this).find('.factor').delay(6000).countTo({
                    from: 10,
                    to: dataperc,
                    speed: 3000,
                    refreshInterval: 50,
                });
            });
        });
    });

    /* Isotope Layout */
    $(function () {
        var $listing = $(".box-listing").isotope({
            itemSelector: '.box-item',
            layoutMode: 'fitRows',
            getSortData: {
                number: '.item-id parseInt',
                name: '.item-name',
                category: '[data-category]'
            }
        });

        $("#filters").on("click", "button", function () {
            var filterValue = $(this).attr('data-filter');
            $listing.isotope({ filter: filterValue });
        });

        $("#sorts").on("click", "button", function () {
            var sortValue = $(this).attr('data-sort-by');
            $listing.isotope({ sortBy: sortValue });
        });
    });

    $(function () {
        var $listing = $(".portfolio-grid").isotope({
            masonry: {
            },
            getSortData: {
                number: '.item-id parseInt',
                name: '.item-name',
                category: '[data-category]'
            }
        });

        $("#project-filter").on("click", "a", function () {
            event.preventDefault();

            var filterValue = $(this).attr('data-filter');
            $listing.isotope({ filter: filterValue });
        });
    });
});

/* Footer Toggle Menu Button*/
const buttons = {
    button1: document.getElementById("btn-close-1"),
    button2: document.getElementById("btn-close-2"),
    button3: document.getElementById("btn-close-3"),
    button4: document.getElementById("btn-close-4")
};

for (const key in buttons) {
    if (buttons.hasOwnProperty(key)) {
        buttons[key].setAttribute('data-touch-count', 0);
        buttons[key].setAttribute('data-click-count', 0);

        buttons[key].addEventListener('click', () => {
            buttons[key].classList.add("btn-click");
            const clickCount = parseInt(buttons[key].getAttribute('data-click-count'));
            buttons[key].setAttribute('data-click-count', clickCount + 1); // increment click count by 1 for each button

            if (clickCount === 1) {
                buttons[key].classList.remove("btn-click");
                buttons[key].setAttribute('data-click-count', 0); // reset click count to 0 for each button
            }
        });

        buttons[key].addEventListener('touchstart', () => {
            buttons[key].classList.add("btn-click");
            const touchCount = parseInt(buttons[key].getAttribute('data-touch-count'));
            buttons[key].setAttribute('data-touch-count', touchCount + 1); // increment touch count by 1 for each button
        });

        buttons[key].addEventListener('touchend', () => {
            const touchCount = parseInt(buttons[key].getAttribute('data-touch-count'));
            if (touchCount === 1) {
                buttons[key].classList.remove("btn-click");
                buttons[key].setAttribute('data-touch-count', 0);
            }
        });
    }
}

