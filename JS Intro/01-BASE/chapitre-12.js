//--------------------------------------------------------
// Chapitre 12 : les objets globaux
//--------------------------------------------------------
let elementChapitre12 = document.getElementById('contenuChapitre12');

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects

// Un objet est un conteneur virtuel permettant de regrouper des informations (propriétés ou attributs de l'objet) mais aussi des fonctions (methodes de l'objet)

// Outils
// Variable simple : une information
// Variable de type array : un ensemble d'information
// Variable de type object : un ensemble d'information mais aussi du fonctionnel

// Avec JS tout est objet, une valeur typée (string, number, array ...) hérite naturellement de son objet global.
// Par exemple, une chaine de caractère (string) hérite de l'objet global "string" ce qui nous permet d'avoir une propriété (length) et un ensemble de methode.

// length : la longueur d'une chaine
elementChapitre12.innerHTML += 'Bonjour'.length + '<br>';

//-----------------
// STRING
//-----------------
elementChapitre12.innerHTML += '<h4>Objet String</h4>';
let email = 'mail@mail.fr';
// methode indexOf() 
// permet de connaitre la position d'une chaine dans une chaine
elementChapitre12.innerHTML += 'Le caractère @  dans le mail ' + email + ' se trouve à la position : ' + email.indexOf('@') + '<br>'; // affiche la position 4 car le premier caractère a la position 0
elementChapitre12.innerHTML += email[4] + '<br>'; // possible

// Pour passer en majuscule : toUpperCase()
// Pour passer en minuscule : toLowerCase()
let chaine1 = 'BONJOUR';
let chaine2 = 'hello';
elementChapitre12.innerHTML += chaine1.toLowerCase() + '<br>';
elementChapitre12.innerHTML += chaine2.toUpperCase() + '<br>';

// Pour découper une chaine : substring()
// 1 ou 2 arguments
// si on ne donne qu'un argument : c'est la position de départ et on récupère toute la suite
// si on donne deux arguments, le premier représente la position de départ et le deuxième représente la position de fin
let phrase = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

let mot = phrase.substring(phrase.indexOf('consectetur'), phrase.indexOf('consectetur') + 'consectetur'.length);

elementChapitre12.innerHTML += separateur();
elementChapitre12.innerHTML += mot + '<br>';


let nom = 'dupond';
// affichez cette chaine de caractère avec la première lettre en majuscule.
// pour aller plus loin faire une fonction qui réçoit une chaine en argument et qui renvoie cette chaine avec la première lettre en majucule.

elementChapitre12.innerHTML += separateur();
elementChapitre12.innerHTML += nom.substring(0, 1).toUpperCase() + nom.substring(1).toLowerCase() + '<br>';

function upperCaseFirst(chaine) {
    return chaine.substring(0, 1).toUpperCase() + chaine.substring(1).toLowerCase();
}

elementChapitre12.innerHTML += separateur();

// prenom = prompt('Quel est votre prénom');
prenom = 'mathieu';
elementChapitre12.innerHTML += upperCaseFirst(prenom) + '<br>';


//-----------------
// MATH
//-----------------
// Object pour des mathématiques.
elementChapitre12.innerHTML += separateur();

elementChapitre12.innerHTML += 'Math.floor() permet d\'arrondir à l\'entier inférieur<hr>';
elementChapitre12.innerHTML += 'Math.floor() de la valeur 1.9 = ' + Math.floor(1.9) + '<hr>';

elementChapitre12.innerHTML += 'Math.ceil() permet d\'arrondir à l\'entier supérieur<hr>';
elementChapitre12.innerHTML += 'Math.ceil() de la valeur 1.1 = ' + Math.ceil(1.1) + '<hr>';

elementChapitre12.innerHTML += 'Math.round() permet d\'arrondir à l\'entier le plus proche<hr>';
elementChapitre12.innerHTML += 'Math.round() de la valeur 1.5 = ' + Math.round(1.5) + '<hr>';
elementChapitre12.innerHTML += 'Math.round() de la valeur 1.6 = ' + Math.round(1.6) + '<hr>';
elementChapitre12.innerHTML += 'Math.round() de la valeur 1.2 = ' + Math.round(1.2) + '<hr>';

elementChapitre12.innerHTML += 'Math.random() permet d\'obtenir un chiffre aléatoire copris entre 0 et 1 (1 est exclu)<hr>';
elementChapitre12.innerHTML += 'Math.random() ' + Math.random() + '<hr>';
elementChapitre12.innerHTML += 'Math.random() pour obtenir un chiffre entre 1 et 10 : ' + (Math.floor(Math.random() * 10) + 1) + '<hr>';
elementChapitre12.innerHTML += 'Math.random() pour obtenir un chiffre entre 0 et 10 : ' + (Math.floor(Math.random() * 11)) + '<hr>';
elementChapitre12.innerHTML += 'Math.random() pour obtenir un chiffre entre 0 et 10 : ' + (Math.round(Math.random() * 10)) + '<hr>';

let tabCouleur = ['crimson', 'navy', 'black', 'Brown', 'MediumSlateBlue', 'Indigo'];

for(let titre of tabH2) {    
    titre.style.backgroundColor = tabCouleur[Math.floor(Math.random() * tabCouleur.length)];
}

//-----------------
// DATE
//-----------------
// l'object Date permet de gérer tout type de date
// on crée une date avec le mot clé new

let aujourdhui = new Date();
console.log(aujourdhui);
console.log(typeof aujourdhui);

elementChapitre12.innerHTML += separateur();

// Pour avoir l'année en 4 chiffres
elementChapitre12.innerHTML += aujourdhui.getFullYear() + '<br>';
// Pour avoir le numéro du jour dans le mois
elementChapitre12.innerHTML += ((aujourdhui.getDate() < 10) ? '0' + aujourdhui.getDate() : aujourdhui.getDate()) + '<br>';
/*
if(aujourdhui.getDate() < 1) {
    '0' + aujourdhui.getDate();
} else {
    aujourdhui.getDate();
}
*/

// Pour avoir le numéro du mois dans l'année
elementChapitre12.innerHTML += (aujourdhui.getMonth() + 1) + '<br>'; // getMonth() nous renvoie un chiffre entre 0 et 11
let tabMois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']
elementChapitre12.innerHTML += tabMois[aujourdhui.getMonth()] + '<hr>';

elementChapitre12.innerHTML += aujourdhui.toLocaleDateString('fr-FR') + '<hr>';