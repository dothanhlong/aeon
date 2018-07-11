(function ($) {
    "use strict";
    var AeonMobile = {
        init: function() {
            AeonMobile.base.init();
        }
    };

    AeonMobile.base = {
        init: function() {
            AeonMobile.base.backToTop();
        },
        backToTop: function() {
            var $backToTop = $('.back-to-top');

            if ( $backToTop.length > 0 ) {
                $backToTop.click(function(event) {
                    event.preventDefault();

                    $('html,body').animate({
                        scrollTop: '0px'
                    }, 800);
                });
                $(window).scroll(function () {
                    var scrollPosition = $(window).scrollTop();
                    var windowHeight = $(window).height() / 2;

                    if (scrollPosition > windowHeight) {
                        $backToTop.addClass('in');
                    }
                    else {
                        $backToTop.removeClass('in');
                    }
                });
            }
        }
    };

    $(document).ready(function() {
        AeonMobile.init();
    });
})(jQuery);