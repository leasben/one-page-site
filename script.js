/* BACK TO TOP */

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 80) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').click(function(event){
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 800)
    });
});

/* HOVER ON MENU ITEMS */

 $(document).ready(function() {
    $('.menu li').hover(function() {
        $(this).find('a').css('font-size', '1.2em'); // Increase font size on hover
    }, function() {
        $(this).find('a').css('font-size', '1em'); // Reset font size when not hovering
    });
}); 

/* HOVER OVER TEXT AND CHANGE COLOR AND BACK TO ORIGINAL COLOR */
$(document).ready(function(){
    $('.top-heading-text').mouseover(function(){
        $(this).css('color', 'blue');
    }).mouseout(function(){
        $(this).css('color', ''); // Reverts to the original color
    });
});

/* ADD TEXT OVER IMAGE WHEN HOVER */

$(document).raedy(function(){
    $('.col1').find('img').mouseover(function(){
        $('.col1').find('img').css('overlay', 'red');
    });
});

