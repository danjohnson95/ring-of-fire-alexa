import GameplayStatus from '../models/GameplayStatus'

export default class SetupService {
    private gameplayStatus: GameplayStatus

    constructor (gameplayStatus: GameplayStatus) {
        this.gameplayStatus = gameplayStatus
    }

    get haveAllPlayersBeenDefined(): boolean {
        return this.numberOfPlayers > 0 
            && this.players.length === this.numberOfPlayers
    }

    public hasGameStarted (): boolean {
        return !!this.gameStarted
    }

    public hasNumberOfPlayersBeenSpecified (): boolean {
        return this.numberOfPlayers > 0
    }

    public haveAllPlayersBeenDefined (): boolean {
        return this.numberOfPlayers > 0 
            && this.players.length === this.numberOfPlayers
    }
    

}