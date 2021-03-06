import { Game } from "../../src/game/game"
import { Play } from "../../src/types"
import {diagonalOneLane, diagonalSecondLane, horizontalFirstLine, horizontalSecondLine, horizontalThirdLine, verticalFirstLane, verticalSecondLane, verticalThirdLane} from './constants'

type SutTypes = {
    sut: Game
}

const historyPlays = () => {
    let history: number[] = []
    for(let i = 0; i < 9; i++ ){
        history.push(-1)
    }
    return history
}

const makeSut = (): SutTypes => {
    const initialPlays = historyPlays()
    const sut = new Game(initialPlays)
    return { sut }
}

describe('Test Game class', () => {
    test('Should set play in history when play is called', () => {
        const { sut } = makeSut()
        const play = { player: 0, movement: 0 }
        sut.set_play(play)
        expect(sut.history[0]).toBe(0)
    })
    test('Should return ok if set play is seted with success', () => {
        const { sut } = makeSut()
        const play = {player:0, movement:0}
        const newPlay = sut.set_play(play)
        expect(newPlay).toEqual('ok')
    })
    test('Should not allow do twice plays in same position', () => {
        const { sut } = makeSut()
        const play1:Play = {
            player: 0,
            movement: 0
        } 
        const play2: Play = {
            player: 1,
            movement: 0
        }
        sut.set_play(play1)
        const secondMovement = sut.set_play(play2)
        expect(secondMovement).toEqual('error')
    })
    describe('Victory tests in horizontal lanes', () => {
        test('Should return victory when player won in horizontal lanes', () => {
            const sut = new Game(horizontalFirstLine)
            const play: Play =    {
                player: 0,
                movement: 2
            }
            const result = sut.set_play(play)
            expect(result).toEqual('victory')
        })
        test('Should return victory when player won in second horizontal lanes', () => {
            const sut = new Game(horizontalSecondLine)
            const play:Play = {
                player: 0,
                movement: 5
            }
            const result = sut.set_play(play)
            expect(result).toEqual('victory')
        })
        test('Should return victory when player won in third horizontal lane', () => {
            const sut = new Game(horizontalThirdLine)
            const play:Play = {
                player: 0,
                movement: 8
            }
            const result = sut.set_play(play)
            expect(result).toEqual('victory')
        })
    })
    describe('Victory tests in vertical lanes', () => {
        test('Should return victory when player won in first vertical lane', () => {
            const sut = new Game(verticalFirstLane)
            const play:Play = {
                player: 1,
                movement: 6
            }
            const result = sut.set_play(play)
            expect(result).toEqual('victory')
        })
        test('Should return victory when player won in second vertical lane', () => {
            const sut = new Game(verticalSecondLane)
            const play:Play = {
                player: 1,
                movement: 7
            } 
            const result = sut.set_play(play)
            expect(result).toEqual('victory')
        })
        test('Should return victory when player won in third vertical lane', () => {
            const sut = new Game(verticalThirdLane)
            const play:Play = {
                player: 1,
                movement: 8
            }
            const result = sut.set_play(play)
            expect(result).toEqual('victory')
        })
    })
    describe('Victory test in diagonal lanes', () => {
        test('Should return victory in diagonal one', () => {
            const sut = new Game(diagonalOneLane)
            const play:Play = {
                player: 1,
                movement: 8
            }
            const result = sut.set_play(play)
            expect(result).toEqual('victory')
        })
        test('Should return victory in diagonal two', () => {
            const sut = new Game(diagonalSecondLane)
            const play:Play = {
                player: 0,
                movement: 6
            }
            const result = sut.set_play(play)
            expect(result).toEqual('victory')
        })
    })
})
