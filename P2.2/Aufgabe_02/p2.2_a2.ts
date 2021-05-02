// Aufgabe 2 - Arrays

// Testcode
let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];

// a)
console.log("a)");

let arrForward: number[] = [0, 1, 1, 2, 3, 55, 8, 13, 21];

function backwards(_arr: number[]): number[] {
    let arrBackwards: number[] = [];
    for (let i: number = 0; i < _arr.length; i++) {
        arrBackwards[_arr.length - 1 - i] = _arr[i];
    }
    return arrBackwards;
}

console.log(arrForward);
console.log(backwards(arrForward));

// aTest)
console.log("\na Testcode)");
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);

// b)

namespace Aufgabe_1b {
    console.log("\nb)");

    let arrPart1: number[] = [1, 2, 3, 4, 5];
    let arrPart2: number[] = [6, 7, 8];

    function join(_arr1: number[], _arr2: number[]): number[] {
        return [..._arr1, ..._arr2];
    }

    console.log(arrPart1);
    console.log(arrPart2);
    console.log(join(arrPart1, arrPart2));

    // bTest)
    console.log("\nb Testcode)");
    console.log(join(arr, [15, 9001, -440]));
}

namespace Aufgabe_02c {
    // c)
    console.log("\nc)");

    let arr1: number[] = [1, 2, 3, 4, 5];

    function split(_arr: number[], _index1: number, _index2: number): number[] {

        let arr1: number[] = [];

        // Test 1: ist ein Index kleiner 0?
        if ((_index1 || _index2) >= 0) {
            // Test 2: Welcher Index ist kleiner?
            if (_index2 < _index1) {
                let index1Copy: number = _index1;
                _index1 = _index2;
                _index2 = index1Copy;
            }
            // Test 3: Ob einer der Indizes größer als die Länge-1 des Übergebenen Arrays ist.
            if ((_index2 || _index1) <= _arr.length - 1) {
                for (let i: number = _index1; i <= _index2; i++) {
                    arr1.push(_arr[i]);
                }
            } else {
                console.log("Index nicht im Array vorhanden!");
            }
        } else {
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
    console.log(split(arr, 2, 0));     // Bonus c)
    console.log(split(arr, -1, 2));    // Bonus c)
    console.log(split(arr, 0, 7));     // Bonus c)
}
