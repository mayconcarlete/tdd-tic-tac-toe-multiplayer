import { DrawPlayer } from "../../src/interfaces/draw-player";

export class DrawPlayerStub implements DrawPlayer{
    ids:string[] = []
    position:number = 0
    makeDraw(ids: string[]): string {
        this.ids = ids
        return ids[this.position]
    }
} 