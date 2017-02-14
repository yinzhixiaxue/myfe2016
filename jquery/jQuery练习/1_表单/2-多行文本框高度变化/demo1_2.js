$(function(){
    $('.bigger').on('click',function(){
        if(!$('#comment').is(':animated')){
            if ($('#comment').height()<500){
                $('#comment').animate({
                    height:'+=50'
                },400);
            }
        }

    });
    $('.smaller').on('click',function(){
        if(!$('#comment').is(':animated')){
            if ($('#comment').height()>50){
                $('#comment').animate({
                    height:'-=50'
                },400);
            }
        }
    })
});
