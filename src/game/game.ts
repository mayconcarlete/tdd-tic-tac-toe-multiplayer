import { Play  } from "../types";

export class Game {
    constructor(
        private historyPlays: number[]
    ){}
    
    set_play(play:Play):string {
        if(this.allowMadePlay(play)){
            this.historyPlays[play.movement] = play.player
            if(this.isHorizontalVictory(play)){
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

    isHorizontalVictory(play: Play):boolean{
        for(let i = 0; i < 3; i++){
            if(this.historyPlays[i] !== play.player) return false
        }
        return true
    }
}