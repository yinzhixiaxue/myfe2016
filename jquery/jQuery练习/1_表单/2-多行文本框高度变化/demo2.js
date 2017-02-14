$(function(){
    $('.up').on('click',function(){
        if(!$('#comment').is(':animated')){
           // if ($('#comment').height()<500){
                $('#comment').animate({
                    scrollTop:'-=50'
                },400);
           // }
        }

    });
    $('.down').on('click',function(){
        if(!$('#comment').is(':animated')){
           // if ($('#comment').height()>50){
                $('#comment').animate({
                    scrollTop:'+=50'
                },400);
           // }
        }
    })
});
