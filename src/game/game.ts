import { Play  } from "../types";

export class Game {
    private historyPlays:Play[] = []
    constructor(){}
    
    set_play(play:Play):boolean{
        if(this.isHistoryPlaysNotFull()){
            this.historyPlays.push(play)
            return true
        }
        return false
    }

    get history(){
        return this.historyPlays
    }

    isHistoryPlaysNotFull(){
        return this.historyPlays.length < 9 ? true: false
    }
}