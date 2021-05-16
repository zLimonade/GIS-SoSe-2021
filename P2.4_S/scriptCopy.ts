namespace P24_S {

    document.getElementById("endBurgerBack").style.display = "none";
    document.getElementById("vorschau").style.display = "none";

    let möglichkeit: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("möglichkeit");
    möglichkeit.innerHTML = "Brötchen";

    // Aufgabe 1a): JSON-String zu TS/JS-Objekt konvertieren
    function konvertiereJSONinEinObjekt(): AlleBurgerTeile {
        return JSON.parse(alleBurgerTeileJSON);
    }



    // Funktion erstellt eine Auswahlmöglichkeit
    function erstelleBurgerTeilDiv(_burgerTeil: BurgerTeil, _index: number): HTMLDivElement {
        let div: HTMLDivElement = document.createElement("div");
        div.className = "burgerTeil";

        let burgerTeilName: HTMLHeadingElement = document.createElement("h3");
        burgerTeilName.innerText = _burgerTeil.name;
        div.appendChild(burgerTeilName);

        let burgerTeilBild: HTMLImageElement = document.createElement("img");
        burgerTeilBild.src = _burgerTeil.bild;
        div.appendChild(burgerTeilBild);

        let selektionsButton: HTMLButtonElement = document.createElement("button");
        selektionsButton.innerText = "selektieren";
        selektionsButton.addEventListener("click", click);

        selektionsButton.dataset.index = _index.toString();

        div.appendChild(selektionsButton);

        return div;
    }

    let clickCount: number = 0;
    let key: string;
    let auswahl: BurgerTeil;
    let auswahlBroetchenTop: BurgerTeil;
    let auswahlBroetchenBottom: BurgerTeil;
    let auswahlPattie: BurgerTeil;
    let auswahlSosse: BurgerTeil;

    // Klick auf Button Aktion
    function click(_event: Event): void {
        let vorschau: HTMLDivElement = <HTMLDivElement>document.getElementById("vorschau");
        clickCount += 1;
        let target: HTMLElement = <HTMLElement>_event.currentTarget;
        let index: number = Number(target.dataset.index);
        document.getElementById("vorschau").style.display = "block";

        if (clickCount == 1) {
            auswahlBroetchenTop = konvertiereJSONinEinObjekt().broetchenTop[index];
            auswahl = auswahlBroetchenTop;
            key = "BrötchenTop: ";
            document.getElementById("auswahlFenster").innerHTML = "";
            auswahlMoeglichkeiten(konvertiereJSONinEinObjekt().broetchenBottom); 
            let bildVorschau: HTMLImageElement = document.createElement("img");
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
            let bildVorschau: HTMLImageElement = document.createElement("img");
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
            let bildVorschau: HTMLImageElement = document.createElement("img");
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
    function auswahlMoeglichkeiten(_burgerTeile: BurgerTeil[]): void {
        let auswahlFenster: HTMLDivElement = <HTMLDivElement>document.getElementById("auswahlFenster");
        for (let i: number = 0; i < _burgerTeile.length; i++) {
            let div: HTMLDivElement = erstelleBurgerTeilDiv(_burgerTeile[i], i);
            auswahlFenster.appendChild(div);
        }
    }

    auswahlMoeglichkeiten(konvertiereJSONinEinObjekt().broetchenTop);
}