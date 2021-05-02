// Aufgabe 3ff - Endlich was visuelles!

namespace Aufgabe_03ff {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("draw");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    // b)
    class RandomRectangle {
        xPosition: number;
        yPosition: number;
        width: number;
        height: number;

        // c)
        constructor() {
            this.xPosition = Math.round(Math.random() * 100);
            this.yPosition = Math.round(Math.random() * 100);
            this.width = Math.round(Math.random() * 1000);
            this.height = Math.round(Math.random() * 1000);
        }
    }

    // d)
    function drawRect(_ranRect: RandomRectangle): void {
        context.beginPath();
        context.fillStyle = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
        context.fillRect(_ranRect.xPosition, _ranRect.yPosition, _ranRect.width, _ranRect.height);
    }

    let ranRect1: RandomRectangle = new RandomRectangle();
    let ranRect2: RandomRectangle = new RandomRectangle();
    let ranRect3: RandomRectangle = new RandomRectangle();

    // e)
    let ranRectArray: RandomRectangle[] = [ranRect1, ranRect2, ranRect3];
    for (let i: number = 0; i < ranRectArray.length; i++) {
        drawRect(ranRectArray[i]);
    }
}
