
import { canvas, ctx } from "../canvas-ctx";
import { patternSets } from "../pattern-sets";
import { BRICK_SIZE, BOARD_COLOR } from "../constants";
import { Brick } from "../game-odjects/brick";

let width = window.innerWidth;
let patternWidth = BRICK_SIZE * 5;
let numberOfGrids = Math.floor(width / patternWidth);

let x = 0;
let y = 0;

for(let i = 0; i < patternSets.length; i ++){
    let gridX = x + (patternWidth * i);
    let gridY = y + (patternWidth * i);
    
    for(let j = 0; j < 5; j++){
        let brick = new Brick(ctx, gridX + (j * BRICK_SIZE), gridY + (j * BRICK_SIZE) , BOARD_COLOR)
        brick.draw();
    }
}