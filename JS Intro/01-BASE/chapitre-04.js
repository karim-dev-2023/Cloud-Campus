//--------------------------------------------------------
// Chapitre 4 Quotes (apostrophes / guillements / anti quote)
//--------------------------------------------------------
let elementChapitre4 = document.getElementById('contenuChapitre4');

// Les quotes nous permettent d'isoler une chaine de caractères.
// Simple quote : apostrophes 
elementChapitre4.innerHTML += 'Hello nous sommes lundi<br>';
// Double quote : guillemets
elementChapitre4.innerHTML += "il fait beau<br>";

// Pour javascript pas de différence entre l'un ou l'autre, juste un choix développeur.

// Il est possible d'utiliser l'anti quote (accent grave) ``
// Cela nous permet notamment d'interpréter des variable directement dans du texte.
// Nous permet aussi de sauter des lignes 
elementChapitre4.innerHTML += `<p>
                                    Bonjour à tous
                                </p>`;

let prenom = 'Mathieu';
// let prenom = prompt('Quel est votre prénom');
elementChapitre4.innerHTML += `Bonjour ${prenom}, bienvenue sur notre site<hr>`; // ${} s'appelle un gabarit.
elementChapitre4.innerHTML += 'Bonjour ${prenom}, bienvenue sur notre site<hr>'; // ${} ne sera pas reconnu dans des apostrophes  ou des guillemets 