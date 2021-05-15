import { DrawPlayer } from "../interfaces/draw-player";
import { Frame, Player,Movement  } from "../types";
import { MovementResponse } from "../types/movement-response";

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
    makeMovement(movement:Movement):MovementResponse{
        if(this.movementHistory.length === 0 && movement.id === this.startPlayer){
            this.movementHistory.push(movement)
            return {
                status:true,
                movement:movement.movement,
                history:this.movementHistory
            }        
        }
        return {
            status:false,
            movement:movement.movement,
            history:this.movementHistory
        }   
    }
}