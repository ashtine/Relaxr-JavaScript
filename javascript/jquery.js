$(document).ready(function() {
    
    console.log('am i here');
    $('.readmore').click(function(){
        event.preventDefault();
        console.log('i clicked read more');
        $('#show-this-on-click').slideDown();
    });

    $('.readless').click(function() {
        event.preventDefault();
        console.log('i clicked read less');
        $('#show-this-on-click').slideUp();
    })
});