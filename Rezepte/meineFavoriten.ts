namespace Rezepte {
    export interface Rezept {
        _id: string;
        rezeptname: string;
        nutzername: string;
        menge: string[];
        lebensmittel: string[];
        zubereitung: string;
        teilen: boolean;
        nutzernameDerFavorisiert: string;
    }

    zeigeAnmgemeldeterNutzerNameImLogo();

    function zeigeAnmgemeldeterNutzerNameImLogo(): void {
        let anmgemeldeterNutzerNameImLogo: HTMLSpanElement = <HTMLSpanElement>document.getElementById("anmgemeldeterNutzerNameImLogo");
        anmgemeldeterNutzerNameImLogo.style.display = "inline";
        anmgemeldeterNutzerNameImLogo.innerText = sessionStorage.getItem("nutzername") + "'s";
    }


    meineFavorisiertenRezepteAnzeigen();

    export async function meineFavorisiertenRezepteAnzeigen(): Promise<void> {
        let url: string = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/meineFavoriten?" + "nutzername=" + sessionStorage.getItem("nutzername");

        let response: Response = await fetch(url);
        let meineFavoriten: Rezept[] = await response.json();
        console.log(meineFavoriten);

        let alleRezepteSektion: HTMLDivElement = <HTMLDivElement>document.getElementById("alleRezepteSektion");
        alleRezepteSektion.innerHTML = "";

        for (let i: number = 0; i < meineFavoriten.length; i++) {
            let rezept: Rezept = meineFavoriten[i];
            if (rezept.nutzernameDerFavorisiert == sessionStorage.getItem("nutzername")) {
                alleRezepteSektion.appendChild(meineFavoritenAnzeigen(rezept));
            }
            console.log("Ein Rezept: " + rezept.rezeptname);
        }
    }

    export function meineFavoritenAnzeigen(_rezept: Rezept): HTMLElement {
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

        let buttonDiv: HTMLDivElement = document.createElement("div");
        buttonDiv.className = "buttonDiv";

        let entfernenButton: HTMLButtonElement = document.createElement("button");
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
        let zutatenDiv: HTMLDivElement = document.createElement("div");
        zutatenDiv.className = "zutaten";

        let zutaten??berschrift: HTMLHeadElement = document.createElement("h2");
        zutaten??berschrift.innerText = "Zutaten";

        zutatenDiv.appendChild(zutaten??berschrift);

        let zutatenTabelle: HTMLTableElement = document.createElement("table");

        for (let i: number = 0; i < _rezept.menge.length; i++) {
            let tabellenReihe: HTMLTableRowElement = document.createElement("tr");

            let tabellenZelleMenge: HTMLTableCellElement = document.createElement("td");
            tabellenZelleMenge.innerText = _rezept.menge[i];
            tabellenReihe.appendChild(tabellenZelleMenge);

            let tabellenZelleLebensmittel: HTMLTableCellElement = document.createElement("td");
            tabellenZelleLebensmittel.innerText = _rezept.lebensmittel[i];
            tabellenReihe.appendChild(tabellenZelleLebensmittel);
            tabellenZelleLebensmittel.className = "lebensmittelRechts";

            zutatenTabelle.appendChild(tabellenReihe);
        }

        zutatenDiv.appendChild(zutatenTabelle);

        rezeptTextContent.appendChild(zutatenDiv);

        // Zubereitung
        let zubereitungsDiv: HTMLDivElement = document.createElement("div");
        zubereitungsDiv.className = "Zubereitung";

        let zubereitung??berschrift: HTMLHeadElement = document.createElement("h2");
        zubereitung??berschrift.innerText = "Zubereitung";

        zubereitungsDiv.appendChild(zubereitung??berschrift);

        let zubereitungsAnweisungen: HTMLElement = document.createElement("p");
        zubereitungsAnweisungen.innerText = _rezept.zubereitung;

        zubereitungsDiv.appendChild(zubereitungsAnweisungen);

        rezeptTextContent.appendChild(zubereitungsDiv);

        // Rezepttextkontent
        rezeptDiv.appendChild(rezeptTextContent);

        return rezeptDiv;
    }

    async function entferneEinFavorit(_event: Event): Promise<void> {
        let dr??ckeEntferneEineRezeptBTN: HTMLElement = <HTMLElement>_event.target;
        let zuEntfernendeID: string = dr??ckeEntferneEineRezeptBTN.getAttribute("_id");

        let url: string = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/entferneEinFavorit?" + "id=" + zuEntfernendeID;
        
        await fetch(url);
    
        meineFavorisiertenRezepteAnzeigen();
    }
}