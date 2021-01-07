function addLoadEvent(func) {
    let oldEvent = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func();
    } else {
        window.onload = function () {
            oldEvent();
            func();
        }
    }
}