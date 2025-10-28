import { canvas, ctx, initCanvas } from './canvas-ctx';
import { Brick } from './game-odjects/brick';
import './style.css'

initCanvas();
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let brick = new Brick(ctx, canvas.width/2, canvas.height/2);
  brick.draw();