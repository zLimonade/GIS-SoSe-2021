namespace P23_Aufgabe_01 {

    let erstelleRechteckBTN: HTMLButtonElement = document.createElement("button");
    erstelleRechteckBTN.innerHTML = "Rechteck hinzufügen";
    erstelleRechteckBTN.name = "rechteckHinzufügen";
    erstelleRechteckBTN.addEventListener("click", erstelleDiv);
    document.body.appendChild(erstelleRechteckBTN);

    let seiteZurücksetzenBTN: HTMLButtonElement = document.createElement("button");
    seiteZurücksetzenBTN.innerHTML = "Seite zurücksetzen";
    seiteZurücksetzenBTN.name = "seiteZurücksetzen";
    seiteZurücksetzenBTN.addEventListener("click", seiteZurücksetzen);
    document.body.appendChild(seiteZurücksetzenBTN);

    let divArray: HTMLDivElement[] = [];

    function erstelleDiv(): void {
        let div: HTMLDivElement = document.createElement("div");
        div.style.height = (Math.round(Math.random() * 1000) + "px");
        div.style.backgroundColor = ("#" + (Math.random() * 0xFFFFFF << 0).toString(16));
        div.style.position = "absolute";
        div.style.left = (Math.round(Math.random() * 1000) + "px");
        div.style.right = (Math.round(Math.random() * 1000) + "px");
        document.body.appendChild(div);
        div.id = "div" + (divArray.length + 1);
        divArray.push(div);
        console.log(div.id);
    }
    
    function seiteZurücksetzen(): void {
        for (let i: number = 0;  i < divArray.length; i++) {
            let removeDiv: HTMLElement = document.getElementById("div" + (i + 1));
            removeDiv.remove();
        }
        divArray = [];
    }
}