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

elementChapitre9.innerHTML += separateur(); // il est tout à fait possible d'appeler une fonction avant sa déclaration. // il n'y a pas de sens de lecture sur les fonctions.

// Même chose avec parseFloat() sauf que l'on garde les décimales
elementChapitre9.innerHTML += 'valeur de 1.7 avec parseFloat() : ' + parseFloat('1.7') + '<hr>';