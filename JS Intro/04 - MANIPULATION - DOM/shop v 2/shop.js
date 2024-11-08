/*
Une fois l'exercice finis, faire une archive et me l'envoyer en mp sur discord

- Faire une page web type catalogue produit
- récupérer des images pour les produits
- créer une tableau contenant un ensemble de produit (array ou object) avec les informations suivantes : titre, image, alt de l'image, prix, catégorie, mots clés (attributs du produit), note (utilisateur)
    [
        {
            titre: 'titre produit 1',
            image: 'image1.jpg',
            alt: 'alt image1'
            prix: 10,
            categorie: 'tshirt',
            attributs: ['attr1', 'attr2', ...],
            note: 4   
        },
        {
            titre: 'titre produit 2',
            image: 'image2.jpg',
            alt: 'alt image2'
            prix: 14,
            categorie: 'chemise',
            attributs: ['attr1', 'attr2', ...],
            note: 3.5   
        },
        ...
    ]
- Sur la page catalogue faire une barre latérale listant toutes les catégories sous forme de lien (selon les catégories présentent dans le tableau des produits via une boucle)
    mettre également un input type text en dessous des catégories : pour la recherche
    mettre également un input type text en dessous : pour filtrer par prix
- Puis un bloc principal listant tous les produits dans un bloc html en affichant les informations du produit
    la catégorie et les attributs du produit doivent être des liens
- rajouter aussi dans les catégories un lien voir tous les produits

- Pour les évènement : 
    - lors du click sur une catégorie de la barre latérale ou d'un bloc produit, il faut changer l'affichage des produits afin de n'afficher que ceux de cette catégorie.
    - même chose pour les attributs affichés dans les blocs produits
    - lors d'une saisie dans l'input de recherche, à partir de 3 caractères, filtrer les produits affichés afin que leur nom, leur catégorie ou leurs attributs contiennent cette chaine de caractère.
    - lors d'une saisie dans l'input de recherche par prix, si la valeur est bien un chiffre, il faut afficher les produits dont le prix est inférieur à la saisie utilisateur.

- Pour aller plus loin :
    - créer + de 9 produits dans le tableau
    - Afficher 9 produits par défaut
    - mettre des liens en bas de page pour la pagination, autant de lien qu'il y a de produits à afficher (9 par page)
    - lors du click sur un lien de la pagination changer l'affichage des produits
    - Lors des recherche ou des filtres par catégorie, recherche ou prix faire également une pagination si le nombre de produit dépasse 9

- Pour aller plus loin : 
------------------------
- Faire une nouvelle page pour afficher les produits dans un tableau html
- au click sur une cellule faire en sorte que la valeur de la cellule soit sélectionnée.
- permettre de ce déplacer dans le tableau avec les flêches (lors d'une déplacement, la valeur de la celllule suivante doit être sélectionnée)
- au double click sur une cellule transformer son contenu pour avoir un input ou un select (categorie) afficher dans les inputs la valeur de la cellule si l'utilisateur change la valeur, récupérer la valeur, enlever l'input et mettre la nouvelle valeur dans la cellule.

*/

