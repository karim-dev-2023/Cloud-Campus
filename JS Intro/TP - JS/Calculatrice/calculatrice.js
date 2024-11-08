document.addEventListener("DOMContentLoaded", function () {
  let textSurvol = document.getElementById("survol");

  document
    .getElementById("numberCalculator")
    .addEventListener("mouseover", function () {
      textSurvol.style.padding = "10px";
      textSurvol.style.marginTop = "5px";
      textSurvol.innerHTML = "Veuillez saisir un chiffre";
    });
  document
    .getElementById("numberCalculator")
    .addEventListener("mouseleave", function () {
      textSurvol.style.padding = "0";
      textSurvol.innerHTML = "";
    });

  document
    .getElementById("selectCalculator")
    .addEventListener("mouseover", function () {
      textSurvol.style.padding = "10px";
      textSurvol.style.marginTop = "5px";
      textSurvol.innerHTML = "Veuillez sélectionner un opérateur";
    });
  document.getElementById("selectCalculator").addEventListener("mouseleave", function () {
      textSurvol.style.padding = "0";
      textSurvol.innerHTML = "";
    });
});

function hide() {
  document.getElementById("calculator").style.opacity = 0;
}

function show() {
  document.getElementById("calculator").style.opacity = 1;
}

function calculer() {
  let textSurvol = document.getElementById("survol");

  let numberCalculator = parseFloat(
    document.getElementById("numberCalculator").value
  );
  let selectCalculator = document.getElementById("selectCalculator").value;
  let secondNumberCalculator = parseFloat(
    document.getElementById("SecondNumberCalculator").value
  );

  if (isNaN(numberCalculator) || isNaN(secondNumberCalculator)) {
    textSurvol.style.padding = "10px";
    textSurvol.innerHTML = "Veuillez entrer des nombres valide";
    return;
  }

  let result;

  switch (selectCalculator) {
    case "+":
      result = numberCalculator + secondNumberCalculator;
      break;
    case "-":
      result = numberCalculator - secondNumberCalculator;
      break;
    case "*":
      result = numberCalculator * secondNumberCalculator;
      break;
    case "**":
      result = numberCalculator ** secondNumberCalculator;
      break;
    case "%":
      result = numberCalculator % secondNumberCalculator;
      break;
    case "/":
      if (secondNumberCalculator === 0) {
        textSurvol.style.padding = "10px";
        textSurvol.innerHTML = "Erreur : Division par zéro";
        return;
      }
      result = numberCalculator / secondNumberCalculator;
      break;
    default:
      textSurvol.style.padding = "10px";
      textSurvol.innerHTML = "Opérateur non valide";
      return;
  }

  let calculation = `${numberCalculator} ${selectCalculator} ${secondNumberCalculator} = ${result}`;
  document.getElementById("result").innerHTML = calculation;
  document.getElementById("result").style.padding = "10px";
  setTimeout(function () {
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.padding = "0";
  }, 1000);
  //   alert(calculation);
}
