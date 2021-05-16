"use strict";
var P24_storage_newPage_clean;
(function (P24_storage_newPage_clean) {
    let möglichkeit2 = document.getElementById("möglichkeit2");
    möglichkeit2.innerHTML = "Dein Agent Burger";
    erstelleEndBurgerFrame();
    let neuerBurgerBTN = document.getElementById("neuerBurgerBTN");
    neuerBurgerBTN.addEventListener("click", neuerBurger);
    function neuerBurger(_event) {
        document.location.href = "index.html";
    }
    function konvertiereSessionStorageZuObjekt(_sessionKey) {
        return JSON.parse(sessionStorage.getItem(_sessionKey));
    }
    function erstelleEndBurgerFrame() {
        document.getElementById("endBurgerBack2").style.display = "block";
        let endBurgerBack = document.getElementById("endBurgerBack2");
        endBurgerBack.appendChild(fertigerBurgerBild());
    }
    function fertigerBurgerBild() {
        let endBurger = document.createElement("div");
        endBurger.className = "endBurger";
        let broetchenUnten = document.createElement("img");
        broetchenUnten.className = "basis";
        broetchenUnten.src = (konvertiereSessionStorageZuObjekt("BrötchenBottom: ").bild);
        endBurger.appendChild(broetchenUnten);
        let pattie = document.createElement("img");
        pattie.className = "overlay";
        pattie.src = (konvertiereSessionStorageZuObjekt("Pattie: ").bild);
        endBurger.appendChild(pattie);
        let beilage = document.createElement("img");
        beilage.className = "overlay";
        beilage.src = "./bilder/Burger/Beilagen.png";
        endBurger.appendChild(beilage);
        let sosse = document.createElement("img");
        sosse.className = "overlay";
        sosse.src = (konvertiereSessionStorageZuObjekt("Sosse: ").bild);
        endBurger.appendChild(sosse);
        let broetchenOben = document.createElement("img");
        broetchenOben.className = "overlay";
        broetchenOben.src = (konvertiereSessionStorageZuObjekt("BrötchenTop: ").bild);
        endBurger.appendChild(broetchenOben);
        return endBurger;
    }
})(P24_storage_newPage_clean || (P24_storage_newPage_clean = {}));
//# sourceMappingURL=burger.js.map