$(document).ready(function(){
    $('.portal').click(function (e){
        e.stopPropagation();
        $(this).css('opacity', $(this).css('opacity') == '1' ? 0 : '1');
    })
});