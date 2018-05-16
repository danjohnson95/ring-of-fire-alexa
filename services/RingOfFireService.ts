import GameNotStartedException from '../exceptions/GameNotStartedException'
import NumberOfPlayersAlreadyDefinedException from '../exceptions/NumberOfPlayersAlreadyDefinedException'
import NumberOfPlayersInvalidException from '../exceptions/NumberOfPlayersInvalidException'
import PlayersAlreadyDefinedException from '../exceptions/PlayersAlreadyDefinedException'
import PlayersNotSpecifiedException from '../exceptions/PlayersNotSpecifiedException'
import GameOverException from '../exceptions/GameOverException'
import Player from '../models/Player'
import { KingCard, Card, CardInterface } from '../models/Card'
import InvalidPlayerNameSpecifiedException from '../exceptions/InvalidPlayerNameSpecifiedException';
import NumberOfPlayersNotSpecifiedException from '../exceptions/NumberOfPlayersNotSpecifiedException';
import DeckService from './DeckService';
import SetupService from './SetupService';
import GameplayStatus from '../models/GameplayStatus';

import * as Alexa from 'ask-sdk'
import { RequestEnvelope } from 'ask-sdk-model'

export default class RingOfFireService {
    private attributesManager: Alexa.AttributesManager
    private requestEnvelope: RequestEnvelope
    private deckService: DeckService
    private persistentAttributes?: GameplayStatus

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

    constructor (attributesManager: Alexa.AttributesManager, requestEnvelope: RequestEnvelope) {
        this.attributesManager = attributesManager
        this.requestEnvelope = requestEnvelope
        this.setupService = new SetupService(attributesManager)
    }

    public getGameplayStatus (): Promise<GameplayStatus> {
        return this.attributesManager.getPersistentAttributes()
            .then((attrs) => {
                this.persistentAttributes = <GameplayStatus> attrs
                this.deckService = new DeckService(this.persistentAttributes)

                return this.persistentAttributes
            })
    }

    public startNewGame (): void {
        this.setupService.newSetup()
    }

    public endGame (): Promise<void> {
        this.attributesManager.setPersistentAttributes({})

        return this.attributesManager.savePersistentAttributes()
    }

    public persistPlayersFromSetup (): Promise<void> {
        let players = []

        this.setupService.playerNames.forEach((playerName) => {
            players.push(new Player(playerName))
        })

        return this.attributesManager.getPersistentAttributes()
            .then((attributes) => {
                attributes.players = players
                attributes.cards = []

                this.attributesManager.setPersistentAttributes(attributes);

                return this.attributesManager.savePersistentAttributes();
            })
    }

    private getNextPlayer (): Player {
        const players = this.persistentAttributes.players

        // Is someone active atm?
        const active = players.find(player => player.isActive)

        if (active) {
            // Get the next one along
        }

        let nextPlayer = players[0]

        nextPlayer.isActive = true

        return nextPlayer
    }

    public getCurrentPlayer(): Player {
        // TODO: Work out which one is the current one.
        return new Player({})
    }

    public pickNextCard (): Promise<CardInterface> {
        this.checkCanPickCard()

        const player = this.getNextPlayer()

        const card = this.deckService.getNewCardForPlayer(player)

        this.attributesManager.setPersistentAttributes(this.persistentAttributes)

        return this.attributesManager.savePersistentAttributes()
            .then(() => {
                return card
            })
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
