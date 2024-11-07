//--------------------------------------------------------
// Chapitre 08 : Les boucles
//--------------------------------------------------------
let elementChapitre8 = document.getElementById('contenuChapitre8');

// Une boucle permet de répéter des instructions autant de fois que nécessaire.
// Pour mettre en place une boucle, nous avons besoin de 3 informations :
// 1 : Une valeur de départ (compteur)
// 2 : Une condition d'entrée (true/false)
// 3 : une incrémentation (+1) ou décrémentation (-1) sur le compteur

// Boucle while() {}
let i = 0; // notre compteur
while(i < 10) { // notre condition d'entrée
    elementChapitre8.innerHTML += i + ' ';
    i++; // incrémentation // i++ est un raccourci qui équivaut à écrire i = i + 1
    // i = i + 5;
}
elementChapitre8.innerHTML += '<hr>';
// Boucle for() {}
// for(valeur_de_depart; condition; incremenation) {}
for(let n = 0; n < 10; n++) {
    elementChapitre8.innerHTML += n + ' ';
}
elementChapitre8.innerHTML += '<hr>';

// exemple : on place tout le code dans une variable avant de l'envoyer dans la page
let monTableau = '';
monTableau += '<table border="1"><tr><th>Id</th><th>Pseudo</th></tr>';
monTableau += '<tr><th>123</th><th>Admin</th></tr>';
monTableau += '</table>';

elementChapitre8.innerHTML += monTableau;

// champs select pour choisir une année
let annee = '<select>';
i = 2024;
while(i > 1924) {
    annee += '<option>' + i + '</option>';
    // annee += `<option>${i}</option>`;
    i--;
}
annee += '</select><hr>';
elementChapitre8.innerHTML += annee;

// EXERCICE :
// Afficher dans la page des nombres allant de 0 à 99
// la valeur 50 doit être de couleur rouge
for(i = 0; i < 100; i++) {
    if(i == 50) {
        elementChapitre8.innerHTML += '<span style="color: red; font-weight: bold">' + i + '</span> ';
    } else {
        elementChapitre8.innerHTML += i + ' ';
    }
}