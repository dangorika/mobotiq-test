preview();

export default function preview() {
    var block = $('.js-block[data-target-popup="preview"]');

    var slider, miniSlider;

    block.on('click', function() {
        createModal({
            title: $(this).data('title'),
            author: $(this).data('author'),
            likes: $(this).data('likes'),
            desc: $(this).data('desc'),
            images: $(this).data('images')
        });

        if (!$('.js-pr-slider').hasClass('slick-initialized')) {
            slider = $('.js-pr-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.js-pr-slider-mini'
            });

            miniSlider = $('.js-pr-slider-mini').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                focusOnSelect: true,
                asNavFor: '.js-pr-slider',
                prevArrow: $('.js-pr-prev'),
                nextArrow: $('.js-pr-next'),
                responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 1,
                    dots: false
                  }
                }
              ]
            });
        }

    });

    $('.js-popup-close').on('click', function() {
        if ($(slider).hasClass('slick-initialized')) {
            window.setTimeout(function() {
                $(slider).slick('unslick');
                $(miniSlider).slick('unslick');
            }, 200);

        }
    });

    function createModal(props) {
        console.log(props.title);
        console.log(props.author);
        console.log(props.likes);
        console.log(props.desc);
        console.log(props.images);

        $('.js-pr-slider').html('');
        $('.js-pr-slider-mini').html('');

        // images
        var images = props.images.split(',');

        for (var i = 0; i < images.length; i++) {
            $('.js-pr-slider').append('<div class="pr-slider__slide" style="background-image: url('+ images[i] +')"></div>');
            $('.js-pr-slider-mini').append('<div class="pr-slider-mini__slide" style="background-image: url('+ images[i] +')"></div>');
        }

        // title
        $('.js-pr-title').html(props.title);
        $('.js-pr-author').html(props.author);
        $('.js-pr-likes').html(props.likes);
        $('.js-pr-desc').html(props.desc);

    }
}
