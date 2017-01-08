/**
 * Created by yinzhixiaxue on 2017/1/8.
 */
$(function(){
   $("tbody tr:odd").addClass('odd');
    $("tbody tr:even").addClass('even');
    $("tbody tr").on('click',function(){
        $(this).addClass("selected").find(":radio").prop("checked","true");
        $(this).siblings().removeClass('selected');
    })
});