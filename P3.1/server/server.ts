import * as Http from "http";

// Erstellung eines Namespaces, um z.B. doppelte Variablennamen in anderen Dateien zu verhindern.
export namespace P_3_1Server {

    // Visuelles Feedback auf der Konsole, was gerade passiert.
    console.log("Starting server");

    // Holen eines Portes, der in der environment Variablen "PORT" ist und diesen auch benutzen.
    // Ist dort keiner gesetzt (in der PORT Variablen), dann setzen wir die Variable port auf 8100, also benutzen den Port 8100.
    // Jeder Rechner verfügt 65.536 Ports.
    // An Ports werden Daten(-Pakete) gesendet und empfangen / ausgetauscht.
    // Ein Port dient zur Kommunikation zwischen Rechnern, Geräten und dem Internet.
    // Es gibt Ports für spezifische Aufgaben. Z.B. wird der Port 25 für den Versand und der Port 110 für den Empfang von E-Mails genutzt.
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    // Erstellen eines HTTP-Servers über das installierte Http-Modul, welches in Node.js mitgeliefert ist. 
    // Durch "npm install @types/node" werden diese Typen des Moduls vorgeschlagen.
    let server: Http.Server = Http.createServer();

    // Dem server Eventlistener hinzufügen:
    // "request" --> für Anfragen an den Server
    // "request"-Listener ruft handleRequest-Funktion auf.
    server.addListener("request", handleRequest);

    // "listening" --> der Server soll "Hören" / darauf achten, ob Anfragen "reinkommen". 
    // "listening"-Listener ruft handleListen-Funktion auf.
    server.addListener("listening", handleListen);

    // Server soll am Port 8100 anfangen zu hören (auf Anfragen achten/hören, ob Anfragen reinkommen).
    server.listen(port);

    // Deklaration der handleListen-Funktion. Ausgabe "Listening" in der Konsole.
    function handleListen(): void {
        console.log("Listening");
    }

    // Deklaration handleRequest-Funktion, die sich um angekommene Anfragen an den Server kümmert.
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        // Ausgebe in der Konsole, wenn eine Anfrage reinkommt.
        console.log("I hear voices!");

        // Setzen von Header-Eigenschaften der Antwort
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        // Server-Antwort schreiben, welche die URL der Anfrage ist.
        _response.write(_request.url);
      
        // Konsolenausgabe der Antwort des Servers.
        console.log(_request.url);

        // Beende Antwort
        _response.end();
    }
}