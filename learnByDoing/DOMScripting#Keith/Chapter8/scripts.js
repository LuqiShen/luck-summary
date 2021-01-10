
function displayAbbrevitations(){
    var abbrevitions = document.getElementsByTagName("abbr");
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
    for (let index = 0; index < defs.length; index++) {
    }

}

window.onload = displayAbbrevitations;