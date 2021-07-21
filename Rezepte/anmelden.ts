namespace Rezepte {
    
    let serverAntwortAnmeldungText: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("serverAntwortAnmeldungH3");
    serverAntwortAnmeldungText.style.display = "none";

    export let angemeldeterNutzerName: string;

    console.log("angemeldeter name " + angemeldeterNutzerName);

    interface ServerAnmeldeAntwort {
        anmeldenErfolgreich: string;
        registrierenErfolgreich: string;
        nutzerNameSchonVergeben: string;
    }

    let serverAnmeldeAntwort001: ServerAnmeldeAntwort = {
        anmeldenErfolgreich: "Erfolgreich angemeldet :)",
        registrierenErfolgreich: "Erfolgreich registriert :)",
        nutzerNameSchonVergeben: "Nutzername leider schon vergeben :/"
    };

    let anmeldeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("anmeldeButton");
    anmeldeButton.addEventListener("click", anmelden);
    anmeldeButton.addEventListener("click", bekommeNutzerNameUndPw);

    // let anmeldeVersuche: number = 0;
    async function bekommeNutzerNameUndPw(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/bekommeNutzerNameUndPw?" + query.toString();
        let response: Response = await fetch(url);
        let serverAntwort: Nutzer = await response.json();

        console.log("bekommeNutzerNameUndPw ", serverAntwort);
        console.log("bekommeNutzerNameUndPw ", serverAntwort.nutzername);
        angemeldeterNutzerName = serverAntwort.nutzername;
        console.log("nutzerName " + angemeldeterNutzerName);

        // Browser-Cache für Nutzername
        sessionStorage.removeItem("nutzername");
        sessionStorage.setItem("nutzername", serverAntwort.nutzername);
        sessionStorage.setItem("url", url.toString());
    }

    async function anmelden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://agentds.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/anmelden?" + query.toString();
        let response: Response = await fetch(url);
        let serverAntwort: string = await response.text();

        console.log("Serverantwort: " + serverAntwort);

        serverAntwortAnmeldungText.style.display = "none";

        if (serverAntwort == serverAnmeldeAntwort001.anmeldenErfolgreich) {
            serverAntwortAnmeldungText.style.display = "block";
            serverAntwortAnmeldungText.id = "anmeldenErfolgreich";
            serverAntwortAnmeldungText.innerText = serverAntwort;
            window.location.href = "alleRezepte.html";
        }

        if (serverAntwort == serverAnmeldeAntwort001.registrierenErfolgreich) {
            serverAntwortAnmeldungText.style.display = "block";
            serverAntwortAnmeldungText.id = "registrierenErfolgreich";
            serverAntwortAnmeldungText.innerText = serverAntwort;
            window.location.href = "alleRezepte.html";
        }

        if (serverAntwort == serverAnmeldeAntwort001.nutzerNameSchonVergeben) {
            serverAntwortAnmeldungText.style.display = "block";
            serverAntwortAnmeldungText.id = "nutzerNameSchonVergeben";
            serverAntwortAnmeldungText.innerText = serverAntwort;
        }
    }
}