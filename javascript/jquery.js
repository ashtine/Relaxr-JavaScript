$(document).ready(function() {
    
    $('.readmore').click(function(){
        event.preventDefault();
        $('.hide1').slideDown(800);
        $('.readmore').hide();
    });

    $('.readless').click(function() {
        event.preventDefault();
        $('.hide1').slideUp(800);
        $('.readmore').show();
    });

    $('.learnmore').click(function() {
        event.preventDefault();
        $('#learnmoretext').slideDown(800);
        $('.learnmore').hide();
    });
});