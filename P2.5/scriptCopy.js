"use strict";
var P25_copy;
(function (P25_copy) {
    document.getElementById("endBurgerBack").style.display = "none";
    document.getElementById("vorschau").style.display = "none";
    let möglichkeit = document.getElementById("möglichkeit");
    möglichkeit.innerHTML = "Brötchen";
    // P2.5, Aufgabe 1b)
    async function konvertiereJSONinEinObjekt(_url) {
        let response = await fetch(_url);
        let reply = await response.json();
        /*
        console.log(reply);
        console.log(reply);
        */
        return reply;
    }
    let url = "https://zlimonade.github.io/GIS-SoSe-2021/P2.5//data.json";
    // let urlVSCLiveServer: string = "http://127.0.0.1:5500/P2.5/data.json";
    /*
    async function dataResponseFunc(): Promise<void> {
        let dataResponse: AlleBurgerTeile = await konvertiereJSONinEinObjekt(url);
        console.log(dataResponse);
    }
    dataResponseFunc();
    */
    async function meineDateFunktion() {
        let meineDaten = await konvertiereJSONinEinObjekt(url);
        return meineDaten;
    }
    /*
    version_1
    async function konvertiereJSONinEinObjekt(_url: RequestInfo): Promise<AlleBurgerTeile> {
        let response: Response = await fetch(_url);

        let obj: AlleBurgerTeile = JSON.parse(JSON.stringify(response));
        return Promise.resolve(obj);
    }
    */
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
    /*
    function hallo(): AlleBurgerTeile {
        let burgerT: AlleBurgerTeile = konvertiereJSONinEinObjekt(url);
        return burgerT;
    }
*/
    let clickCount = 0;
    let key;
    let auswahl;
    let auswahlBroetchenTop;
    let auswahlBroetchenBottom;
    let auswahlPattie;
    let auswahlSosse;
    // Klick auf Button Aktion
    async function click(_event) {
        let vorschau = document.getElementById("vorschau");
        clickCount += 1;
        let target = _event.currentTarget;
        let index = Number(target.dataset.index);
        document.getElementById("vorschau").style.display = "block";
        let meineDaten = await konvertiereJSONinEinObjekt(url);
        if (clickCount == 1) {
            auswahlBroetchenTop = meineDaten.broetchenTop[index];
            auswahl = auswahlBroetchenTop;
            key = "BrötchenTop: ";
            document.getElementById("auswahlFenster").innerHTML = "";
            auswahlMoeglichkeiten(meineDaten.broetchenBottom);
            let bildVorschau = document.createElement("img");
            bildVorschau.src = auswahl.bild;
            vorschau.appendChild(bildVorschau);
        }
        if (clickCount == 2) {
            möglichkeit.innerHTML = "Pattie";
            auswahlBroetchenBottom = meineDaten.broetchenBottom[index];
            auswahl = auswahlBroetchenBottom;
            key = "BrötchenBottom: ";
            document.getElementById("auswahlFenster").innerHTML = "";
            auswahlMoeglichkeiten(meineDaten.patties);
            let bildVorschau = document.createElement("img");
            bildVorschau.src = auswahl.bild;
            vorschau.appendChild(bildVorschau);
        }
        if (clickCount == 3) {
            möglichkeit.innerHTML = "Soße";
            auswahlPattie = meineDaten.patties[index];
            auswahl = auswahlPattie;
            key = "Pattie: ";
            document.getElementById("auswahlFenster").innerHTML = "";
            auswahlMoeglichkeiten(meineDaten.sossen);
            let bildVorschau = document.createElement("img");
            bildVorschau.src = auswahl.bild;
            vorschau.appendChild(bildVorschau);
        }
        if (clickCount == 4) {
            möglichkeit.style.display = "none";
            auswahlSosse = meineDaten.sossen[index];
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
    async function init() {
        let meineDaten = await meineDateFunktion();
        auswahlMoeglichkeiten(meineDaten.broetchenTop);
    }
    init();
})(P25_copy || (P25_copy = {}));
//# sourceMappingURL=scriptCopy.js.map