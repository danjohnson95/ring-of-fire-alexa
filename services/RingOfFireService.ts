import GameNotStartedException from '../exceptions/GameNotStartedException'
import NumberOfPlayersAlreadyDefinedException from '../exceptions/NumberOfPlayersAlreadyDefinedException'
import NumberOfPlayersInvalidException from '../exceptions/NumberOfPlayersInvalidException'
import PlayersAlreadyDefinedException from '../exceptions/PlayersAlreadyDefinedException'
import PlayersNotSpecifiedException from '../exceptions/PlayersNotSpecifiedException'
import GameOverException from '../exceptions/GameOverException'
import Player from '../models/Player'
import Card from '../models/Card'

export default class RingOfFireService {
    private sessionData: any
    private numberOfPlayers: number = 0
    private currentPlayer: Player | null = null
    private cardsLeft: boolean = false
    private cards: Card[]

    gameStarted: boolean = false
    playersSet: boolean = false
    players: Player[] = []

    constructor (sessionData: any) {
        this.sessionData = sessionData
    }

    public startNewGame () {
        this.gameStarted = true
        this.playersSet = false
        this.cardsLeft = true
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

    public getCurrentPlayer (): Player {
        return new Player({})
    }

    public getNextPlayer (): Player {
        return new Player({})
    }

    public pickNextCard (): Card {
        this.checkCanPickCard()

        const currentPlayer = this.getNextPlayer()
        const nextCard = this.getRandomCard()

        nextCard.pickedBy = currentPlayer
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

        if (this.playersSet) {
            throw new PlayersAlreadyDefinedException()
        }
    }

    private checkCanSpecifyNameOfPlayer (playerNumber: number): void {
        if (!this.gameStarted) {
            throw new GameNotStartedException()
        }

        if (!this.playersSet) {
            throw new PlayersNotSpecifiedException()
        }
    }

    private checkNumberOfPlayersIsValid (numberOfPlayers: number) {
        if (numberOfPlayers < 1) {
            throw new NumberOfPlayersInvalidException()
        }
    }

    private checkCanPickCard (): void {
        if (!this.gameStarted) {
            throw new GameNotStartedException()
        }

        if (!this.playersSet) {
            throw new PlayersNotSpecifiedException()
        }

        if (!this.cardsLeft) {
            throw new GameOverException()
        }
    }
}
