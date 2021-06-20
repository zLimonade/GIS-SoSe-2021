"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P34 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P34;
(function (P34) {
    let reviews;
    let dbURL = "mongodb://localhost:27017";
    startServer();
    connectToDB(dbURL);
    function startServer() {
        let port = Number(process.env.PORT);
        if (!port)
            port = 8100;
        console.log("Starting server 2.0 (P3.4) on Port " + port);
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        reviews = mongoClient.db("MOOAgents").collection("Reviews");
        console.log("Database connection ", reviews != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        let url = Url.parse(_request.url, true);
        console.log(url);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (url.pathname == "/abschicken") {
            reviews.insertOne(url.query);
            console.log("Review in DB eingefügt :)");
        }
        if (url.pathname == "/zeigeReviews") {
            let cursor = reviews.find();
            let result = await cursor.toArray();
            let jsonString = JSON.stringify(result);
            _response.write(jsonString);
            console.log(jsonString);
            console.log("Hallo wenn zeigeReviews geclickt???");
        }
        _response.end();
    }
})(P34 = exports.P34 || (exports.P34 = {}));
//# sourceMappingURL=serverScript.js.map