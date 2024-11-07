//--------------------------------------------------------
// Chapitre 07 : Conditions
//--------------------------------------------------------
let elementChapitre7 = document.getElementById('contenuChapitre7');

// Une condition permet de prévoir plusieurs cas possible.
// Une condition (question) ne peut recevoir qu'une réponse de type vrai ou faux (true/false)

// il est possible de déclarer plusieurs variable avec un seul mot clé let, chaque variable séparée par une virgule
let a = 10,
    b = 5,
    c = 2;

if(a > b) { // si "a" est strictement supérieur à "b" // vrai
    elementChapitre7.innerHTML += 'la valeur de la variable "a" est bien supérieure à la valeur de la variable "b"<br>';
} else { // sinon (toutes les autres possibilités)
    elementChapitre7.innerHTML += 'la valeur de la variable "a" n\'est pas supérieure à la valeur de la variable "b"<br>';
}

// Plusieurs conditions obligatoires : AND : &&
if(a > b && b > c) { // vrai vrai
    elementChapitre7.innerHTML += 'Ok pour les deux conditions<br>';
} else {
    elementChapitre7.innerHTML += 'L\'une ou l\'autre des conditions est fausse<br>';
}

// L'une ou l'autre d'un ensemble de condition : OR : || 
if((a > b || b < 2)) { // vrai faux
    elementChapitre7.innerHTML += 'Ok pour au moins une des deux conditions<br>';
} else {
    elementChapitre7.innerHTML += 'Toutes les conditions sont fausses<hr>';
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

if(a == 8) { // premier cas possible
    elementChapitre7.innerHTML += 'Réponse 1<br>';
} else if(b > a) { // autre cas possible
    elementChapitre7.innerHTML += 'Réponse 2<br>';
} else if(b != 5) { // autre cas possible
    elementChapitre7.innerHTML += 'Réponse 3<br>';
} else { // cas par défaut
    elementChapitre7.innerHTML += 'Réponse 4<br>';
}

// Autre syntaxe possible

// Le else n'est pas obligatoire
if(a > b) { // si "a" est strictement supérieur à "b" // vrai
    elementChapitre7.innerHTML += 'la valeur de la variable "a" est bien supérieure à la valeur de la variable "b"<br>';
}

// il est possible de ne pas mettre les accolades si chaque cas ne contient qu'une seule instruction
if(a > b) 
    elementChapitre7.innerHTML += 'la valeur de la variable "a" est bien supérieure à la valeur de la variable "b"<hr>';
else
    elementChapitre7.innerHTML += 'la valeur de la variable "a" n\'est pas supérieure à la valeur de la variable "b"<hr>';

let varA = 1; // type number
let varB = '1'; // type string
let varC = true; // type booléen

if(varA == varB) {
    elementChapitre7.innerHTML += 'Les valeurs sont similaires<hr>';
} else {
    elementChapitre7.innerHTML += 'Les valeurs sont différentes<hr>';
}

// Comparaison stricte
if(varA === varB) {
    elementChapitre7.innerHTML += 'Les valeurs et les types sont similaires<hr>';
} else {
    elementChapitre7.innerHTML += 'Les valeurs et/ou les types sont différents<hr>';
}

// Valeur implicite
let valeurImplicite = 'hello';
if(valeurImplicite) {
    elementChapitre7.innerHTML += 'La valeur de la variable est évaluée à true<hr>';
} else {
    elementChapitre7.innerHTML += 'La valeur de la variable est évaluée à false<hr>';
}
// JS réinterprète la valeur soit en true soit en false
// tout est égal à true sauf quelques cas particulier :
// 0, 0.0, -0, NULL (inconnue), NaN (Not a Number), undefined, une chaine vide '' "" et false lui même.

// Autre possibilité d'écriture : ternaire
// écriture classique
if(varA === varB) {
    elementChapitre7.innerHTML += '(classique) Les valeurs et les types sont similaires<hr>';
} else {
    elementChapitre7.innerHTML += '(classique) Les valeurs et/ou les types sont différents<hr>';
}
// écriture ternaire
elementChapitre7.innerHTML += (varA === varB) ? '(ternaire) Les valeurs et les types sont similaires<hr>' : '(ternaire) Les valeurs et/ou les types sont différents<hr>';

// NaN (Not a Number)
let var1 = 1; // type number
let var2 = '1'; // type string
let var3 = '75aa0'; // type string
let var4 = true; // type boolean

// isNaN() est-ce que la valeur n'est pas numérique

if( isNaN(var1) ) { 
    elementChapitre7.innerHTML += 'La valeur n\'est pas numérique<br>';
} else {
    elementChapitre7.innerHTML += 'La valeur est numérique<br>';
}
if( isNaN(var2) ) { 
    elementChapitre7.innerHTML += 'La valeur n\'est pas numérique<br>';
} else {
    elementChapitre7.innerHTML += 'La valeur est numérique<br>';
}
if( isNaN(var3) ) { 
    elementChapitre7.innerHTML += 'La valeur n\'est pas numérique<br>';
} else {
    elementChapitre7.innerHTML += 'La valeur est numérique<br>';
}
if( isNaN(var4) ) { 
    elementChapitre7.innerHTML += 'La valeur n\'est pas numérique<br>';
} else {
    elementChapitre7.innerHTML += 'La valeur est numérique<br>';
}