import Player from './Player'

export default class Players {
    currentIndex: number = 0
    players: Player[]

    constructor (...players: Player[]) {
        this.players = players
    }

    private activatePlayer (player: Player): Player {
        // Deactivate all other players
        this.players.forEach((player, index) => {
            this.players[index].active = false
        })


        player.active = true

        return player
    }

    getNextPlayer (): Player {
        // Are any active yet?
        const currentPlayer = this.getCurrentPlayer()

        if (!currentPlayer || this.currentIndex >= (this.players.length - 1)) {
            this.currentIndex = 0
            this.activatePlayer(this.players[0])

            return this.players[this.currentIndex]
        }

        this.currentIndex += 1

        return this.activatePlayer(this.players[this.currentIndex])
    }

    getCurrentPlayer (): Player | null {
        const playerIndex = this.players.findIndex(player => player.active)

        if (playerIndex === -1) {
            return null
        }
        
        this.currentIndex = playerIndex

        return this.players[playerIndex]
    }
}