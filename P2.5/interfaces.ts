namespace P25 {

    export interface BurgerTeil {
        name: string;
        preis: number;
        bild: string;
    }

    export interface AlleBurgerTeile {
        broetchenTop: BurgerTeil[];
        patties: BurgerTeil[];
        sossen: BurgerTeil[];
        broetchenBottom: BurgerTeil[];
    }

    export interface BurgerSelection {
        broetchenTop: BurgerTeil;
        pattie: BurgerTeil;
        sosse: BurgerTeil;
        broetchenBottom: BurgerTeil;
    }
}