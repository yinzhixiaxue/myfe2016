/**
 * Created by yinzhixiaxue on 2017/1/8.
 */
$(function(){
   $(".editable").on("click",function(){
       if($(this).has("input").size()==0){
           var $input='<input type="text">';
           var value= $(this).html();
           $(this).html($input).find("input").val(value).trigger("focus");
       }

   })
});