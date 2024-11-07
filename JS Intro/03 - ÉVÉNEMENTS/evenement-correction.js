/*
3 façons de mettre en place un évènement JS
//-----------------------------------------
// 1 : via un attribut d'évènement html
<a href="" id="un_id" onclick="... code JS ..."></a>

// 2 : par l'évènement directement en JS (ancienne façon)
document.getElementById('un_id').onclick = function () { ... code ... }

// 3 : par un écouteur d'évènement (bonne pratique)
document.getELementById('un_id').addEventListener('click', function () { ... code ... });

*/

// Evenement click
/*
3 façons de mettre en place un évènement JS
//-----------------------------------------
// 1 : via un attribut d'évènement html
<a href="" id="un_id" onclick="... code JS ..."></a>

// 2 : par l'évènement directement en JS (ancienne façon)
document.getElementById('un_id').onclick = function () { ... code ... }

// 3 : par un écouteur d'évènement (bonne pratique)
document.getELementById('un_id').addEventListener('click', function () { ... code ... });

*/

// Evenement click
document.getElementById('div1').addEventListener('click', function () {

    // document.getElementById('div1').style.backgroundColor = 'mediumslateblue';
    // this représente l'élément html
    let couleur = this.style.backgroundColor;
    console.log(couleur);
    /*
        Faire 4 changements de couleur consecutif à chaque click.
        Au quatrième click, on revient à la couleur initiale.
    */
    if(couleur == 'red') {
        this.style.backgroundColor = 'orange';
    } else if(couleur == 'orange') {
        this.style.backgroundColor = 'royalblue';
    } else if(couleur == 'royalblue') {
        this.style.backgroundColor = 'brown';
    } else {
        this.style.backgroundColor = 'red';
    }    

});

// mettre un évènemennt click sur le deuxième carré afin que lors de chaque click on déplace le carré pour faire un tour complet (d'abord vers la droite, ensuite en dessous, puis vers la gauche et on revient à la position initiale)
// mettre un évènemennt click sur le deuxième carré afin que lors de chaque click on déplace le carré pour faire un tour complet (d'abord vers la droite, ensuite en dessous, puis vers la gauche et on revient à la position initiale)
/*
3 façons de mettre en place un évènement JS
//-----------------------------------------
// 1 : via un attribut d'évènement html
<a href="" id="un_id" onclick="... code JS ..."></a>

// 2 : par l'évènement directement en JS (ancienne façon)
document.getElementById('un_id').onclick = function () { ... code ... }

// 3 : par un écouteur d'évènement (bonne pratique)
document.getELementById('un_id').addEventListener('click', function () { ... code ... });

*/

// Evenement click
document.getElementById('div2').addEventListener('click', function () {


    let top = this.style.top;
    let left = this.style.left;
    console.log(top);
    console.log(left);

    if(top == '0px' && left == '0px') {
        this.style.left = '100px';
    } else if(top == '0px' && left == '100px') {
        this.style.top = '100px';
    } else if(top == '100px' && left == '100px') {
        this.style.left = '0px';
    } else {
        this.style.top = '0px';
    }    

});

// mettre un évènemennt click sur le deuxième carré afin que lors de chaque click on déplace le carré pour faire un tour complet (d'abord vers la droite, ensuite en dessous, puis vers la gauche et on revient à la position initiale)

// Même chose pour le div3
let action = 0;
document.getElementById('div3').addEventListener('click', function (e) {
    console.log(e);

    action++;
    if(action == 1) {
        this.style.left = '100px';      
    } else if(action == 2) {
        this.style.top = '100px';
    } else if(action == 3) {
        this.style.left = '0px';
    } else {
        this.style.top = '0px';
        action = 0;
    }    

});

//---

let imagesBlocImage = document.querySelectorAll('#blockImage img');
let monBlocImage = document.querySelector('#blockImage');

monBlocImage.addEventListener('mouseover', function () {
    imagesBlocImage[0].style.left = '-500px';
    imagesBlocImage[1].style.left = '-500px';
});
monBlocImage.addEventListener('mouseleave', function () {
    imagesBlocImage[0].style.left = '0px';
    imagesBlocImage[1].style.left = '0px';
});

//---
// Faire une fonction afin que lors du click sur le bouton next on cache l'image actuelle puis on affiche la suivante, lorsque l'on arrive à la dernière image, on repars sur la premiere.

// afin de bloquer un évènement, on doit le récupèrer (en mettant une variable dans les parenthèses de la fonction liée à l'évènement)
    // pour le bloquer : e.preventDefault();
    // pour récupérer la valeur d'un attribut : getAttribute()
    // pour modifier la valeur d'un attribut : setAttribute()

console.log(document.querySelector('#carousel img').src);
console.log(document.querySelector('#carousel img').getAttribute('src'));

let imageCarousel = document.querySelectorAll('#carousel img');
let carousel = document.getElementById('carousel');


