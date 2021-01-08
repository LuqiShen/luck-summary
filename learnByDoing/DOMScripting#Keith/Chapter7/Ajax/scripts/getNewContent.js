
function getNewContent(){
    let request = getHTTPObject();
    if(request){
        request.open("GET", "http://127.0.0.1:5500/app/example.txt", true);
        request.onreadystatechange = function () {
            alert("Response Recieved");
            console.log(request.readyState);
            if(request.readyState == 4){
                let para = document.createElement("p");
                let txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        }
        request.send(null);
    } else{
        alert("Sorry, your browser doesn\'t support XMLHttpRequest");
    }
    alert("Function Done");
}

addLoadEvent(getNewContent);