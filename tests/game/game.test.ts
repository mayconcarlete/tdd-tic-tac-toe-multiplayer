import { Game } from "../../src/game/game"
import { Frame } from "../../src/types/frame"
import { Player } from "../../src/types/player"


const makeSut = ():Game => { 
    const frame:Frame[] = []
    const playerOne = new Player('player-one-id','player-one')
    const playerTwo = new Player('player-two-id', 'player-two')
    const game = new Game([
    new Frame(0),
    new Frame(1),
    new Frame(2),
    new Frame(3),
    new Frame(4),
    new Frame(5),
    new Frame(6),
    new Frame(7),
    new Frame(8)
   ], playerOne, playerTwo)

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
    test('Should ensure that frame array is from type Frame', () => {
        const sut = makeSut()
        expect(sut.getFrame[0]).toBeInstanceOf(Frame)
    })
    test('Should ensure that playeOne exists when game started', () => {
        const sut = makeSut()
        expect(sut.getPlayerOne).toBeTruthy()
    })
    test('Should ensure that playerTwo exists when game started', () => {
        const sut = makeSut()
        expect(sut.getPlayerTwo).toBeTruthy()
    })
})