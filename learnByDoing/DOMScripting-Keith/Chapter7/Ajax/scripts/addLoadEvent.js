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