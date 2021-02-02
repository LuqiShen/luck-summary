function moveElement(elementID, finalX, finalY, interval) {
    if(!document.getElementById || !document.getElementById(elementID)){
        return false;
    }
    let elem = document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }

    if(!elem.style.left){
        elem.style.left = "0px";
    }

    if(!elem.style.top){
        elem.style.top = "0px";
    }
    //获得元素的当前位置
    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);
    let dist = 0;
    //如果元素已经到达它的目的地，则退出这个函数
    if(xpos == finalX && ypos == finalY){
        return true;
    }
    
    //如果元素尚未到达他的目的地，则把它像目的地移动
    if(xpos < finalX){
        dist = Math.ceil((finalX - xpos)/10);
        xpos = xpos + dist;
    }

    if(xpos > finalX){
        dist = Math.ceil((xpos - finalX)/10);
        xpos = xpos - dist;
    }

    if(ypos < finalY){
        dist = Math.ceil((finalY - ypos)/10);
        ypos = ypos + dist;
    }

    if(ypos > finalY){
        dist = Math.ceil((ypos - finalY)/10);
        ypos = ypos - dist;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";        
    //经过一段时间间隔后从重复以上操作
    let repeat = "moveElement('" + elementID +"'," + finalX +"," + finalY +"," + interval+ ")" ;
    elem.movement = setTimeout(repeat, interval);
    // movement = setTimeout(repeat,interval);
    // console.log(repeat, typeof elementID);
    // console.log("moveElement(" + elementID + "," + finalX + "," + finalY + "," + interval + ")");
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

function insertAfter(newNode, targetNode){
    //本函数的作用为：将DOM的新节点插入到指定DOM节点的后边
    //功能与DOM本身提供的函数parent.insertBefore相对应
    let targetNodeParent = targetNode.parentNode;
    if(targetNodeParent.lastChild == targetNode){
        targetNodeParent.appendChild(newNode);
    } else{
        targetNodeParent.insertBefore(newNode, targetNode.sibling);
    }
}

function prepareSlideshow() {
    if(!document.getElementById || !document.getElementsByTagName){
        return false;
    }

    if(!document.getElementById("linklist")){
        return false;
    }

    let sildeShow = document.createElement("div");
    sildeShow.setAttribute("id", "slideshow");

    let preview  = document.createElement("img");
    preview.setAttribute("src","images/topics.jpg");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");

    sildeShow.appendChild(preview);

    let list = document.getElementById("linklist");
    insertAfter(sildeShow,list);

    let links = list.getElementsByTagName("a");

    links[0].onmouseover = function () {
        moveElement("preview", -300, 0, 0.1);
    }

    links[1].onmouseover = function () {
        moveElement("preview", -600, 0, 0.1);
    }

    links[2].onmouseover = function () {
        moveElement("preview", -900, 0, 0.1);
    }
}

addLoadEvent(prepareSlideshow);