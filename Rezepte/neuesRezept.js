"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    zeigeAnmgemeldeterNutzerNameImLogo();
    function zeigeAnmgemeldeterNutzerNameImLogo() {
        let anmgemeldeterNutzerNameImLogo = document.getElementById("anmgemeldeterNutzerNameImLogo");
        anmgemeldeterNutzerNameImLogo.style.display = "inline";
        anmgemeldeterNutzerNameImLogo.innerText = sessionStorage.getItem("nutzername") + "'s";
    }
    let nutzerNameInputFeld = document.getElementById("nutzername");
    nutzerNameInputFeld.value = sessionStorage.getItem("nutzername");
    nutzerNameInputFeld.style.display = "none";
    // weitere Zutat Button und Funktion
    let weitereZutatButton = document.getElementById("weitereZutatButton");
    weitereZutatButton.addEventListener("click", weitereZutat);
    function weitereZutat() {
        // zutatenZaehler += 1;
        let zutaten = document.getElementById("zutaten");
        let zutat = document.createElement("div");
        let menge = document.createElement("input");
        menge.type = "text";
        menge.name = "menge";
        menge.className = "menge";
        menge.placeholder = "Menge";
        let lebensmittel = document.createElement("input");
        lebensmittel.type = "text";
        lebensmittel.name = "lebensmittel";
        lebensmittel.className = "lebensmittel";
        lebensmittel.placeholder = "Lebensmittel";
        zutat.appendChild(menge);
        zutat.appendChild(lebensmittel);
        zutaten.appendChild(zutat);
    }
    // neues Rezept erstellen Button und Funktion
    let erstellenButton = document.getElementById("erstellenButton");
    erstellenButton.addEventListener("click", erstelleRezept);
    async function erstelleRezept() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/erstelleRezept?" + query.toString();
        await fetch(url);
    }
    let zeigeRezepteInKonsole = document.getElementById("zeigeRezepteInKonsole");
    zeigeRezepteInKonsole.addEventListener("click", zeigeRezepteInKonsoleFKT);
    async function zeigeRezepteInKonsoleFKT() {
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/alleRezepte";
        let response = await fetch(url);
        let rezepte = await response.json();
        console.log(rezepte);
    }
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=neuesRezept.js.map