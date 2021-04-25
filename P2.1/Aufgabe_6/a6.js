"use strict";
// Aufgabe 6 - Mehr Schleifen und Funktionen
// a)
console.log("Teilaufgabe a): ");
let teil = "#";
for (let i = 0; i <= 7; i++) {
    let ende = "";
    for (let j = 0; j < i; j++) {
        ende += teil;
    }
    console.log(ende);
}
// b)
console.log("\nTeilaufgabe b): ");
function fizz_Buzz_b() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz" + " " + "(" + i + ")");
        }
        else if (i % 5 == 0) {
            console.log("Buzz" + " " + "(" + i + ")");
        }
        else {
            console.log(i);
        }
    }
}
fizz_Buzz_b();
// c)
console.log("\nTeilaufgabe c): ");
function fizzBuzz_c() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz" + " " + "(" + i + ")");
        }
        else if (i % 3 == 0) {
            console.log("Fizz" + " " + "(" + i + ")");
        }
        else if (i % 5 == 0) {
            console.log("Buzz" + " " + "(" + i + ")");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz_c();
// c.2) 
console.log("\nTeilaufgabe c.2): ");
function fizzBuzz_c2() {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("FizzBuzz" + " " + "(" + i + ")");
        }
        else {
            console.log("Fizz" + " " + "(" + i + ")");
        }
    }
    else if (i % 5 == 0) {
        console.log("Buzz" + " " + "(" + i + ")");
    }
    else {
        console.log(i);
    }
}
// c.3)
console.log("\nTeilaufgabe c.3): ");
for (let i = 1; i <= 100; i++) {
    let x = (i % 3 == 0) ? (i % 5 == 0) ? "FizzBuzz" : "Fizz" : (i % 5 == 0) ? "Buzz" : i.toString();
    console.log(x);
}
// d)
console.log("\nTeilaufgabe d): ");
function schachbrett() {
    let black = "#";
    let white = " ";
    let brett = "";
    for (let i = 1; i <= 8; i++) {
        if (i % 2 == 0) {
            for (let j = 1; j <= 4; j++) {
                brett += black + white;
            }
        }
        else if (i % 2 == 1) {
            for (let k = 1; k <= 4; k++) {
                brett += white + black;
            }
        }
        brett += "\n";
    }
    return brett;
}
console.log(schachbrett());
// e)
console.log("\nTeilaufgabe e): ");
function schachMuster(dim) {
    let black = "#";
    let white = " ";
    let brett = "";
    for (let i = 1; i <= dim; i++) {
        if (i % 2 == 0) {
            for (let j = 1; j <= dim / 2; j++) {
                brett += black + white;
            }
        }
        else if (i % 2 == 1) {
            for (let k = 1; k <= dim / 2; k++) {
                brett += white + black;
            }
        }
        brett += "\n";
    }
    return brett;
}
console.log(schachMuster(21));
//# sourceMappingURL=a6.js.map