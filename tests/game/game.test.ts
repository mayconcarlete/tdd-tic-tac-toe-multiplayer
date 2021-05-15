import { Game } from "../../src/game/game"
import { DrawPlayer } from "../../src/interfaces/draw-player"
import { Movement } from "../../src/types"
import { Frame } from "../../src/types/frame"
import { Player } from "../../src/types/player"
import { DrawPlayerStub } from "../stubs/draw-player"

type SutTypes = {
    sut: Game
    drawPlayerStub: DrawPlayerStub
}

const makeSut = ():SutTypes => { 
    const drawPlayerStub = new DrawPlayerStub()    
    const playerOne = new Player('player-one-id','player-one')
    const playerTwo = new Player('player-two-id', 'player-two')
    const sut = new Game([
    new Frame(0),
    new Frame(1),
    new Frame(2),
    new Frame(3),
    new Frame(4),
    new Frame(5),
    new Frame(6),
    new Frame(7),
    new Frame(8)
   ], playerOne, playerTwo, drawPlayerStub)

    return {
        sut,
        drawPlayerStub
    }
}

describe('Game Class', () => {
    test('Should create an instance of Game', () => {
        const {sut} = makeSut()
        expect(sut).toBeInstanceOf(Game)
    })
    test('Should create an array of position to tic tac toe', () => {
        const {sut} = makeSut()
        expect(sut.getFrame.length).toBe(9)
    })
    test('Should ensure that frame array is from type Frame', () => {
        const {sut} = makeSut()
        expect(sut.getFrame[0]).toBeInstanceOf(Frame)
    })
    test('Should ensure that playeOne exists when game started', () => {
        const {sut} = makeSut()
        expect(sut.getPlayerOne).toBeTruthy()
    })
    test('Should ensure that playerTwo exists when game started', () => {
        const {sut} = makeSut()
        expect(sut.getPlayerTwo).toBeTruthy()
    })
    test('Should return player-one-id when draw return number 0', () => {
        const {sut, drawPlayerStub} = makeSut()
        drawPlayerStub.position = 0
        sut.setDrawTheFirstPlayer()
        expect(sut.getDrawnPlayer).toBe('player-one-id')
    })
    test('Should return player-two-id when draw return number 1', () => {
        const {sut, drawPlayerStub} = makeSut()
        drawPlayerStub.position = 1
        sut.setDrawTheFirstPlayer()
        expect(sut.getDrawnPlayer).toBe('player-two-id')
    })
    test('Should draw only once the player who gonna start', () => {
        const {sut, drawPlayerStub} = makeSut()
        drawPlayerStub.position = 1
        sut.setDrawTheFirstPlayer()
        drawPlayerStub.position = 0
        sut.setDrawTheFirstPlayer()
        expect(sut.getDrawnPlayer).toBe('player-two-id')
    })
    test('Should add movement on history', () => {
        const {sut} = makeSut()
        const movement:Movement = {
            id: 'player-two-id',
            movement: 1
        }
        sut.makeMovement(movement)
        const movementHistory = sut.getMovimentHistory
        expect(movementHistory).toHaveLength(1)
    })
    test('Should take movement from startPlayer when movementHistory is empty', () => {
        const {sut, drawPlayerStub} = makeSut()
        drawPlayerStub.position = 1
        sut.setDrawTheFirstPlayer()
        const movement:Movement = { 
            id: 'player-two-id',
            movement:1
        } 
        const movementResult = sut.makeMovement(movement)
        console.log(sut.getDrawnPlayer)
        expect(movementResult.status).toBeTruthy()
    })
    test('Should makeMovement add movement only when correct player call', () => {
        const {sut, drawPlayerStub} = makeSut()
        drawPlayerStub.position = 1
        sut.setDrawTheFirstPlayer()
        const movement:Movement = { 
            id: 'player-two-id',
            movement:1
        }
        sut.makeMovement(movement)
        const secondMovement:Movement = { 
            id: 'player-one-id',
            movement:1
        }
        const secondMovementResult = sut.makeMovement(secondMovement)
        expect(secondMovementResult.status).toBeTruthy()
    })
})