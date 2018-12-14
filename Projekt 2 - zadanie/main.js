document.body.style.height = "10000vh";
const div = document.createElement("div");
document.body.appendChild(div);

div.setAttribute("style", "width: 100%; position: fixed; left: 0; top: 0; ");

let size = 0;
let color = "green";
let grow = true;
// div.style.height = size +"px"; 
// div.style.backgroundColor = color;

const changeHeight = function() {

    div.style.height = size + "px"; 
    div.style.backgroundColor = color;
    if (size >= window.innerHeight/2 || size < 0) {
        grow = !grow;
    }
    if (grow) {
        size += 10;
        color = "green";   
    } else {
        size -= 10;
        color = "red";
    }
}

window.addEventListener("scroll", changeHeight);

