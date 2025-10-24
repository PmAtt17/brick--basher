import { canvas, ctx, initCanvas } from './canvas-ctx';
import './style.css'

initCanvas();
  ctx.fillStyle = "red";
  ctx.fillRect(0,0, canvas.width, canvas.height);
