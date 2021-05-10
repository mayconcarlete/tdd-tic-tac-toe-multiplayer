import { Game } from "../../src/game/game"

describe('Game Class', () => {
    test('Should crete an instance of Game', () => {
        const sut = new Game()
        expect(sut).toBeInstanceOf(Game)
    })
})