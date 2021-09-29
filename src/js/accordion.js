accordion();

export default function accordion() {

    var toggle = $('.js-accord-toggle');

    toggle.on('click', function(){
        //$(this).next('.js-dropdown').slideToggle(300);
        $(this).toggleClass('is-active');
    });
}
