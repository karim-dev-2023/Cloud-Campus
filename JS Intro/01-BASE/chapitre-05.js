//--------------------------------------------------------
// Chapitre 5 la concaténation
//--------------------------------------------------------
let elementChapitre5 = document.getElementById('contenuChapitre5');
// la concaténation consiste à assembler du texte qu'il soit du texte brut ou contenu dans une variable ou en résultat d'une fonction.
// le caractère de concaténation et le signe +

let pseudo = 'Admin';
let statut = 'administrateur';
// Sans concaténation :
elementChapitre5.innerHTML += 'Bonjour, ';
elementChapitre5.innerHTML += pseudo;
elementChapitre5.innerHTML += '.<br>Votre profil est ';
elementChapitre5.innerHTML += statut;
elementChapitre5.innerHTML += ', bienvenue sur le site.<hr>';

// Avec la conaténation
elementChapitre5.innerHTML += 'Bonjour, ' + pseudo + '.<br>Votre profil est ' + statut + ', bienvenue sur  le site.<hr>';

// Avec les anti quote
elementChapitre5.innerHTML += `Bonjour, ${pseudo}.<br>Votre profil est ${statut}, bienvenue sur  le site.<hr>`;