"use strict";
let sendDataBTN = document.getElementById("sendDataBTN");
sendDataBTN.addEventListener("click", click);
async function click() {
    let formData = new FormData(document.forms[0]);
    let url = "https://gis-example.herokuapp.com/";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    let response = await fetch(url);
    let serverResponse = await response.text();
    console.log(serverResponse);
    displayServerResponse(serverResponse);
}
function displayServerResponse(_serverResponse) {
    let serverResponse = document.createElement("p");
    serverResponse.innerHTML = "ServerResponse: " + _serverResponse;
    document.body.appendChild(serverResponse);
}
//# sourceMappingURL=client.js.map