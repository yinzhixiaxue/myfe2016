/**
 * Created by yinzhixiaxue on 2017/1/8.
 */
$(function(){
   $("tbody tr:odd").addClass("odd");
    $("tbody tr:even").addClass("even");
    $("tbody tr").on('click',function(e){
        $(this).toggleClass("selected");
        if(!$(e.target).is(":checkbox")){
            $(this).find(":checkbox").prop("checked",!$(this).find(":checkbox").prop("checked"));
        }


    })
});