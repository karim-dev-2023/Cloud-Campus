/*
    3 façons de mettre en place un événements JS
    --------------------------------------------
    1 : via un attribut d'événement html
    <a href="" id="truc" onclick="... code JS ..." > </a>

    2 : par l'événements directments en JS (ancienne façon)
    document.getElementById("truc").onclick = function() {...code...};

    3 : par un écouteur d'évènement (bonne pratique)
    document.getElementById("truc").addEventListener("click", function(){...code...});
 */

// Evenement click
document.getElementById("div1").addEventListener("click", function () {
  // document.getElementById("div1").style.backgroundColor = "yellow";
  // this représente l'élément html
  //   this.style.backgroundColor = "yellow";

  /*
    EXERCICE : 
    Faire 4 changement de couleur consecutif à chque click
    Au quatrième clique on revient à la couleur initial
  */

  let currentColor = this.style.backgroundColor;

  if (currentColor == "red") {
    this.style.backgroundColor = "yellow";
  } else if (currentColor == "yellow") {
    this.style.backgroundColor = "blue ";
  } else if (currentColor == "blue") {
    this.style.backgroundColor = "orange ";
  } else {
    this.style.backgroundColor = "red ";
  }
});

// mettre un évènemennt click sur le deuxième carré afin que lors de chaque click on déplace le carré
// pour faire un tour complet (d'abord vers la droite, ensuite en dessous, puis vers la gauche et on
// revient à la position initiale)

document.getElementById("div2").addEventListener("click", function () {
  let top = this.style.top;
  let left = this.style.left;
  //   console.log(currentMargin);

  if (top == "0px" && left == "0px") {
    this.style.left = "100px";
  } else if (top == "0px" && left == "100px") {
    this.style.top = "100px";
  } else if (top == "100px" && left == "100px") {
    this.style.left = "0px";
  } else {
    this.style.top = "0px";
  }
});

// mettre un évènemennt click sur le deuxième carré afin que lors de chaque click on déplace le carré pour faire un tour complet (d'abord vers la droite, ensuite en dessous, puis vers la gauche et on revient à la position initiale)

// Même chose pour le div3
let action = 0;
document.getElementById("div3").addEventListener("click", function () {
  action++;
  if (action == 1) {
    this.style.left = "100px";
  } else if (action == 2) {
    this.style.top = "100px";
  } else if (action == 3) {
    this.style.left = "0px";
  } else {
    this.style.top = "0px";
    action = 0;
  }
});

//---

let imagesBlocImage = document.querySelectorAll("#blockImage img");
let monBlocImage = document.querySelector("#blockImage");

monBlocImage.addEventListener("mouseover", function () {
  imagesBlocImage[0].style.left = "-500px";
  imagesBlocImage[1].style.left = "-500px";
});
monBlocImage.addEventListener("mouseleave", function () {
  imagesBlocImage[0].style.left = "0px";
  imagesBlocImage[1].style.left = "0px";
});

//---
// Faire une fonction afin que lors du click sur le bouton next on cache l'image actuelle puis on affiche la suivante, lorsque l'on arrive à la dernière image, on repars sur la premiere.

// afin de bloquer un évènement, on doit le récupèrer (en mettant une variable dans les parenthèses de la fonction liée à l'évènement)
// pour le bloquer : e.preventDefault();
// Pour r"cupérer la valeur d'un attribut : getAttribute()
// Pour modifier la valeur d'un attribut : setAttribute()

let carrouselImageBlocImage = document.querySelectorAll("#carousel img");
// let carrouselBlocImage = document.querySelectorAll("#carousel");

let carrouselBtn = document.getElementById("next");
carrouselBtn.addEventListener("click", defilement);

function defilement(e) {
  e.preventDefault();
  if (carrouselImageBlocImage[0].style.opacity === "1" || !carrouselImageBlocImage[0].style.opacity) {
    carrouselImageBlocImage[0].style.opacity = "0";
    carrouselImageBlocImage[1].style.opacity = "1";
  }else if(carrouselImageBlocImage[1].style.opacity == "1"){
    carrouselImageBlocImage[1].style.opacity = "0";
    carrouselImageBlocImage[2].style.opacity = "1";
  }else if(carrouselImageBlocImage[2].style.opacity == "1"){
    carrouselImageBlocImage[2].style.opacity = "0";
    carrouselImageBlocImage[3].style.opacity = "1";
  }else{
    carrouselImageBlocImage[3].style.opacity = "0";
    carrouselImageBlocImage[0].style.opacity = "1";
  }
}
