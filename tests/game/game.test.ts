import { Game } from "../../src/game/game"


const makeSut = ():Game => {
    const frame = [1,2,3,4,5,6,7,8,9]
    const game = new Game(frame)
    return game
}

describe('Game Class', () => {
    test('Should create an instance of Game', () => {
        const sut = makeSut()
        expect(sut).toBeInstanceOf(Game)
    })
    test('Should create an array of position to tic tac toe', () => {
        const sut = makeSut()
        expect(sut.getFrame.length).toBe(9)
    })
})