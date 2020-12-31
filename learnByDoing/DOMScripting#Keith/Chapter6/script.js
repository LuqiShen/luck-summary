addLoadEvent(prepareGallery);

function prepareGallery() {
    if (!document.getElementById){
        return false;
    } 
    if (!document.getElementsByTagName){
        return false;
    }
    if (!document.getElementById('image-gallery')){
        return false;
    }
    let gallery = document.getElementById('image-gallery');
    let links = gallery.getElementsByTagName('a');

    for (let index = 0; index < links.length; index++) {
        links[index].onclick = function () {
            showPic(this);
            // let href = links[index].getAttribute('href');
            // let placeholder = document.getElementById("placeholder");
            // placeholder.setAttribute("src", href);   
            return false;       
        }
    }
}

function showPic(whitchPic) {
    if (!document.getElementById("placeholder")) {
        return false;
    }
    let href = whitchPic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", href);

    if(document.getElementById("description")){
        let text = whitchPic.getAttribute("title");
        let description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
}

function addLoadEvent(func) {
    let oldOnLoad = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    } else{
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }
}
