/**
 * function：获取属性值
 * @param ele
 * @param attr
 * @returns {*}
 */

function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}

/**
 * function:动画封装
 * @param ele
 * @param json
 * @param fn
 */

function animate(ele,json,fn,sec){
    var target = [];
    for(var k in json){
        target[k] = json[k];
    }
    var timer = null;

    clearInterval(timer);
    timer = setInterval(function(){
        var bool = true;
        var header = 0;
        for(var k in json){
            if(k==="opacity"){
                header  = getStyle(ele,k)*100 || 100;
            }else{
                header  = parseInt(getStyle(ele,k))|| 0;
                console.log(header);
            }
            var speed = (target[k]-header)/10;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            if(k==="opacity"){
                ele.style[k] = (header+speed)/100;
                //兼容IE6,7,8
                ele.style.filter = "alpha(opacity="+header+speed+")";
                if(target[k]!==getStyle(ele,k)*100){
                    bool=false;
                }
            }else if(k==="zIndex"){
                ele.style[k] = target[k];
            }
            else{
                ele.style[k] = header+speed+"px";
                if(Math.ceil(target[k])!==Math.ceil(parseFloat(getStyle(ele,k)))){
                    bool=false;
                }

            }
        }

        if(bool){
            if(fn){
                fn();
            }
            clearInterval(timer);

        }
    },sec);
}

/**
 * function:获取body字体
 *
 * */
function getFontSize(){
    var fontSize;
    if (getComputedStyle) {
        fontSize = getComputedStyle(window.document.documentElement, null)['font-size'];
    }
    else {
        fontSize = window.document.documentElement.currentStyle['font-size'];
    }
    return fontSize.substr(0, 2);

}


/**
 * function:整组横向滚动,n个item横向滚动
 * <item><begin></begin><end></end></item>
 * <item><begin></begin><end></end></item>
 * */
function itemsScroll(items,begin,end) {
    var timer = null;
    clearInterval(timer);
    timer= setInterval(function () {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var end_e = end[i];
            var begin_e = begin[i];
            if (Math.abs(item.offsetLeft) >= Math.abs(end_e.scrollWidth)) {
                item.style.left = ++begin_e.offsetLeft + 1+"px";
            }
            else{
                item.style.left = --item.offsetLeft + "px";
            }
        }
    }, 80)
    return timer;
}