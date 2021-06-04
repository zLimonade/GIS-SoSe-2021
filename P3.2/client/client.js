"use strict";
var P32;
(function (P32) {
    let sendDataGetHTML = document.getElementById("sendDataGetHTML");
    sendDataGetHTML.addEventListener("click", clickHTML);
    let sendDataGetJSON = document.getElementById("sendDataGetJSON");
    sendDataGetJSON.addEventListener("click", clickJSON);
    async function clickHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://agentds.herokuapp.com/";
        // let url: string = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url = url + "/html?" + query.toString();
        console.log("Pathname = /html: " + url);
        let response = await fetch(url);
        let serverResponse = await response.text();
        displayServerResponse(serverResponse);
    }
    async function clickJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://agentds.herokuapp.com/";
        // let url: string = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url = url + "/json?" + query.toString();
        console.log("Pathname = /json: " + url);
        let response = await fetch(url);
        let serverResponse = await response.text();
        /*
        let serverResponse: string = await response.json();
        console.log(serverResponse);
        */
        let jsonObject = JSON.parse(serverResponse);
        console.log(jsonObject);
        sayWhereServerResponseIs();
    }
    function displayServerResponse(_serverResponse) {
        let serverResponse = document.createElement("p");
        serverResponse.innerHTML = _serverResponse;
        document.body.appendChild(serverResponse);
    }
    function sayWhereServerResponseIs() {
        let sayWhereServerResponseIs = document.createElement("p");
        sayWhereServerResponseIs.innerHTML = "Take a look at the console! :)";
        document.body.appendChild(sayWhereServerResponseIs);
    }
})(P32 || (P32 = {}));
//# sourceMappingURL=client.js.map