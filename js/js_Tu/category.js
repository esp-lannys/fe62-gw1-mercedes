
$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.5;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade-scroll').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 0.5s linear',
                        opacity: 1
                    } );

                } 
            } else {
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade-scroll').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});

    $('.btn-show-more').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $('div').removeClass("show-more");
    });
});

