namespace P23_Aufgabe_02_03 {

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("burgerHaus");

    export interface Burger {
        brot: Brot;
        pattie: Pattie;
        sosse: Sosse;
        darstellung: CanvasRenderingContext2D;
    }

    export interface Brot {
        name: string;
        farbe: string;
        preis: number;
        darstellung: CanvasRenderingContext2D;
        sesam: boolean;
    }

    export interface Pattie {
        name: string;
        farbe: string;
        preis: number;
        darstellung: CanvasRenderingContext2D;
        vegan: boolean;
    }

    export interface Sosse {
        name: string;
        farbe: string;
        preis: number;
        darstellung: CanvasRenderingContext2D;
        scharf: boolean;
    }
}