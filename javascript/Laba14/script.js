

$(document).ready(function(){
    $('.tabs-title').click(function(){
        $('.tabs-title').removeClass('active');
        $('.tabs-content li').removeClass('active');

        $(this).addClass('active');

        const index = $(this).index();

        $('.tabs-content li').hide();
        $('.tabs-content li').eq(index).show();

    })

})
