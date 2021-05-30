let sendDataBTN: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendDataBTN");
sendDataBTN.addEventListener("click", click);

async function click(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);

    let url: string = "https://agentds.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();

    let response: Response = await fetch(url);
    let serverResponse: string = await response.text();
    console.log(serverResponse);
    displayServerResponse(serverResponse);
}

function displayServerResponse(_serverResponse: string): void {
    let serverResponse: HTMLParagraphElement = document.createElement("p");
    serverResponse.innerHTML = "ServerResponse: " + _serverResponse;
    document.body.appendChild(serverResponse);
}