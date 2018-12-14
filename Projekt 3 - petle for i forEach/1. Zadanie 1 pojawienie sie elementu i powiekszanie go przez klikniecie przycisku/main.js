const btn = document.querySelector("button"),
      lis = document.querySelectorAll("li");
let fontSize = 10;

btn.addEventListener("click", function(){

    // for (let i=0; i<lis.length; i++) {
    //     lis[i].style.fontSize = fontSize + "px";
    //     lis[i].style.display = "block";
    // }

    lis.forEach(function(li){
        li.style.fontSize = fontSize + "px";
        li.style.display = "block";
    });

    fontSize++;
});

