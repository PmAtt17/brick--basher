import { BRICK_SIZE } from "./constants";
import { GameBoard } from "./game-odjects/game-board";
import { patternSlot } from "./game-odjects/pattern-slot";
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

    private selectedSlot: patternSlot | null = null;

constructor(private readonly ctx: CanvasRenderingContext2D, private readonly canvas : HTMLCanvasElement){
    
    this.wireUpEvents();

    this.board = new GameBoard(ctx, canvas.width/2, this.boardPadding.top);
    
    this.initSlots();

}

public draw(): void {
const{ board, slotBeta, slotAlpha, slotCharlie, ctx, canvas } = this;

//clears canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

 board.draw();
slotBeta.brickSet.draw();
slotAlpha.brickSet.draw();
slotCharlie.brickSet.draw();

this.selectedSlot?.brickSet.draw();

}


public update(timestamp: number): void{
    
    const slots = [this.slotAlpha, this.slotBeta, this.slotCharlie];

    document.body.style.cursor = "default";

    if(this.selectedSlot){
        document.body.style.cursor = "none";
        this.selectedSlot.move(this.mousePosition);
    }
    
    if(!this.selectedSlot){
        document.body.style.cursor = "default";
    }

    if(!this.selectedSlot && 
        slots.some((s) => s.isPointOver(this.mousePosition))
    ){
    document.body.style.cursor = "grab";
    }
    

}

private initSlots() {

const y = this.boardPadding.top + BRICK_SIZE * 8 + this.boardPadding.bottom;

let pointBeta = new Point(this.canvas.width/2 - BRICK_SIZE * 2, y);
let pointAlpha = new Point(pointBeta.x  - BRICK_SIZE * 5, y);
let pointCharlie = new Point(pointBeta.x + BRICK_SIZE * 5, y);

    this.slotBeta = new patternSlot(this.ctx, pointBeta);
    this.slotAlpha = new patternSlot(this.ctx, pointAlpha);
    this.slotCharlie = new patternSlot(this.ctx, pointCharlie);

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


    if(this.selectedSlot){
        this.selectedSlot.resetPos();
        this.selectedSlot = null
    }

    const slots = [this.slotAlpha, this.slotBeta, this.slotCharlie];

    slots.forEach(s => {
        if(s.isPointOver(this.mousePosition))
    this.selectedSlot = s;
    })

};

}
