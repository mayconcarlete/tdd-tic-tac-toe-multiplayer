import { Play  } from "../types";

export class Game {
    constructor(
        private historyPlays:Play[] = []
    ){}
    
    set_play(play:Play):string {
        if(
            this.isHistoryPlaysNotFull() && 
            this.isEmpty(play.movement)){
                this.historyPlays.push(play)
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

    isHistoryPlaysNotFull(){
        return this.historyPlays.length < 9 ? true: false
    }
    isEmpty(position: number): boolean {
        return this.historyPlays[position] === undefined ? true : false
    }
    isHorizontalVictory(play: Play):boolean{
        for(let i = 0; i < 6; i+=3){
            for(let j = i; j < i+3; j++){
                if(this.historyPlays[j].player !== play.player){
                    return false
                }
            }
        }
        return true
    }
}