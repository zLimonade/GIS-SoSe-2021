import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Modulprüfung {
    
    export interface Nutzer {
        _id: string;
        nutzername: string;
        passwort: string;
    }
    
    export interface ServerAnmeldeAntwort {
        anmeldenErfolgreich: string;
        registrierenErfolgreich: string;
        nutzerNameSchonVergeben: string;
    }

    let serverAnmeldeAntwort001: ServerAnmeldeAntwort = {
        anmeldenErfolgreich: "Erfolgreich angemeldet :)",
        registrierenErfolgreich: "Erfolgreich registriert :)",
        nutzerNameSchonVergeben: "Nutzername leider schon vergeben :/"
    };
    
    export interface Rezept {
        rezeptname: string;
        nutzername: string;
        menge: string[];
        lebensmittel: string[];
        zubereitung: string;
        teilen: boolean;
        nutzernameDerFavorisiert: string;
    }
    
    let nutzer: Mongo.Collection;
    let alleRezepte: Mongo.Collection;
    let favoritenRezepte: Mongo.Collection;
    
    //let dbURL: string = "mongodb://localhost:27017";
    let dbURL: string = "mongodb+srv://dbAgentD:jYVoQLJzyUpz2888@agent-ds-mi7.7o8ku.mongodb.net/Rezepte?retryWrites=true&w=majority";
    
    startServer();
    connectToDB();
    
    function startServer(): void {
        let port: number = Number(process.env.PORT);
        if (!port)
            port = 8100;
        console.log("Server |Modulprüfung| startet am Port " + port);

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    
    async function connectToDB(): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(dbURL, options);
        await mongoClient.connect();
        nutzer = mongoClient.db("Rezepte").collection("nutzer");
        alleRezepte = mongoClient.db("Rezepte").collection("alleRezepte");
        favoritenRezepte = mongoClient.db("Rezepte").collection("favoritenRezepte");
        console.log("Datenbankverbindng hergestellt ", nutzer != undefined);
    }

    function handleListen(): void {
        console.log("Hoeren");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Ich hoere Stimmen!");

        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        console.log(url);

        // _response.setHeader("Access-Control-Allow-Origin", "*");

        if (url.pathname == "/bekommeNutzerNameUndPw") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            console.log(jsonString);
        }


        // Nutzer in DB Rezepte und Collection nutzer einfuegen
        if (url.pathname == "/anmelden") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            let nutzerNameVorhanden: boolean = false;
            let nutzerPasswort: boolean = false;

            let nutzername: string = <string>url.query["nutzername"];
            let passwort: string = <string>url.query["passwort"];

            console.log("nutzer gerade angemeldet " + nutzername);
            console.log("passwort gerade angemeldet " + passwort);

            let cursor: Mongo.Cursor = nutzer.find();
            let nutzerArray: Nutzer[] = await cursor.toArray();

            for (let i: number = 0; i < nutzerArray.length; i++) {
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
            let nutzername: string = <string>url.query["nutzername"];
            console.log("aktueller Nutzername: " + nutzername);
            
            /*
            async function mitDBnutzerNameRezepteCollectionVerbinden(_url: string): Promise<void> {
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                alleRezepte = mongoClient.db("Rezepte").collection("alleRezepte");
                console.log("Datenbank-Collection erstellt ", alleRezepte != undefined);
            }

            mitDBnutzerNameRezepteCollectionVerbinden(dbURL);
            */

            alleRezepte.insertOne(url.query);

            console.log("Rezept in DB namens Rezepte eingefügt :)");
            console.log(url.query);
        }

        // Alle Rezepte aus DB Rezepte und Collection alleRezepte anzeigen
        if (url.pathname == "/alleRezepte") {
            let cursor: Mongo.Cursor = alleRezepte.find();
            let result: Rezept[] = await cursor.toArray();
            
            let jsonString: string = JSON.stringify(result);

            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(jsonString);

            console.log("Rezepte: ", jsonString);
        }

        if (url.pathname == "/meineRezepte") {
            let cursor: Mongo.Cursor = alleRezepte.find();
            let result: Rezept[] = await cursor.toArray();

            let jsonString: string = JSON.stringify(result);

            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(jsonString);

            console.log("meineRezepte: ", jsonString);
            console.log("Rezepte von" + alleRezepte);
        }

        if (url.pathname == "/loescheEinRezept") {
            let id: string = <string>url.query["id"];
            let rezeptId: Mongo.ObjectId = new Mongo.ObjectId(id);
            alleRezepte.deleteOne({ _id: rezeptId });

            console.log("Entfernen gedrückt!");
        }

        if (url.pathname == "/favorisiereEinRezept") {
            let id: string = <string>url.query["id"];
            let nutzernameDerFavorisiert: string = <string>url.query["nutzernameDerFavorisiert"];
            let rezeptId: Mongo.ObjectId = new Mongo.ObjectId(id);

            /*
            async function nutzerFavorisierenDBCollection(_url: string): Promise<void> {
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
                await mongoClient.connect();
                favoritenRezepte = mongoClient.db("Rezepte").collection("favoritenRezepte");
                console.log("Datenbank-Collection erstellt ", favoritenRezepte != undefined);
            }
            
            nutzerFavorisierenDBCollection(dbURL);
            */

            let cursor: Mongo.Cursor = alleRezepte.find({"_id": rezeptId});
            let result: Rezept[] = await cursor.toArray();
            let favSuch: Rezept;

            favSuch = await favoritenRezepte.findOne({"rezeptname": <string>result[0].rezeptname, 
            "nutzername": <string>result[0].nutzername,
            "nutzernameDerFavorisiert": nutzernameDerFavorisiert,
            "menge": <string[]>result[0].menge,
            "lebensmittel": <string[]>result[0].lebensmittel,
            "zubereitung": <string>result[0].zubereitung
            });

            if (favSuch == undefined) {
                favoritenRezepte.insertOne({"rezeptname": <string>result[0].rezeptname, 
                                            "nutzername": <string>result[0].nutzername,
                                            "nutzernameDerFavorisiert": nutzernameDerFavorisiert,
                                            "menge": <string[]>result[0].menge,
                                            "lebensmittel": <string[]>result[0].lebensmittel,
                                            "zubereitung": <string>result[0].zubereitung
                });
            }
        }

        if (url.pathname == "/meineFavoriten") {
            let cursor: Mongo.Cursor = favoritenRezepte.find();
            let result: Rezept[] = await cursor.toArray();
            let jsonString: string = JSON.stringify(result);

            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write(jsonString);
        }

        if (url.pathname == "/entferneEinFavorit") {
            let id: string = <string>url.query["id"];
            let rezeptId: Mongo.ObjectId = new Mongo.ObjectId(id);
            favoritenRezepte.deleteOne({ _id: rezeptId });
        }
        
        _response.end();
    }
}