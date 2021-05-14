import { DrawPlayer } from "../interfaces/draw-player";
import { Frame, Player,Movement  } from "../types";

export class Game {
    private startPlayer: string | undefined = undefined
    private movementHistory: Movement[] = [] 
    constructor(
        private readonly frame:Frame[],
        private readonly playerOne: Player,
        private readonly playerTwo: Player,
        private readonly drawPlayer: DrawPlayer ,
    ){}
    get getFrame(){
        return this.frame
    }
    get getPlayerOne(){
        return this.playerOne
    }
    get getPlayerTwo(){
        return this.playerTwo
    }
    get getDrawnPlayer(){
        return this.startPlayer
    }
    get getMovimentHistory(){
        return this.movementHistory
    }
    setDrawTheFirstPlayer():void{
        if(this.startPlayer === undefined)
            this.startPlayer = this
                .drawPlayer
                .makeDraw([this.getPlayerOne.getPlayerId, this.getPlayerTwo.getPlayerId])
    }
    makeMovement(movement:Movement){
        this.movementHistory.push(movement)
    }
}