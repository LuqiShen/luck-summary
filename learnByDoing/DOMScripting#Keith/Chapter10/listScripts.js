function moveElement(elementID, finalX, finalY, interval) {
    if(!document.getElementById || !document.getElementById(elementID)){
        return false;
    }
    let elem = document.getElementById(elementID);
    //获得元素的当前位置
    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);
    //如果元素已经到达它的目的地，则退出这个函数
    if(xpos == finalX && ypos == finalY){
        return true;
    }
    
    //如果元素尚未到达他的目的地，则把它像目的地移动一像素
    if(xpos < finalX){
        xpos++;
    }

    if(xpos > finalX){
        xpos--;
    }

    if(ypos < finalY){
        ypos++;
    }

    if(ypos > finalY){
        ypos--;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";        
    //经过一段时间间隔后从重复以上操作
    let repeat = "moveElement('" + elementID +"'," + finalX +"," + finalY +"," + interval+ ")" ;
    movement = setTimeout(repeat, interval);
    console.log(repeat, typeof elementID);
    console.log("moveElement(" + elementID + "," + finalX + "," + finalY + "," + interval + ")");
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

function prepareSlideshow() {
    if(!document.getElementById || !document.getElementsByTagName){
        return false;
    }

    if(!document.getElementById("preview") || !document.getElementById("linklist")){
        return false;
    }

    let preview  = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";

    let list = document.getElementById("linklist");
    let links = list.getElementsByTagName("a");

    links[0].onmouseover = function () {
        moveElement("preview", -300, 0, 1);
    }

    links[1].onmouseover = function () {
        moveElement("preview", -600, 0, 1);
    }

    links[2].onmouseover = function () {
        moveElement("preview", -900, 0, 1);
    }

    links[3].onmouseover = function () {
        moveElement("preview", -1200, 0, 1);
    }
}

addLoadEvent(prepareSlideshow);