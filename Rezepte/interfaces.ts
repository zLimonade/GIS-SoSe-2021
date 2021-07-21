namespace Rezepte {

    export interface Nutzer {
        nutzername: string;
        passwort: string;
    }

    export interface ServerAnmeldeAntwort {
        anmeldenErfolgreich: string;
        registrierenErfolgreich: string;
        nutzerNameSchonVergeben: string;
    }

    export interface Rezept {
        rezeptname: string;
        nutzername: string;
        menge: string[];
        lebensmittel: string[];
        zubereitung: string;
        teilen: boolean;
    }

}