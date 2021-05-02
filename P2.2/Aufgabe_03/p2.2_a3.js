"use strict";
// Aufgabe 3 - Endlich was visuelles!
var Aufgabe_03;
(function (Aufgabe_03) {
    // a)
    let canvas = document.getElementById("draw");
    let context = canvas.getContext("2d");
    // Blauer Himmel
    context.beginPath();
    context.rect(0, 0, 1080, 720);
    context.fillStyle = "lightblue";
    context.fill();
    // Grüner Boden
    context.beginPath();
    context.rect(0, 200, 1080, 100);
    context.fillStyle = "green";
    context.fill();
    // Wolke 1
    context.beginPath();
    context.moveTo(170, 80);
    context.bezierCurveTo(130, 100, 210, 190, 230, 140);
    context.bezierCurveTo(250, 180, 320, 180, 340, 140);
    context.bezierCurveTo(420, 150, 420, 120, 400, 80);
    context.bezierCurveTo(430, 40, 370, 30, 340, 30);
    context.bezierCurveTo(320, 5, 250, 20, 250, 30);
    context.bezierCurveTo(200, 5, 150, 20, 170, 80);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    // Wolke 2
    context.beginPath();
    context.moveTo(21, 13);
    context.bezierCurveTo(0, 21, 21, 34, 25, 34);
    context.bezierCurveTo(23, 55, 40, 45, 40, 45);
    context.bezierCurveTo(55, 60, 70, 60, 80, 45);
    context.bezierCurveTo(110, 50, 90, 5, 60, 12);
    context.bezierCurveTo(70, 10, 35, 0, 21, 13);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
    // Haus
    context.beginPath();
    context.rect(34, 175, 100, 80);
    context.fillStyle = "blue";
    context.fill();
    // Dach
    context.beginPath();
    context.moveTo(10, 180);
    context.lineTo(85, 120);
    context.lineTo(160, 180);
    context.fillStyle = "blue";
    context.fill();
    // Tür
    context.beginPath();
    context.rect(55, 225, 21, 30);
    context.fillStyle = "black";
    context.fill();
    // Fenster
    context.beginPath();
    context.rect(89, 200, 15, 15);
    context.fillStyle = "black";
    context.fill();
    context.beginPath();
    context.rect(40, 200, 15, 15);
    context.fillStyle = "black";
    context.fill();
    // Baum
    // Stamm
    context.beginPath();
    context.rect(340, 175, 20, 100);
    context.fillStyle = "brown";
    context.fill();
    // Krone
    context.beginPath();
    context.arc(350, 160, 50, 0, 2 * Math.PI, false);
    context.fillStyle = "darkgreen";
    context.fill();
    // Sonne
    context.beginPath();
    context.arc(490, 10, 50, 0, 2 * Math.PI, false);
    context.fillStyle = "yellow";
    context.fill();
    context.beginPath();
    context.moveTo(500, 10);
    context.lineTo(410, 14);
    context.moveTo(500, 9);
    context.lineTo(410, 44);
    context.moveTo(500, 8);
    context.lineTo(430, 74);
    context.moveTo(500, 18);
    context.lineTo(470, 89);
    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = "yellow";
    context.stroke();
})(Aufgabe_03 || (Aufgabe_03 = {}));
//# sourceMappingURL=p2.2_a3.js.map