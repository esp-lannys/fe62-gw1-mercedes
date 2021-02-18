
    $('.btn').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $('div').removeClass("show-more");
    });