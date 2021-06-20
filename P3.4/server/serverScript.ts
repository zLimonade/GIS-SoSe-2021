import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P34 {
    
    interface Review {
        agent: string;
        name: string;
        reviewText: string;
    }

    let reviews: Mongo.Collection;

    
    let dbURL: string = "mongodb://localhost:27017";
    
    startServer();
    connectToDB(dbURL);
    
    function startServer(): void {
        let port: number = Number(process.env.PORT);
        if (!port)
            port = 8100;
        console.log("Starting server 2.0 (P3.4) on Port " + port);

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }

    async function connectToDB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true}
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        reviews = mongoClient.db("MOOAgents").collection("Reviews");
        console.log("Database connection ", reviews != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        console.log(url);
       
        _response.setHeader("Access-Control-Allow-Origin", "*");
        
        if (url.pathname == "/abschicken") {
            reviews.insertOne(url.query);
            console.log("Review in DB eingefügt :)");
        }

        if (url.pathname == "/zeigeReviews") {
            let cursor: Mongo.Cursor = reviews.find();
            let result: Review[] = await cursor.toArray();
            let jsonString: string = JSON.stringify(result);
            _response.write(jsonString);

            console.log(jsonString);
            console.log("Hallo wenn zeigeReviews geclickt???");
        }

        _response.end();
    }
}
