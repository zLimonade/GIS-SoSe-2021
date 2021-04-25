// Aufgabe 6 - Mehr Schleifen und Funktionen

// a)

console.log("Teilaufgabe a): ");

let teil: string = "#";

for (let i: number = 0; i <= 7; i++) {
    let ende: string = "";
    for (let j: number = 0; j < i; j++) {
        ende += teil;
    }
    console.log(ende);
}






// b)

console.log("\nTeilaufgabe b): ");

function fizz_Buzz_b(): void {
    for (let i: number = 1; i <= 100; i++) {
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

function fizzBuzz_c(): void {
    for (let i: number = 1; i <= 100; i++) {
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

function fizzBuzz_c2(): void {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("FizzBuzz" + " " + "(" + i + ")");
        } else {
            console.log("Fizz" + " " + "(" + i + ")");
        }
    } else if (i % 5 == 0) {
        console.log("Buzz" + " " + "(" + i + ")");
    } else {
        console.log(i);
    }
}

// c.3)

console.log("\nTeilaufgabe c.3): ");

for (let i: number = 1; i <= 100; i++) {
    let x: string = (i % 3 == 0) ? (i % 5 == 0) ? "FizzBuzz" : "Fizz" : (i % 5 == 0) ? "Buzz" : i.toString();
    console.log(x);
}







// d)

console.log("\nTeilaufgabe d): ");

function schachbrett(): string {
    let black: string = "#";
    let white: string = " ";
    let brett: string = "";

    for (let i: number = 1; i <= 8; i++) {

        if (i % 2 == 0) {
            for (let j: number = 1; j <= 4; j++) {
                brett += black + white;
            }
        }

        else if (i % 2 == 1) {
            for (let k: number = 1; k <= 4; k++) {
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

function schachMuster(dim: number): string {
    let black: string = "#";
    let white: string = " ";
    let brett: string = "";

    for (let i: number = 1; i <= dim; i++) {

        if (i % 2 == 0) {
            for (let j: number = 1; j <= dim / 2; j++) {
                brett += black + white;
            }
        }

        else if (i % 2 == 1) {
            for (let k: number = 1; k <= dim / 2; k++) {
                brett += white + black;
            }
        }
        brett += "\n";
    }
    return brett;

}

console.log(schachMuster(21));
