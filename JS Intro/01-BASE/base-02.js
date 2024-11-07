/**
 * Cours 05/11/2024
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

// Autre syntaxe possible

// Le else n'est pas obligatoire
if (a > b) {
  // si "a" est strictement supérieur à "b" // vrai
  elementChapitre7.innerHTML +=
    'la valeur de la variable "a" est bien supérieure à la valeur de la variable "b"<br>';
}

// il est possible de ne pas mettre les accolades si chaque cas ne contient qu'une seule instruction
if (a > b)
  elementChapitre7.innerHTML +=
    'la valeur de la variable "a" est bien supérieure à la valeur de la variable "b"<hr>';
else
  elementChapitre7.innerHTML +=
    'la valeur de la variable "a" n\'est pas supérieure à la valeur de la variable "b"<hr>';

let varA = 1; // type number
let varB = "1"; // type string
let varC = true; // type booléen

if (varA == varB) {
  elementChapitre7.innerHTML += "Les valeurs sont similaires<hr>";
} else {
  elementChapitre7.innerHTML += "Les valeurs sont différentes<hr>";
}

// Comparaison stricte
if (varA === varB) {
  elementChapitre7.innerHTML += "Les valeurs et les types sont similaires<hr>";
} else {
  elementChapitre7.innerHTML +=
    "Les valeurs et/ou les types sont différents<hr>";
}

// Valeur implicite
let valeurImplicite = "hello";
if (valeurImplicite) {
  elementChapitre7.innerHTML +=
    "La valeur de la variable est évaluée à true<hr>";
} else {
  elementChapitre7.innerHTML +=
    "La valeur de la variable est évaluée à false<hr>";
}
// JS réinterprète la valeur soit en true soit en false
// tout est égal à true sauf quelques cas particulier :
// 0, 0.0, -0, NULL (inconnue), NaN (Not a Number), undefined, une chaine vide '' "" et false lui même.

// Autre possibilité d'écriture : ternaire
// écriture classique
if (varA === varB) {
  elementChapitre7.innerHTML +=
    "(classique) Les valeurs et les types sont similaires<hr>";
} else {
  elementChapitre7.innerHTML +=
    "(classique) Les valeurs et/ou les types sont différents<hr>";
}
// écriture ternaire
elementChapitre7.innerHTML +=
  varA === varB
    ? "(ternaire) Les valeurs et les types sont similaires<hr>"
    : "(ternaire) Les valeurs et/ou les types sont différents<hr>";

// NaN (Not a Number)
let var1 = 1; // type number
let var2 = "1"; // type string
let var3 = "75aa0"; // type string
let var4 = true; // type boolean

// isNaN() est-ce que la valeur n'est pas numérique

if (isNaN(var1)) {
  elementChapitre7.innerHTML += "La valeur n'est pas numérique<br>";
} else {
  elementChapitre7.innerHTML += "La valeur est numérique<br>";
}
if (isNaN(var2)) {
  elementChapitre7.innerHTML += "La valeur n'est pas numérique<br>";
} else {
  elementChapitre7.innerHTML += "La valeur est numérique<br>";
}
if (isNaN(var3)) {
  elementChapitre7.innerHTML += "La valeur n'est pas numérique<br>";
} else {
  elementChapitre7.innerHTML += "La valeur est numérique<br>";
}
if (isNaN(var4)) {
  elementChapitre7.innerHTML += "La valeur n'est pas numérique<br>";
} else {
  elementChapitre7.innerHTML += "La valeur est numérique<br>";
}

//--------------------------------------------------------
// Chapitre 08 : Les boucles
//--------------------------------------------------------
let elementChapitre8 = document.getElementById("contenuChapitre8");

// Une boucle permet de répéter des instructions autant de fois que nécessaire.
// Pour mettre en place une boucle, nous avons besoin de 3 informations :
// 1 : Une valeur de départ (compteur)
// 2 : Une condition d'entrée (true/false)
// 3 : une incrémentation (+1) ou décrémentation (-1) sur le compteur

// Boucle while() {}
let i = 0; // notre compteur
while (i < 10) {
  // notre condition d'entrée
  elementChapitre8.innerHTML += i + " ";
  i++; // incrémentation // i++ est un raccourci qui équivaut à écrire i = i + 1
  // i = i + 5;
}
elementChapitre8.innerHTML += "<hr>";
// Boucle for() {}
// for(valeur_de_depart; condition; incremenation) {}
for (let n = 0; n < 10; n++) {
  elementChapitre8.innerHTML += n + " ";
}
elementChapitre8.innerHTML += "<hr>";

// exemple : on place tout le code dans une variable avant de l'envoyer dans la page
let monTableau = "";
monTableau += '<table border="1"><tr><th>Id</th><th>Pseudo</th></tr>';
monTableau += "<tr><th>123</th><th>Admin</th></tr>";
monTableau += "</table>";

elementChapitre8.innerHTML += monTableau;

// champs select pour choisir une année
let annee = "<select>";
i = 2024;
while (i > 1924) {
  annee += "<option>" + i + "</option>";
  // annee += `<option>${i}</option>`;
  i--;
}
annee += "</select><hr>";
elementChapitre8.innerHTML += annee;

// EXERCICE :
// Afficher dans la page des nombres allant de 0 à 99
// la valeur 50 doit être de couleur rouge
for (i = 0; i < 100; i++) {
  if (i == 50) {
    elementChapitre8.innerHTML +=
      '<span style="color: red; font-weight: bold">' + i + "</span> ";
  } else {
    elementChapitre8.innerHTML += i + " ";
  }
}

//--------------------------------------------------------
// Chapitre 9 : Fonctions prédéfinies
//--------------------------------------------------------
let elementChapitre9 = document.getElementById('contenuChapitre9');
// Une fonction permet d'isoler du code afin de l'appeler ensuite via la fonction
// On parle de fonction prédéfinie lorsque que la fonction est inscrite au langage
// le développeur ne fait que l'exécuter

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects#propri%C3%A9t%C3%A9s_-_fonctions

// parseInt() permet de transformer une valeur numérique de type string en entier de type number
chiffre1 = 9;
chiffre2 = '5';

elementChapitre9.innerHTML += 'Addition de 9 en type number avec 5 en type string = ' + (chiffre1 + chiffre2) + '<hr>';
elementChapitre9.innerHTML += 'Addition de 9 en type number avec 5 en type string avec parseInt = ' + (chiffre1 + parseInt(chiffre2)) + '<hr>';

elementChapitre9.innerHTML += 'valeur de 1.7 avec parseInt() : ' + parseInt('1.7') + '<hr>';

// Même chose avec parseFloat() sauf que l'on garde les décimales
elementChapitre9.innerHTML += 'valeur de 1.7 avec parseFloat() : ' + parseFloat('1.7') + '<hr>';

//--------------------------------------------------------
// Chapitre 10 : Fonctions utilisateur
//--------------------------------------------------------
let elementChapitre10 = document.getElementById('contenuChapitre10');

// fonction utilisateur : déclarée et exécutée par le développeur

// fonction toute simple sans argument permettant d'afficher 3 hr
// déclaration
function separateur() {
    return '<hr><hr><hr>'; 
}

// exécution
elementChapitre10.innerHTML += separateur();

// Fonction avec argument
// fonction permettant de dire bonjour à l'utilisateur
function direBonjour(qui) {
    // if(typeof qui == 'undefined') {
    if(!qui) { // possible de l'écrire de cette manière if(qui == false), avec le ! on attend l'inverse
        return 'Bonjour, bienvenue sur notre site<hr>';
    } else {
        return 'Bonjour ' + qui + ', bienvenue sur notre site<hr>';
    }
}

// let user = prompt('Bonjour quel est votre pseudo');
// let user = 'Admin';
// elementChapitre10.innerHTML += direBonjour(user);

elementChapitre10.innerHTML += direBonjour('Mathieu');

elementChapitre10.innerHTML += direBonjour();

elementChapitre10.innerHTML += separateur();

// Fonction permettant de faire un affichage selon de la saison et la temperature
function meteo(saison, temperature){
  let debut = "Nous sommes en " + saison + " ";
  let fin = ", et il fait " + temperature + " degré <br>";
  return debut + fin;
}

elementChapitre10.innerHTML += meteo("été", 50);
elementChapitre10.innerHTML += meteo("automne", 15);
elementChapitre10.innerHTML += meteo("primtemps", 15);
elementChapitre10.innerHTML += meteo("hiver", -15);

//  Exercice : améliorer cette fonction afin de gérer le s sur degré(s), les valeurs 0, 1 et -1 ne 
// doivent pas avoir de s, également gérer le "en" ou "au" selon la valeur de saison

elementChapitre10.innerHTML += separateur();

function meteo2(saison, temperature){
  let debut = "Nous sommes en " + saison + " ";
  let fin = ", et il fait " + temperature + " degrés <br>";

  if( saison == "primtemps"){
    debut = "Nous sommes au " + saison + " ";
  }

  if(temperature > -2 && temperature < 2){
    fin = ", et il fait " + temperature + " degré <br>";
  }


  return debut + fin;
}

elementChapitre10.innerHTML += meteo2("été", 50);
elementChapitre10.innerHTML += meteo2("automne", 15);
elementChapitre10.innerHTML += meteo2("primtemps", 15);
elementChapitre10.innerHTML += meteo2("hiver", -15);


function meteo3(saison, temperature) {
  let article = 'en';
  let s = 's';
  if(saison == 'printemps') article = 'au';
  if(temperature >-2 && temperature < 2)  s = '';

  return 'Nous sommes ' + article + ' ' + saison + ', et il fait ' + temperature + ' degré' + s + '<br>';
}
elementChapitre10.innerHTML += meteo3('été', 30);
elementChapitre10.innerHTML += meteo3('automne', 15);
elementChapitre10.innerHTML += meteo3('printemps', 20);
elementChapitre10.innerHTML += meteo3('hiver', 0);

elementChapitre10.innerHTML += separateur();

// Environnements (scope)
// Environnement global : l'intégralité du script
// Environnement local : à l'intérieur d'une fonction
// Avec javascript, il y a aussi l'environnement bloc : à l'intérieur {} (lié à l'utilisation de let)
  // if() { ...block... }
  // while() { ...block... }
  // for() { ...block... }

// GLOBAL 
  // Une variable déclarée avec var ou sans mot clé existe partout dans le code même dans une fonction
  // Une variable déclarée avec let ou const n'existe que dans le bloc où elle a été déclaré
{
  let variableTest = 'hello';
  elementChapitre10.innerHTML += 'Dans le bloc : ' + variableTest;
}

// elementChapitre10.innerHTML += 'Dans le global : ' + variableTest; //  erreur

// LOCAL
  // Une variable déclarée avec var ou let ou const n'existe que dans la fonction où elle a été déclaré
  // Une variable déclarée sans mot clé dans une fonction existera dans l'espace global.

elementChapitre10.innerHTML += separateur();

var vehicule = 'vélo';

function rouler() {
  var vehicule = 'voiture';
  return vehicule;
}

rouler();

elementChapitre10.innerHTML += vehicule + '<br>'; // vélo
elementChapitre10.innerHTML += rouler() + '<br>';

var pays = 'France';

function affichagePays() {
  pays = 'Espagne';
  let maVariableLocale = 'TEST';
  return pays;
}
affichagePays()

elementChapitre10.innerHTML += pays + '<br>'; // Espagne
// elementChapitre10.innerHTML += maVariableLocale + '<br>';







//--------------------------------------------------------
// Chapitre 11 : Les tableaux de données ARRAY
//--------------------------------------------------------
let elementChapitre11 = document.getElementById("contenuChapitre11");

// Une variable simple permet de contenir une valeur
// Un tableau array permet de contenir un ensemble de valeur

// déclaration d'un tableau
// déclaration façon litteral : avec les crochets []
let tabFruits = ["Pommes", "Cerises", "Abricots", "Ananas"];
console.log(tabFruits);
/*
0: "Pommes"
1: "Cerises"
2: "Abricots"
3: "Ananas"
*/
elementChapitre11.innerHTML += tabFruits + "<hr>";

