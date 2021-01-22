//本脚本用于总结本书中所见DOM未提供但十分常用的函数
function addLoadEvent(func){
    //本函数用于增加window.onload一次调用的函数
    //见于本书第六章
    let oldOnLoad = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func();
    } else{
        window.onload = function () {
            oldOnLoad();
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

function addClass(element, className) {
    if(!element.className){
        element.className = className;
    } else {
        let newClassName = element.className;
        newClassName += " ";
        newClassName += className;
        element.className = newClassName;
    }
}