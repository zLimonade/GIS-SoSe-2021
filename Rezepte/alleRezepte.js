"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    alleRezepteAnzeigen();
    zeigeAnmgemeldeterNutzerNameImLogo();
    function zeigeAnmgemeldeterNutzerNameImLogo() {
        let anmgemeldeterNutzerNameImLogo = document.getElementById("anmgemeldeterNutzerNameImLogo");
        anmgemeldeterNutzerNameImLogo.style.display = "inline";
        anmgemeldeterNutzerNameImLogo.innerText = sessionStorage.getItem("nutzername") + "'s";
    }
    async function alleRezepteAnzeigen() {
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/alleRezepte?";
        let response = await fetch(url);
        let alleRezepte = await response.json();
        console.log(alleRezepte);
        let alleRezepteSektion = document.getElementById("alleRezepteSektion");
        alleRezepteSektion.innerHTML = "";
        for (let i = 0; i < alleRezepte.length; i++) {
            let rezept = alleRezepte[i];
            alleRezepteSektion.appendChild(erstelleRezeptDiv(rezept));
            console.log("Ein Rezept: " + rezept.rezeptname);
        }
    }
    Modulprüfung.alleRezepteAnzeigen = alleRezepteAnzeigen;
    function erstelleRezeptDiv(_rezept) {
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
        let buttonDiv = document.createElement("div");
        buttonDiv.className = "buttonDiv";
        let favorisierenButton = document.createElement("button");
        favorisierenButton.type = "button";
        favorisierenButton.name = "favorisierenButton";
        favorisierenButton.id = "favorisierenButton";
        favorisierenButton.innerText = "favorisieren";
        console.log("id: " + _rezept._id);
        favorisierenButton.setAttribute("_id", _rezept._id);
        favorisierenButton.setAttribute("nutzername", _rezept.nutzername);
        favorisierenButton.addEventListener("click", favorisiereEinRezept);
        buttonDiv.appendChild(favorisierenButton);
        rezeptKopf.appendChild(buttonDiv);
        rezeptTextContent.appendChild(rezeptKopf);
        // Zutaten
        let zutatenDiv = document.createElement("div");
        zutatenDiv.className = "zutaten";
        let zutatenÜberschrift = document.createElement("h2");
        zutatenÜberschrift.innerText = "Zutaten";
        zutatenDiv.appendChild(zutatenÜberschrift);
        let zutatenTabelle = document.createElement("table");
        if (_rezept.menge.length > 2 && _rezept.menge.length != undefined) {
            for (let i = 0; i < _rezept.menge.length; i++) {
                let tabellenReihe = document.createElement("tr");
                let tabellenZelleMenge = document.createElement("td");
                tabellenZelleMenge.innerText = _rezept.menge[i];
                tabellenReihe.appendChild(tabellenZelleMenge);
                let tabellenZelleLebensmittel = document.createElement("td");
                tabellenZelleLebensmittel.innerText = _rezept.lebensmittel[i];
                tabellenReihe.appendChild(tabellenZelleLebensmittel);
                tabellenZelleLebensmittel.className = "lebensmittelRechts";
                zutatenTabelle.appendChild(tabellenReihe);
            }
        }
        else {
            let tabellenReihe = document.createElement("tr");
            let tabellenZelleMenge = document.createElement("td");
            tabellenZelleMenge.innerText = _rezept.menge[0];
            tabellenReihe.appendChild(tabellenZelleMenge);
            let tabellenZelleLebensmittel = document.createElement("td");
            tabellenZelleLebensmittel.innerText = _rezept.lebensmittel[0];
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
    Modulprüfung.erstelleRezeptDiv = erstelleRezeptDiv;
    async function favorisiereEinRezept(_event) {
        let drückeEntferneEineRezeptBTN = _event.target;
        let zuEntfernendeID = drückeEntferneEineRezeptBTN.getAttribute("_id");
        let nutzernameDerFavorisiert = sessionStorage.getItem("nutzername");
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/favorisiereEinRezept?" + "id=" + zuEntfernendeID + "&" + "nutzernameDerFavorisiert=" + nutzernameDerFavorisiert;
        await fetch(url);
        Modulprüfung.meineFavorisiertenRezepteAnzeigen();
    }
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=alleRezepte.js.map