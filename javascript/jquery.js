$(document).ready(function() {
    
    $('.readmore').click(function(){
        event.preventDefault();
        console.log('i clicked read more');
        $('.hide').slideDown(800);
        $('.readmore').hide();
    });

    $('.readless').click(function() {
        event.preventDefault();
        console.log('i clicked read less');
        $('.hide').slideUp(800);
        $('.readmore').show();
    });

    $('.learnmore').click(function() {
        event.preventDefault();
        console.log('i clicked learnmore');
        $('#learnmoretext').slideDown(800);
        $('.learnmore').hide();
    })
});