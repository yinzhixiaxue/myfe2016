/**
 * Created by yinzhixiaxue on 2017/1/6.
 */
/*$(function(){
    $(":input").focus(function(){
        $(this).addClass("focus");
        if($(this).val()==this.defaultValue){
            //console.log(this.defaultValue);
            $(this).val('');
        }
    }).blur(function(){
        $(this).removeClass("focus").val($(this).val()==''?this.defaultValue:$(this).val());

    })





});*/

$(function(){
   $(":input").focus(function(){
       $(this).addClass("focus");
       if($(this).val()==this.defaultValue){
           $(this).val("");
       }
   }).blur(function(){
       $(this).removeClass("focus").val($(this).val()==""?this.defaultValue:$(this).val());
   })
});