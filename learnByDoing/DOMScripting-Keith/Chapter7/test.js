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

    let para = document.createElement("p");
    let createElement = document.getElementById("create-element");
    createElement.appendChild(para);
    let text = document.createTextNode("Hello DOM!");
    para.appendChild(text);
    // let info = "nodeName: ";
    // info += para.nodeName;
    // info += " nodeType: ";
    // info += para.nodeType;
    // alert(info);

    let combination1 = document.getElementById("combination-1");
    let pCombo = document.createElement("p");
    combination1.appendChild(pCombo);
    
    let text1 = document.createTextNode("Hello ");
    pCombo.appendChild(text1);
    
    let emphasis = document.createElement("em");
    pCombo.appendChild(emphasis);

    let emphasisText = document.createTextNode(" my ");
    emphasis.appendChild(emphasisText);

    let text2 = document.createTextNode(" combo!");
    pCombo.appendChild(text2);


    let combination2 = document.getElementById("combination-2");
    let paCombo = document.createElement("p");
    let txt1 = document.createTextNode("Hello, ");
    let emphasis2 = document.createElement("em");
    let txt2 = document.createTextNode(" my");
    let txt3 = document.createTextNode(" combo!");
    paCombo.appendChild(txt1);
    emphasis2.appendChild(txt2);
    paCombo.appendChild(emphasis2);
    paCombo.appendChild(txt3);
    combination2.appendChild(paCombo);
}