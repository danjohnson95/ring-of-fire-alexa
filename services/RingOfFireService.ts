import GameNotStartedException from '../exceptions/GameNotStartedException'
import NumberOfPlayersAlreadyDefinedException from '../exceptions/NumberOfPlayersAlreadyDefinedException'
import NumberOfPlayersInvalidException from '../exceptions/NumberOfPlayersInvalidException'
import PlayersAlreadyDefinedException from '../exceptions/PlayersAlreadyDefinedException'
import Player from '../models/Player'

export default class RingOfFireService {
    private sessionData: any
    private numberOfPlayers: number = 0

    gameStarted: boolean = false
    playersSet: boolean = false
    players: Player[]

    constructor (sessionData: any) {
        this.sessionData = sessionData
    }

    public startNewGame () {
        this.gameStarted = true
        this.playersSet = false
        this.players = []
    }

    public specifyNumberOfPlayers (numberOfPlayers: number) {
        this.checkCanSpecifyNumberOfPlayers()
        this.checkNumberOfPlayersIsValid(numberOfPlayers)

        this.numberOfPlayers = numberOfPlayers
    }

    public specifyNameOfPlayer (playerNumber: number, name: string) {
        this.checkCanSpecifyNameOfPlayer(playerNumber)

        const player = new Player({
            name: name,
            id: playerNumber
        })

        this.players.push(player)
    }

    private checkCanSpecifyNumberOfPlayers (): void {
        if (!this.gameStarted) {
            throw new GameNotStartedException()
        }

        if (this.numberOfPlayers > 0) {
            throw new NumberOfPlayersAlreadyDefinedException()
        }

        if (this.playersSet) {
            throw new PlayersAlreadyDefinedException()
        }
    }

    private checkCanSpecifyNameOfPlayer (playerNumber: number): void {
        if (!this.gameStarted) {
            throw new GameNotStartedException()
        }

        if (this.playersSet)
    }

    private checkNumberOfPlayersIsValid (numberOfPlayers: number) {
        if (numberOfPlayers < 1) {
            throw new NumberOfPlayersInvalidException()
        }
    }
}
