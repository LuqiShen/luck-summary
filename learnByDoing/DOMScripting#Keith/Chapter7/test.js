//document.write
function insertParagraph(paragraph) {
    let str = "<p>";
    str += paragraph;
    str += "</p>";
    document.write(str);
}

//innerHTML属性
window.onload = function () {
    let myContent = document.getElementById("my-content");
    alert(myContent.innerHTML);
}