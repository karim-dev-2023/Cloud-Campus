document.addEventListener("DOMContentLoaded", function () {
  let nom = document.getElementById("nom");
  let prenom = document.getElementById("prenom");
  let pseudo = document.getElementById("pseudo");
  let tel = document.getElementById("tel");
  let mdp = document.getElementById("mdp");
  let cmdp = document.getElementById("cmdp");
  let adresse = document.getElementById("adresse");
  let cp = document.getElementById("cp");
  let ville = document.getElementById("ville");

  let errorNom = true;
  let errorPrenom = true;
  let errorPseudo = true;
  let errorTel = true;
  let errorMdp = true;
  let errorCMdp = true;
  let errorAdresse = true;
  let errorCp = true;
  let errorVille = true;

  function updateSubmitButton() {
    if (
      !errorNom &&
      !errorPrenom &&
      !errorPseudo &&
      !errorTel &&
      !errorMdp &&
      !errorCMdp &&
      !errorAdresse &&
      !errorCp &&
      !errorVille
    ) {
      submitBtn.classList.remove("disabled");
      let error = document.getElementById("error");
      error.style.backgroundColor = "";
      error.innerHTML = "";
    }
  }

  nom.addEventListener("mouseleave", function () {
    if (nom.value.trim() === "") {
      displayError("Veuillez remplir toutes les champs");
      errorNom = true;
    } else {
      errorNom = false;
    }
    updateSubmitButton();
  });

  prenom.addEventListener("mouseleave", function () {
    if (prenom.value.trim() === "") {
      displayError("Veuillez remplir toutes les champs");
      errorPrenom = true;
    } else {
      errorPrenom = false;
    }
    updateSubmitButton();
  });
  adresse.addEventListener("mouseleave", function () {
    if (adresse.value.trim() === "") {
      displayError("Veuillez remplir toutes les champs");
      errorAdresse = true;
    } else {
      errorAdresse = false;
    }
    updateSubmitButton();
  });
  ville.addEventListener("mouseleave", function () {
    if (ville.value.trim() === "") {
      displayError("Veuillez remplir toutes les champs");
      errorVille = true;
    } else {
      errorVille = false;
    }
    updateSubmitButton();
  });

  pseudo.addEventListener("mouseleave", function () {
    if (
      pseudo.value.trim() === "" ||
      pseudo.value.length <= 4 ||
      pseudo.value.length > 14
    ) {
      displayError("Pseudo doit contenir entre 4 et 14 caractères");
      errorPseudo = true;
    } else {
      errorPseudo = false;
    }
    updateSubmitButton();
  });

  tel.addEventListener("mouseleave", function () {
    let telnumber = tel.value.replaceAll(" ", "").replaceAll(".", "");
    if (telnumber.length !== 10) {
      displayError("Téléphone doit contenir 10 chiffres");
      errorTel = true;
    } else {
      errorTel = false;
    }
    updateSubmitButton();
  });

  mdp.addEventListener("mouseleave", function () {
    if (mdp.value.trim() === "") {
      displayError("Mot de passe ne doit pas être vide");
      errorMdp = true;
    } else {
      errorMdp = false;
    }
    updateSubmitButton();
  });

  cmdp.addEventListener("mouseleave", function () {
    if (cmdp.value.trim() === "") {
      displayError("Confirmation du mot de passe ne doit pas être vide");
      errorCMdp = true;
    } else if (cmdp.value !== mdp.value) {
      displayError("Les mots de passe ne correspondent pas");
      errorCMdp = true;
    } else {
      errorCMdp = false;
    }
    updateSubmitButton();
  });

  cp.addEventListener("mouseleave", function () {
    if (cp.value.trim() === "" || cp.value.length !== 5) {
      displayError("Code Postal doit contenir 5 caractères");
      errorCp = true;
    } else {
      errorCp = false;
    }
    updateSubmitButton();
  });

  function displayError(message) {
    error.style.backgroundColor = "red";
    error.innerHTML = message + "<br>";
  }
});
