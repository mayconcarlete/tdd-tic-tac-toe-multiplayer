import { Frame } from "../types/frame";
import { Player } from "../types/player";

export class Game {
    constructor(
        private readonly frame:Frame[],
        private readonly playerOne: Player
    ){}
    get getFrame(){
        return this.frame
    }
    get getPlayerOne(){
        return this.playerOne
    }
}