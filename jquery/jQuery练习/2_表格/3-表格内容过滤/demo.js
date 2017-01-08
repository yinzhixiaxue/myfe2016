/**
 * Created by yinzhixiaxue on 2017/1/8.
 */
$(function(){
    $("tbody tr:odd").addClass("odd");
    $("tbody tr:even").addClass("even");
   $(":input").on("keyup",function(){
       $("tbody tr").hide().filter(":contains(" + $(this).val() + ")").show();
   });
});
