namespace P24_S {

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
        brot: BurgerTeil;
        pattie: BurgerTeil;
        sosse: BurgerTeil;
    }
}