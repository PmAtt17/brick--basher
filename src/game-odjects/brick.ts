import { BRICK_SIZE } from "../constants";
import type { Point } from "./point";

 export class Brick{

    size: number = BRICK_SIZE;
    
    

    constructor(private readonly ctx: CanvasRenderingContext2D,

        public x: number,
        public y: number,
        public readonly color: string = "blue"){
     this.x = x;
     this.y = y;
     this.ctx = ctx;
    
    }

    public draw(): void {
    const { ctx, x, y, size, color} = this;
    
    ctx.fillStyle =  color;
    
    ctx.fillRect(x, y, size, size);

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
    }

    public isPointOver(point: Point) : boolean {
        const { ctx, x, y, size} = this;

        const path = new Path2D();
        path.rect(x, y, size, size);

        const isInPath = ctx.isPointInPath(path, point.x, point.y);
        return isInPath;
    }

    

}