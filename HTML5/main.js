/**
 * Created by yinzhixiaxue on 2017/1/4.
 */
var worker =new Worker('task.js');
worker.onmessage= function(e){
    alert(e.data);
};
worker.postMessage('haha');
console.log("¹þ¹þ");