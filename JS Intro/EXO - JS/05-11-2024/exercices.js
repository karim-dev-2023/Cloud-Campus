// ----------
// Exercice 1
// ----------
let ex1 = document.getElementById("contenuEx1");

ex1.innerHTML += "<hr>";

// Boucle For
for (let i = 0; i <= 9; i++) {
  ex1.innerHTML += i + " ";
}

ex1.innerHTML += "<hr>";
let i = 0;
while (i <= 9) {
  ex1.innerHTML += i + " ";
  i++;
}
ex1.innerHTML += "<hr>";

// ----------
// Exercice 2
// ----------
let ex2 = document.getElementById("contenuEx2");
ex2.innerHTML += "<hr>";
for (let i = 0; i <= 99; i++) {
  ex2.innerHTML += i + " ";
}
ex2.innerHTML += "<hr>";

let iEx2 = 0;
while (iEx2 <= 99) {
  ex2.innerHTML += iEx2 + " ";
  iEx2++;
}

// ----------
// Exercice 5
// ----------
let ex5 = document.getElementById("contenuEx5");
const ex5Tableau = [];

ex5.innerHTML += "<hr>";

for (let i = 0; i <= 99; i++) {
  ex5Tableau.push(i); // Ajouter le nombre au tableau

  // Lorsque le tableau contient 10 éléments, afficher la ligne et vider le tableau
  if (ex5Tableau.length === 10) {
    ex5.innerHTML += ex5Tableau.join(" ") + "<br>";
    ex5Tableau.length = 0; // Vider le tableau
  }
}

ex5.innerHTML += "<hr>";
let ex5I = 0;
while (ex5I < 99) {
  ex5I++;

  ex5Tableau.push(ex5I);
  if (ex5Tableau.length === 10) {
    ex5.innerHTML += ex5Tableau.join(" ") + "<br>";
    ex5Tableau.length = 0;
  }
}

// ----------
// Exercice 6
// ----------
let ex6 = document.getElementById("contenuEx6");
ex6.innerHTML += "<ul>";

// Boucle For
for (let i = 0; i < 10; i++) {
  ex6.innerHTML += "<li>" + i + "</li>";
}
ex6.innerHTML += "<hr>";
// Boucle While
let ex6I = 0;
while (ex6I < 10) {
  ex6I++;
  ex6.innerHTML += "<li>" + ex6I + "</li>";
}

ex6.innerHTML += "</ul>";

// ----------
// Exercice 7
// ----------
let ex7 = document.getElementById("contenuEx7");

ex6.innerHTML += "<ul>";

// Boucle For
for (let i = 0; i < 10; i++) {
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);
  let colorRandom = `rgb(${color1},${color2},${color3})`;
  ex7.innerHTML +=
    "<li style='background-color:" + colorRandom + "'; '>" + i + "</li>";
}
ex7.innerHTML += "<hr>";
// Boucle While
let ex7I = 0;
while (ex7I < 10) {
  ex7I++;
  ex7.innerHTML += "<li>" + ex7I + "</li>";
}

ex6.innerHTML += "</ul>";

// ----------
// Exercice 10
// ----------
let ex10 = document.getElementById("contenuEx10");

ex10.innerHTML +="<table><tbody>";
for(let i = 0 ; i < 100 ; i++ ){
    ex10.innerHTML += i + " ";
}
ex10.innerHTML +="<tbody></table>";