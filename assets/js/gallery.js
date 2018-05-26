$( document ).ready(function(){
    $('.gallery').on('mousewheel', function(e, delta) {
        this.scrollLeft -= (delta * 60);
        e.preventDefault();
    });
    $( "#gallery style" ).remove();
    $( ".gallery br" ).remove();
    $( "#data" ).prependTo( ".gallery:first" );
    //$('.gallery:first').append($("#spacer"));
    $( "#spacer" ).appendTo( ".gallery:first" );
});