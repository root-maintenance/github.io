/*
-------------------------------------------------------------------------
* Template Name    : Dragon - Responsive One Page Multipurpose Template * 
* Author           : ThemesBoss                                         *
* Version          : 1.0.0                                              *
* Created          : September 2018                                     *
* File Description : Main JS file of the template                       *
*------------------------------------------------------------------------
*/

! function($) {
    "use strict";

    var Dragon = function() {};

    Dragon.prototype.initStickyAddMenu = function() {
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    },

    Dragon.prototype.initSmoothLink = function() {
        $('.nav-item a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    Dragon.prototype.initCollpsehide = function() {
        $(document).on('click', '.navbar-collapse.show', function(e) {
            if ($(e.target).is('a')) {
                $(this).collapse('hide');
            }
        });
    },

    Dragon.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset: 70
        });
    },

    Dragon.prototype.initMFPImage = function() {
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    },

    Dragon.prototype.initWorkFilter = function() {
        $(window).on('load', function() {
            var $container = $('.work-filter');
            var $filter = $('#menu-filter');
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            $filter.find('a').on("click", function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    },

    Dragon.prototype.initClientSlider = function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 10000,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });
    },

    Dragon.prototype.initFunFacts = function() {
        var a = 0;
        $(window).on('scroll', function() {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.lan_fun_value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
                });
                a = 1;
            }
        });
    },

    Dragon.prototype.initMFPVideoPlay = function() {
        $('.video_presentation_play').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },

    Dragon.prototype.initBTT = function() {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.back_top').fadeIn();
            } else {
                $('.back_top').fadeOut();
            }
        });
        $('.back_top').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    },

    Dragon.prototype.init = function() {
        this.initStickyAddMenu();
        this.initSmoothLink();
        this.initCollpsehide();
        this.initScrollspy();
        this.initMFPImage();
        this.initWorkFilter();
        this.initClientSlider();
        this.initFunFacts();
        this.initMFPVideoPlay();
        this.initBTT();
    },
    //init
    $.Dragon = new Dragon, $.Dragon.Constructor = Dragon
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Dragon.init();
}(window.jQuery);