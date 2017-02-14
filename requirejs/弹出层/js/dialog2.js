require.config({
    paths:{
        "jquery" : "jquery-1.12.4"
    }
});
define(['jquery'],function($){
    var dialog = {
        open:function(options){
            var defaultSettings = {
                width: 400,
                height: 300,
                title: "i love you too",
                content: 456
            };
            $.extend(defaultSettings,options);
            var html='<div class="dialog-container">'
                        +'<div class="dialog-mask"></div>'
                        +'<div class="dialog-box">'
                            +'<div class="dialog-title">'
                                +'<div class="dialog-title-item">弹出层</div>'
                                +'<div class="dialog-title-close">[X]</div>'
                            +'</div>'
                            +'<div class="dialog-content">content</div>'
                        +'</div>'
                     +'</div>';
            $('body').append(html);
            $(".dialog-box").css({
                width: defaultSettings.width,
                height: defaultSettings.height
            });
            $(".dialog-content").css({
                height: defaultSettings.height - 30
            })
            $('.dialog-title-item').html(defaultSettings.title);
            $('.dialog-content').load(defaultSettings.content);
            $('.dialog-title-close').on("click",function(){
                $('.dialog-container').remove();
            })

        }

    }
    return dialog;
});