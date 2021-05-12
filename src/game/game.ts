import { DrawPlayer } from "../interfaces/draw-player";
import { Frame } from "../types/frame";
import { Player } from "../types/player";

export class Game {
    constructor(
        private readonly frame:Frame[],
        private readonly playerOne: Player,
        private readonly playerTwo: Player,
        private readonly drawPlayer: DrawPlayer 
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
    getTheFirstPlayer():string{
        return this
            .drawPlayer
            .makeDraw([this.getPlayerOne.getPlayerId, this.getPlayerTwo.getPlayerId])
    }
}