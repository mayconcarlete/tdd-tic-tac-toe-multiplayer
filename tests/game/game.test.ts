import { Game } from "../../src/game/game"

describe('Test Game class', () => {
    test('Should set play in history when play is called', () => {
        const sut = new Game()
        const play = {player:0, movement:0}
        const newPlay = sut.set_play(play)
        expect(sut.history[0]).toEqual(play)
    })

})