// Pour piocher dans un tableau on utilise les [] et on appelle toujours l'indice (le numéro) pour obtenir la valeur
elementChapitre11.innerHTML += tabFruits[1] + "<hr>";

// Il est possible de modifier une valeur présente
tabFruits[1] = "Clémentines";
elementChapitre11.innerHTML += tabFruits + "<hr>";

// Pour ajouter des élements au tableau
tabFruits[4] = "Poires";

// Pour ajouter en fin de tableau avec push()
tabFruits.push("Mangues");

// Pour ajouter en début de tableau avec unshift()
tabFruits.unshift("Oranges");
elementChapitre11.innerHTML += tabFruits + "<hr>";
console.log(tabFruits);

// Pour réordonner en ordre alphabétique avec sort()
tabFruits.sort();
elementChapitre11.innerHTML += tabFruits + "<hr>";

// Pour connaitre le nombre d'élément dans un tableau : length
elementChapitre11.innerHTML +=
  "Nombre d'élément dans le tableau tabFruits : " + tabFruits.length + "<hr>";

for (i = 0; i < tabFruits.length; i++) {
  elementChapitre11.innerHTML += "- " + tabFruits[i] + "<br>";
}

let liste1 =
  '<ul style="padding: 20px; background-color: crimson; color: white">';
