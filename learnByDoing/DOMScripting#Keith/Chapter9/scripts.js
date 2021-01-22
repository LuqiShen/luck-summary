// 9.1
function test() {
    let para = document.getElementById("example-91");
    alert(typeof para.nodeName);
    alert(typeof para.style);
    alert("This color is " + para.style.color);
    alert("This font family is " + para.style.fontFamily);
}


// 9.3.1 将h1元素后面的第一个元素的文字加粗
function styleHeaderSiblings() {
    if(!document.getElementsByTagName){
        return false;
    }
    let example931 = document.getElementById("example-931")
    let headers = example931.getElementsByTagName("h1");
    for (let i = 0; i < headers.length; i++) {
        let target = getNextElement(headers[i].nextSibling);
        // console.log(headers[i].nextSibling);
        // console.log(getNextElement(headers[i].nextSibling));
        if(typeof target == "null"){
            continue;
        }
        target.style.fontWeight = "bold";
        target.style.fontSize = "1.2em";
    }
}

function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

// 9.3.2 为表格添加斑马线效果
function stripeTables() {
    if(!document.getElementsByTagName || !document.getElementById){
        return false;
    }
    let example932 = document.getElementById("example-932");
    let table = example932.getElementsByTagName("table");
    let odd = false;
    for (let i = 0; i < table.length; i++) {
        let rows = table[i].getElementsByTagName("tr");
        for (let j = 0; j < rows.length; j++) {
            if (odd == true) {
                rows[j].style.backgroundColor = "#ffc";
                odd = false;
            } else{
                odd = true;
            }
        }
    }
    // for (let i = 0; i < table.length; i++) {
    //     let rows = table[i].getElementsByTagName("tr");
    //     for (let j = 0; j < rows.length; j++) {
    //         if(j % 2 !== 0){
    //             rows[j].style.backgroundColor = "#ffc"
    //         }  
    //     }    
    // }
}

function displayAbbreviations() {
    let example932 = document.getElementById("example-932");
    let abbs = example932.getElementsByTagName("abbr");
    console.log(abbs);
    let abbsList = document.createElement("dl");
    for (let i = 0; i < abbs.length; i++) {
        console.log(abbs[i]);
        let abbsText = abbs[i].getAttribute("title");

        let abbsElement = document.createElement("dt");
        let abbsElementTitle = document.createTextNode(abbs[i].lastChild.nodeValue);
        abbsElement.appendChild(abbsElementTitle);

        let abbsELementContent = document.createElement("dd");
        let abbsELementContentText = document.createTextNode(abbsText);
        abbsELementContent.appendChild(abbsELementContentText);

        abbsList.appendChild(abbsElement);
        abbsList.appendChild(abbsELementContent);
    }
    
    let header = document.createElement("h1");
    let headerText = document.createTextNode("Abbreviations");
    header.appendChild(headerText);

    example932.appendChild(header);
    example932.appendChild(abbsList);
}

// 9.3.3 鼠标悬停时加粗表格内文字
function highlightRows() {
    let example932 = document.getElementById("example-932");
    let rows = example932.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function () {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}

function addLoadEvent(func) {
    let oldOnload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func();
    } else {
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}

// addLoadEvent(test);
addLoadEvent(styleHeaderSiblings);
addLoadEvent(stripeTables);
addLoadEvent(displayAbbreviations);
addLoadEvent(highlightRows);