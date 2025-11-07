import { canvas, ctx, initCanvas } from './canvas-ctx';
import { GameManager } from './game-manager';
import './style.css'

initCanvas();
  //ctx.fillStyle = "red";
  //ctx.fillRect(0, 0, canvas.width, canvas.height);

  //let brick = new Brick(ctx, canvas.width/2, canvas.height/2);
  //brick.draw();

  let gm = new GameManager(ctx, canvas);

  
  function gameLoop(timestamp: number){
    gm.update(timestamp);
gm.draw();
    
    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);