require.config({
    paths:{
        "jquery": "jquery-1.12.4"
    }
});
define(["jquery"],function($){
    function Carousel(){
        this.defaultSettings={
            selector: "body",
            content: [],
            buttonStyle: "circle",
            arrowPos: "bottom",
            speed: 500,
            width: 500
        };
        this.container=$('<div class="container"></div>');
        this.content=$("<div class='content'></div>");
        this.tab=$('<ul class="tab"></ul>');
        this.arrows=$('<div class="arrows"></div>');
        this.prev=$('<span class="prev">&lt;</span>');
        this.next=$('<span class="next">&gt;</span>');
    }
    Carousel.prototype.init=function(options){
        $.extend(this.defaultSettings,options);
        console.log(this.defaultSettings.content);
        for(i=0;i<this.defaultSettings.content.length;i++){
            //var img=$("<img src=img/"+i+1+".jpg>");
            var $img=$("<img src="+this.defaultSettings.content[i]+">");
            this.content.append($img);
            var $li=$("<li></li>");
            if(this.defaultSettings.buttonStyle=="square"){
                $li.html(i+1);
            }else{
                $li.addClass("circle");
            }
            this.tab.append($li);
        }
        this.content.css({
            width: this.defaultSettings.width
        });
        this.container.css({
            width: this.defaultSettings.width
        });
        $("img",this.content).eq(0).addClass("selected");
        $("li",this.tab).eq(0).addClass("selected");
        this.arrows.append(this.prev).append(this.next);
        this.container.append(this.content).append(this.tab).append(this.arrows);
        $(this.defaultSettings.selector).append(this.container);
        this.arrows.addClass(this.defaultSettings.arrowPos);
        this.prev.addClass(this.defaultSettings.arrowPos);
        this.next.addClass(this.defaultSettings.arrowPos);
        var that=this;
        var now=0;
        this.tab.on("mouseover","li",function(){
            now=$(this).index();
            changeImg();
        });
        this.next.on("click",function(){
            now++;
            if(now>=that.defaultSettings.content.length){
                now=0;
            }
            changeImg();
        });
        this.prev.on("click",function(){
            now--;
            if(now<0){
                now=that.defaultSettings.content.length-1;
            }
            changeImg();
        });
        function changeImg(){
            $("li",that.tab).eq(now).addClass("selected").siblings().removeClass("selected");
            $("img",that.content).eq(now).addClass("selected").siblings().removeClass("selected");
        }
        this.container.hover(function(){
            clearInterval(that.timer);
        },function(){
            play();
        });
        play();
        function play(){
             that.timer=setInterval(function(){
                that.next.trigger("click");
            },that.defaultSettings.speed);
        }
    };
    return Carousel;
});
