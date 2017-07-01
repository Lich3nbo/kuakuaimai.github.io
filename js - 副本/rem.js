 /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
function setRem(){
    var html = document.querySelector("html");
    var width = screen.availWidth;
    var fontSize = 100/1080*width;
    html.style.fontSize = fontSize +'px';
}
setRem();
window.onresize = function(){
    setRem();
}