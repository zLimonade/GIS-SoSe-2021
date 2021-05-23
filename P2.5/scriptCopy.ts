namespace P25 {

    document.getElementById("endBurgerBack").style.display = "none";
    document.getElementById("vorschau").style.display = "none";

    let möglichkeit: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("möglichkeit");
    möglichkeit.innerHTML = "Brötchen";


    
    
    
    // P2.5, Aufgabe 1b)
    
    async function konvertiereJSONinEinObjekt(_url: RequestInfo): Promise<AlleBurgerTeile> {
        let response: Response = await fetch(_url);
        let reply: AlleBurgerTeile = await response.json();
        return reply;
    }
    
    
    let url: string = "https://zlimonade.github.io/GIS-SoSe-2021/P2.5//data.json";

    
    
    
    async function meineDateFunktion(): Promise<AlleBurgerTeile> {
        let meineDaten: AlleBurgerTeile = await konvertiereJSONinEinObjekt(url);
        return meineDaten;
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
    async function click(_event: Event): Promise<void> {

        
        let vorschau: HTMLDivElement = <HTMLDivElement>document.getElementById("vorschau");
        clickCount += 1;
        let target: HTMLElement = <HTMLElement>_event.currentTarget;
        let index: number = Number(target.dataset.index);
        document.getElementById("vorschau").style.display = "block";
        
        let meineDaten: AlleBurgerTeile = await konvertiereJSONinEinObjekt(url);
        
        if (clickCount == 1) {
            auswahlBroetchenTop = meineDaten.broetchenTop[index];
            auswahl = auswahlBroetchenTop;
            key = "BrötchenTop: ";
            document.getElementById("auswahlFenster").innerHTML = "";
            auswahlMoeglichkeiten(meineDaten.broetchenBottom);
            let bildVorschau: HTMLImageElement = document.createElement("img");
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
            let bildVorschau: HTMLImageElement = document.createElement("img");
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
            let bildVorschau: HTMLImageElement = document.createElement("img");
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
    function auswahlMoeglichkeiten(_burgerTeile: BurgerTeil[]): void {
        let auswahlFenster: HTMLDivElement = <HTMLDivElement>document.getElementById("auswahlFenster");
        for (let i: number = 0; i < _burgerTeile.length; i++) {
            let div: HTMLDivElement = erstelleBurgerTeilDiv(_burgerTeile[i], i);
            auswahlFenster.appendChild(div);
        }
    }

    async function init(): Promise<void> {

        let meineDaten: AlleBurgerTeile = await meineDateFunktion();

        auswahlMoeglichkeiten(meineDaten.broetchenTop);
    }

    init();
}