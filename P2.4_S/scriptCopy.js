"use strict";
var P24_storage_newPage_clean;
(function (P24_storage_newPage_clean) {
    document.getElementById("endBurgerBack").style.display = "none";
    document.getElementById("vorschau").style.display = "none";
    let möglichkeit = document.getElementById("möglichkeit");
    möglichkeit.innerHTML = "Brötchen";
    // Aufgabe 1a): JSON-String zu TS/JS-Objekt konvertieren
    function konvertiereJSONinEinObjekt() {
        return JSON.parse(P24_storage_newPage_clean.alleBurgerTeileJSON);
    }
    // Funktion erstellt eine Auswahlmöglichkeit
    function erstelleBurgerTeilDiv(_burgerTeil, _index) {
        let div = document.createElement("div");
        div.className = "burgerTeil";
        let burgerTeilName = document.createElement("h3");
        burgerTeilName.innerText = _burgerTeil.name;
        div.appendChild(burgerTeilName);
        let burgerTeilBild = document.createElement("img");
        burgerTeilBild.src = _burgerTeil.bild;
        div.appendChild(burgerTeilBild);
        let selektionsButton = document.createElement("button");
        selektionsButton.innerText = "selektieren";
        selektionsButton.addEventListener("click", click);
        selektionsButton.dataset.index = _index.toString();
        div.appendChild(selektionsButton);
        return div;
    }
    let clickCount = 0;
    let key;
    let auswahl;
    let auswahlBroetchenTop;
    let auswahlBroetchenBottom;
    let auswahlPattie;
    let auswahlSosse;
    // Klick auf Button Aktion
    function click(_event) {
        let vorschau = document.getElementById("vorschau");
        clickCount += 1;
        let target = _event.currentTarget;
        let index = Number(target.dataset.index);
        document.getElementById("vorschau").style.display = "block";
        if (clickCount == 1) {
            auswahlBroetchenTop = konvertiereJSONinEinObjekt().broetchenTop[index];
            auswahl = auswahlBroetchenTop;
            key = "BrötchenTop: ";
            document.getElementById("auswahlFenster").innerHTML = "";
            auswahlMoeglichkeiten(konvertiereJSONinEinObjekt().broetchenBottom);
            let bildVorschau = document.createElement("img");
            bildVorschau.src = auswahl.bild;
            vorschau.appendChild(bildVorschau);
        }
        if (clickCount == 2) {
            möglichkeit.innerHTML = "Pattie";
            auswahlBroetchenBottom = konvertiereJSONinEinObjekt().broetchenBottom[index];
            auswahl = auswahlBroetchenBottom;
            key = "BrötchenBottom: ";
            document.getElementById("auswahlFenster").innerHTML = "";
            auswahlMoeglichkeiten(konvertiereJSONinEinObjekt().patties);
            let bildVorschau = document.createElement("img");
            bildVorschau.src = auswahl.bild;
            vorschau.appendChild(bildVorschau);
        }
        if (clickCount == 3) {
            möglichkeit.innerHTML = "Soße";
            auswahlPattie = konvertiereJSONinEinObjekt().patties[index];
            auswahl = auswahlPattie;
            key = "Pattie: ";
            document.getElementById("auswahlFenster").innerHTML = "";
            auswahlMoeglichkeiten(konvertiereJSONinEinObjekt().sossen);
            let bildVorschau = document.createElement("img");
            bildVorschau.src = auswahl.bild;
            vorschau.appendChild(bildVorschau);
        }
        if (clickCount == 4) {
            möglichkeit.style.display = "none";
            auswahlSosse = konvertiereJSONinEinObjekt().sossen[index];
            auswahl = auswahlSosse;
            key = "Sosse: ";
            sessionStorage.setItem(key, JSON.stringify(auswahl));
            document.getElementById("auswahlFenster").innerHTML = "";
            document.getElementById("vorschau").style.display = "none";
            document.location.href = "burger.html";
        }
        // Aufgabe 1b) Speichere die Auswahlmöglichkeit im Browser-Cache
        sessionStorage.setItem(key, JSON.stringify(auswahl));
    }
    // Funktion erstellt alle Auswahlmöglichkeiten einer Kategorie
    function auswahlMoeglichkeiten(_burgerTeile) {
        let auswahlFenster = document.getElementById("auswahlFenster");
        for (let i = 0; i < _burgerTeile.length; i++) {
            let div = erstelleBurgerTeilDiv(_burgerTeile[i], i);
            auswahlFenster.appendChild(div);
        }
    }
    auswahlMoeglichkeiten(konvertiereJSONinEinObjekt().broetchenTop);
})(P24_storage_newPage_clean || (P24_storage_newPage_clean = {}));
//# sourceMappingURL=scriptCopy.js.map