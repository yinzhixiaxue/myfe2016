/**
 * Created by yinzhixiaxue on 2017/1/6.
 */

$(function(){
   // console.log("aaa");
    $(".bigger").on('click',function(){
        $("#comment").height($("#comment").height()<500?$("#comment").height()+50:("#comment").height());
    });
    $(".smaller").on('click',function(){
        $("#comment").height($("#comment").height()>50?$("#comment").height()-50:("#comment").height());
    })
});