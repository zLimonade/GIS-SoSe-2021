namespace Rezepte {

    zeigeAnmgemeldeterNutzerNameImLogo();

    let mengeLaenge: number;

    function zeigeAnmgemeldeterNutzerNameImLogo(): void {
        let anmgemeldeterNutzerNameImLogo: HTMLSpanElement = <HTMLSpanElement>document.getElementById("anmgemeldeterNutzerNameImLogo");
        anmgemeldeterNutzerNameImLogo.style.display = "inline";
        anmgemeldeterNutzerNameImLogo.innerText = sessionStorage.getItem("nutzername") + "'s"; 
    }

    console.log("Session Storage NutzerName", sessionStorage.getItem("nutzername"));

    let neuesRezeptLinkButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("neuesRezeptLinkButton");
    neuesRezeptLinkButton.addEventListener("click", neuesRezeptLink);

    function neuesRezeptLink(): void {
        window.location.href = "neuesRezept.html";
    }

    export interface Rezept {
        _id: string;
        rezeptname: string;
        nutzername: string;
        menge: string[];
        lebensmittel: string[];
        zubereitung: string;
        teilen: boolean;
    }

    meineRezepteAnzeigen();

    export async function meineRezepteAnzeigen(): Promise<void> {
        let url: string = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/meineRezepte?" + "nutzername=" + sessionStorage.getItem("nutzername");

        let response: Response = await fetch(url);
        let meineRezepte: Rezept[] = await response.json();
        console.log(meineRezepte);

        let alleRezepteSektion: HTMLDivElement = <HTMLDivElement>document.getElementById("alleRezepteSektion");
        alleRezepteSektion.innerHTML = "";

        for (let i: number = 0; i < meineRezepte.length; i++) {
            let rezept: Rezept = meineRezepte[i];
            if (rezept.nutzername == sessionStorage.getItem("nutzername")) {
                alleRezepteSektion.appendChild(erstelleMeineRezeptDiv(rezept));
            }
            console.log("Ein Rezept: " + rezept.rezeptname);
        }
    }

    export function erstelleMeineRezeptDiv(_rezept: Rezept): HTMLElement {
        let rezeptDiv: HTMLDivElement = document.createElement("div");
        rezeptDiv.className = "rezept";

        let rezeptTextContent: HTMLDivElement = document.createElement("div");
        rezeptTextContent.className = "rezeptTextContent";

        // RezeptKopf
        let rezeptKopf: HTMLDivElement = document.createElement("div");
        rezeptKopf.className = "rezeptKopf";

        let nameUndNutzer: HTMLDivElement = document.createElement("div");
        nameUndNutzer.className = "nameUndNutzer";

        let rezeptnameh1: HTMLHeadElement = document.createElement("h1");
        rezeptnameh1.innerText = _rezept.rezeptname;
        nameUndNutzer.appendChild(rezeptnameh1);

        let nutzernameCite: HTMLElement = document.createElement("cite");
        nutzernameCite.innerText = "von " + _rezept.nutzername;
        nameUndNutzer.appendChild(nutzernameCite);

        rezeptKopf.appendChild(nameUndNutzer);

        // Buttons
        let buttonDiv: HTMLDivElement = document.createElement("div");
        buttonDiv.className = "buttonDiv";

        let bearbeitenButton: HTMLButtonElement = document.createElement("button");
        bearbeitenButton.type = "button";
        bearbeitenButton.name = "bearbeitenButton";
        bearbeitenButton.id = "bearbeitenButton";
        bearbeitenButton.innerText = "bearbeiten";
        console.log("id: " + _rezept._id);
        bearbeitenButton.setAttribute("_id", _rezept._id);
        bearbeitenButton.setAttribute("rezeptname", _rezept.rezeptname);
        bearbeitenButton.setAttribute("nutzername", _rezept.nutzername);
        
        // Menge und Lebensmittel aus Arrays als Attribute setzen
        for (let i: number = 0; i  < _rezept.menge.length; i++) {
            bearbeitenButton.setAttribute("menge", _rezept.menge[i]);
            bearbeitenButton.setAttribute("lebensmittel", _rezept.lebensmittel[i]);
        }
        bearbeitenButton.setAttribute("zubereitung", _rezept.zubereitung);

        buttonDiv.appendChild(bearbeitenButton);

        let loeschenButton: HTMLButtonElement = document.createElement("button");
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
        let zutatenDiv: HTMLDivElement = document.createElement("div");
        zutatenDiv.className = "zutaten";

        let zutatenÜberschrift: HTMLHeadElement = document.createElement("h2");
        zutatenÜberschrift.innerText = "Zutaten";

        zutatenDiv.appendChild(zutatenÜberschrift);

        let zutatenTabelle: HTMLTableElement = document.createElement("table");

        for (let i: number = 0; i < _rezept.menge.length; i++) {
            mengeLaenge += 1;
            let tabellenReihe: HTMLTableRowElement = document.createElement("tr");

            let tabellenZelleMenge: HTMLTableCellElement = document.createElement("td");
            let tabellenZelleMengeSpan: HTMLSpanElement = document.createElement("span");
            tabellenZelleMengeSpan.innerText = _rezept.menge[i];
            tabellenZelleMenge.appendChild(tabellenZelleMengeSpan);
            tabellenReihe.appendChild(tabellenZelleMenge);

            let tabellenZelleLebensmittel: HTMLTableCellElement = document.createElement("td");
            let tabellenZelleLebensmittelSpan: HTMLSpanElement = document.createElement("span");
            tabellenZelleLebensmittelSpan.innerText = _rezept.lebensmittel[i];
            tabellenZelleLebensmittel.appendChild(tabellenZelleLebensmittelSpan);
            tabellenReihe.appendChild(tabellenZelleLebensmittel);

            tabellenZelleLebensmittel.className = "lebensmittelRechts";
            
            zutatenTabelle.appendChild(tabellenReihe);
        }

        zutatenDiv.appendChild(zutatenTabelle);

        rezeptTextContent.appendChild(zutatenDiv);

        // Zubereitung
        let zubereitungsDiv: HTMLDivElement = document.createElement("div");
        zubereitungsDiv.className = "Zubereitung";

        let zubereitungÜberschrift: HTMLHeadElement = document.createElement("h2");
        zubereitungÜberschrift.innerText = "Zubereitung";

        zubereitungsDiv.appendChild(zubereitungÜberschrift);

        let zubereitungsAnweisungen: HTMLElement = document.createElement("p");
        zubereitungsAnweisungen.innerText = _rezept.zubereitung;

        zubereitungsDiv.appendChild(zubereitungsAnweisungen);

        rezeptTextContent.appendChild(zubereitungsDiv);

        // Rezepttextkontent
        rezeptDiv.appendChild(rezeptTextContent);

        return rezeptDiv;
    }

    async function löscheEinRezept(_event: Event): Promise<void> {
        let drückeEntferneEineRezeptBTN: HTMLElement = <HTMLElement>_event.target;
        let zuEntfernendeID: string = drückeEntferneEineRezeptBTN.getAttribute("_id");
        
        console.log("zu entfernende Id" + drückeEntferneEineRezeptBTN);

        let url: string = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/loescheEinRezept?" + "id=" + zuEntfernendeID;
        
        await fetch(url);
    
        meineRezepteAnzeigen();
    }
}