import { DrawPlayer } from "../interfaces/draw-player";
import { Player,Play  } from "../types";
import { MovementResponse } from "../types/movement-response";

export class Game {
    private historyPlays:Play[] = []
    constructor(){}
    
    set_play(play:Play):void{
        this.historyPlays.push(play)
    }

    get history(){
        return this.historyPlays
    }
}