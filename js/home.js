$(function () {
    
// $('.continue').each(function () {
//     var elem = $(this);
//     setInterval(function () {
//         if (elem.css('visibility') == 'hidden') {
//             elem.css('visibility', 'visible');
//         } else {
//             elem.css('visibility', 'hidden');
//         }
//     }, 500);
// });

    $('.continue').click(function () {
        $("html, body").animate({ scrollTop: $(window).height() }, 1200);

        $(this).fadeOut(1200);
        
        $(this).fadeIn(1200);
        return false;
    });
});
