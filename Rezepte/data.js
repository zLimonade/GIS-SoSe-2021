"use strict";
var Rezepte;
(function (Rezepte) {
    let nutzer1 = { nutzername: "alf", passwort: "123456" };
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
    Rezepte.nutzer1JSON = JSON.stringify(nutzer1);
})(Rezepte || (Rezepte = {}));
//# sourceMappingURL=data.js.map