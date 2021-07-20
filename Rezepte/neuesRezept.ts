namespace Modulprüfung {

    zeigeAnmgemeldeterNutzerNameImLogo();

    function zeigeAnmgemeldeterNutzerNameImLogo(): void {
        let anmgemeldeterNutzerNameImLogo: HTMLSpanElement = <HTMLSpanElement>document.getElementById("anmgemeldeterNutzerNameImLogo");
        anmgemeldeterNutzerNameImLogo.style.display = "inline";
        anmgemeldeterNutzerNameImLogo.innerText = sessionStorage.getItem("nutzername") + "'s"; 
    }

    let nutzerNameInputFeld: HTMLInputElement = <HTMLInputElement>document.getElementById("nutzername");
    nutzerNameInputFeld.value = sessionStorage.getItem("nutzername");
    nutzerNameInputFeld.style.display = "none";

    // weitere Zutat Button und Funktion
    let weitereZutatButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("weitereZutatButton");
    weitereZutatButton.addEventListener("click", weitereZutat);

    function weitereZutat(): void {
        // zutatenZaehler += 1;

        let zutaten: HTMLDivElement = <HTMLDivElement>document.getElementById("zutaten");

        let zutat: HTMLDivElement = document.createElement("div");

        let menge: HTMLInputElement = document.createElement("input");
        menge.type = "text";
        menge.name = "menge";
        menge.className = "menge";
        menge.placeholder = "Menge";

        let lebensmittel: HTMLInputElement = document.createElement("input");
        lebensmittel.type = "text";
        lebensmittel.name = "lebensmittel";
        lebensmittel.className = "lebensmittel";
        lebensmittel.placeholder = "Lebensmittel";

        zutat.appendChild(menge);
        zutat.appendChild(lebensmittel);

        zutaten.appendChild(zutat);
    }

    // neues Rezept erstellen Button und Funktion
    let erstellenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("erstellenButton");
    erstellenButton.addEventListener("click", erstelleRezept);

    async function erstelleRezept(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/erstelleRezept?" + query.toString();
        await fetch(url);
    }

    interface Rezept {
        _id: string;
        rezeptname: string;
        nutzername: string;
        menge: string[];
        lebensmittel: string[];
        zubereitung: string;
    }
    let zeigeRezepteInKonsole: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zeigeRezepteInKonsole");
    zeigeRezepteInKonsole.addEventListener("click", zeigeRezepteInKonsoleFKT);

    async function zeigeRezepteInKonsoleFKT(): Promise<void> {
        let url: string = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/alleRezepte";
        
        let response: Response = await fetch(url);
        let rezepte: Rezept[] = await response.json();
        console.log(rezepte);
    }
}