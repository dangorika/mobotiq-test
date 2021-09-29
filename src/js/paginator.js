paginator({
    items: 12
});

export default function paginator(props) {
    var n = props.items;
    var blocks = $('.js-paginator').find('.js-block');
    var arrow = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11"><path fill="#1c8397" d="M15.99 4.44H3.4l3.18-3.19L5.33 0 0 5.33l5.33 5.33L6.58 9.4 3.4 6.22h12.59z"/></svg>';



    if (blocks.length > n) {
        var pages = calcPages(n, blocks.length);

        createPages(pages);
        showPage(blocks, 1, n);

        var pageButtons = $('.js-paginator').find('.js-page-btn');
        $(pageButtons[0]).addClass('is-active');

        pageButtons.click(function() {
            $(this)
                .addClass('is-active')
                .siblings()
                .removeClass('is-active');

            showPage(blocks, parseInt($(this).text()), n);
        });

        $('.js-paginator').find('.js-arr-btn').click(function() {
            var activePage = $(this).parent().find('.js-page-btn.is-active').html();

            if ($(this).hasClass('js-prev') && parseInt(activePage) > 1) {
                console.log('pr');
                $(this)
                    .parent()
                    .find('.js-page-btn.is-active')
                    .removeClass('is-active')
                    .prev('.js-page-btn')
                    .addClass('is-active');
                showPage(blocks, parseInt(activePage) - 1, n);
            }
            else if ($(this).hasClass('js-next') && parseInt(activePage) < pages) {
                console.log('nx');
                $(this)
                    .parent()
                    .find('.js-page-btn.is-active')
                    .removeClass('is-active')
                    .next('.js-page-btn')
                    .addClass('is-active');
                showPage(blocks, parseInt(activePage) + 1, n);
            }

        });
    }

    function createPages(pageNumber) {
        $('.js-paginator').append('<div class="paginator"><div class="pagin"></div></div>');
        $('.js-paginator')
            .find('.pagin')
            .append('<button class="btn btn_round pagin__prev js-arr-btn js-prev">'+ arrow +'</button><button class="btn btn_round pagin__next js-arr-btn js-next">'+ arrow +'</button>');
        for (var i = 1; i < pageNumber + 1; i++) {
            $('.js-paginator')
                .find('.pagin')
                .append('<button class="pagin__btn js-page-btn">'+ i +'</button>');
        }
    }

    function calcPages(itemsPerPage, amount) {
        return Math.ceil(amount / itemsPerPage);
    }
    // showPage(1);



    function showPage(blocks, index, itemsPerPage) {
        $(blocks).hide();
        $(blocks).each(function(n) {
            if (n >= itemsPerPage * (index - 1) && n < itemsPerPage * index)
                $(this).show();
        });
    }

}
