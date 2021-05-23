"use strict";
var P25_copy;
(function (P25_copy) {
    // Aufgabe c)
    let burgerAusCache = {
        broetchenTop: JSON.parse(sessionStorage.getItem("BrötchenTop: ")),
        pattie: JSON.parse(sessionStorage.getItem("Pattie: ")),
        sosse: JSON.parse(sessionStorage.getItem("Sosse: ")),
        broetchenBottom: JSON.parse(sessionStorage.getItem("BrötchenBottom: "))
    };
    async function sendeDatenAusCacheAnURLUndZeigeServerAntwort(_url) {
        let query = new URLSearchParams(burgerAusCache);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let serverAntwort = await response.json();
        console.log(serverAntwort);
        let h2Reply = document.getElementById("reply");
        h2Reply.style.display = "none";
        if (serverAntwort.error) {
            h2Reply.style.display = "block";
            h2Reply.id = "error";
            h2Reply.innerText = serverAntwort.error + " Kleine Server Probleme.";
        }
        if (serverAntwort.message) {
            h2Reply.style.display = "block";
            h2Reply.id = "message";
            h2Reply.innerText = serverAntwort.message + " Ihrer Bestellung geht es gut.";
        }
    }
    let urlGIS = "https://gis-communication.herokuapp.com";
    sendeDatenAusCacheAnURLUndZeigeServerAntwort(urlGIS);
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
})(P25_copy || (P25_copy = {}));
//# sourceMappingURL=burger.js.map