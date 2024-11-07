//--------------------------------------------------------
// Chapitre 11 : Les tableaux de données ARRAY
//--------------------------------------------------------
let elementChapitre11 = document.getElementById('contenuChapitre11');

// Une variable simple permet de contenir une valeur
// Un tableau array permet de contenir un ensemble de valeur

// déclaration d'un tableau
// déclaration façon litteral : avec les crochets []
let tabFruits = ['Pommes', 'Cerises', 'Abricots', 'Ananas'];
console.log(tabFruits);
/*
0: "Pommes"
1: "Cerises"
2: "Abricots"
3: "Ananas"
*/
elementChapitre11.innerHTML += tabFruits + '<hr>';

// Pour piocher dans un tableau on utilise les [] et on appelle toujours l'indice (le numéro) pour obtenir la valeur
elementChapitre11.innerHTML += tabFruits[1] + '<hr>';

// Il est possible de modifier une valeur présente
tabFruits[1] = 'Clémentines';
elementChapitre11.innerHTML += tabFruits + '<hr>';

// Pour ajouter des élements au tableau
tabFruits[4] = 'Poires';

// Pour ajouter en fin de tableau avec push()
tabFruits.push('Mangues');

// Pour ajouter en début de tableau avec unshift()
tabFruits.unshift('Oranges');
elementChapitre11.innerHTML += tabFruits + '<hr>';
console.log(tabFruits);

// Pour réordonner en ordre alphabétique avec sort()
tabFruits.sort();
elementChapitre11.innerHTML += tabFruits + '<hr>';

// Pour connaitre le nombre d'élément dans un tableau : length
elementChapitre11.innerHTML += 'Nombre d\'élément dans le tableau tabFruits : ' + tabFruits.length + '<hr>';

for(i = 0; i < tabFruits.length; i++) {
    elementChapitre11.innerHTML += '- ' + tabFruits[i] + '<br>';
}

let liste1 = '<ul style="padding: 20px; background-color: crimson; color: white">';
for(i = 0; i < tabFruits.length; i++) {
    liste1 += '<li>' + tabFruits[i] + '</li>';
}
liste1 += '</ul>'; 
elementChapitre11.innerHTML += liste1;

// for in et for of
// for in est une boucle permettant de récupérer à chaque tour l'indice d'un tableau ou d'un objet.
let liste2 = '<ul style="padding: 20px; background-color: navy; color: white">';

for(let indice in tabFruits) {
    liste2 += '<li>'+ indice + ' : ' + tabFruits[indice] + '</li>';
}

liste2 += '</ul>'; 
elementChapitre11.innerHTML += liste2;

// for of est une boucle permetant de récupérer la valeur à chaque tour d'un tableau
let liste3 = '<ul style="padding: 20px; background-color: black; color: white">';

for(let valeur of tabFruits) {
    liste3 += '<li>' + valeur + '</li>';
}

liste3 += '</ul>'; 
elementChapitre11.innerHTML += liste3;

// Autre façon de déclarer un tableau array :
// avec le constructeur array()
let tabJour = new Array('lundi', 'mardi', 'mercredi');
tabJour.push('jeudi', 'vendredi', 'samedi');
tabJour.push('dimanche');

console.log(tabJour);

elementChapitre11.innerHTML += tabJour + '<hr>';


// il est possible de rajouter l'attribut style avec des propriétés valeur sur une élément html
// elementChapitre11.style = 'color: orange;';

// il est possible de récupérer des éléments html selon leur nom de balise
let tabH2 = document.getElementsByTagName('h2');
console.log(tabH2);

// EXERCICE : faire en sorte que tous les H2 de la page est une couleur différente de celle initiale (une boucle)
// EXERCICE : pour aller plus loin faire en sorte que tous les h2 de la page soient de couleur aléatoire (une boucle + ...)
// hexadécimal : #648768
// rgb : rgb(121, 57, 241);
for(let titre of tabH2) {
    titre.style = 'background-color: red';
}

//----
for(let titre of tabH2) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = 'background-color: rgb(' + red + ', ' + green + ', ' + blue + ')';

    titre.style = color;

    console.log(color);
}