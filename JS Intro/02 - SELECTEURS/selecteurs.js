/*
    DOM (Document Object Model)
    ---------------------------
    -> Le DOM permet est une interface interne aux naviguateurs
    -> Le DOM permet de rendre disponible toutes les balises html (body, div , p, table ...), tous les attributs html (src,
    href, style, class..) mais aussi des événements (click, dblclick, mouseover, mouseleave, focus, blur)
    -> Tous ces éléments sont des objets manipulahbles via javascript.

    -> Dans ce fichier nous allons voir les différents posssibilités de sélection d'un élements html
*/

// ---------------------
//  SELECTTION VIA UN ID
// ---------------------
let section1 = document.getElementById("maSection");
console.log(section1);
console.log("Section : " + section1);
console.log(typeof section1);

console.log(section1.textContent); // Pour récupérer sont contenu  texte
console.log(section1.innerHTML); // Pour récupérer sont contenu  texte et html

section1.style.padding = "50px";
section1.style.backgroundColor = "red";
section1.style.color = "white";
section1.style.title = "Une titre";

//-------------------------
// SELECTION VIA UNE classe
//-------------------------
let listeDivs = document.getElementsByClassName('mesDivs');
console.log(listeDivs);
console.log('Divs : ' + listeDivs);
console.log(typeof listeDivs);

listeDivs[0].style.fontSize = '40px';
let color = 112233;
let padding = 20;
for(div of listeDivs) {
    div.style.cssText = 'background-color: #' + color + '; padding: ' + padding + 'px;';
    color += 12345; // color = color + 12345
    padding += 10;
}

//-------------------------
// SELECTION VIA UNE balise
//-------------------------
let listeP = document.getElementsByTagName('p');
console.log(listeP);
console.log('P : ' + listeP);
console.log(typeof listeP);
color = 112233;
for(elemP of listeP) {
    elemP.style.color =  '#' + color;
    color += 12345;
}

//-------------------------
// Cas particulier
//-------------------------
// il est possible d'appeler un élément directement par son id
let divIdResultat = resultat;
console.log(divIdResultat);

// Il est possible d'appeler le body et le head directement sur le document
let monBody = document.body;
let monHead = document.head;
console.log(monBody);
console.log(monHead);

//-------------------------------------------------
// SELECTION avec querySelector et querySelectorAll
//-------------------------------------------------
// querySelector nous renvoie le premier élément répondant au chemin utilisé (1 seul élément)
// querySelectorAll nous renvoie tous les éléments répondant au chemin utilisé (collection)
let premierElemP = document.querySelector('p');
console.log(premierElemP);
console.log('Premier élément p : ' + premierElemP);
console.log(typeof premierElemP);

// le p 9eme enfant de div.conteneur
let p9 = document.querySelector('p:nth-child(9)');
console.log(p9);
console.log('Deuxième élément p : ' + p9);
console.log(typeof p9);
p9.style.backgroundColor = 'navy';
p9.style.color = 'white';
p9.style.padding = '10px';

// querySelectorAll
let listeElems = document.querySelectorAll('div, p, span');
console.log(listeElems);
console.log('Collection : ' + listeElems);
console.log(typeof listeElems);