import { canvas, ctx, initCanvas } from './canvas-ctx';
import { GameBoard } from './game-odjects/game-board';
import './style.css'

initCanvas();
  //ctx.fillStyle = "red";
  //ctx.fillRect(0, 0, canvas.width, canvas.height);

  //let brick = new Brick(ctx, canvas.width/2, canvas.height/2);
  //brick.draw();

  let gb = new GameBoard(ctx, canvas.width / 2, 150);
  gb.draw();
  