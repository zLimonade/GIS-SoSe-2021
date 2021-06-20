"use strict";
var P34;
(function (P34) {
    let abschickenBTN = document.getElementById("abschicken-btn");
    abschickenBTN.addEventListener("click", clickAbschickenBTN);
    let zeigeReviewsBTN = document.getElementById("zeigeReviews");
    zeigeReviewsBTN.addEventListener("click", zeigeReviews);
    async function clickAbschickenBTN() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        //let url: string = "https://agentds.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/abschicken?" + query.toString();
        console.log("Pathname = /abschicken: " + url);
        await fetch(url);
    }
    async function zeigeReviews() {
        let url = "http://localhost:8100";
        url = url + "/zeigeReviews";
        let response = await fetch(url);
        let reviews = await response.text();
        console.log(reviews);
    }
})(P34 || (P34 = {}));
//# sourceMappingURL=clientScript.js.map