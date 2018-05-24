import 'mocha'
import { expect } from 'chai'
import Players from '../models/Players'
import Player from '../models/Player';

describe('Getting next player', () => {

    this.makeThreePlayers = () => {
        return new Players(
            new Player({name: 'Dan', playerNumber: 1}),
            new Player({name: 'Jaspar', playerNumber: 2}),
            new Player({name: 'Charlie', playerNumber: 3})
        )
    }

    it('should set the first player if none are active yet', () => {
        const playerStash = this.makeThreePlayers()
        const nextPlayer = playerStash.getNextPlayer()

        expect(nextPlayer.name).to.equal('Dan')
    })

    it('should get the second player if the first one is active', () => {
        const playerStash = this.makeThreePlayers()

        playerStash.players[0].active = true

        const nextPlayer = playerStash.getNextPlayer()

        expect(nextPlayer.name).to.equal('Jaspar')
    })

    it('should get the third player if the second one is active', () => {
        const playerStash = this.makeThreePlayers()

        playerStash.players[1].active = true

        const nextPlayer = playerStash.getNextPlayer()

        expect(nextPlayer.name).to.equal('Charlie')
    })

    it('should get the first player if the last one is active', () => {
        const playerStash = this.makeThreePlayers()

        playerStash.players[2].active = true

        const nextPlayer = playerStash.getNextPlayer()

        expect(nextPlayer.name).to.equal('Dan')
    })
})