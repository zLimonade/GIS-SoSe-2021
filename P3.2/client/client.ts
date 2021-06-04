namespace P32 {
    let sendDataGetHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendDataGetHTML");
    sendDataGetHTML.addEventListener("click", clickHTML);

    let sendDataGetJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendDataGetJSON");
    sendDataGetJSON.addEventListener("click", clickJSON);

    async function clickHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "https://agentds.herokuapp.com";
        // let url: string = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html?" + query.toString();
        console.log("Pathname = /html: " + url);

        let response: Response = await fetch(url);
        let serverResponse: string = await response.text();
        displayServerResponse(serverResponse);
    }
    
    async function clickJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "https://agentds.herokuapp.com";
        // let url: string = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json?" + query.toString();
        console.log("Pathname = /json: " + url);

        let response: Response = await fetch(url);
        let serverResponse: string = await response.text();
        /*
        let serverResponse: string = await response.json();
        console.log(serverResponse);
        */
        let jsonObject: FormDataServerResponse = JSON.parse(serverResponse);
        console.log(jsonObject);
        sayWhereServerResponseIs();
    }

    function displayServerResponse(_serverResponse: string): void {
        let serverResponse: HTMLParagraphElement = document.createElement("p");
        serverResponse.innerHTML = _serverResponse;
        document.body.appendChild(serverResponse);
    }

    function sayWhereServerResponseIs(): void {
        let sayWhereServerResponseIs: HTMLParagraphElement = document.createElement("p");
        sayWhereServerResponseIs.innerHTML = "Take a look at the console! :)";
        document.body.appendChild(sayWhereServerResponseIs);
    }

    interface FormDataServerResponse {
        name: string;
        message: string;
    }
}