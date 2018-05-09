import GameNotStartedException from '../exceptions/GameNotStartedException'
import NumberOfPlayersAlreadyDefinedException from '../exceptions/NumberOfPlayersAlreadyDefinedException'
import NumberOfPlayersInvalidException from '../exceptions/NumberOfPlayersInvalidException'
import PlayersAlreadyDefinedException from '../exceptions/PlayersAlreadyDefinedException'
import PlayersNotSpecifiedException from '../exceptions/PlayersNotSpecifiedException'
import GameOverException from '../exceptions/GameOverException'
import Player from '../models/Player'
import Card from '../models/Card'
import InvalidPlayerNameSpecifiedException from '../exceptions/InvalidPlayerNameSpecifiedException';
import NumberOfPlayersNotSpecifiedException from '../exceptions/NumberOfPlayersNotSpecifiedException';
import { DynamoDbPersistenceAdapter } from 'ask-sdk-dynamodb-persistence-adapter'
import { RequestEnvelope } from 'ask-sdk-model'

export default class RingOfFireService {
    private requestEnvelope: RequestEnvelope
    private numberOfPlayers: number = 0
    private cards: Card[]
    private persistenceAdapter: DynamoDbPersistenceAdapter

    gameStarted: boolean = false
    players: Player[] = []

    get anyCardsLeft(): boolean {
        // TODO: Have 4 Kings been picked? If not, continue.
        return true
    }

    get currentPlayer(): Player {
        // TODO: Work out which one is the current one.
        return new Player({})
    }

    get haveAllPlayersBeenDefined(): boolean {
        return this.numberOfPlayers > 0 
            && this.players.length === this.numberOfPlayers
    }

    constructor (requestEnvelope: RequestEnvelope) {
        this.requestEnvelope = requestEnvelope
        this.persistenceAdapter = new DynamoDbPersistenceAdapter({
            tableName: 'ringOfFire'
        })
    }

    public startNewGame () {
        this.gameStarted = true
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
            playerNumber: playerNumber
        })

        this.players.push(player)
    }

    public getNextPlayer (): Player {
        return new Player({})
    }

    public pickNextCard (): Card {
        this.checkCanPickCard()

        const nextCard = this.getRandomCard()

        nextCard.pickedBy = this.currentPlayer
        nextCard.isPicked = true

        return nextCard
    }

    private getRandomCard (): Card {
        const unpickedCards = this.cards.filter(card => !card.isPicked)
        const randomIndex = Math.floor(Math.random() * unpickedCards.length)

        return unpickedCards[randomIndex]
    }

    private checkCanSpecifyNumberOfPlayers (): void {
        if (!this.gameStarted) {
            throw new GameNotStartedException()
        }

        if (this.numberOfPlayers > 0) {
            throw new NumberOfPlayersAlreadyDefinedException()
        }

        if (this.haveAllPlayersBeenDefined) {
            throw new PlayersAlreadyDefinedException()
        }
    }

    private checkCanSpecifyNameOfPlayer (playerNumber: number): void {
        if (!this.gameStarted) {
            throw new GameNotStartedException()
        }

        if (this.numberOfPlayers === 0) {
            throw new NumberOfPlayersNotSpecifiedException()
        }

        if (this.haveAllPlayersBeenDefined) {
            throw new PlayersAlreadyDefinedException()
        }

        if (playerNumber > this.numberOfPlayers) {
            throw new InvalidPlayerNameSpecifiedException()
        }
    }

    private checkNumberOfPlayersIsValid (numberOfPlayers: number) {
        if (numberOfPlayers < 1) {
            throw new NumberOfPlayersInvalidException()
        }
    }

    private checkCanPickCard (): boolean {
        if (!this.gameStarted) {
            throw new GameNotStartedException()
        }

        if (!this.haveAllPlayersBeenDefined) {
            throw new PlayersNotSpecifiedException()
        }

        if (!this.anyCardsLeft) {
            throw new GameOverException()
        }

        return true
    }
}
