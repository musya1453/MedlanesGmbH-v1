(function ($) {

    $(window).load(function () {
        $('select').styler();
    })


    $(window).bind('scroll', function () {
        var $scroll = $(window).scrollTop(),
            $header = $('.site-header');


        if ($scroll > 35) {
            $header.addClass('header-fixed');
        } else {
            $header.removeClass('header-fixed');
        }
    })
})(jQuery);