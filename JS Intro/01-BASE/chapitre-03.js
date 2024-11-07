//--------------------------------------------------------
// Chapitre 3 Type de données (pseudo type)
//--------------------------------------------------------
let elementChapitre3 = document.getElementById('contenuChapitre3');

// typeof() est un outil du langage qui nous renvoie du texte représentant le type d'une information
let valeur = 123;
elementChapitre3.innerHTML = typeof(valeur); // number
elementChapitre3.innerHTML += '<br>';

valeur = 1.5;
elementChapitre3.innerHTML += typeof(valeur); // number
elementChapitre3.innerHTML += '<br>';

valeur = 'du texte';
elementChapitre3.innerHTML += typeof(valeur); // string
elementChapitre3.innerHTML += '<br>';

valeur = '123'; //  ou "123"
elementChapitre3.innerHTML += typeof(valeur); // string
elementChapitre3.innerHTML += '<br>';

valeur = true; // ou false // en terme de valeur 1 ou 0
elementChapitre3.innerHTML += typeof(valeur); // boolean
elementChapitre3.innerHTML += '<br>';

// une variable qui n'existe pas
elementChapitre3.innerHTML += typeof(kezfhze); // undefined
elementChapitre3.innerHTML += '<br>';

// Il existe d'autres types notamment array et object que l'on verra dans les chapitres suivants