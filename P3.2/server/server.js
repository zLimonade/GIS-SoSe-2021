"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P32 = void 0;
const Http = require("http");
const Url = require("url");
var P32;
(function (P32) {
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server 2.0 (P3.2) on Port " + port);
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Umwandeln der URL in ein assoziatives Array
        let url = Url.parse(_request.url, true);
        console.log(url);
        if (url.pathname == "/html") {
            for (let key in url.query) {
                _response.write(key + ": " + url.query[key] + "<br/>");
                console.log(key + ": " + url.query[key]);
            }
        }
        if (url.pathname == "/json") {
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            console.log(jsonString);
        }
        _response.end();
    }
})(P32 = exports.P32 || (exports.P32 = {}));
//# sourceMappingURL=server.js.map