document.addEventListener("DOMContentLoaded", function () {
  let color = [
    "red",
    "MediumSlateBlue",
    "IndianRed",
    "DarkOrchid",
    "MediumSpringGreen",
    "DarkKhaki",
    "Olive",
    "SteelBlue",
    "LightCyan",
    "DodgerBlue",
  ];

  document.body.addEventListener("click", function (event) {
    let horizontal  = event.pageX;
    let vertical  = event.pageY;
    
    addElement(horizontal,vertical);
  });

  console.log(window.innerHeight);

  function addElement(x,y) {
    // crée un nouvel élément div
    var newDiv = document.createElement("div");

    let heightDiv = Math.floor(Math.random() * 101) + 50 + "px";
    let widthDiw = Math.floor(Math.random() * 101) + 50 + "px";
    
    newDiv.style.backgroundColor = color[Math.floor(Math.random() * 11)];
    newDiv.style.position = "absolute";
    newDiv.style.height = heightDiv;
    newDiv.style.width = widthDiw;
    newDiv.style.left = x + "px";
    newDiv.style.top = y + "px";
    newDiv.style.borderRadius = "50%";
    newDiv.style.opacity = "1";
    newDiv.style.transition = "opacity 0.5s";


    setInterval(function (){
        newDiv.style.opacity = "0";
    },1000);
    document.body.appendChild(newDiv);
  }
});
