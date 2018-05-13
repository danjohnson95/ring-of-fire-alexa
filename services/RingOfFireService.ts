import GameNotStartedException from '../exceptions/GameNotStartedException'
import NumberOfPlayersAlreadyDefinedException from '../exceptions/NumberOfPlayersAlreadyDefinedException'
import NumberOfPlayersInvalidException from '../exceptions/NumberOfPlayersInvalidException'
import PlayersAlreadyDefinedException from '../exceptions/PlayersAlreadyDefinedException'
import PlayersNotSpecifiedException from '../exceptions/PlayersNotSpecifiedException'
import GameOverException from '../exceptions/GameOverException'
import Player from '../models/Player'
import { KingCard, Card } from '../models/Card'
import InvalidPlayerNameSpecifiedException from '../exceptions/InvalidPlayerNameSpecifiedException';
import NumberOfPlayersNotSpecifiedException from '../exceptions/NumberOfPlayersNotSpecifiedException';
import DeckService from './DeckService';
import SetupService from './SetupService';

import * as Alexa from 'ask-sdk'
import { RequestEnvelope } from 'ask-sdk-model'

interface GameplayStatus {
    players?: Player[]
}

export default class RingOfFireService {
    private attributesManager: Alexa.AttributesManager
    private requestEnvelope: RequestEnvelope
    private deckService: DeckService
    private persistentAttributes: GameplayStatus

    private numberOfPlayers: number = 0
    private cards: Card[]

    setupService: SetupService

    get gameInProgress (): boolean {
        return false
    }

    get anyCardsLeft(): boolean {
        const remainingCount = this.deckService.getRemainingCards().length

        if (remainingCount === 0) {
            return false
        }

        // const remainingKings = this.deckService.getRemainingCardsOfType(KingCard)

        // if (remainingKings === 0) {
        //     return false
        // }

        return true
    }

    get currentPlayer(): Player {
        // TODO: Work out which one is the current one.
        return new Player({})
    }

    constructor (attributesManager: Alexa.AttributesManager, requestEnvelope: RequestEnvelope) {
        this.attributesManager = attributesManager
        this.requestEnvelope = requestEnvelope
        this.setupService = new SetupService(attributesManager)
        this.deckService = new DeckService(attributesManager)
        this.persistentAttributes = this.attributesManager.getPersistentAttributes()
    }

    public startNewGame (): void {
        this.setupService.newSetup()
    }

    public persistPlayersFromSetup (): void {
        let players = []

        this.setupService.playerNames.forEach((playerName) => {
            players.push(new Player(playerName))
        })

        return this.attributesManager.setPersistentAttributes({
            players: players,
            cards: 
        })
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

    private checkCanPickCard (): boolean {
        if (this.setupService.setupInProgress) {
            throw new GameNotStartedException()
        }

        if (!this.anyCardsLeft) {
            throw new GameOverException()
        }

        return true
    }
}
