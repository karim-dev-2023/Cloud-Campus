//--------------------------------------------------------
// Chapitre 10 : Fonctions utilisateur
//--------------------------------------------------------
let elementChapitre10 = document.getElementById('contenuChapitre10');

// fonction utilisateur : déclarée et exécutée par le développeur

// elementChapitre10.innerHTML += info + '<hr>';
// let info = 'Bonjour'; // Erreur

// fonction toute simple sans argument permettant d'afficher 3 hr
// déclaration
function separateur() {
    return '<hr><hr><hr>';
    // return représente la réponse de la fonction et on sort de la fonction. 
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
let user = 'Admin';
elementChapitre10.innerHTML += direBonjour(user);

elementChapitre10.innerHTML += direBonjour('Mathieu');

elementChapitre10.innerHTML += direBonjour();

elementChapitre10.innerHTML += separateur();

// fonction permettant de faire un affichage selon la saison et la temperature
function meteo(saison, temperature) {
    let debut = 'Nous sommes en ' + saison;
    let fin = ', et il fait ' + temperature + ' degré(s)<br>';

    return debut + fin;
}
elementChapitre10.innerHTML += meteo('été', 30);
elementChapitre10.innerHTML += meteo('automne', 15);
elementChapitre10.innerHTML += meteo('printemps', 20);
elementChapitre10.innerHTML += meteo('hiver', 0);

elementChapitre10.innerHTML += separateur();

//  Exercice : améliorer cette fonction afin de gérer le s sur degré(s), les valeurs 0, 1 et -1 ne doivent pas avoir de s, également gérer le "en" ou "au" selon la valeur de saison
function meteo2(saison, temperature) {
    let debut = 'Nous sommes en ' + saison;
    let fin = ', et il fait ' + temperature + ' degrés<br>';

    if(saison == 'printemps') {
        debut = 'Nous sommes au ' + saison;
    }
    if(temperature >-2 && temperature < 2) {
        fin = ', et il fait ' + temperature + ' degré<br>';
    }

    return debut + fin;
}
elementChapitre10.innerHTML += meteo2('été', 30);
elementChapitre10.innerHTML += meteo2('automne', 15);
elementChapitre10.innerHTML += meteo2('printemps', 20);
elementChapitre10.innerHTML += meteo2('hiver', 0);

elementChapitre10.innerHTML += separateur();

function meteo3(saison, temperature) {
    let article = 'en';
    let s = 's';
    saison = saison.toLowerCase();
    if(saison == 'printemps') article = 'au';
    if(temperature >-2 && temperature < 2)  s = '';

    return 'Nous sommes ' + article + ' ' + saison + ', et il fait ' + temperature + ' degré' + s + '<br>';
}
elementChapitre10.innerHTML += meteo3('été', 30);
elementChapitre10.innerHTML += meteo3('automne', 15);
elementChapitre10.innerHTML += meteo3('Printemps', 20);
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