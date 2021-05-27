"use strict";
// Aufgabe 1 - Basics
function a1() {
    // Rumpf der Methode "a1": Anweisungen der Funktion "a1".
    let x = "Alles"; /* Gleichzeitige Deklaration und Zuweisung, also Initialisierung, der lokalen Variable "x".
                                   Sie ist vom (primitiven) Datentyp "string". Ihr wird der Wert (die Zeichenkette) "Alles" zugewiesen.
                                     Das Schlüsselwort "let", bei einer Variablendeklaration oder Initialisierung, gewährt eine solide Blocksichtbarkeit */
    console.log(x); /* Aufrufen der "log()" Funktion/Methode auf dem globalen "console" Objekt.
                                    Der Methode "log()" wird als Parameter die zuvor (im Methoden-Rumpf der Funktion "a1") lokal initialisierte Variable "x" übergeben.
                                    Der Übergabeparameter wird auf einer vorhandenen Konsole ausgegeben. */
    func1(); // Aufrufen einer Funktion mit dem Namen "func1". Ihr werden keine Parameter übergeben.
    console.log("Logo!"); /* Aufrufen der "log()" Funktion/Methode auf dem globalen "console" Objekt.
                                    Der Methode "log()" wird als Parameter der string "Logo!" übergeben.
                                    Der Übergabeparameter wird auf einer vorhandenen Konsole ausgegeben. */
}
a1(); // Aufrufen der Funktion "a1".
function func1() {
    console.log("Klar?"); // Konsolenausgabe der Zeichenkette "Klar?".
}
/* Teilaufgabe a) {

    Konsolenausgabe:

    Alles
    Klar?
    Logo!
    



    
    Zulässige Variablen- und Funktionsnamen:

    + Buchstaben (groß und klein)
    + Ziffern (0 bis 9)
    + die Zeichen "_" (Unterstrich) und "$"

        Einschränkungen:

        - keine Bezeichnung beginnt mit Ziffern
        - keine Bezeichnung enthält Leerzeichen oder Bindestriche
        
}*/
/* Teilaufgabe b) {

    Code-Fluss:

    1. Die Anweisung "console.log("Alles");" im Rumpf der Methode "a1" gibt "Alles" auf der Konsole aus.

    2. Die Anweisung "func1();" im Rumpf von "a1" ruft die Methode/Funktion "func1" auf.

    3. Die Anweisung "console.log("Klar?");" im Rumpf der Funktion "func1" gibt "Klar?" auf der Konsole aus.

    4. Die Anweisung "console.log("Logo!");" gibt "Logo!" auf der Konsole aus.

}*/
// Teilaufgabe c)
console.log("\nTeilaufgabe c): ");
function a1c() {
    funcAlles();
    funcGute();
    funcAlles();
    funcKlar();
    funcAlles();
    funcLogo();
}
a1c();
function funcAlles() {
    console.log("Alles!");
}
function funcGute() {
    console.log("Gute!");
}
function funcKlar() {
    console.log("klar?");
}
function funcLogo() {
    console.log("Logo!");
}
//# sourceMappingURL=a1.js.map