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
        
        $("html, body").animate({ scrollTop: $(this).closest('.imageback').offset().top + $(window).height()  }, 1200);

        $(this).fadeOut(1200);
        
        $(this).fadeIn(1200);
        return false;
    });

    $('.timeline li').click(function(){
        if (!$(this).hasClass('active'))
        {
            var $id = $(this).data('id');
            $('.works').fadeOut();
            
            $('.works').each(function(){
                if ($(this).attr('id')==$id){
                    $(this).fadeIn();
                }
            });
        }
    });
});
