/**
 * Cours 04/11/2024
 */
// Ceci est un commentaire sur une seule ligne

/* 
    Ceci est 
    un commentaire
    sur plusieurs 
    lignes
*/

/*
- ECMAScript est un ensemble de normes concernant le langage javascript

- Javascript est un langage front (il est aussi possible de faire du back désormais) car exécuté par le navigateur.
- Les navigateurs possèdent une interface interne (moteur) permettant d'exécuter le code javascript
- Nous avons donc un ensemble d'outils prédéfinies disponibles

- "window" : représente le navigateur (chaque onglet du navigateur est un outil window)
- "document" : représente la page (le code source de la page)

- Toutes les instructions JS doivent se terminer par un point virgule ";"

- l'outil "document" nous permet d'aller chercher des éléments de la page web afin de les manipuler pour créer des animations, de l'intéractivités, des contrôles, de la manipulation de contenu etc.
Exemple : Pour aller chercher un élément de la page via son id

<div id="mon_id"></div>

document.getElementById('mon_id'); // pour récupérer un élément

document.getElementById('mon_id').textContent = 'Lorem ipsum'; // pour manipuler le texte de l'élément

document.getElementById('mon_id').innerHTML = '<br>Lorem ipsum<br>'; // pour manipuler du texte mais aussi de l'html sur l'élément (l'html n'est pas possible avec textContent)

- Voir les chapitres suivants pour les outils de manipulation du DOM (Document Objet Model)

Doc Mozilla pour JS :
https://developer.mozilla.org/fr/docs/Web/JavaScript

*/

//--------------------------------------------------------
// Chapitre 1 les affichages
//--------------------------------------------------------

// Les boites de dialogues
//------------------------
// alert('Bonjour à tous'); // permet d'afficher un message pour l'utilisateur

// confirm('Etes vous sûr ?'); // permet de demander une confirmation utilisateur (ok / annuler)

// prompt('Quel est votre prénom ?'); // permet de récupérer une saisie utilisateur.

// Console (F12)
//--------------
// outil pour le développeur
console.log("Affichage dans la console"); // permet d'afficher des informations dans la console navigateur
console.info("Même chose que le .log");
// Pour voir ces messages, ouvrir la console (inspecteur) navigateur

// Affichage dans la page web
//---------------------------
// On appelle l'élément de la page en passant par son id afin de rajouter du contenu
document.getElementById("contenuChapitre1").textContent = "Bonjour à tous. ";
document.getElementById("contenuChapitre1").textContent +=
  "Aujourd'hui il fait froid"; // l'anti slash permet d'échapper (d'annuler) l"apostrophe  suivante qui rentrait en conflit avec l'apostrophe délimitant la chaine de caractères.
// Sur la deuxième ligne le fait de mettre += permet de rajouter le texte à l'existant. Sinon la deuxième ligne écraserait le texte précédent.

document.getElementById("contenuChapitre1").innerHTML +=
  "<br>Nous sommes en novembre<hr>"; // innerHTML nous permet de mettre du code html qui sera interprété.
document.getElementById("contenuChapitre1").innerHTML +=
  '<h5 style="background-color: crimson; color: white; padding: 10px;">Hello</h5>';

//--------------------------------------------------------
// Chapitre 2 les variables : déclaration et affectation
//--------------------------------------------------------
// Une variable est un espace nommé permettant de conserver une valeur (une information)
// Une valeur possède un type, en javascript on parle de pseudo type (ou type primitif)

// Syntaxe :
// JS est sensible à la casse
// caractères autorisés : toutes les lettres minuscules et majuscules, AZ az, les chiffres 09, le signe $ et l'underscore _
// Le nom d'une variable ne peut pas commencer par un chiffre

// Déclaration d'une variable avec le mot clé var
//-----------------------------------------------
var maVariable; // déclaration d'une variable nommée maVariable

// Affectation
maVariable = "Bonjour"; // affectation d'une chaine de caractère dans la variable.

// Déclaration d'une variable afin de placer un élément html dedans pour le manipuler ensuite.
var elementChapitre2 = document.getElementById("contenuChapitre2");
console.log(elementChapitre2);

elementChapitre2.innerHTML =
  "Une variable est un espace nommé permettant de conserver une valeur<br>";

// Déclaration d'une variable avec le mot clé let
//-----------------------------------------------
let autreVariable = "Hello";
elementChapitre2.innerHTML += autreVariable;
elementChapitre2.innerHTML += "<br>";

// Différences entre var et let
// 1 :
// il est possible de déclarer une variable du même nom plusieurs fois avec "var"
// il n'est pas possible de déclarer plusieurs fois la même variable avec le mot clé "let"

var test1 = 123;
console.log(test1);
var test1 = 456;
console.log(test1);

let test2 = "abc";
console.log(test2);
// let test2 = 'def'; // Uncaught SyntaxError: Identifier 'test2' has already been declared

