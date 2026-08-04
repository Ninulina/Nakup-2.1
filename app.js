/* ---------------------------------
   Nákup 2.1
   Základní funkce aplikace
----------------------------------*/


// načtení uložených nákupů
let nakupy = JSON.parse(
    localStorage.getItem("nakupy")
) || [];


// testovací zpráva
console.log("Nákup 2.1 spuštěn");


// dnešní datum
const datum = document.getElementById("datum");

if (datum) {
    datum.value = new Date()
        .toISOString()
        .split("T")[0];
}

