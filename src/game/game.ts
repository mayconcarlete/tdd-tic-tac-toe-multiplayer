import { Play  } from "../types";

export class Game {
    constructor(
        private historyPlays: number[]
    ){}
    
    set_play(play:Play):string {
        if(this.allowMadePlay(play)){
            this.historyPlays[play.movement] = play.player
            if(this.isHorizontalVictory()){
                return 'victory'
            }
            return 'ok'
        }
        return 'error'
    }

    get history(){
        return this.historyPlays
    }

    allowMadePlay(play: Play){
        return this.historyPlays[play.movement] === -1 ? true : false
    }

    isEmpty(position: number): boolean {
        return this.historyPlays[position] === undefined ? true : false
    }

    isHorizontalVictory(): boolean{
        if(this.historyPlays[0] !== -1 && this.historyPlays[0] === this.historyPlays[1] && this.historyPlays[0] === this.historyPlays[2]) return true
        if(this.historyPlays[3] !== -1 && this.historyPlays[3] === this.historyPlays[4] && this.historyPlays[3] === this.historyPlays[5]) return true
        if(this.historyPlays[6] !== -1 && this.historyPlays[6] === this.historyPlays[7] && this.historyPlays[6] === this.historyPlays[8]) return true
        if(this.historyPlays[0] !== -1 && this.historyPlays[0] === this.historyPlays[3] && this.historyPlays[0] === this.historyPlays[6]) return true
        
        return false
    }
}