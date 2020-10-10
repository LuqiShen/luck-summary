let count = 0;
function myTailingDebounce(fn, wait) {
    let timer;
    return function () {
        count = count + 1;
        console.log(count);
        let that = this;
        let args = arguments;

        console.log('myTailingDebounce timer:'+timer);
        clearTimeout(timer);
        
        timer = setTimeout(() => {
            fn.apply(that, args);
        }, wait);
    }
}

function ajax1(content) {
    console.log('ajax request ' + content);
}

let input = document.getElementById('debounce-tailing');

let debounceAjax = myTailingDebounce(ajax1, 500);

input.addEventListener('keyup', function (e) {
    debounceAjax(e.target.value);
})

function myLeadingDebounce(fn, wait){
    let timer;
    fn();
    return function () {
        let that = this;
        let args = arguments;
        timer = setTimeout(() => {
            fn.apply(that, args);
        }, wait);

        clearTimeout(timer);
    }
}


function ajax2(){
    console.log("sended!" + Date.now())
}

let button = document.getElementById('debounce-leading');
let debounceAjax2 = myLeadingDebounce(ajax2, 500);
button.addEventListener('onclick', debounceAjax2())