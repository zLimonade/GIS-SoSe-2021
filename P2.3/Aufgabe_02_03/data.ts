namespace P23_Aufgabe_02_03 {



    // Brötchen
    let brotArray: Brot[] = [];

    let brot1: Brot = {name: "Classic", farbe: "beige", preis: 1, darstellung: canvas.getContext("2d"), sesam: true};
    brotArray.push(brot1);

    let brot2: Brot = {name: "BBQ", farbe: "Grilled", preis: 1.5, darstellung: canvas.getContext("2d"), sesam: true};
    brotArray.push(brot2);

    let brot3: Brot = {name: "Cowboy", farbe: "black", preis: 1.6, darstellung: canvas.getContext("2d"), sesam: false};
    brotArray.push(brot3);



    // Patties
    let pattieArray: Pattie[] = [];

    let pattie1: Pattie = {name: "Grilled", farbe: "barbecued", preis: 3.5, darstellung: canvas.getContext("2d"), vegan: false};
    pattieArray.push(pattie1);

    let pattie2: Pattie = {name: "Chicken", farbe: "deep-fried", preis: 2.5, darstellung: canvas.getContext("2d"), vegan: false};
    pattieArray.push(pattie2);

    let pattie3: Pattie = {name: "Green-Horse", farbe: "light-brown", preis: 5.5, darstellung: canvas.getContext("2d"), vegan: true};
    pattieArray.push(pattie3);



    // Sossen
    let sosseArray: Sosse[] = [];

    let sosse1: Sosse = {name: "Smookey", farbe: "smoked-red", preis: 0.5, darstellung: canvas.getContext("2d"), scharf: false};
    sosseArray.push(sosse1);

    let sosse2: Sosse = {name: "Route66", farbe: "fire-red", preis: 0.66, darstellung: canvas.getContext("2d"), scharf: true};
    sosseArray.push(sosse2);

    let sosse3: Sosse = {name: "Diavolo", farbe: "dark-red", preis: 1.5, darstellung: canvas.getContext("2d"), scharf: true};
    sosseArray.push(sosse3);
}