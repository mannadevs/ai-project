"user strict";

// Preloader
$(window).on("load", function () {
    $(".preloader").fadeOut(1000);
});

// Menu Click Event
let trigger = $(".header-trigger");
let dropdown = $(".menu");
if (trigger || dropdown) {
    trigger.each(function () {
        $(this).on("click", function (e) {
            e.stopPropagation();
            dropdown.slideToggle();
            trigger.toggleClass("active");
        });
    });
    dropdown.each(function () {
        $(this).on("click", function (e) {
            e.stopPropagation();
        });
    });
    $(document).on("click", function () {
        if (parseInt(screenSize) < parseInt(991)) {
            dropdown.slideUp();
            trigger.removeClass("active");
        }
    });
}

// Submenu Click Event
$(".menu .menu-item .menu-link").on("click", function (e) {
    if (parseInt(screenSize) < parseInt(991)) {
        $(this).siblings(".sub-menu").slideToggle();
    }
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-submenu");

// Detect Screen Size
let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
    screenSize = window.innerWidth;
});

// Sticky Menu
var header = document.querySelector(".header");
if (header) {
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
    });
}

// Scroll To Top Event
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});

// Click event to scroll to top
$(".scrollToTop").on("click", function () {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        300
    );
    return false;
});

// Sponsor Part
$(".sponsor-slider").slick({
    fade: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerMode: false,
    dots: false,
    arrows: false,
    nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
    prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
});

// Odometer Counter
let counter = $(".counter-item");
if (counter) {
    counter.each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (
                    var i = 0;
                    i < document.querySelectorAll(".odometer").length;
                    i++
                ) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
}

//Faq Click Event
$(".faq-item__title").on("click", function (e) {
    var element = $(this).parent(".faq-item");
    if (element.hasClass("open")) {
        element.removeClass("open");
        element.find(".faq-item__content").removeClass("open");
        element.find(".faq-item__content").slideUp(300);
    } else {
        element.addClass("open");
        element.children(".faq-item__content").slideDown(300);
        element
            .siblings(".faq-item")
            .children(".faq-item__content")
            .slideUp(300);
        element.siblings(".faq-item").removeClass("open");
        element.siblings(".faq-item").find(".faq-item__content").slideUp(300);
    }
});

var videoItem = $(".video-pop");
if (videoItem) {
    videoItem.magnificPopup({
        type: "iframe",
    });
}

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".menu li a").each(function () {
    if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
        $(this).addClass("active");
    }
});

particlesJS(
    "particles-js",

    {
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#F109BF",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#F109BF",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
        config_demo: {
            hide_card: false,
            background_color: "#b61924",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover",
        },
    }
);
