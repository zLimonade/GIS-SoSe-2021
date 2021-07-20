"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulprüfung = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Modulprüfung;
(function (Modulprüfung) {
    let serverAnmeldeAntwort001 = {
        anmeldenErfolgreich: "Erfolgreich angemeldet :)",
        registrierenErfolgreich: "Erfolgreich registriert :)",
        nutzerNameSchonVergeben: "Nutzername leider schon vergeben :/"
    };
    let nutzer;
    let alleRezepte;
    let favoritenRezepte;
    //let dbURL: string = "mongodb://localhost:27017";
    let dbURL = "mongodb+srv://dbAgentD:jYVoQLJzyUpz2888@agent-ds-mi7.7o8ku.mongodb.net/Rezepte?retryWrites=true&w=majority";
    startServer();
    connectToDB();
    function startServer() {
        let port = Number(process.env.PORT);
        if (!port)
            port = 8100;
        console.log("Server |Modulprüfung| startet am Port " + port);
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    async function connectToDB() {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(dbURL, options);
        await mongoClient.connect();
        nutzer = mongoClient.db("Rezepte").collection("nutzer");
        console.log("Datenbankverbindng hergestellt ", nutzer != undefined);
    }
    function handleListen() {
        console.log("Hoeren");
    }
    async function handleRequest(_request, _response) {
        console.log("Ich hoere Stimmen!");
        let url = Url.parse(_request.url, true);
        console.log(url);
        // _response.setHeader("Access-Control-Allow-Origin", "*");
        if (url.pathname == "/bekommeNutzerNameUndPw") {
            let jsonString = JSON.stringify(url.query);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(jsonString);
            console.log(jsonString);
        }
        // Nutzer in DB Rezepte und Collection nutzer einfuegen
        if (url.pathname == "/anmelden") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            let nutzerNameVorhanden = false;
            let nutzerPasswort = false;
            let nutzername = url.query["nutzername"];
            let passwort = url.query["passwort"];
            console.log("nutzer gerade angemeldet " + nutzername);
            console.log("passwort gerade angemeldet " + passwort);
            let cursor = nutzer.find();
            let nutzerArray = await cursor.toArray();
            for (let i = 0; i < nutzerArray.length; i++) {
                if (nutzername == nutzerArray[i].nutzername) {
                    nutzerNameVorhanden = true;
                    if (passwort == nutzerArray[i].passwort) {
                        nutzerPasswort = true;
                    }
                }
            }
            // Nutzername vorhande, Passwort falsch --> neuer Nutzer kann sich nicht unter eingegebenem Namen registrieren
            if (nutzerNameVorhanden == true && nutzerPasswort == false) {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                _response.setHeader("Access-Control-Allow-Origin", "*");
                _response.write(serverAnmeldeAntwort001.nutzerNameSchonVergeben);
            }
            // Nutzername nicht vorhanden --> neuer Nutzer kann sich unter eingegebenem Namen registrieren
            else if (nutzerNameVorhanden == false && nutzerPasswort == false) {
                nutzer.insertOne(url.query);
                _response.setHeader("content-type", "text/html; charset=utf-8");
                _response.setHeader("Access-Control-Allow-Origin", "*");
                _response.write(serverAnmeldeAntwort001.registrierenErfolgreich);
                console.log("ServerResponsNAME: " + nutzername);
            }
            // Nutzername und Passwort stimmen überein --> Nutzer kann sich anmelden
            if (nutzerPasswort == true && nutzerNameVorhanden == true) {
                _response.write(serverAnmeldeAntwort001.anmeldenErfolgreich);
            }
            console.log("Ganzer Query?", url.query);
        }
        if (url.pathname == "/erstelleRezept") {
            let nutzername = url.query["nutzername"];
            console.log("aktueller Nutzername: " + nutzername);
            async function mitDBnutzerNameRezepteCollectionVerbinden(_url) {
                let options = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                alleRezepte = mongoClient.db("Rezepte").collection("alleRezepte");
                console.log("Datenbank-Collection erstellt ", alleRezepte != undefined);
            }
            mitDBnutzerNameRezepteCollectionVerbinden(dbURL);
            alleRezepte.insertOne(url.query);
            console.log("Rezept in DB namens Rezepte eingefügt :)");
            console.log(url.query);
        }
        // Alle Rezepte aus DB Rezepte und Collection alleRezepte anzeigen
        if (url.pathname == "/alleRezepte") {
            let cursor = alleRezepte.find();
            let result = await cursor.toArray();
            let jsonString = JSON.stringify(result);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(jsonString);
            console.log("Rezepte: ", jsonString);
        }
        if (url.pathname == "/meineRezepte") {
            let cursor = alleRezepte.find();
            let result = await cursor.toArray();
            let jsonString = JSON.stringify(result);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(jsonString);
            console.log("meineRezepte: ", jsonString);
            console.log("Rezepte von" + alleRezepte);
        }
        if (url.pathname == "/loescheEinRezept") {
            let id = url.query["id"];
            let rezeptId = new Mongo.ObjectId(id);
            alleRezepte.deleteOne({ _id: rezeptId });
            console.log("Entfernen gedrückt!");
        }
        if (url.pathname == "/favorisiereEinRezept") {
            let id = url.query["id"];
            let nutzernameDerFavorisiert = url.query["nutzernameDerFavorisiert"];
            let rezeptId = new Mongo.ObjectId(id);
            async function nutzerFavorisierenDBCollection(_url) {
                let options = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                favoritenRezepte = mongoClient.db("Rezepte").collection("favoritenRezepte");
                console.log("Datenbank-Collection erstellt ", favoritenRezepte != undefined);
            }
            nutzerFavorisierenDBCollection(dbURL);
            let cursor = alleRezepte.find({ "_id": rezeptId });
            let result = await cursor.toArray();
            let favSuch;
            favSuch = await favoritenRezepte.findOne({ "rezeptname": result[0].rezeptname,
                "nutzername": result[0].nutzername, "nutzernameDerFavorisiert": nutzernameDerFavorisiert, "menge": result[0].menge,
                "lebensmittel": result[0].lebensmittel,
                "zubereitung": result[0].zubereitung
            });
            if (favSuch == undefined) {
                favoritenRezepte.insertOne({ "rezeptname": result[0].rezeptname,
                    "nutzername": result[0].nutzername, "nutzernameDerFavorisiert": nutzernameDerFavorisiert, "menge": result[0].menge,
                    "lebensmittel": result[0].lebensmittel,
                    "zubereitung": result[0].zubereitung
                });
            }
        }
        if (url.pathname == "/meineFavoriten") {
            let cursor = favoritenRezepte.find();
            let result = await cursor.toArray();
            let jsonString = JSON.stringify(result);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(jsonString);
        }
        if (url.pathname == "/entferneEinFavorit") {
            let id = url.query["id"];
            let rezeptId = new Mongo.ObjectId(id);
            favoritenRezepte.deleteOne({ _id: rezeptId });
        }
        _response.end();
    }
})(Modulprüfung = exports.Modulprüfung || (exports.Modulprüfung = {}));
//# sourceMappingURL=serverM.js.map