for (i = 0; i < tabFruits.length; i++) {
  liste1 += "<li>" + tabFruits[i] + "</li>";
}
liste1 += "</ul>";
elementChapitre11.innerHTML += liste1;

// for in et for of
// for in est une boucle permettant de récupérer à chaque tour l'indice d'un tableau ou d'un objet.
let liste2 = '<ul style="padding: 20px; background-color: navy; color: white">';

for (let indice in tabFruits) {
  liste2 += "<li>" + indice + " : " + tabFruits[indice] + "</li>";
}

liste2 += "</ul>";
elementChapitre11.innerHTML += liste2;

// for of est une boucle permetant de récupérer la valeur à chaque tour d'un tableau
let liste3 =
  '<ul style="padding: 20px; background-color: black; color: white">';

for (let valeur of tabFruits) {
  liste3 += "<li>" + valeur + "</li>";
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

// il est possible de récupérer des élément html selon leur nom de balise
let tabH2 = document.getElementsByTagName("h2");
console.log(tabH2);

// EXERCICE : faire en sorte que tous les H2 de la page est une couleur différente de celle initiale (une boucle)
// for (let color of tabH2) {
//   tabH2 += color.style = "background-color: orange;";
// }
// EXERCICE : pour aller plus loin faire en sorte que tous les h2 de la page soient de couleur aléatoire (une boucle + ...)
// hexadécimal : #648768
// rgb : rgb(121, 57, 241);

for (let color of tabH2) {
  let color1 = Math.floor(Math.random() * 256) + 1;
  let color2 = Math.floor(Math.random() * 256) + 1;
  let color3 = Math.floor(Math.random() * 256) + 1;
  let finalColor = `background-color: rgb(${color1}, ${color2}, ${color3});`;

  tabH2 += color.style = finalColor;
}

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
elementChapitre12.innerHTML += nom.substring(0,1).toUpperCase() + nom.substring(1).toLowerCase() + '<br>';

function firstLetterUpperCase(word){
  return word.substring(0,1).toUpperCase() + word.substring(1) + '<br>';
}

elementChapitre12.innerHTML += firstLetterUpperCase("heyheyhey");







//--------------------------------------------------------
// EXERCICES
//--------------------------------------------------------
// Parenthèse liée à des exercices
// console.log(Math.random()); // permet d'obtenir un chiffre entre 0 et 1 (< à 1)
// console.log(Math.floor(4.9)) // permet d'arrondir à l'entier inférieur
// Pour avoir un chiffre aléatoire entre 1 et 10 :
console.log(Math.floor(Math.random() * 10) + 1);

// Exercice 1
// placer dans une variable un chiffre aléatoire entre 1 et 10 puis faire une script permettant de demander à l'utilisateur (prompt) de saisir un chiffre pour deviner le chiffer aléatoire.
// Relancer le prompt autant de fois que nécessaire
// Si l'utilisateur trouve la bonne réponse : on affiche du texte et le chiffre

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
chiffre1 = "1.5";
console.log(typeof chiffre1);
chiffre1 = parseFloat(chiffre1);
console.log(typeof chiffre1);



