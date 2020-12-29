window.onload = prepareGallery;

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
    let href = whitchPic.getAttribute('href');
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", href);   
}