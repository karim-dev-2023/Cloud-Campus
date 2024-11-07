//--------------------------------------------------------
// Chapitre 13 : les objets
//--------------------------------------------------------
let elementChapitre13 = document.getElementById('contenuChapitre13');

// Outils
// Variable simple : une information
// Variable de type array : un ensemble d'information
// Variable de type object : un ensemble d'information (propriétés ou attributs) mais aussi du fonctionnel (méthodes)

// déclaration
let monObjet = {};

console.log(monObjet);

// pour créer des propriété dans l'objet
monObjet.pseudo = 'admin';
monObjet.mail = 'admin@mail.fr';
// autre façon
monObjet['ville'] = 'Paris';

// ajout d'une methode
monObjet.direBonjour = function () {
    return 'Bonjour';
};

console.log(monObjet);

elementChapitre13.innerHTML += monObjet.direBonjour() + ' ' + monObjet.pseudo + ', votre mail est : ' + monObjet['mail'] + '<hr>';

// déclaration et remplissage
let employes = {
    // Propriétés
    nom : 'Dupond',
    prenom : 'Xavier',
    profession : 'Développeur web',
    // propriété de type array
    competences : ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
    // propriété de type object
    contact : {
        adresse : '1 rue truc',
        cp : 75000,
        ville : 'Paris',
        mail : 'xavier@mail.fr'
    },
    // methode
    pays : function () {
        return 'France';
    },
    getNom : function () {
        return this.nom; // this représente l'objet en cours
    }
}
console.log(employes);

elementChapitre13.innerHTML += separateur();

elementChapitre13.innerHTML += 'Bonjour ' + employes.getNom() + ' ' + employes.prenom + '<hr>';
elementChapitre13.innerHTML += employes.competences[0] + '<hr>';
elementChapitre13.innerHTML += employes.contact.ville + '<hr>';
elementChapitre13.innerHTML += employes.pays() + '<hr>';