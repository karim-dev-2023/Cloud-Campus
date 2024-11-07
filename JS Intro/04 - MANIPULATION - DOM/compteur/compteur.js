document.addEventListener("DOMContentLoaded", function () {
    let timerText = document.getElementById("contenuEx1");
  

    let repUser = parseInt(prompt("Choisir un temps en secondes"));

   
  
    setInterval(function () {
      // On calcule les minutes et secondes
      let heure = parseInt(repUser / 600, 10);
      let minutes = parseInt(repUser / 60, 10);
      let secondes = repUser % 60;
  
      // Ajout du zéro devant si le nombre est inférieur à 10
      heure = heure < 10 ? "0" + heure : heure;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      secondes = secondes < 10 ? "0" + secondes : secondes;
  
      // Affichage du temps
      timerText.innerText = `${heure}:${minutes}:${secondes}`;
  
      // Décrémenter le temps total
      repUser = repUser <= 0 ? 0: repUser - 1;
    }, 1000);

    setTimeout(() => {
        timerText.innerText = "Le temps est écoulé !"
      }, repUser);
  });
  