// Déclaration d'une variable avec le mot clé const
//-------------------------------------------------
// Similaire à let sauf que sa valeur restara constante. Nous sommes obligé de donner la valeur lors de la déclaration.
const test3 = "Une valeur constante";
console.log(test3);
// test3 = 'autre valeur'; // Uncaught TypeError: Assignment to constant variable.

//--------------------------------------------------------
// Chapitre 3 Type de données (pseudo type)
//--------------------------------------------------------
let elementChapitre3 = document.getElementById("contenuChapitre3");

// typeof() est un outil du langage qui nous renvoie du texte représentant le type d'une information
let valeur = 123;
elementChapitre3.innerHTML = typeof valeur; // number
elementChapitre3.innerHTML += "<br>";

valeur = 1.5;
elementChapitre3.innerHTML += typeof valeur; // number
elementChapitre3.innerHTML += "<br>";

valeur = "du texte";
elementChapitre3.innerHTML += typeof valeur; // string
elementChapitre3.innerHTML += "<br>";

valeur = "123"; //  ou "123"
elementChapitre3.innerHTML += typeof valeur; // string
elementChapitre3.innerHTML += "<br>";

valeur = true; // ou false // en terme de valeur 1 ou 0
elementChapitre3.innerHTML += typeof valeur; // boolean
elementChapitre3.innerHTML += "<br>";

// une variable qui n'existe pas
elementChapitre3.innerHTML += typeof kezfhze; // undefined
elementChapitre3.innerHTML += "<br>";

// Il existe d'autres types notamment array et object que l'on verra dans les chapitres suivants

//--------------------------------------------------------
// Chapitre 4 Quotes (apostrophes / guillements / anti quote)
//--------------------------------------------------------
let elementChapitre4 = document.getElementById("contenuChapitre4");

// Les quotes nous permettent d'isoler une chaine de caractères.
// Simple quote : apostrophes
elementChapitre4.innerHTML += "Hello nous sommes lundi<br>";
// Double quote : guillemets
elementChapitre4.innerHTML += "il fait beau<br>";

// Pour javascript pas de différence entre l'un ou l'autre, juste un choix développeur.

// Il est possible d'utiliser l'anti quote (accent grave) ``
// Cela nous permet notamment d'interpréter des variable directement dans du texte.
// Nous permet aussi de sauter des lignes
elementChapitre4.innerHTML += `<p>
                                    Bonjour à tous
                                </p>`;

let prenom = "Mathieu";
// let prenom = prompt('Quel est votre prénom');
elementChapitre4.innerHTML += `Bonjour ${prenom}, bienvenue sur notre site<hr>`; // ${} s'appelle un gabarit.
elementChapitre4.innerHTML += "Bonjour ${prenom}, bienvenue sur notre site<hr>"; // ${} ne sera pas reconnu dans des apostrophes  ou des guillemets

//--------------------------------------------------------
// Chapitre 5 la concaténation
//--------------------------------------------------------
let elementChapitre5 = document.getElementById("contenuChapitre5");
// la concaténation consiste à assembler du texte qu'il soit du texte brut ou contenu dans une variable ou en résultat d'une fonction.
// le caractère de concaténation et le signe +

let pseudo = "Admin";
let statut = "administrateur";
// Sans concaténation :
elementChapitre5.innerHTML += "Bonjour, ";
elementChapitre5.innerHTML += pseudo;
elementChapitre5.innerHTML += ".<br>Votre profil est ";
elementChapitre5.innerHTML += statut;
elementChapitre5.innerHTML += ", bienvenue sur le site.<hr>";

// Avec la conaténation
elementChapitre5.innerHTML +=
  "Bonjour, " +
  pseudo +
  ".<br>Votre profil est " +
  statut +
  ", bienvenue sur  le site.<hr>";

// Avec les anti quote
elementChapitre5.innerHTML += `Bonjour, ${pseudo}.<br>Votre profil est ${statut}, bienvenue sur  le site.<hr>`;

//--------------------------------------------------------
// Chapitre 6 : Opérateurs arythmétique
//--------------------------------------------------------
let elementChapitre6 = document.getElementById("contenuChapitre6");

let chiffre1 = 10;
let chiffre2 = 5;

// addition
elementChapitre6.innerHTML +=
  chiffre1 + " + " + chiffre2 + " = " + (chiffre1 + chiffre2) + "<br>";
// soustraction
elementChapitre6.innerHTML +=
  chiffre1 + " - " + chiffre2 + " = " + (chiffre1 - chiffre2) + "<br>";
// multiplication
elementChapitre6.innerHTML +=
  chiffre1 + " * " + chiffre2 + " = " + chiffre1 * chiffre2 + "<br>";
// division
elementChapitre6.innerHTML +=
  chiffre1 + " / " + chiffre2 + " = " + chiffre1 / chiffre2 + "<br>";

// modulo (le restant de la division en terme d'entier) : %
chiffre2 = 4;
elementChapitre6.innerHTML +=
  chiffre1 + " % " + chiffre2 + " = " + (chiffre1 % chiffre2) + "<br>";
