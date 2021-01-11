
function displayAbbrevitations(){
    let abbrevitions = document.getElementsByTagName("abbr");
    if(abbrevitions.length < 1){
        return false;
    }
    let defs = new Array();
    for (let i = 0; i < abbrevitions.length; i++) {
        let current_abbr = abbrevitions[i];
        let definitions = current_abbr.getAttribute("title");
        let key = current_abbr.lastChild.nodeValue;
        defs[key] = definitions;
    }

    let dlist = document.createElement("dl");
    for(key in defs){
        let definition = defs[key];
        let dtitle = document.createElement("dt");
        let dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        let ddesc = document.createElement("dd");
        let ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
}

window.onload = displayAbbrevitations;