import { DrawPlayer } from "../interfaces/draw-player";
import { Player,Play  } from "../types";
import { MovementResponse } from "../types/movement-response";

export class Game {
    private historyPlays:Play[] = []
    constructor(){}
    
    set_play(play:Play):boolean{
        this.historyPlays.push(play)
        return true
    }

    get history(){
        return this.historyPlays
    }
}