// Créer une page listant des tâches à faire
// Créer quelques tâches dans un tableau array
// Une tâche doit comporter :
//     Un titre
//     Un statut (Validée / En validation / En cours / Urgent / En attente / A faire)
//     Une catégorie
//     Une description
//     Un destinataire

// Dans la page web faire :
//     Afficher les tâches existantes depuis le tableau
//     Faire un formulaire permettant de rajouter des tâches
//         le statut et la catégorie doivent être des listes déroulantes
//     Lors de la validation du form :
//         Aucun champs de doit être vide
//         On récupère les saisies et on ajoute la tâche dans la liste des tâches
//         Ensuite on vide les saisies utilisateur et on remet les select comme initialement

// Pour aller plus loin :
//     Mettre des filtres pour afficher uniquement les tâches correspondates. On cache ou on affiche selon le filtre.
//         Filtrer par chaine de caractère sur le titre ou la description
//         Filtrer par destinataire
//         Filtrer par statut (liste déroulante)
//         Filtrer par categorie (liste déroulante)

document.addEventListener("DOMContentLoaded", function () {
  const tache = [
    {
      titre: "Réunion de planification",
      statut: "Validée",
      categorie: "Réunion",
      description:
        "Préparer l'agenda et les documents nécessaires pour la réunion de la semaine prochaine.",
      destinataire: "Alice",
    },
    {
      titre: "Mise à jour du site web",
      statut: "En cours",
      categorie: "Développement",
      description:
        "Mettre à jour la section produits avec les dernières informations.",
      destinataire: "Bob",
    },
    {
      titre: "Rédaction du rapport annuel",
      statut: "En validation",
      categorie: "Rédaction",
      description:
        "Rédiger le rapport annuel pour 2024, en veillant à inclure toutes les statistiques pertinentes.",
      destinataire: "Charlie",
    },
    {
      titre: "Réponse aux emails urgents",
      statut: "Urgent",
      categorie: "Communication",
      description:
        "Répondre aux emails des clients qui nécessitent une action immédiate.",
      destinataire: "Diana",
    },
    {
      titre: "Révision du budget",
      statut: "En attente",
      categorie: "Finance",
      description:
        "Réviser et valider les prévisions budgétaires pour le trimestre suivant.",
      destinataire: "Edward",
    },
    {
      titre: "Préparer la présentation pour la conférence",
      statut: "A faire",
      categorie: "Présentation",
      description:
        "Créer les diapositives et le contenu pour la conférence à venir.",
      destinataire: "Fay",
    },
  ];

  function showTasks() {
    let divtasks = document.getElementById("tasks");

    tache.forEach(function (tache) {
      let card = document.createElement("div");
      card.classList.add("card", "m-5");
      card.style.width = "18rem";
      card.style.height = "18rem";

      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      let cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = tache.titre;

      let catdSubtitle = document.createElement("div");
      catdSubtitle.classList.add("card-subtitle");
      catdSubtitle.classList.add("mb-2");
      catdSubtitle.classList.add("text-body-secondary");
      catdSubtitle.textContent = "Statut : " + tache.statut;

      let cardCategorie = document.createElement("div");
      cardCategorie.classList.add("card-subtitle");
      cardCategorie.classList.add("mb-2");
      cardCategorie.classList.add("text-body-secondary");
      cardCategorie.textContent = "Catégorie : " + tache.categorie;

      let cardText = document.createElement("div");
      cardText.classList.add("card-text");
      cardText.textContent = tache.description;

      let cardDestinator = document.createElement("div");
      cardDestinator.classList.add("card-subtitle");
      cardDestinator.classList.add("mt-2");
      cardDestinator.classList.add("text-body-secondary");
      cardDestinator.textContent = "Destinataire : " + tache.destinataire;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(catdSubtitle);
      cardBody.appendChild(cardCategorie);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardDestinator);

      card.appendChild(cardBody);

      divtasks.appendChild(card);

      console.log(tache.titre);
    });
  }

  showTasks();
});
