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
maVariable = 'Bonjour'; // affectation d'une chaine de caractère dans la variable.

// Déclaration d'une variable afin de placer un élément html dedans pour le manipuler ensuite.
var elementChapitre2 = document.getElementById('contenuChapitre2');
console.log(elementChapitre2);

elementChapitre2.innerHTML = 'Une variable est un espace nommé permettant de conserver une valeur<br>';

// Déclaration d'une variable avec le mot clé let
//-----------------------------------------------
let autreVariable = 'Hello';
elementChapitre2.innerHTML += autreVariable;
elementChapitre2.innerHTML += '<br>';

// Différences entre var et let
// 1 :
// il est possible de déclarer une variable du même nom plusieurs fois avec "var"
// il n'est pas possible de déclarer plusieurs fois la même variable avec le mot clé "let"

var test1 = 123;
console.log(test1);
var test1 = 456;
console.log(test1);

let test2 = 'abc';
console.log(test2);
// let test2 = 'def'; // Uncaught SyntaxError: Identifier 'test2' has already been declared

// Déclaration d'une variable avec le mot clé const
//-------------------------------------------------
// Similaire à let sauf que sa valeur restara constante. Nous sommes obligé de donner la valeur lors de la déclaration.
const test3 = 'Une valeur constante';
console.log(test3);
// test3 = 'autre valeur'; // Uncaught TypeError: Assignment to constant variable.