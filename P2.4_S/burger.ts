namespace P24_S {

    let möglichkeit2: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("möglichkeit2");
    möglichkeit2.innerHTML = "Dein Agent Burger";

    erstelleEndBurgerFrame();

    let neuerBurgerBTN: HTMLButtonElement = <HTMLButtonElement>document.getElementById("neuerBurgerBTN");
    neuerBurgerBTN.addEventListener("click", neuerBurger);

    function neuerBurger(_event: Event): void {
        document.location.href = "index.html";
    }

    function konvertiereSessionStorageZuObjekt(_sessionKey: string): BurgerTeil {
        return JSON.parse(sessionStorage.getItem(_sessionKey));
    }

    function erstelleEndBurgerFrame(): void {
        document.getElementById("endBurgerBack2").style.display = "block";
        let endBurgerBack: HTMLDivElement = <HTMLDivElement>document.getElementById("endBurgerBack2");
        endBurgerBack.appendChild(fertigerBurgerBild());
    }

    function fertigerBurgerBild(): HTMLDivElement {
        let endBurger: HTMLDivElement = document.createElement("div");
        endBurger.className = "endBurger";

        let broetchenUnten: HTMLImageElement = document.createElement("img");
        broetchenUnten.className = "basis";
        
        broetchenUnten.src = (konvertiereSessionStorageZuObjekt("BrötchenBottom: ").bild);
        endBurger.appendChild(broetchenUnten);

        let pattie: HTMLImageElement = document.createElement("img");
        pattie.className = "overlay";
       
        pattie.src = (konvertiereSessionStorageZuObjekt("Pattie: ").bild);
        endBurger.appendChild(pattie);

        let beilage: HTMLImageElement = document.createElement("img");
        beilage.className = "overlay";
        beilage.src = "./bilder/Burger/Beilagen.png";
        endBurger.appendChild(beilage);

        let sosse: HTMLImageElement = document.createElement("img");
        sosse.className = "overlay";
        sosse.src = (konvertiereSessionStorageZuObjekt("Sosse: ").bild);
        endBurger.appendChild(sosse);

        let broetchenOben: HTMLImageElement = document.createElement("img");
        broetchenOben.className = "overlay";
        broetchenOben.src = (konvertiereSessionStorageZuObjekt("BrötchenTop: ").bild);
        endBurger.appendChild(broetchenOben);

        return endBurger;
    }
}