import { Frame } from "../types/frame";

export class Game {
    constructor(
        private readonly frame:Frame[]
    ){}
    get getFrame(){
        return this.frame
    }
}