namespace P34 {
    let abschickenBTN: HTMLButtonElement = <HTMLButtonElement>document.getElementById("abschicken-btn");
    abschickenBTN.addEventListener("click", clickAbschickenBTN);

    let zeigeReviewsBTN: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zeigeReviews");
    zeigeReviewsBTN.addEventListener("click", zeigeReviews);

    async function clickAbschickenBTN(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "http://localhost:8100";
        //let url: string = "https://agentds.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/abschicken?" + query.toString();
        console.log("Pathname = /abschicken: " + url);
        await fetch(url);
    }

    async function zeigeReviews(): Promise<void> {
        let url: string = "http://localhost:8100";
        url = url + "/zeigeReviews";

        let response: Response = await fetch(url);
        let reviews: string = await response.text();
        console.log(reviews);
    }

    interface Review {
        agent: string;
        name: string;
        reviewText: string;
    }
}