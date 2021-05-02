"use strict";
// Aufgabe 3ff - Endlich was visuelles!
var Aufgabe_03ff;
(function (Aufgabe_03ff) {
    let canvas = document.getElementById("draw");
    let context = canvas.getContext("2d");
    // b)
    class RandomRectangle {
        // c)
        constructor() {
            this.xPosition = Math.round(Math.random() * 100);
            this.yPosition = Math.round(Math.random() * 100);
            this.width = Math.round(Math.random() * 1000);
            this.height = Math.round(Math.random() * 1000);
        }
    }
    // d)
    function drawRect(_ranRect) {
        context.beginPath();
        context.fillStyle = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
        context.fillRect(_ranRect.xPosition, _ranRect.yPosition, _ranRect.width, _ranRect.height);
    }
    let ranRect1 = new RandomRectangle();
    let ranRect2 = new RandomRectangle();
    let ranRect3 = new RandomRectangle();
    // e)
    let ranRectArray = [ranRect1, ranRect2, ranRect3];
    for (let i = 0; i < ranRectArray.length; i++) {
        drawRect(ranRectArray[i]);
    }
})(Aufgabe_03ff || (Aufgabe_03ff = {}));
//# sourceMappingURL=p2.2_a3ff.js.map