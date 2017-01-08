/**
 * Created by yinzhixiaxue on 2017/1/8.
 */
$(function(){
    $("tbody tr:odd").addClass("odd");
    $("tbody tr:even").addClass("even");
   $(".parent").on("click",function(){
       $(this).toggleClass("selected").nextUntil(".parent").toggle();
   })

});