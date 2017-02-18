require.config({
    paths:{
        "jquery":"jquery-1.12.4"
    }
});
require(["jquery","carousel"],function($,Carousel){
    var $searchIpt=$("#search-ipt");
    $("#search span").on("click",function(){
        alert($searchIpt.val());
    });
    $searchIpt.on("keypress",function(e){
        if(e.which==13)
            alert($searchIpt.val());
    });
    var carousel= new Carousel();
    var imgArr=['img/banner1.png','img/banner2.png','img/banner3.png','img/banner3.png']
    var settings={
        selector: "#banner #imgs",
        content: imgArr,
        buttonStyle: "square",
        arrowPos: "center",
        speed: 1000,
        width: 520
    };
    carousel.init(settings);
});