document.addEventListener("DOMContentLoaded", function () {
    let products = [
        {
            titre: 'T-shirt Classique',
            image: './img/img1.jpg',
            alt: 'T-shirt blanc classique',
            prix: 10,
            categorie: 'T-shirt',
            attributs: ['Coton'],
            note: 4   
        },
        {
            titre: 'Chemise Élégante',
            image: './img/img2.jpg',
            alt: 'Chemise bleue élégante',
            prix: 14,
            categorie: 'Chemise',
            attributs: ['Coton', 'Repassage facile'],
            note: 3.5   
        },
        {
            titre: 'Pantalon Chino',
            image: './img/img3.jpg',
            alt: 'Pantalon chino beige',
            prix: 14,
            categorie: 'Pantalon',
            attributs: ['Coton', 'Slim fit'],
            note: 2  
        },
        {
            titre: 'Short de Sport',
            image: './img/img4.jpg',
            alt: 'Short de sport noir',
            prix: 14,
            categorie: 'Short',
            attributs: ['Polyester', 'Respirant'],
            note: 3.5   
        },
        {
            titre: 'Lion',
            image: './img/img5.jpg',
            alt: 'Short de sport noir',
            prix: 14,
            categorie: 'Animal',
            attributs: ['Bankai', 'Respirant'],
            note: 3.5   
        },
        {
            titre: 'War',
            image: './img/img6.jpg',
            alt: 'WAr',
            prix: 14,
            categorie: 'War',
            attributs: ['Moon', 'Respirant'],
            note: 3.5   
        },
        {
            titre: 'Dog',
            image: './img/img9.jpg',
            alt: 'Cute Dog',
            prix: 14,
            categorie: 'Animal',
            attributs: ['Cute', 'Respirant'],
            note: 3.5   
        },
        {
            titre: 'Car',
            image: './img/img7.jpg',
            alt: 'Cute cat',
            prix: 14,
            categorie: 'Cat',
            attributs: ['Cute', 'Respirant'],
            note: 3.5   
        },
        {
            titre: 'Chad',
            image: './img/img10.jpg',
            alt: 'Cute cat',
            prix: 14,
            categorie: 'War',
            attributs: ['Bankai', 'Respirant'],
            note: 3.5   
        },
       
    ];

    const productsPerPage = 8;
    let currentPage = 1;
    let totalPages = 1;

    function searchProduct() {
        const query = document.getElementById('searchBar').value.toLowerCase();
        
        const filteredProducts = products.filter(produit => 
            produit.titre.toLowerCase().includes(query) 
        );

        const resultsContainer = document.getElementById('resultats');
        resultsContainer.innerHTML = "";

        if (filteredProducts.length === 0) {
            resultsContainer.innerHTML = "<div class='search-result'>Aucun produit trouvé.</div>";
        } else {
            filteredProducts.forEach(produit => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-result');

                productDiv.innerHTML = `
                    <img src="${produit.image}" alt="${produit.alt}" style="width: 50px; height: 50px;"/>
                    <div class="product-info">
                        <p><strong>${produit.titre}</strong></p>
                        <p>Prix: ${produit.prix}€</p>
                        <p>Catégorie: ${produit.categorie}</p>
                        <p>Note: ${'\u2605'.repeat(Math.floor(produit.note))}${produit.note % 1 >= 0.5 ? '\u2605' : ''}${'\u2606'.repeat(5 - Math.ceil(produit.note))}</p>
                    </div>
                `;

                resultsContainer.appendChild(productDiv);
            });
        }
    }

    document.getElementById('searchBar').addEventListener('input', searchProduct);

    function afficherProduits(listeProduits) {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        const start = (currentPage - 1) * productsPerPage;
        const end = start + productsPerPage;
        const productsToShow = listeProduits.slice(start, end);

        productsToShow.forEach(function(produit) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${produit.image}" alt="${produit.alt}">
                <h4>${produit.titre}</h4>
                <p>Prix: ${produit.prix}€</p>
                <p>Catégorie: ${produit.categorie}</a></p>
                <p>Attributs: ${produit.attributs}</p>
                <p>Note: ${'\u2605'.repeat(Math.floor(produit.note))}${produit.note % 1 >= 0.5 ? '\u2605' : ''}${'\u2606'.repeat(5 - Math.ceil(produit.note))}</p>
                <button onclick="ajouterAuPanier('${produit.titre}')">Ajouter au panier</button>
            `;
            productList.appendChild(productDiv);
        });

        totalPages = Math.ceil(listeProduits.length / productsPerPage);
        updatePagination();
    }

    function updatePagination() {
        const prevButton = document.getElementById('prevPage');
        const nextButton = document.getElementById('nextPage');
        const pageInfo = document.getElementById('pageInfo');

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
        pageInfo.textContent = `Page ${currentPage} sur ${totalPages}`;
    }

    function changePage(direction) {
        if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        } else if (direction === 'next' && currentPage < totalPages) {
            currentPage++;
        }
        afficherProduits(products);
    }

    document.getElementById('prevPage').addEventListener('click', () => changePage('prev'));
    document.getElementById('nextPage').addEventListener('click', () => changePage('next'));

    function afficherCategories() {
        const categoryList = document.getElementById('category-list');
        categoryList.innerHTML = '';

        let categories = ['Tous'];
        products.forEach(function(product) {
            if (!categories.includes(product.categorie)) {
                categories.push(product.categorie);
            }
        });

        categories.forEach(function(categorie) {
            const li = document.createElement('li');
            li.textContent = categorie;
            li.addEventListener('click', function() {
                filtrerParCategorie(categorie);
            });
            categoryList.appendChild(li);
        });
    }

    function filtrerParCategorie(categorie) {
        if (categorie === 'Tous') {
            afficherProduits(products);
        } else {
            const produitsFiltres = products.filter(function(product) {
                return product.categorie === categorie;
            });
            afficherProduits(produitsFiltres);
        }
    }

    function afficherAttributs() {
        const attributsList = document.getElementById("attributs-list");
        attributsList.innerHTML = ""; 
    
        console.log("Affichage des attributs");
    
        let attr = ["Tous"]; 
    
        
        products.forEach(function (product) {
       
          let productAttributs = Array.isArray(product.attributs)
            ? product.attributs
            : [product.attributs];
    
          productAttributs.forEach(function (attribut) {
            if (!attr.includes(attribut)) {
              attr.push(attribut);
            }
          });
        });
    
    
        
        attr.forEach(function (attribut) {
          const li = document.createElement("li");
          li.textContent = attribut;
    
          li.addEventListener("click", function () {
            filtrerParAttribut(attribut); 
          });
    
          attributsList.appendChild(li);
        });
      }
    
     
      function filtrerParAttribut(attribut) {
        console.log("Filtrage par attribut:", attribut);
    
        if (attribut === "Tous") {
          afficherProduits(products); 
        } else {
         
          const produitsFiltres = products.filter(function (product) {
            
            return product.attributs.includes(attribut);
          });
    
          console.log("Produits filtrés par attribut:", produitsFiltres);
          afficherProduits(produitsFiltres); 
        }
      }

    document.getElementById('search').addEventListener('input', function(e) {
        const recherche = e.target.value.toLowerCase();
        if (recherche.length >= 3) {
            const produitsFiltres = products.filter(function(product) {
                return product.titre.toLowerCase().includes(recherche) ||
                product.categorie.toLowerCase().includes(recherche) ||
                product.attributs.some(attr => attr.toLowerCase().includes(recherche));
            });
            afficherProduits(produitsFiltres);
        } else {
            afficherProduits(products);
        }
    });

    document.getElementById('price-filter').addEventListener('input', function(e) {
        const prixMax = parseFloat(e.target.value);
        if (!isNaN(prixMax)) {
            const produitsFiltres = products.filter(function(product) {
                return product.prix <= prixMax;
            });
            afficherProduits(produitsFiltres);
        } else {
            afficherProduits(products);
        }
    });

    function ajouterAuPanier(titre) {
        const cartCount = document.querySelector('.cart-count');
        let count = parseInt(cartCount.textContent);
        cartCount.textContent = count + 1;
        alert(`${titre} a été ajouté au panier !`);
    }

    afficherAttributs();
    afficherCategories();
    afficherProduits(products);
});