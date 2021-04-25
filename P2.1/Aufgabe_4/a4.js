"use strict";
// Audgabe 4 - Global vs Lokal
/*
Teilaufgabe a)

Annahmen der Konsolenausgabe:
    Hallo           // weil die globale Variable x vom Typ string mit dem Wert "Hallo" in Zeile 1 initialisiert wurde.
    Bla             // der Funktion func1 wird x als Parameter übergeben und in der Parametervariablen y (vom Typ string) gespeichert.
                        Im Rumpf von func1 wird y der Wert "Bla" zugewiesen.
                        Diese Variable y ist nur im Rumpf/Block der Methode func1 sichtbar.
                        Der Wert von x wurde nicht verändert, da ihr kein anderer zugewiesen wurde. Es wurde lediglich der Wert von x an func1 übergeben und y zugewiesen.
    Hallo           // Der Wert von der globalen Variable x wurde nicht verändert, da ihr kein anderer zugewiesen wurde. Es wurde lediglich der Wert von x an func1 übergeben und y zugewiesen.
    Blubb           // Eine lokale Variable x vom Typ string mit dem Wert "Blubb" wird im Block/Rumpf der Funktion func2 initialisiert und ausgegeben.
                        Die globale Variable x wurde zu Beginn deklariert und im Rumpf von func2 NICHT neu zugewiesen bzw. kein neuer Wert zugewiesen.
                        Einer globalen Variable kann ein neuer Wert zugewiesen werden, jedoch nicht neu deklariert werden, daher wird der Wert "Blubb" und nicht "Hallo" ausgegeben.
    Test            // Der globalen Variable x wird in func3 ein neuer Wert zugewiesen "Test"
                        Globale Variablen können überall neu zugewiesen werden.
*/
/*
Teilaufgabe b)

Globale Variablen:

    - sind Variablen, welche im ganzen Programmcode sichtbar sind.
    - können von überall im Code neu zugewiesen werden.
    - können überall, in jedem Block verwendet werden.

Lokale Variablen:

    - sind Variablen, welche nur im Block "{}" sichtbar sind, indem sie deklariert wurden.
    - können nur in ihrem Kontext/Block neu zugewiesen werden --> außerhalb ihres Blockes, indem sie deklariert wurden, sind sie nicht mehr sichtbar.
    - können nur in ihrem Block verwendet werden.
    - Variablen, die in einer Methode deklariert wurden.
    - Variablen, die einer Methode als Parameter übergeben werden.

Übergabeparameter:

    - Eine Methode kann Parameter besitzen, also eine Variable, dessen Wert erst zum Methodenaufruf bekannt wird.
    - Einem Parameter wird bei der Methodendeklaration kein Wert zugewiesen, lediglich Typ und Name.
        Wirkt also wie ein "Platzhalter". Was dort "reinkommt" (was der Anfangswert ist) wird erst beim Aufruf der Methode festgelegt.
    - Nur innerhalb der Methode sichtbar, verwendbar.
    - Deklariert in den runden Klammern "()" des Methoden-Kopfes/Funktion-Kopfes.

Unterschied von "normale" Variablen wie Zahlen und strings zu Funktionen:

    "normale" Variablen:
        - Haben: Name, Typ und Wert

    Funktionen:
        - Haben: Name, Rückgabetyp, Anweisungen und eventuell Parameter (Parameter haben Name und Typ)
    
    Unterschiede:
        - Funktion hat Anweisungen, eine normale Variable nicht, sondern einen Wert.
        - eine normale Variable kann ein Parameter sein, besitzt jedoch keine wie eine Funktion sie haben kann, aber nicht muss.
        - normale Variablen haben nach der Zuweisung einen Wert, Funktionen haben Anweisungen und eventuell Parameter. Den Parametern wird beim Funktionsaufruf ein Wert zugewiesen werden.
*/
//# sourceMappingURL=a4.js.map