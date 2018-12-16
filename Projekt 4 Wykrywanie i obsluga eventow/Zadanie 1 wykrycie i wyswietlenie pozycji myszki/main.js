const h1 = document.querySelector("h1");

document.body.addEventListener("mousemove", (e) => {
//    console.log(e.clientX, e.clientY);
// odległość od początku okna przeglądarki
//    h1.textContent = `${e.clientX}, ${e.clientY}`;
// odległość od początku dokumentu (ważne przy przewijaniu)
//  h1.textContent = `${e.pageX}, ${e.pageY}`;
// odległość od początku monitora
//  h1.textContent = `${e.screenX}, ${e.screenY}`;

 //   document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2}, ${(e.clientX/e.clientY)*100})`;

 const x = e.clientX + 1; //max 255 a nie 254
 const y = e.clientY + 1;
 const width = window.innerWidth;
 const height = window.innerHeight;

 h1.textContent = `${x}, ${y}`;

 const red = x/width * 100;
 const green = y/height * 100;
 const blue = (x+y)/(width+height) * 100;
 document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`

});