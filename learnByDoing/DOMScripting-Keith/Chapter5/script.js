function popUp(winURL) {
    window.open(winURL, "popUp", "width=320,height=480");
}

function prepareLinks() {
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        if(links[i].getAttribute("class") == "popup"){
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

window.onload = prepareLinks;
