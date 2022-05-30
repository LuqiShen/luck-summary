import "./index.css";

import img from "./img/0.jpg";

console.log(img);
const imgEl = document.createElement("img");
imgEl.src = img;
document.body.appendChild(imgEl);
