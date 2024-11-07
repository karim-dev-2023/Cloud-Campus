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
console.log('Affichage dans la console'); // permet d'afficher des informations dans la console navigateur
console.info('Même chose que le .log');
// Pour voir ces messages, ouvrir la console (inspecteur) navigateur

// Affichage dans la page web
//---------------------------
// On appelle l'élément de la page en passant par son id afin de rajouter du contenu
document.getElementById('contenuChapitre1').textContent = 'Bonjour à tous. ';
document.getElementById('contenuChapitre1').textContent += 'Aujourd\'hui il fait froid'; // l'anti slash permet d'échapper (d'annuler) l"apostrophe  suivante qui rentrait en conflit avec l'apostrophe délimitant la chaine de caractères.
// Sur la deuxième ligne le fait de mettre += permet de rajouter le texte à l'existant. Sinon la deuxième ligne écraserait le texte précédent.

document.getElementById('contenuChapitre1').innerHTML += '<br>Nous sommes en novembre<hr>'; // innerHTML nous permet de mettre du code html qui sera interprété.
document.getElementById('contenuChapitre1').innerHTML += '<h5 style="background-color: crimson; color: white; padding: 10px;">Hello</h5>';