import { BRICK_SIZE } from "./constants";
import { GameBoard } from "./game-odjects/game-board";
import { patternSlot } from "./game-odjects/pattern -slot";
import { Point } from "./game-odjects/point";

export class GameManager{

    private board : GameBoard;
    private boardPadding = {
        top: 100,
        bottom: 50
    };

    private slotAlpha!: patternSlot;
    private slotBeta!: patternSlot;
    private slotCharlie!: patternSlot;

    private mousePosition : Point  = new Point(0, 0);

constructor(private readonly ctx: CanvasRenderingContext2D, private readonly canvas : HTMLCanvasElement){
    
    this.wireUpEvents();

    this.board = new GameBoard(ctx, canvas.width/2, this.boardPadding.top);
    
    this.initSlots();

}

public draw(): void {
const{ board, slotBeta, slotAlpha, slotCharlie } = this;

 board.draw();
slotBeta.brickSet.draw();
slotAlpha.brickSet.draw();
slotCharlie.brickSet.draw();

}


public update(timestamp: number): void{}

private initSlots() {
let pointBeta = new Point(this.canvas.width/2 - BRICK_SIZE * 2, this.boardPadding.top + BRICK_SIZE * 8 + this.boardPadding.bottom);

    this.slotBeta = new patternSlot(this.ctx, pointBeta);
    pointBeta.x -= BRICK_SIZE * 5;

    this.slotAlpha = new patternSlot(this.ctx, pointBeta);
    pointBeta.x += BRICK_SIZE * 10;

    this.slotCharlie = new patternSlot(this.ctx, pointBeta);

}

private wireUpEvents() {
    this.onClick = this.onClick.bind(this);
    document.addEventListener("click", this.onClick);

    this.onMouseMove  = this.onMouseMove.bind(this);
    document.addEventListener("mousemove", this.onMouseMove);
}

private onMouseMove(event: MouseEvent){
this.mousePosition.x = event.clientX;
this.mousePosition.y = event.clientY;
//console.log("Mouse position", this.mousePosition);
}

private onClick(){
    console.log("yes");
}

}