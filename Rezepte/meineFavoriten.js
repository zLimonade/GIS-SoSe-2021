"use strict";
var Rezepte;
(function (Rezepte) {
    zeigeAnmgemeldeterNutzerNameImLogo();
    function zeigeAnmgemeldeterNutzerNameImLogo() {
        let anmgemeldeterNutzerNameImLogo = document.getElementById("anmgemeldeterNutzerNameImLogo");
        anmgemeldeterNutzerNameImLogo.style.display = "inline";
        anmgemeldeterNutzerNameImLogo.innerText = sessionStorage.getItem("nutzername") + "'s";
    }
    meineFavorisiertenRezepteAnzeigen();
    async function meineFavorisiertenRezepteAnzeigen() {
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/meineFavoriten?" + "nutzername=" + sessionStorage.getItem("nutzername");
        let response = await fetch(url);
        let meineFavoriten = await response.json();
        console.log(meineFavoriten);
        let alleRezepteSektion = document.getElementById("alleRezepteSektion");
        alleRezepteSektion.innerHTML = "";
        for (let i = 0; i < meineFavoriten.length; i++) {
            let rezept = meineFavoriten[i];
            if (rezept.nutzernameDerFavorisiert == sessionStorage.getItem("nutzername")) {
                alleRezepteSektion.appendChild(meineFavoritenAnzeigen(rezept));
            }
            console.log("Ein Rezept: " + rezept.rezeptname);
        }
    }
    Rezepte.meineFavorisiertenRezepteAnzeigen = meineFavorisiertenRezepteAnzeigen;
    function meineFavoritenAnzeigen(_rezept) {
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
        let entfernenButton = document.createElement("button");
        entfernenButton.type = "button";
        entfernenButton.name = "entfernenButton";
        entfernenButton.id = "entfernenButton";
        entfernenButton.innerText = "entfernen";
        console.log("id: " + _rezept._id);
        entfernenButton.setAttribute("_id", _rezept._id);
        entfernenButton.addEventListener("click", entferneEinFavorit);
        buttonDiv.appendChild(entfernenButton);
        rezeptKopf.appendChild(buttonDiv);
        rezeptTextContent.appendChild(rezeptKopf);
        // Zutaten
        let zutatenDiv = document.createElement("div");
        zutatenDiv.className = "zutaten";
        let zutaten??berschrift = document.createElement("h2");
        zutaten??berschrift.innerText = "Zutaten";
        zutatenDiv.appendChild(zutaten??berschrift);
        let zutatenTabelle = document.createElement("table");
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
        zutatenDiv.appendChild(zutatenTabelle);
        rezeptTextContent.appendChild(zutatenDiv);
        // Zubereitung
        let zubereitungsDiv = document.createElement("div");
        zubereitungsDiv.className = "Zubereitung";
        let zubereitung??berschrift = document.createElement("h2");
        zubereitung??berschrift.innerText = "Zubereitung";
        zubereitungsDiv.appendChild(zubereitung??berschrift);
        let zubereitungsAnweisungen = document.createElement("p");
        zubereitungsAnweisungen.innerText = _rezept.zubereitung;
        zubereitungsDiv.appendChild(zubereitungsAnweisungen);
        rezeptTextContent.appendChild(zubereitungsDiv);
        // Rezepttextkontent
        rezeptDiv.appendChild(rezeptTextContent);
        return rezeptDiv;
    }
    Rezepte.meineFavoritenAnzeigen = meineFavoritenAnzeigen;
    async function entferneEinFavorit(_event) {
        let dr??ckeEntferneEineRezeptBTN = _event.target;
        let zuEntfernendeID = dr??ckeEntferneEineRezeptBTN.getAttribute("_id");
        let url = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/entferneEinFavorit?" + "id=" + zuEntfernendeID;
        await fetch(url);
        meineFavorisiertenRezepteAnzeigen();
    }
})(Rezepte || (Rezepte = {}));
//# sourceMappingURL=meineFavoriten.js.map