// Puissance : **
elementChapitre6.innerHTML +=
  chiffre1 + " ** " + chiffre2 + " = " + chiffre1 ** chiffre2 + "<br>";

//--------------------------------------------------------
// Chapitre 07 : Conditions
//--------------------------------------------------------
let elementChapitre7 = document.getElementById("contenuChapitre7");

// Une condition permet de prévoir plusieurs cas possible.
// Une condition (question) ne peut recevoir qu'une réponse de type vrai ou faux (true/false)

// il est possible de déclarer plusieurs variable avec un seul mot clé let, chaque variable séparée par une virgule
let a = 10,
  b = 5,
  c = 2;

if (a > b) {
  // si "a" est strictement supérieur à "b" // vrai
  elementChapitre7.innerHTML +=
    'la valeur de la variable "a" est bien supérieure à la valeur de la variable "b"<br>';
} else {
  // sinon (toutes les autres possibilités)
  elementChapitre7.innerHTML +=
    'la valeur de la variable "a" n\'est pas supérieure à la valeur de la variable "b"<br>';
}

// Plusieurs conditions obligatoires : AND : &&
if (a > b && b > c) {
  // vrai vrai
  elementChapitre7.innerHTML += "Ok pour les deux conditions<br>";
} else {
  elementChapitre7.innerHTML +=
    "L'une ou l'autre des conditions est fausse<br>";
}

// L'une ou l'autre d'un ensemble de condition : OR : ||
if (a > b || b < 2) {
  // vrai faux
  elementChapitre7.innerHTML += "Ok pour au moins une des deux conditions<br>";
} else {
  elementChapitre7.innerHTML += "Toutes les conditions sont fausses<hr>";
}

/*
Les opérateurs de comparaison
-----------------------------
>       est strictement supérieur à
>=      est supérieur ou égal à
<       est srictement inférieur à
<=      inférieur ou égal à
==      est égal à
!=      est différent de
===     est strictement égal à (en terme de valeur et de type)
!==     est strictement différent de  (en terme de valeur et/ou de type)
*/

// if / else if / else if / ... / else
a = 10;
b = 5;
c = 2;

if (a == 8) {
  // premier cas possible
  elementChapitre7.innerHTML += "Réponse 1<br>";
} else if (b > a) {
  // autre cas possible
  elementChapitre7.innerHTML += "Réponse 2<br>";
} else if (b != 5) {
  // autre cas possible
  elementChapitre7.innerHTML += "Réponse 3<br>";
} else {
  // cas par défaut
  elementChapitre7.innerHTML += "Réponse 4<br>";
}

// Parenthèse liée à des exercices
// console.log(Math.random()); // permet d'obtenir un chiffre entre 0 et 1 (< à 1)
// console.log(Math.floor(4.9)) // permet d'arrondir à l'entier inférieur
// Pour avoir un chiffre aléatoire entre 1 et 10 :
// console.log( Math.floor(Math.random() * 10) + 1 );

// Exercice 1
// placer dans une variable un chiffre aléatoire entre 1 et 10 puis faire une script permettant de demander
// à l'utilisateur (prompt) de saisir un chiffre pour deviner le chiffer aléatoire.
// Relancer le prompt autant de fois que nécessaire
// Si l'utilisateur trouve la bonne réponse : on affiche du texte et le chiffre

let chiffreAleatoire = Math.floor(Math.random() * 10) + 1;
let repUser;
console.log(chiffreAleatoire);

// do {

//     repUser = parseInt(prompt("Devinez le chiffre (entre 1 et 10) :"));
//     if (repUser === chiffreAleatoire) {
//         alert("Bravo ! Vous avez trouvé le bon chiffre : " + chiffreAleatoire);
//     } else {
//         alert("Ce n'est pas le bon chiffre. Essayez encore !");
//     }
// } while (repUser !== chiffreAleatoire);

// Exercice 2
// Faire un calcul via des prompt
// un premier prompt qui demande une saisie d'un chiffre
// un deuxième prompt qui demande une saisie d'un deuxième chiffre
// un troisième prompt qui demande la saisie d'un opérateur
// une fois récupérer les 3 informations : afficher le calcul demandé ainsi que son résultat
// Vérifier aussi que les chiffres soient bien de type number
// Vérifier que les opérateurs sont corrects
// Attention à la division par zéro
// Les informations provenant d'un prompt sont obligatoirement de type string, afin d'obtenir des number : parseFloat
// chiffre1 = '1.5';
// console.log(typeof chiffre1);
// chiffre1 = parseFloat(chiffre1);
// console.log(typeof chiffre1);
let demande1, demande2, operateur, error;
do {
  error = false;
  demande1 = parseInt(prompt("Saisissez un chiffre"));
  demande2 = parseInt(prompt("Saisissez un deuxième chiffre"));
  operateur = prompt("Saisissez un opérateur (/,*,+,-)");
  
  if (
    operateur != "/" &&
    operateur != "*" &&
    operateur != "+" &&
    operateur != "-" &&
    typeof(demande1) !== "number" // Correction ici
  ) {
    error = true;
  }
} while (error === true);

