import { Game } from "../../src/game/game"
import { Play } from "../../src/types"

describe('Test Game class', () => {
    test('Should set play in history when play is called', () => {
        const sut = new Game()
        const play = {player:0, movement:0}
        sut.set_play(play)
        expect(sut.history[0]).toEqual(play)
    })
    test('Should return true if set play is seted with success', () => {
        const sut = new Game()
        const play = {player:0, movement:0}
        const newPlay = sut.set_play(play)
        expect(newPlay).toBeTruthy()
    })
    test('Should stop when array of play is full', () => {
        const sut = new Game()
        const numberOfPlays = 10
        for(let i = 0; i < numberOfPlays; i++){
            const player = i%0 == 0 ? 0: 1 
            sut.set_play({player, movement:1})
        }
        expect(sut.history.length).toBe(9)
    })
    test('Should not allow do twice plays in same position', () => {
        const sut = new Game()
        const play1:Play = {
            player:0,
            movement:0
        } 
        
    })
})
