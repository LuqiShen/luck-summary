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

function displayAccessKeys() {
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.createElement){
        return false;
    }
    if(!document.createTextNode){
        return false;
    }

    //取得nav中所有链接
    let nav = document.getElementById("navigation");
    let links = nav.getElementsByTagName("a");
    //创建数组保存所有键
    let aList = new Array()
    //遍历所有链接
    for (let i = 0; i < links.length; i++) {
        let current_link = links[i];
        //如果链接没有accesskey属性，继续循环
        if(!links[i].getAttribute("accesskey")){
            continue;
        }

        //取得accesskey值和文本
        let aKey = current_link.getAttribute("accesskey");
        let aText = current_link.lastChild.nodeValue;

        //将键值和文本一一对应，存入数组中
        aList[aKey] = aText;
    }

    //创建列表元素
    let accessKeyList = document.createElement("ul");
    //遍历数组
    for (aKey in aList) {
        //取出键值所对应的文本，并改变其显示，赋值给str
        let text = aList[aKey];
        let str = aKey + " : " + text;

        //创建列表项
        let item = document.createElement("li");
        let itemText = document.createTextNode(str);
        item.appendChild(itemText);

        //将列表项添加到列表
        accessKeyList.appendChild(item);
    }

    //创建标题元素
    let header = document.createElement("h3");
    let headerText = document.createTextNode("Accesskey");
    header.appendChild(headerText);
    
    //将标题添加到body
    document.body.appendChild(header);
    //将列表添加到body
    document.body.appendChild(accessKeyList);
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
addLoadEvent(displayAccessKeys);

