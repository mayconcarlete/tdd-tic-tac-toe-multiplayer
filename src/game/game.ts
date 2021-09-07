import { Play  } from "../types";

export class Game {
    private historyPlays:Play[] = []
    constructor(){}
    
    set_play(play:Play):boolean{
        if(this.isHistoryPlaysNotFull() && this.isEmpty(play.movement)){
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
    isEmpty(position: number): boolean {
        return this.historyPlays[position] === undefined ? true : false
    }
}