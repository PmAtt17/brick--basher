import { BRICK_SIZE, HIGHLIGHTCOLOR } from "../constants";
import { Point } from "./point";

 export class Brick{

    size = BRICK_SIZE;
    highlightColor: string | null = null;
    

    constructor(
        private readonly ctx: CanvasRenderingContext2D,
        public x: number,
        public y: number,
        public readonly color: string = "blue",
    ){
     this.x = x;
     this.y = y;
     this.ctx = ctx;

    }

    public draw(): void {
    const { ctx, x, y, size, color} = this;
    
        ctx.save();

    ctx.fillStyle =  this.highlightColor ?? color;
    ctx.globalAlpha = this.highlightColor ? 0.5 : 1;

    ctx.fillRect(x, y, size, size);


        this.drawBevels();

        ctx.restore();

    }

    private drawBevels() : void {

        const { ctx, x, y, size} = this;

        let borderSize = size * .15; 

        ctx.strokeStyle = "white";

        //top
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size - borderSize,  y + borderSize);
    ctx.lineTo( x + borderSize,  y + borderSize);
     ctx.closePath();
     ctx.fill();
    //left
     ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
     ctx.beginPath();
     ctx.moveTo( x,  y);
     ctx.lineTo( x,  y +  size);
     ctx.lineTo( x + borderSize,  y +  size - borderSize);
     ctx.lineTo( x + borderSize,  y + borderSize);
     ctx.closePath();
     ctx.fill();
    

    //bottom
     ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
     ctx.beginPath();
     ctx.moveTo( x,  y +  size);
     ctx.lineTo( x +  size,  y +  size);
     ctx.lineTo(
         x +  size - borderSize,
         y +  size - borderSize
        );
     ctx.lineTo( x + borderSize,  y +  size - borderSize);
     ctx.closePath();
     ctx.fill();
    // ctx.stroke();

    //right
     ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
     ctx.beginPath();
     ctx.moveTo( x +  size,  y);
     ctx.lineTo( x +  size,  y +  size);//corner
     ctx.lineTo( x +  size - borderSize,  y - borderSize +  size);
     ctx.lineTo( x - borderSize +  size,  y + borderSize);
     ctx.closePath();
     ctx.fill();
    // ctx.stroke();
        ctx.fill();
    }

    public isPointOver(point: Point) : boolean {
        const { ctx, x, y, size} = this;

        const path = new Path2D();
        path.rect(x, y, size, size);

        const isInPath = ctx.isPointInPath(path, point.x, point.y);
        return isInPath;
    }

    public center(): Point {
    return new Point(this.x + this.size/2, this.y + this.size/2)
    }
    
    public isOtherOver(other: Brick) : boolean{
        // const path = new Path2D();
        // path.rect(this.x + this.size/2, this.y + this.size/2, 1, 1);

        // const isOnCenter = this.ctx.isPointInPath(path,point.x, point.y);
        // return isOnCenter;

        return this.isPointOver(other.center());
    }
}