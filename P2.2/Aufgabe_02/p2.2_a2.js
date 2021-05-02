"use strict";
// Aufgabe 2 - Arrays
// Testcode
let arr = [5, 42, 17, 2018, -10, 60, -10010];
// a)
console.log("a)");
let arrForward = [0, 1, 1, 2, 3, 55, 8, 13, 21];
function backwards(_arr) {
    let arrBackwards = [];
    for (let i = 0; i < _arr.length; i++) {
        arrBackwards[_arr.length - 1 - i] = _arr[i];
    }
    return arrBackwards;
}
console.log(arrForward);
console.log(backwards(arrForward));
// aTest)
console.log("\na Testcode)");
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
// b)
var Aufgabe_1b;
(function (Aufgabe_1b) {
    console.log("\nb)");
    let arrPart1 = [1, 2, 3, 4, 5];
    let arrPart2 = [6, 7, 8];
    function join(_arr1, _arr2) {
        return [..._arr1, ..._arr2];
    }
    console.log(arrPart1);
    console.log(arrPart2);
    console.log(join(arrPart1, arrPart2));
    // bTest)
    console.log("\nb Testcode)");
    console.log(join(arr, [15, 9001, -440]));
})(Aufgabe_1b || (Aufgabe_1b = {}));
var Aufgabe_02c;
(function (Aufgabe_02c) {
    // c)
    console.log("\nc)");
    let arr1 = [1, 2, 3, 4, 5];
    function split(_arr, _index1, _index2) {
        let arr1 = [];
        // Test 1: ist ein Index kleiner 0?
        if ((_index1 || _index2) >= 0) {
            // Test 2: Welcher Index ist kleiner?
            if (_index2 < _index1) {
                let index1Copy = _index1;
                _index1 = _index2;
                _index2 = index1Copy;
            }
            // Test 3: Ob einer der Indizes größer als die Länge-1 des Übergebenen Arrays ist.
            if ((_index2 || _index1) <= _arr.length - 1) {
                for (let i = _index1; i <= _index2; i++) {
                    arr1.push(_arr[i]);
                }
            }
            else {
                console.log("Index nicht im Array vorhanden!");
            }
        }
        else {
            console.log("Index kleiner 0!");
        }
        return arr1;
    }
    console.log(split(arr1, 0, 2));
    // cTest)
    console.log("\nc Testcode)");
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));
    console.log(split(arr, 2, 0)); // Bonus c)
    console.log(split(arr, -1, 2)); // Bonus c)
    console.log(split(arr, 0, 7)); // Bonus c)
})(Aufgabe_02c || (Aufgabe_02c = {}));
//# sourceMappingURL=p2.2_a2.js.map