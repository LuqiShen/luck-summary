function positionMessage() {
    if(!document.getElementById || !document.getElementById("message")){
        return false;
    }
    let elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";

    //movement为全局变量 意味着这个setTimeout可以在positionMessage函数以外的地方被取消
    // movement = setTimeout("moveMessage()", 10);
    // console.log(movement);
}


function moveMessage() {
    if(!document.getElementById || !document.getElementById("message")){
        return false;
    }
    let elem = document.getElementById("message");
    //获得元素的当前位置
    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);
    //如果元素已经到达它的目的地，则退出这个函数
    if(xpos == 200 && ypos == 100){
        return true;
    }
    
    //如果元素尚未到达他的目的地，则把它像目的地移动一像素
    if(xpos < 200){
        xpos++;
    }

    if(xpos > 200){
        xpos--;
    }

    if(ypos < 100){
        ypos++;
    }

    if(ypos > 100){
        ypos--;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";        
    //经过一段时间间隔后从重复以上操作
    movement = setTimeout("moveMessage()", 10);
    // console.log(movement);
    // elem.style.left = "200px";
}

function moveElement(elementID, finalX, finalY, interval) {
    
}

function addLoadEvent(func) {
    let oldOnload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        }
    }
}

addLoadEvent(moveMessage);
addLoadEvent(positionMessage);