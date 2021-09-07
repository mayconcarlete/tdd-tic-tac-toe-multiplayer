import { Game } from "../../src/game/game"
import { Play } from "../../src/types"
import {horizontalFirstLine} from './constants'

describe('Test Game class', () => {
    test('Should set play in history when play is called', () => {
        const sut = new Game()
        const play = {player:0, movement:0}
        sut.set_play(play)
        expect(sut.history[0]).toEqual(play)
    })
    test('Should return ok if set play is seted with success', () => {
        const sut = new Game()
        const play = {player:0, movement:0}
        const newPlay = sut.set_play(play)
        expect(newPlay).toEqual('ok')
    })
    test('Should stop when array of play is full', () => {
        const sut = new Game()
        const numberOfPlays = 10
        for(let i = 0; i < numberOfPlays; i++){
            const player = i%0 == 0 ? 0: 1 
            sut.set_play({player, movement:i})
        }
        expect(sut.history.length).toBe(9)
    })
    test('Should not allow do twice plays in same position', () => {
        const sut = new Game()
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
    test('Should return victory when player won in horizontal lanes', () => {
        const sut = new Game(horizontalFirstLine)
        const play: Play =    {
            player: 0,
            movement: 2
        }
        const result = sut.set_play(play)
        expect(result).toEqual('victory')
    })
})
