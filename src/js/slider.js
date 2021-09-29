import 'slick-carousel';

$(document).ready(function() {
    sliders();
});


export default function sliders() {
    $('.js-contest-preview').slick({
        arrows: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: $('.js-contest-preview-next')
    });

    activeSlide();

    $('.js-contest-preview-next').on('click', function(e) {
        $('.js-contest-preview')
            .find('.slick-slide .block')
            .removeClass('is-active');
        activeSlide();
    })

    function activeSlide() {
        $('.js-contest-preview')
            .find('.slick-current')
            .next()
            .find('.block')
            .addClass('is-active');
    }


    var miniTabs = $('.js-mini-tabs');

    miniTabs.each(function(e) {
        var block = $(this).find('.js-block');
        var dot = $(this).find('.js-dot');

        var active = 2;

        block.each(function(n) {
            if ($(this).data('block') == active) {
                $(this).addClass('is-active');
            }
        });

        dot.each(function(n) {
            if ($(this).data('target-block') == active) {
                $(this).addClass('is-active');
            }
        });

        block.on('click', function(e) {
            e.preventDefault();
            var block = $(this)
            $(this)
                .addClass('is-active')
                .siblings()
                .removeClass('is-active');
            $(this)
                .closest('.js-mini-tabs')
                .find('.js-dot[data-target-block = "' + $(this).data('block') + '"]')
                .addClass('is-active')
                .siblings()
                .removeClass('is-active');
        });
    });
}
