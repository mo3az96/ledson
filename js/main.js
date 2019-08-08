$(document).ready(function () {
    // // User Dropdown Menu
    // $('.userbtn').click(function () {
    //     $('.drop-menu').toggle();
    // });
    // $('body').click(function () {
    //     $('.drop-menu').hide();
    // });
    // $(".drop-menu").click(function (e) {
    //     e.stopPropagation();
    // });
    // $(".userbtn").click(function (e) {
    //     e.stopPropagation();
    // });

    // Mobile Side Menu 
    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
    });
    $(".nav-links").click(function (e) {
        e.stopPropagation();
    });
    // Mobile Search 
    $('.search-icon').click(function () {
        $('.search-pop').fadeIn(500);
        $('body').css("overflow", "hidden");
    });
    $('.search-pop').click(function () {
        $('.search-pop').fadeOut(500);
        $('body').css("overflow", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });
    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 1,
                nav: true,
                dots: true
            },
        }
    });


    if ($(window).width() < 992) {
        $(".linksheading").addClass("accordion");
        $(".foot-links").addClass("panel");
    }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});