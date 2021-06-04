import * as Http from "http";
import * as Url from "url";

export namespace P32 {

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    console.log("Starting server 2.0 (P3.2) on Port " + port);

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        
        // Umwandeln der URL in ein assoziatives Array
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        console.log(url);
        
        if (url.pathname == "/html") {
            for (let key in url.query) {
                _response.write(key + ": " + url.query[key] + "<br/>");
                console.log(key + ": " + url.query[key]);
            }
        }
        
        if (url.pathname == "/json") {
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
            console.log(jsonString);
        }

        _response.end();
    }
}