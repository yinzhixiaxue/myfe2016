/**
 * Created by yinzhixiaxue on 2017/1/4.
 */
self.onmessage=function(e){
    var str= e.data;
    self.postMessage(str+"hehe");
}