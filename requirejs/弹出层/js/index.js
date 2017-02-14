require.config({
    paths : {
        "jquery" : "jquery-1.12.4"
    }
});
require(['jquery','dialog'],function($,Dialog){
    $("#open").on('click',function(){
        //var settings={
        //    width: 500,
        //    height: 400,
        //    title: "I love you",
        //    content: "login.html"
        //
        //};
        //
        //dialog.open(settings);
        var settings={
            width: 500,
            height: 400,
            title: "I love you",
            content: "login.html"

        };
        var dialog = new Dialog();
        dialog.open(settings);
    })
});