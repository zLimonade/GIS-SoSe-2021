"use strict";
var P23_Aufgabe_02_03;
(function (P23_Aufgabe_02_03) {
    // Brötchen
    let brotArray = [];
    let brot1 = { name: "Classic", farbe: "beige", preis: 1, darstellung: P23_Aufgabe_02_03.canvas.getContext("2d"), sesam: true };
    brotArray.push(brot1);
    let brot2 = { name: "BBQ", farbe: "Grilled", preis: 1.5, darstellung: P23_Aufgabe_02_03.canvas.getContext("2d"), sesam: true };
    brotArray.push(brot2);
    let brot3 = { name: "Cowboy", farbe: "black", preis: 1.6, darstellung: P23_Aufgabe_02_03.canvas.getContext("2d"), sesam: false };
    brotArray.push(brot3);
    // Patties
    let pattieArray = [];
    let pattie1 = { name: "Grilled", farbe: "barbecued", preis: 3.5, darstellung: P23_Aufgabe_02_03.canvas.getContext("2d"), vegan: false };
    pattieArray.push(pattie1);
    let pattie2 = { name: "Chicken", farbe: "deep-fried", preis: 2.5, darstellung: P23_Aufgabe_02_03.canvas.getContext("2d"), vegan: false };
    pattieArray.push(pattie2);
    let pattie3 = { name: "Green-Horse", farbe: "light-brown", preis: 5.5, darstellung: P23_Aufgabe_02_03.canvas.getContext("2d"), vegan: true };
    pattieArray.push(pattie3);
    // Sossen
    let sosseArray = [];
    let sosse1 = { name: "Smookey", farbe: "smoked-red", preis: 0.5, darstellung: P23_Aufgabe_02_03.canvas.getContext("2d"), scharf: false };
    sosseArray.push(sosse1);
    let sosse2 = { name: "Route66", farbe: "fire-red", preis: 0.66, darstellung: P23_Aufgabe_02_03.canvas.getContext("2d"), scharf: true };
    sosseArray.push(sosse2);
    let sosse3 = { name: "Diavolo", farbe: "dark-red", preis: 1.5, darstellung: P23_Aufgabe_02_03.canvas.getContext("2d"), scharf: true };
    sosseArray.push(sosse3);
})(P23_Aufgabe_02_03 || (P23_Aufgabe_02_03 = {}));
//# sourceMappingURL=data.js.map