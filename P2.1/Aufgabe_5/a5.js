"use strict";
// Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen
// a)
console.log("Teilaufgabe a): ");
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(3, 4));
// b)
console.log("\nTeilaufgabe b): ");
function max(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
}
console.log(max(8, 13));
// c)
console.log("\nTeilaufgabe c): ");
let i = 1;
let a = 0;
while (i <= 100) {
    a += i;
    i++;
}
console.log(a);
// d)
console.log("\nTeilaufgabe d): ");
for (let i = 0; i < 10; i++) {
    console.log(Math.round(Math.random() * 100));
}
// e)
console.log("\nTeilaufgabe e): ");
function factorial(n) {
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac *= i;
    }
    return fac;
}
console.log(factorial(8));
// f)
console.log("\nTeilaufgabe f): ");
function leayears(yearStart, yearEnd) {
    console.log("Schaltjahre seit: " + yearStart);
    for (let i = yearStart; i <= yearEnd; i++) {
        if (Number.isInteger(i / 4) && !Number.isInteger((i / 100))) {
            console.log(i);
        }
        else if (Number.isInteger(i / 400)) {
            console.log(i);
        }
    }
}
leayears(1900, 2021);
//# sourceMappingURL=a5.js.map