namespace P24_S {

    // Alle Burger Teile

    let alleBurgerTeile: AlleBurgerTeile = {
        broetchenTop:
            [
                { name: "Classic", preis: 1, bild: "./bilder/Burger/Broetchen/Classic_Top.png" },
                { name: "BBQ", preis: 1.5, bild: "./bilder/Burger/Broetchen/BBQ_Top.png" },
                { name: "Cowboy", preis: 1.6, bild: "./bilder/Burger/Broetchen/Cowboy_Top.png" }
            ],

        patties:
            [
                { name: "Grilled", preis: 3.5, bild: "./bilder/Burger/Patties/Grilled.png" },
                { name: "Chicken", preis: 2.5, bild: "./bilder/Burger/Patties/Chicken.png" },
                { name: "Green-Horse", preis: 5.5, bild: "./bilder/Burger/Patties/Green_Horse.png"}
            ],

        sossen:
            [
                { name: "Smokey", preis: 0.5, bild: "./bilder/Burger/Sossen/Smokey.png" },
                { name: "Route 66", preis: 0.66, bild: "./bilder/Burger/Sossen/Route66.png" },
                { name: "Diavolo", preis: 1.5, bild: "./bilder/Burger/Sossen/Diavolo.png" }
            ],

        broetchenBottom:
            [
                { name: "Classic", preis: 1, bild: "./bilder/Burger/Broetchen/Classic_Bottom.png" },
                { name: "BBQ", preis: 1.5, bild: "./bilder/Burger/Broetchen/BBQ_Bottom.png" },
                { name: "Cowboy", preis: 1.6, bild: "./bilder/Burger/Broetchen/Cowboy_Bottom.png" }
            ]
    };




    // Aufgabe 1a): JSON string 
    export let alleBurgerTeileJSON: string = JSON.stringify(alleBurgerTeile);


    /*
    export let alleBurgerTeileJSON: string = 
    `{ 
        "broetchenTop": 
        [
            { 
                "name": "Classic", 
                "preis": 1,
                "bild": "./bilder/burger.png" 
            },

            { 
                "name": "BBQ", 
                "preis": 1.5, 
                "bild": "./bilder/burger.png" 
            }, 
                
            { 
                "name": "Cowboy", 
                "preis": 1.6, 
                "bild": "./bilder/burger.png" 
            }
        ], 
            
        "patties": 
        [
            { 
                "name": "Grilled", 
                "preis": 3.5, 
                "bild": ".png" 
            }, 
        
            { 
                "name": "Chicken", 
                "preis": 2.5, 
                "bild": ".png" 
            }, 
            
            { 
                "name": "Green-Horse", 
                "preis": 5.5, "bild": ".png" 
            }
        ], 
        
        "sossen": 
        [
            { 
                "name": "Smookey", 
                "preis": 0.5, 
                "bild": ".png" 
            }, 
            
            { 
                "name": "Route 66", 
                "preis": 0.66, 
                "bild": ".png" 
            }, 
            
            { 
                "name": "Diavolo", 
                "preis": 1.5, 
                "bild": ".png" 
            }
        ],

        "broetchenBottom": 
        [
            { 
                "name": "Classic", 
                "preis": 1,
                "bild": "./bilder/burger.png" 
            },

            { 
                "name": "BBQ", 
                "preis": 1.5, 
                "bild": "./bilder/burger.png" 
            }, 
                
            { 
                "name": "Cowboy", 
                "preis": 1.6, 
                "bild": "./bilder/burger.png" 
            }
        ]
    }`;
    */


}