export class Player {
    constructor(
        private readonly id: string,
        private readonly name:string
    ){}
    get getPlayer(){
        return this
    }
    get getPlayerId(){
        return this.id
    }
}