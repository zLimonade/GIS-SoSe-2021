"use strict";
// Aufgabe 2 - Kontinuierliche Variablenmanipulation
function a2() {
    let i = 9; // Variablen-Initialisierung. Name i, Typ number, Wert 9.
    do { /* do-while-Schleife --> Wird auf jeden Fall einmal die Anweisungen im Rumpf ausführen,
                               bevor die Bediengung auf true überprüft wird und den Rumpf weiter ausführt und dies dann genau so lange, bis die Bediengung false wird. */
        console.log(i); // Konsolenausgabe der lokalen Variable i.
        i = i - 1; // Der Variablen i wird ein neuer Wert zugewiesen: Und zwar ihr eigener minus Eins.
    } while (i > 0); // Schleifenbedingung: "Solange die Variable i größer als 0 ist, dann führe die Anweisungen im Rumpf aus."
}
a2(); // Aufruf der Methode/Funktion a2.
/*
Programmablauf (nach Aufruf der Methode a2)

    Ausgabe der Konsole (nur die Zahlen):

    9                   // i wird um Eins verringert. Anschließend die Bedingung überprüft. 8 > 0 --> true.
    8                   // i wird um Eins verringert. Anschließend die Bedingung überprüft. 7 > 0 --> true.
    7                   // i wird um Eins verringert. Anschließend die Bedingung überprüft. 6 > 0 --> true.
    6                   // i wird um Eins verringert. Anschließend die Bedingung überprüft. 5 > 0 --> true.
    5                   ...
    4                   ...
    3                   ...
    2                   ...
    1                   // i wird um Eins verringert. Anschließend die Bedingung überprüft. 0 > 0 --> false.
                           Da die Bediengung false ist, wird der Rumpf der Funktion a2 nicht weiter ausgeführt und das Programm wird beendet.
*/
/*

*/ 
//# sourceMappingURL=a2.js.map