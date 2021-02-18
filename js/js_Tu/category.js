
    $('.btn').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $('.category__list').removeClass('show-more');
    });