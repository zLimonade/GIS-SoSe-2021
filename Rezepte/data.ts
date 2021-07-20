namespace Modulprüfung {

    let nutzer1: Nutzer = { nutzername: "alf", passwort: "123456" };

    /*
    let rezept1: Rezept = {
        rezeptname: "Salsa-Sauce",
        zutaten:
            [
                {menge: "400g", lebensmittel: "Tomaten"}
            ],
        zubereitung:
            [
                {nummer: 1, anweisung: "Tomaten essen!"}
            ]
    };
    */
    // export let rezept1JSON: string = JSON.stringify(rezept1);

    export let nutzer1JSON: string = JSON.stringify(nutzer1);

}