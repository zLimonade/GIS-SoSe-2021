"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    let serverAntwortAnmeldungText = document.getElementById("serverAntwortAnmeldungH3");
    serverAntwortAnmeldungText.style.display = "none";
    console.log("angemeldeter name " + Modulprüfung.angemeldeterNutzerName);
    let serverAnmeldeAntwort001 = {
        anmeldenErfolgreich: "Erfolgreich angemeldet :)",
        registrierenErfolgreich: "Erfolgreich registriert :)",
        nutzerNameSchonVergeben: "Nutzername leider schon vergeben :/"
    };
    let anmeldeButton = document.getElementById("anmeldeButton");
    anmeldeButton.addEventListener("click", anmelden);
    anmeldeButton.addEventListener("click", bekommeNutzerNameUndPw);
    // let anmeldeVersuche: number = 0;
    async function bekommeNutzerNameUndPw() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/bekommeNutzerNameUndPw?" + query.toString();
        let response = await fetch(url);
        let serverAntwort = await response.json();
        console.log("bekommeNutzerNameUndPw ", serverAntwort);
        console.log("bekommeNutzerNameUndPw ", serverAntwort.nutzername);
        Modulprüfung.angemeldeterNutzerName = serverAntwort.nutzername;
        console.log("nutzerName " + Modulprüfung.angemeldeterNutzerName);
        // Browser-Cache für Nutzername
        sessionStorage.setItem("nutzername", serverAntwort.nutzername);
        sessionStorage.setItem("url", url.toString());
    }
    async function anmelden() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/anmelden?" + query.toString();
        let response = await fetch(url);
        let serverAntwort = await response.text();
        console.log("Serverantwort: " + serverAntwort);
        serverAntwortAnmeldungText.style.display = "none";
        if (serverAntwort == serverAnmeldeAntwort001.anmeldenErfolgreich) {
            serverAntwortAnmeldungText.style.display = "block";
            serverAntwortAnmeldungText.id = "anmeldenErfolgreich";
            serverAntwortAnmeldungText.innerText = serverAntwort;
            window.location.href = "alleRezepte.html";
        }
        if (serverAntwort == serverAnmeldeAntwort001.registrierenErfolgreich) {
            serverAntwortAnmeldungText.style.display = "block";
            serverAntwortAnmeldungText.id = "registrierenErfolgreich";
            serverAntwortAnmeldungText.innerText = serverAntwort;
            window.location.href = "alleRezepte.html";
        }
        if (serverAntwort == serverAnmeldeAntwort001.nutzerNameSchonVergeben) {
            serverAntwortAnmeldungText.style.display = "block";
            serverAntwortAnmeldungText.id = "nutzerNameSchonVergeben";
            serverAntwortAnmeldungText.innerText = serverAntwort;
        }
    }
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=anmelden.js.map