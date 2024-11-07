document.addEventListener('DOMContentLoaded', function () {
    
    let imagePrincipale = document.getElementById('principale');
    // let h2Legende = document.getElementById('legende');
    let listeImage = document.querySelectorAll('.img-thumbnail');
    console.log(listeImage);

    for(image of listeImage) {
        // this représente l'élément html ayant reçu l'évènement
        image.addEventListener('click', function () {
            imagePrincipale.src = this.src;
            // h2Legende.textContent = this.alt;
        });
    }


});
