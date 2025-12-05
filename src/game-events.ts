// in type script we need to register our events with a glodal event handeler map
declare global {
    interface GlobalEventHandlersEventMap{
        "bb-score": ScoreEvent;
        "bb-game-over": GameOverEvnet;
    }
}

export class ScoreEvent extends Event{
constructor(public readonly score: BrickScore){
    super("bb-score");
}
}
 
export class BrickScore {
	constructor(
		public bricks: number = 0,
		public rows: number = 0,
		public cols: number = 0
	) {}

    public total() : number{
        return this.bricks * 10 + (this.rows + this.cols) * 10;
    }

}

export class GameOverEvnet extends Event{
constructor () {
    super("bb-game-over");
}
}