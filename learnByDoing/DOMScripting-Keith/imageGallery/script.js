function preparePlaceholder(){
    if(!document.createElement){
        return false;
    }
    if(!document.createTextNode){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("image-gallery")){
        return false;
    }
    let placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/city-lights-through-rain-window.jpg");
    placeholder.setAttribute("alt","my image gallery");

    let description = document.createElement("p");
    description.setAttribute("id", "description");
    
    let descriptionText = document.createTextNode("Choose an image.");
    description.appendChild(descriptionText);

    let imgGallery = document.getElementById("image-gallery");
    insertAfter(placeholder, imgGallery);
    insertAfter(description, imgGallery);
}

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
            return showPic(this) ? false : true;
        }
    }
}

function showPic(whitchPic) {
    if (!document.getElementById("placeholder")) {
        return false;
    }

    let href = whitchPic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") {
        return false;
    }
    placeholder.setAttribute("src", href);

    if(document.getElementById("description")){
        let text = whitchPic.getAttribute("title") ? whitchPic.getAttribute("title") : "";
        let description = document.getElementById("description");
        if (description.firstChild.nodeValue == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
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

function insertAfter(newNode, targetNode){
    let targetNodeParent = targetNode.parentNode;
    if(targetNodeParent.lastChild == targetNode){
        targetNodeParent.appendChild(newNode);
    } else{
        targetNodeParent.insertBefore(newNode, targetNode.sibling);
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);