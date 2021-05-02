"use strict";
// Aufgabe 1 - Mehr “langweilige” Konsolenausgaben
var Aufgabe_01;
(function (Aufgabe_01) {
    // a)
    console.log("a)");
    function min(...numbers) {
        let min = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        return min;
    }
    console.log("Minimum: " + min(13, 89, 55, 8, 144));
    // b)
    console.log("\nb)");
    function isEven(num) {
        if (num == 0) {
            return true;
        }
        if (num == 1) {
            return false;
        }
        if (num < 0) {
            return isEven(num + 2);
        }
        return isEven(num - 2);
    }
    console.log("Is 50 Even?: " + isEven(50) + " :)");
    console.log("Is 75 Even?: " + isEven(75) + " :/");
    console.log("Is -1 Even?: " + isEven(-1) + " :/");
    /*
    Was passiert bei -1?:
    
        Die Funktion gibt erst ein boolean-Wert zurück, wenn num = 0 oder num = 1,
        und wird erst daraufhin beendet.
        Andernfalls ruft Sie sich selbst über direkte Rekursion auf
        und zieht von der ihr übergebenen Variable vom Typ number die Zahl zwei ab,
        bis num = 0 oder num = 1.
    
        Wird der Funktion von Beginn an eine Zahl übergeben, welche kleiner als O ist,
        so wird die Funktion theoretisch bis ins unendliche sich weiter aufrufen.
        Da der physikalische Speicherplatz im Stack bedingt ist,
        wird das rekursive Aufrufen der Funktion einfach abgebrochen.
    
        Die Funktion würde niemals den Wert 0 oder 1 für num erreichen wird.
    
        Grund: wenn von einer Zahl kleiner 0 immer zwei abgezogen werden, so bewegt sie sich
        immer weiter nach links auf dem Zahlenstrahl und immer weiter weg von 0 oder 1.
    
    
    
    Lösung:
    
        Wenn die Zahl kleiner 0 ist, soll die Funktion sich selbst aufrufen.
        Mit der Bedingung, dass für jede andere Zahl N gilt,
        dass das Ergebnis gleich ist wie N + 2.
    
        if (num < 0) {
            return isEven(num + 2);
        }
    
    */
    // c)
    console.log("\nc)");
    // 2
    let student1 = { vorname: "Albert", nachname: "Einstein", alter: 142, studiengang: "Physik", semester: 1.618, matrikelnummer: 1431879 };
    let student2 = { vorname: "Gregor", nachname: "Mendel", alter: 198, studiengang: "Biologie", semester: 1.618, matrikelnummer: 2071822 };
    let student3 = { vorname: "Nikola", nachname: "Tesla", alter: 164, studiengang: "Elektrotechnik", semester: 1.618, matrikelnummer: 1071856 };
    // 3
    console.log("\nc3)");
    let studentenArray = [student1, student2, student3];
    studentenArray.push({ vorname: "Stephen", nachname: "Hawking", alter: 79, studiengang: "Astrophysik", semester: 1.618, matrikelnummer: 8011942 });
    for (let i = 0; i < studentenArray.length; i++) {
        console.log(studentenArray[i].vorname + " " +
            studentenArray[i].nachname + ": " +
            studentenArray[i].alter + "; " +
            studentenArray[i].studiengang + " :)");
    }
    // 4
    console.log("\nc4)");
    function showInfo(_studentVorname, _studentNachname) {
        let j;
        for (let i = 0; i < studentenArray.length; i++) {
            if (studentenArray[i].vorname.localeCompare(_studentVorname) == 0 && studentenArray[i].nachname.localeCompare(_studentNachname) == 0) {
                j = i;
            }
        }
        if (j != undefined) {
            console.log(_studentVorname + " " +
                _studentNachname + ": " +
                studentenArray[j].matrikelnummer + "; " +
                studentenArray[j].studiengang);
        }
        else {
            console.log(_studentVorname + " " + _studentNachname + " " + "ist nicht an der Uni :)");
        }
    }
    showInfo("Albert", "Einstein");
    showInfo("Gregor", "Mendel");
    showInfo("Nikola", "Tesla");
    showInfo("Stephen", "Hawking");
    showInfo("Herr", "Hercules");
    // 5
    console.log("\nc5");
    class Student {
        constructor(_vorname, _nachname, _alter, _studiengang, _semester, _matrikelnummer) {
            this.vorname = _vorname;
            this.nachname = _nachname;
            this.alter = _alter;
            this.studiengang = _studiengang;
            this.semester = _semester;
            this.matrikelnummer = _matrikelnummer;
        }
        showInfo() {
            console.log(this.vorname + " " +
                this.nachname + ": " +
                this.studiengang + " " +
                this.matrikelnummer);
        }
    }
    let studentAusKlasse1 = new Student("Albert", "Einstein", 142, "Physik", 1.618, 1431879);
    let studentAusKlasse2 = new Student("Gregor", "Mendel", 198, "Biologie", 1.618, 2071822);
    let studentAusKlasse3 = new Student("Nikola", "Tesla", 164, "Elektrotechnik", 1.618, 1071856);
    studentAusKlasse1.showInfo();
    studentAusKlasse2.showInfo();
    studentAusKlasse3.showInfo();
})(Aufgabe_01 || (Aufgabe_01 = {}));
//# sourceMappingURL=p2.2_a1.js.map