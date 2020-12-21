function showPic(whitchPic) {
    //切换图片
    var source = whitchPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    //切换文本
    var text = whitchPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    // alert(description.childNodes[0].nodeValue);
}

// function countBodyChildren() {
//     var bodyElement = document.getElementsByTagName("body")[0];
//     alert(bodyElement.childNodes.length);
// }

// window.onload = countBodyChildren;