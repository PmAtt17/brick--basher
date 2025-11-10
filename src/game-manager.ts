import { BRICK_SIZE } from "./constants";
import { Brick } from "./game-odjects/brick";
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

constructor(private readonly ctx: CanvasRenderingContext2D, private readonly canvas : HTMLCanvasElement){
    let pointBeta = new Point(canvas.width/2 - BRICK_SIZE * 2, this.boardPadding.top + BRICK_SIZE * 8 + this.boardPadding.bottom);

    this.slotBeta = new patternSlot(this.ctx, pointBeta)

    this.board = new GameBoard(ctx, canvas.width/2, this.boardPadding.top);
}

public draw(): void {
const{ board, slotBeta, slotAlpha, slotCharlie } = this;

 board.draw();
slotBeta.brickSet.draw();

}


public update(timestamp: number): void{}


}