function defilement(e) {

    // avec le setInterval on  ne récupère l'évènement, donc il faut tester s'il existe
    if(e) {
        e.preventDefault();
    }

    let imageActuelle = carousel.getAttribute('data-image');
   

    if(imageActuelle == 'image1') {
        imageCarousel[0].style.opacity = 0;
        imageCarousel[1].style.opacity = 1;
        carousel.setAttribute('data-image', 'image2');
    } else if(imageActuelle == 'image2') {
        imageCarousel[1].style.opacity = 0;
        imageCarousel[2].style.opacity = 1;
        carousel.setAttribute('data-image', 'image3');
    } else if(imageActuelle == 'image3') {
        imageCarousel[2].style.opacity = 0;
        imageCarousel[3].style.opacity = 1;
        carousel.setAttribute('data-image', 'image4');
    } else {
        imageCarousel[3].style.opacity = 0;
        imageCarousel[0].style.opacity = 1;
        carousel.setAttribute('data-image', 'image1');
    }
}

document.getElementById('next').addEventListener('click', defilement);

// setInterval();
// setInterval(fonction, temps_milliseconde);
let carouselAuto = setInterval(defilement, 3000);

// Pour arreter un setInterval : clearInterval(fonction)
// Lors du survol avec la souris : bloquer le défilement auto
// lorsque l'on sort du survol avec la souris : on relance le défilement auto
carousel.addEventListener('mouseover', function () {
    clearInterval(carouselAuto);
});
carousel.addEventListener('mouseleave', function () {
    carouselAuto = setInterval(defilement, 3000);
});

// Pour bloquer l'ouverture du menu avec le clic droit de la souris
// document.body.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

// Si on veut attendre que les éléments html soient tous chargés avant de déclencher notre js :
document.addEventListener('DOMContentLoaded', function () {
    // code ...
});

// Sinon il est possible de rajouter un attribut sur la balise script
// <script src="script.js" defer></script>

// Bonne pratique, on place notre balise script juste avant la fermeture </body>


/*
1. Événements de souris
    click : Clic sur l'élément.
    dblclick : Double-clic sur l'élément.
    mousedown : Appui sur le bouton de la souris.
    mouseup : Relâchement du bouton de la souris.
    mousemove : Mouvement de la souris sur l'élément.
    mouseover : Passage de la souris au-dessus de l'élément.
    mouseout : Quitter la zone de l'élément avec la souris.
    mouseenter : La souris entre sur l'élément (sans propagation vers les enfants).
    mouseleave : La souris quitte l'élément (sans propagation vers les enfants).
    contextmenu : Clic droit pour ouvrir le menu contextuel.

2. Événements de clavier
    keydown : Appui sur une touche.
    keypress : Appui sur une touche (déprécié, keydown et keyup sont préférés).
    keyup : Relâchement d'une touche.

3. Événements de formulaire
    submit : Envoi du formulaire.
    reset : Réinitialisation du formulaire.
    change : Changement de valeur d’un élément de formulaire.
    input : Modification de la valeur d'un champ de saisie.
    focus : Élément recevant le focus.
    blur : Élément perdant le focus.
    focusin : Focus entrant dans l’élément (se propage).
    focusout : Focus sortant de l’élément (se propage).

4. Événements de document/chargement
    DOMContentLoaded : Chargement complet de la page HTML.
    load : Chargement complet de la page, y compris les ressources externes.
    beforeunload : Avant que la page soit déchargée.
    unload : La page est déchargée.
    resize : Redimensionnement de la fenêtre.
    scroll : Défilement dans l'élément.

5. Événements de focus et de sélection
    select : Sélection de texte dans un <input> ou <textarea>.
    selectionchange : Changement de la sélection de texte.

6. Événements de glisser-déposer (drag and drop)
    dragstart : Début du glisser.
    drag : Événement pendant le glisser.
    dragend : Fin du glisser.
    dragenter : Entrée dans la zone de dépôt.
    dragover : Événement pendant que l'élément est au-dessus de la zone de dépôt.
    dragleave : Sortie de la zone de dépôt.
    drop : Dépose de l'élément.

7. Événements de médias
    play : Démarrage de la lecture.
    pause : Pause de la lecture.
    ended : Fin de la lecture.
    timeupdate : Mise à jour de la position de lecture.
    volumechange : Modification du volume.
    loadeddata : Chargement des données média.

8. Événements de réseau
    online : Connexion rétablie.
    offline : Connexion perdue.

9. Événements d’animation et de transition (CSS)
    animationstart : Début de l’animation.
    animationend : Fin de l’animation.
    animationiteration : Répétition d’une animation.
    transitionstart : Début d'une transition CSS.
    transitionend : Fin d'une transition CSS.

10. Événements tactiles (pour mobile)
    touchstart : Début du contact tactile.
    touchmove : Mouvement du contact tactile.
    touchend : Fin du contact tactile.
    touchcancel : Annulation du contact tactile (par exemple, si le contact sort de la surface de l'écran).

11. Événements de capteurs et de device
    deviceorientation : Changement d'orientation de l'appareil.
    devicemotion : Mouvement de l'appareil.

*/