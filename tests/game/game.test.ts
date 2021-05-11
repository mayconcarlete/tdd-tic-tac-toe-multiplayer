import { Game } from "../../src/game/game"
import { Frame } from "../../src/types/frame"


const makeSut = ():Game => { 
    const frame:Frame[] = []
    // for(let i = 0; i<9;i++) frame.push(new Frame(i))
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
   ])

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
})