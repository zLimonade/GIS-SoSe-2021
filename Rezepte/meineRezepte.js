"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    zeigeAnmgemeldeterNutzerNameImLogo();
    let mengeLaenge;
    function zeigeAnmgemeldeterNutzerNameImLogo() {
        let anmgemeldeterNutzerNameImLogo = document.getElementById("anmgemeldeterNutzerNameImLogo");
        anmgemeldeterNutzerNameImLogo.style.display = "inline";
        anmgemeldeterNutzerNameImLogo.innerText = sessionStorage.getItem("nutzername") + "'s";
    }
    console.log("Session Storage NutzerName", sessionStorage.getItem("nutzername"));
    let neuesRezeptLinkButton = document.getElementById("neuesRezeptLinkButton");
    neuesRezeptLinkButton.addEventListener("click", neuesRezeptLink);
    function neuesRezeptLink() {
        window.location.href = "neuesRezept.html";
    }
    meineRezepteAnzeigen();
    async function meineRezepteAnzeigen() {
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/meineRezepte?" + "nutzername=" + sessionStorage.getItem("nutzername");
        let response = await fetch(url);
        let meineRezepte = await response.json();
        console.log(meineRezepte);
        let alleRezepteSektion = document.getElementById("alleRezepteSektion");
        alleRezepteSektion.innerHTML = "";
        for (let i = 0; i < meineRezepte.length; i++) {
            let rezept = meineRezepte[i];
            if (rezept.nutzername == sessionStorage.getItem("nutzername")) {
                alleRezepteSektion.appendChild(erstelleMeineRezeptDiv(rezept));
            }
            console.log("Ein Rezept: " + rezept.rezeptname);
        }
    }
    Modulprüfung.meineRezepteAnzeigen = meineRezepteAnzeigen;
    function erstelleMeineRezeptDiv(_rezept) {
        let rezeptDiv = document.createElement("div");
        rezeptDiv.className = "rezept";
        let rezeptTextContent = document.createElement("div");
        rezeptTextContent.className = "rezeptTextContent";
        // RezeptKopf
        let rezeptKopf = document.createElement("div");
        rezeptKopf.className = "rezeptKopf";
        let nameUndNutzer = document.createElement("div");
        nameUndNutzer.className = "nameUndNutzer";
        let rezeptnameh1 = document.createElement("h1");
        rezeptnameh1.innerText = _rezept.rezeptname;
        nameUndNutzer.appendChild(rezeptnameh1);
        let nutzernameCite = document.createElement("cite");
        nutzernameCite.innerText = "von " + _rezept.nutzername;
        nameUndNutzer.appendChild(nutzernameCite);
        rezeptKopf.appendChild(nameUndNutzer);
        // Buttons
        let buttonDiv = document.createElement("div");
        buttonDiv.className = "buttonDiv";
        let bearbeitenButton = document.createElement("button");
        bearbeitenButton.type = "button";
        bearbeitenButton.name = "bearbeitenButton";
        bearbeitenButton.id = "bearbeitenButton";
        bearbeitenButton.innerText = "bearbeiten";
        console.log("id: " + _rezept._id);
        bearbeitenButton.setAttribute("_id", _rezept._id);
        bearbeitenButton.setAttribute("rezeptname", _rezept.rezeptname);
        bearbeitenButton.setAttribute("nutzername", _rezept.nutzername);
        // Menge und Lebensmittel aus Arrays als Attribute setzen
        for (let i = 0; i < _rezept.menge.length; i++) {
            bearbeitenButton.setAttribute("menge", _rezept.menge[i]);
            bearbeitenButton.setAttribute("lebensmittel", _rezept.lebensmittel[i]);
        }
        bearbeitenButton.setAttribute("zubereitung", _rezept.zubereitung);
        buttonDiv.appendChild(bearbeitenButton);
        let loeschenButton = document.createElement("button");
        loeschenButton.type = "button";
        loeschenButton.name = "loeschenButton";
        loeschenButton.id = "loeschenButton";
        loeschenButton.innerText = "löschen";
        console.log("id: " + _rezept._id);
        loeschenButton.setAttribute("_id", _rezept._id);
        loeschenButton.addEventListener("click", löscheEinRezept);
        buttonDiv.appendChild(loeschenButton);
        rezeptKopf.appendChild(buttonDiv);
        rezeptTextContent.appendChild(rezeptKopf);
        // Zutaten
        let zutatenDiv = document.createElement("div");
        zutatenDiv.className = "zutaten";
        let zutatenÜberschrift = document.createElement("h2");
        zutatenÜberschrift.innerText = "Zutaten";
        zutatenDiv.appendChild(zutatenÜberschrift);
        let zutatenTabelle = document.createElement("table");
        for (let i = 0; i < _rezept.menge.length; i++) {
            mengeLaenge += 1;
            let tabellenReihe = document.createElement("tr");
            let tabellenZelleMenge = document.createElement("td");
            let tabellenZelleMengeSpan = document.createElement("span");
            tabellenZelleMengeSpan.innerText = _rezept.menge[i];
            tabellenZelleMenge.appendChild(tabellenZelleMengeSpan);
            tabellenReihe.appendChild(tabellenZelleMenge);
            let tabellenZelleLebensmittel = document.createElement("td");
            let tabellenZelleLebensmittelSpan = document.createElement("span");
            tabellenZelleLebensmittelSpan.innerText = _rezept.lebensmittel[i];
            tabellenZelleLebensmittel.appendChild(tabellenZelleLebensmittelSpan);
            tabellenReihe.appendChild(tabellenZelleLebensmittel);
            tabellenZelleLebensmittel.className = "lebensmittelRechts";
            zutatenTabelle.appendChild(tabellenReihe);
        }
        zutatenDiv.appendChild(zutatenTabelle);
        rezeptTextContent.appendChild(zutatenDiv);
        // Zubereitung
        let zubereitungsDiv = document.createElement("div");
        zubereitungsDiv.className = "Zubereitung";
        let zubereitungÜberschrift = document.createElement("h2");
        zubereitungÜberschrift.innerText = "Zubereitung";
        zubereitungsDiv.appendChild(zubereitungÜberschrift);
        let zubereitungsAnweisungen = document.createElement("p");
        zubereitungsAnweisungen.innerText = _rezept.zubereitung;
        zubereitungsDiv.appendChild(zubereitungsAnweisungen);
        rezeptTextContent.appendChild(zubereitungsDiv);
        // Rezepttextkontent
        rezeptDiv.appendChild(rezeptTextContent);
        return rezeptDiv;
    }
    Modulprüfung.erstelleMeineRezeptDiv = erstelleMeineRezeptDiv;
    async function löscheEinRezept(_event) {
        let drückeEntferneEineRezeptBTN = _event.target;
        let zuEntfernendeID = drückeEntferneEineRezeptBTN.getAttribute("_id");
        console.log("zu entfernende Id" + drückeEntferneEineRezeptBTN);
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/loescheEinRezept?" + "id=" + zuEntfernendeID;
        await fetch(url);
        meineRezepteAnzeigen();
    }
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=meineRezepte.js.map