
 export class Brick{
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    size: number = 100;
    
    color: string = "blue";

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number){
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    }

    draw(): void {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);

        let borderSize = this.size * .13; 

    this.ctx.strokeStyle = "white";

    //top
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.size, this.y);
    this.ctx.lineTo(this.x + this.size - borderSize, this.y + borderSize);
    this.ctx.lineTo(this.x + borderSize, this.y + borderSize);
    this.ctx.closePath();
    this.ctx.fill();
    //left
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.25)"
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x, this.y + this.size);
    this.ctx.lineTo(this.x + borderSize, this.y + this.size - borderSize);
    this.ctx.lineTo(this.x + borderSize, this.y + borderSize);
    this.ctx.closePath();
    this.ctx.fill();
    

    //bottom
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y + this.size);
    this.ctx.lineTo(this.x + this.size, this.y + this.size);
    this.ctx.lineTo(
        this.x + this.size - borderSize,
        this.y + this.size - borderSize
        );
    this.ctx.lineTo(this.x + borderSize, this.y + this.size - borderSize);
    this.ctx.closePath();
    this.ctx.fill();
    //this.ctx.stroke();

    //right
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.25)"
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + this.size, this.y);
    this.ctx.lineTo(this.x + this.size, this.y + this.size);//corner
    this.ctx.lineTo(this.x + this.size - borderSize, this.y - borderSize + this.size);
    this.ctx.lineTo(this.x - borderSize + this.size, this.y + borderSize);
    this.ctx.closePath();
    this.ctx.fill();
    //this.ctx.stroke();
    }

}