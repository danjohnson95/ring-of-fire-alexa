import NumberOfPlayersInvalidException from '../exceptions/NumberOfPlayersInvalidException';
import GameNotStartedException from '../exceptions/GameNotStartedException';
import NumberOfPlayersAlreadyDefinedException from '../exceptions/NumberOfPlayersAlreadyDefinedException';
import PlayersAlreadyDefinedException from '../exceptions/PlayersAlreadyDefinedException';

import * as Alexa from 'ask-sdk'

interface SetupInterface {
    gameStarted?: boolean
    numberOfPlayers?: number
    playerNames?: string[]
}

export default class SetupService {
    private attributesManager: Alexa.AttributesManager
    private sessionData: SetupInterface

    get setupInProgress (): boolean {
        return this.gameStarted && 
            (this.numberOfPlayers === 0 || this.numberOfPlayers !== this.playerNames.length)
    }

    get gameStarted (): boolean {
        return this.sessionData.gameStarted || false
    }

    set gameStarted (val: boolean) {
        this.sessionData.gameStarted = val
        this.updateSession()
    }

    get numberOfPlayers (): number {
        return this.sessionData.numberOfPlayers || 0
    }

    set numberOfPlayers (number: number) {
        this.sessionData.numberOfPlayers = number
        this.updateSession()
    }

    get playerNames (): string[] {
        return this.sessionData.playerNames || []
    }

    set playerNames (names: string[]) {
        this.sessionData.playerNames = names
        this.updateSession()
    }

    private updateSession (): void {
        this.attributesManager.setSessionAttributes(this.sessionData)
    }

    private checkNumberOfPlayersValid (number: number): void {
        if (number < 1) {
            throw new NumberOfPlayersInvalidException
        }
    }

    private checkCanSpecifyNumberOfPlayers (): void {
        if (!this.gameStarted) {
            throw new GameNotStartedException
        }

        if (this.numberOfPlayers > 0) {
            throw new NumberOfPlayersAlreadyDefinedException
        }
    }

    private checkCanSpecifyPlayerName (): void {
        if (!this.gameStarted) {
            throw new GameNotStartedException
        }

        if (this.haveAllPlayersBeenDefined()) {
            throw new PlayersAlreadyDefinedException
        }
    }
    
    constructor (attributesManager: Alexa.AttributesManager) {
        this.attributesManager = attributesManager
        this.sessionData = attributesManager.getSessionAttributes()
    }

    public newSetup (): void {
        this.gameStarted = true
        this.numberOfPlayers = 0
        this.playerNames = []
    }

    public specifyNumberOfPlayers (number: number): void {
        this.checkNumberOfPlayersValid(number)

        this.numberOfPlayers = number
    }

    public specifyNameOfNextPlayer (name: string): void {
        this.checkCanSpecifyPlayerName()

        this.playerNames.push(name)
    }

    public haveAllPlayersBeenDefined (): boolean {
        return this.numberOfPlayers !== 0 && this.playerNames.length === this.numberOfPlayers
    }
}
