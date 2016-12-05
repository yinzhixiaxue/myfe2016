(function(){
    var oContainer = document.getElementById("container");
    var oSmallImg = document.getElementById("small-img");
    var aSmallPic = oSmallImg.getElementsByTagName("img");
    var oBigImg = document.getElementById("big-img");
    var aBigPic = oBigImg.getElementsByTagName("img");
    var oPrev = document.getElementById("prev");
    var oNext = document.getElementById("next");
    var oInfo = document.getElementById("info");
    var oCurrentPage = document.getElementById("current-page");
    var iNow = 0;
    var zIndex = 8;
    //console.log("I love YOU");
    for(var i=0;i<aSmallPic.length;i++){
        aSmallPic[i].className = "small-opacity";
    }
    aSmallPic[iNow].className = "selected";
    oNext.onmouseover = oPrev.onmouseover = function(){
        animate(this,{
            opacity:100
        });
    };
    oNext.onmouseout = oPrev.onmouseout = function(){
        animate(this,{
            opacity:0
        });
    };
    oPrev.onclick = oNext.onclick = function(){
        //console.log(this);
       if(this == oNext){
           iNow++;
           if(iNow == aBigPic.length){
               iNow = 0;
           }
       }
        else{
           iNow--;
           if(iNow == -1){
               iNow = aBigPic.length-1;
           }
       }
        changeImg(iNow);
    };
    for(var i=0;i<aSmallPic.length;i++){
        aSmallPic[i].index = i;
        aSmallPic[i].onmouseover = function(){
            animate(this,{
                opacity: 100
            })
        };
        aSmallPic[i].onmouseout = function(){
            if(this.index!= iNow){
                    animate(this,{
                        opacity: 30
                    })
                }
            };
        aSmallPic[i].onclick = function(){
            ////animate(aSmallPic[i],{
            ////    opacity: 0
            ////});
            //animate(this,{
            //    opacity: 100
            //});
            if(this.index != iNow)
            changeImg(this.index);

        }

    }
    var timer = 0;
    run();
    oContainer.onmouseover = function(){
        clearInterval(timer);
    };
    oContainer.onmouseout = function(){
        run();
    };
    function run(){
        timer = setInterval(function(){
            oNext.onclick();
        },1000);
    }

    //function aa(){
    //    console.log(this);
    //}
    //aa();
    //for(var i=0;i<aBigPic.length;i++){
    //    changeImg(aBigPic[i]);
    //}

    function changeImg(index){
        iNow = index;
        aBigPic[index].style.opacity = 0;
        aBigPic[index].style.filter="alpha(opacity = 0)";
        aBigPic[index].style.zIndex = zIndex++;
       animate(aBigPic[index],{
           opacity: 100
       });
        oNext.style.zIndex = oPrev.style.zIndex = oInfo.style.zIndex = zIndex++;
        oCurrentPage.innerHTML = index+1;
        for(var i=0;i<aSmallPic.length;i++){
            aSmallPic[i].style.opacity = 0.3;
            aSmallPic[i].style.filter = "alpha(opacity = 30)";
        }
        aSmallPic[index].style.opacity = 1;
        aSmallPic[index].style.filter = "alpha(opacity = 100)";
        var iLeft = 0;
        if(index == 0||index == 1){
            iLeft = 0;
        }
        else if(index == aSmallPic.length-1 ||index == aSmallPic.length-2){
            iLeft = aSmallPic[0].offsetWidth * aSmallPic.length/2;
        }
        else {
            iLeft = aSmallPic[0].offsetWidth * (index-1);
        }
        //console.log(iLeft);
        animate(oSmallImg,{
            left: -iLeft
        })

    }

})();