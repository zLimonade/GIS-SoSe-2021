namespace Modulprüfung {
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

    alleRezepteAnzeigen();

    zeigeAnmgemeldeterNutzerNameImLogo();

    function zeigeAnmgemeldeterNutzerNameImLogo(): void {
        let anmgemeldeterNutzerNameImLogo: HTMLSpanElement = <HTMLSpanElement>document.getElementById("anmgemeldeterNutzerNameImLogo");
        anmgemeldeterNutzerNameImLogo.style.display = "inline";
        anmgemeldeterNutzerNameImLogo.innerText = sessionStorage.getItem("nutzername") + "'s";
    }

    export async function alleRezepteAnzeigen(): Promise<void> {
        let url: string = "http://agentds.herokuapp.com";
        // let url: string = "http://localhost:8100";
        url += "/alleRezepte?";

        let response: Response = await fetch(url);
        let alleRezepte: Rezept[] = await response.json();
        console.log(alleRezepte);

        let alleRezepteSektion: HTMLDivElement = <HTMLDivElement>document.getElementById("alleRezepteSektion");
        alleRezepteSektion.innerHTML = "";

        for (let i: number = 0; i < alleRezepte.length; i++) {
            let rezept: Rezept = alleRezepte[i];
            alleRezepteSektion.appendChild(erstelleRezeptDiv(rezept));
            console.log("Ein Rezept: " + rezept.rezeptname);
        }
    }

    export function erstelleRezeptDiv(_rezept: Rezept): HTMLElement {
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

        let favorisierenButton: HTMLButtonElement = document.createElement("button");
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
        let zutatenDiv: HTMLDivElement = document.createElement("div");
        zutatenDiv.className = "zutaten";

        let zutatenÜberschrift: HTMLHeadElement = document.createElement("h2");
        zutatenÜberschrift.innerText = "Zutaten";

        zutatenDiv.appendChild(zutatenÜberschrift);

        let zutatenTabelle: HTMLTableElement = document.createElement("table");

        if (_rezept.menge.length > 2 && _rezept.menge.length != undefined) {
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
        } else {
            let tabellenReihe: HTMLTableRowElement = document.createElement("tr");
            let tabellenZelleMenge: HTMLTableCellElement = document.createElement("td");
            tabellenZelleMenge.innerText = _rezept.menge[0];
            tabellenReihe.appendChild(tabellenZelleMenge);

            let tabellenZelleLebensmittel: HTMLTableCellElement = document.createElement("td");
            tabellenZelleLebensmittel.innerText = _rezept.lebensmittel[0];
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

    async function favorisiereEinRezept(_event: Event): Promise<void> {
        let drückeEntferneEineRezeptBTN: HTMLElement = <HTMLElement>_event.target;
        let zuEntfernendeID: string = drückeEntferneEineRezeptBTN.getAttribute("_id");
        let nutzernameDerFavorisiert: string = sessionStorage.getItem("nutzername");

        let url: string = "http://agentds.herokuapp.com";
        // let url: string = "http://localhost:8100";
        url = url + "/favorisiereEinRezept?" + "id=" + zuEntfernendeID + "&" + "nutzernameDerFavorisiert=" + nutzernameDerFavorisiert;
        
        await fetch(url);
        
        meineFavorisiertenRezepteAnzeigen();
    }
}