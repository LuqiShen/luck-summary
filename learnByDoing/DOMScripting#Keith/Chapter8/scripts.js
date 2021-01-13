function displayAbbrevitations(){
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.createElement){
        return false;
    }
    if(!document.createTextNode){
        return false;
    }

    //取得所有缩略词
    let abbrevitions = document.getElementsByTagName("abbr");
    if(abbrevitions.length < 1){
        return false;
    }
    let defs = new Array();
    
    //遍历这些缩略词
    for (let i = 0; i < abbrevitions.length; i++) {
        let current_abbr = abbrevitions[i];
        if(current_abbr.length < 1){
            continue;
        }
        let definitions = current_abbr.getAttribute("title");
        let key = current_abbr.lastChild.nodeValue;
        defs[key] = definitions;
    }

    //定义列表
    let dlist = document.createElement("dl");

    //遍历dlist
    for(key in defs){
        //创建单个缩略词的标题
        let definition = defs[key];
        let dtitle = document.createElement("dt");
        let dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        //创建单个缩略词的具体描述
        let ddesc = document.createElement("dd");
        let ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);

        //把缩略词标题和缩略词具体描述添加到dlist
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    if(dlist.childNodes.length < 1){
        return false;
    }

    //创建dlist标题
    let header = document.createElement("h2");
    let header_text = document.createTextNode("Abbrevitions");
    header.appendChild(header_text);

    //把dlist标题添加到body
    document.body.appendChild(header);
    //把dlist添加到body
    document.body.appendChild(dlist);
}

function displayCitations() {
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.createElement){
        return false;
    }
    if(!document.createTextNode){
        return false;
    }

    //取得blockquote的所有引用
    let quotes = document.getElementsByTagName("blockquote");
    //遍历引用
    for (let index = 0; index < quotes.length; index++) {
        //如果没有cite属性，继续循环
        if(!quotes[index].getAttribute("cite")){
            continue;
        }
        //保存cite属性
        let url = quotes[index].getAttribute("cite");
        
        //取得引用中所有的子元素节点
        let quoteElements = quotes[index].getElementsByTagName("*");
        //如果没有子元素节点，继续循环
        if(quoteElements.length < 1){
            continue
        }
        //取得引用中最后一个子元素节点
        let lastElem = quoteElements[quoteElements.length-1];

        //创建标记
        let link = document.createElement("a");
        let link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        let superscript = document.createElement("sup");
        superscript.appendChild(link);

        //把标记添加到引用中的最后一个元素节点
        lastElem.appendChild(superscript);
    }
}

function addLoadEvent(func) {
    let oldOnload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    } else {
        window.onload = function (){
            oldOnload();
            func();
        }
    }
}

addLoadEvent(displayAbbrevitations);
addLoadEvent(displayCitations);