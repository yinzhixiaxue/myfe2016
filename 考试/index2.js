(function() {
    var oContainer = document.getElementById("container");
    var oBigImg = document.getElementById("big-img");
    var aBigPic = oBigImg.getElementsByTagName("img");
    var oInfo = document.getElementById("info");
    var oPrev = document.getElementById("prev");
    var oNext = document.getElementById("next");
    var oSmallImg = document.getElementById("small-img");
    var aSmallPic = oSmallImg.getElementsByTagName("img");
    var oCurrentPage = document.getElementById("current-page");
    var iNow = 0;
    var zIndex = 8;
    for (var i = 0; i < aSmallPic.length; i++) {
        aSmallPic[i].className = "small-opacity";
    }
    aSmallPic[iNow].className = "selected";
    oPrev.onmouseover = oNext.onmouseover = function () {
        animate(this, {
            opacity: 100
        })
    };
    oPrev.onmouseout = oNext.onmouseout = function () {
        animate(this, {
            opacity: 0
        })
    };
    oPrev.onclick = oNext.onclick = function () {
        if (this == oNext) {
            iNow++;
            if (iNow == aSmallPic.length) {
                iNow = 0;
            }
        }
        else {
            iNow--;
            if (iNow == -1) {
                iNow = aSmallPic.length - 1;
            }
        }
        changeImg(iNow);
    };
    for (var i = 0; i < aSmallPic.length; i++) {
        aSmallPic[i].index = i;
        aSmallPic[i].onmouseover = function () {
            this.style.opacity = 1;
        };
        aSmallPic[i].onmouseout = function () {
            if (this.index != aSmallPic[iNow].index) {
                this.style.opacity = 0.3;
            }
        };
        aSmallPic[i].onclick = function(){
            if(this.index!=iNow){
                changeImg(this.index);
            }
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
    function changeImg(elem) {
        iNow = elem;
        aBigPic[elem].style.opacity = 0;
        aBigPic[elem].style.zIndex = zIndex++;
        oPrev.style.zIndex = oNext.style.zIndex = oInfo.style.zIndex = zIndex++;
        animate(aBigPic[elem], {
            opacity: 100
        });
        for(var i=0;i<aSmallPic.length;i++){
            aSmallPic[i].style.opacity = 0.3;
            aSmallPic[i].style.filter = "alpha(opacity = 30)";
        }
        aSmallPic[iNow].style.opacity = 1;
        aSmallPic[iNow].style.filter = "alpha(opacity = 100)";
        oCurrentPage.innerHTML = iNow+1;
        var iLeft = 0;
        if(iNow ==0||iNow == 1){
            iLeft = 0;
        }
        else if(iNow == 6||iNow == 7){
            iLeft = aSmallPic.length/2*aSmallPic[0].offsetWidth;
            //console.log(aSmallPic.length);
        }
        else{
            iLeft = (iNow-1)*aSmallPic[0].offsetWidth;
        }
        //console.log(iLeft);
        animate(oSmallImg,{
            left: -iLeft
        })
    }

})();


