//--------------------------------------------------------
// Chapitre 6 : Opérateurs arythmétique
//--------------------------------------------------------
let elementChapitre6 = document.getElementById('contenuChapitre6');

let chiffre1 = 10;
let chiffre2 = 5;

// addition 
elementChapitre6.innerHTML += chiffre1 + ' + ' + chiffre2 + ' = ' + (chiffre1 + chiffre2) + '<br>';
// soustraction 
elementChapitre6.innerHTML += chiffre1 + ' - ' + chiffre2 + ' = ' + (chiffre1 - chiffre2) + '<br>';
// multiplication 
elementChapitre6.innerHTML += chiffre1 + ' * ' + chiffre2 + ' = ' + (chiffre1 * chiffre2) + '<br>';
// division 
elementChapitre6.innerHTML += chiffre1 + ' / ' + chiffre2 + ' = ' + (chiffre1 / chiffre2) + '<br>';

// modulo (le restant de la division en terme d'entier) : %
chiffre2 = 4;
elementChapitre6.innerHTML += chiffre1 + ' % ' + chiffre2 + ' = ' + (chiffre1 % chiffre2) + '<br>';
// Puissance : **
elementChapitre6.innerHTML += chiffre1 + ' ** ' + chiffre2 + ' = ' + (chiffre1 ** chiffre2) + '<br>';