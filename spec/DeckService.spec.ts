import 'mocha'
import { expect } from 'chai'
import DeckService from '../services/DeckService';
import { Suite, AceHearts, TwoCard } from '../models/Card';
import Player from '../models/Player';

describe('Generating a new deck', () => {
    beforeEach(() => {
        this.cards = DeckService.generateNewDeck()
    })

    this.cardsMatchingSuite = (suite: Suite) => {
        return this.cards.filter((card) => {
            return card.suite === suite
        })
    }

    it('should store 52 cards', () => {
        expect(this.cards.length).to.equal(52)
    })

    it('should generate 13 Spades', () => {
        const suite = Suite.Spades

        expect(this.cardsMatchingSuite(suite).length).to.equal(13)
    })

    it('should generate 13 Clubs', () => {
        const suite = Suite.Clubs

        expect(this.cardsMatchingSuite(suite).length).to.equal(13)
    })

    it('should generate 13 Hearts', () => {
        const suite = Suite.Hearts

        expect(this.cardsMatchingSuite(suite).length).to.equal(13)
    })

    it('should generate 13 Diamonds', () => {
        const suite = Suite.Diamonds

        expect(this.cardsMatchingSuite(suite).length).to.equal(13)
    })
})

describe('Getting a new card', () => {
    beforeEach(() => {
        this.deck = new DeckService({})
    })

    it('should return a random card', () => {

    })

    it('should\'t return the same card', () => {
        // Get a new card 52 times, it should never be the same
        let retrievedCards = []
        const player = new Player({
            name: 'Dan',
            playerNumber: 1
        })

        for (let i = 0; i < 52; i++) {
            retrievedCards.push(this.deck.getNewCardForPlayer(player))
        }

        const uniqueCards = [...Array.from(new Set( retrievedCards.map(obj => obj.constructor.name))) ];

        expect(uniqueCards.length).to.equal(retrievedCards.length)
    })

    it('should store the player who picked the card', () => {
        const player = new Player({
            name: 'Dan',
            playerNumber: 1
        })

        const newCard = this.deck.getNewCardForPlayer(player)

        // Get the card out of the deck
        const cardFromDeck = this.deck.cards.find((card) => {
            return card.constructor.name === newCard.constructor.name
        })

        expect(cardFromDeck.pickedBy).to.equal(player)
    })

    it('should mark the card as picked', () => {
        const player = new Player({
            name: 'Dan',
            playerNumber: 1
        })

        const newCard = this.deck.getNewCardForPlayer(player)

        // Get the card out of the deck
        const cardFromDeck = this.deck.cards.find((card) => {
            return card.constructor.name === newCard.constructor.name
        })

        expect(cardFromDeck.isPicked).to.be.true
    })
})

describe('Getting remaining cards', () => {
    beforeEach(() => {
        this.deck = new DeckService({})
    })

    it('should return all 52 cards when none have been picked', () => {
        expect(this.deck.getRemainingCards().length).to.equal(52)
    })

    it('should not return any picked cards', () => {
        const player = new Player({
            name: 'Dan',
            playerNumber: 1
        })

        const pickedCards = [
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player),
            this.deck.getNewCardForPlayer(player)
        ]

        const remainingCards = this.deck.getRemainingCards()
        const conflicts = remainingCards.filter(card => card.isPicked)
        
        expect(conflicts.length).to.equal(0)
    })
})

describe('Getting remaing cards of type', () => {
    beforeEach(() => {
        this.deck = new DeckService({})
    })

    it('should only return cards of the specified number', () => {
        const cards = this.deck.getRemainingCardsOfType(TwoCard)

        const matches = cards.filter((card) => {
            return card.name === 'Two'
        })

        expect(matches.length).to.equal(4)
    })

    it('should only return cards of the exact type specified', () => {
        const cards = this.deck.getRemainingCardsOfType(AceHearts)

        const matches = cards.filter((card) => {
            return card.name === 'AceHearts'
        })

        expect(matches.length).to.equal(1)
    })

    it('should not return any picked cards', () => {
        const player = new Player({
            name: 'Dan',
            playerNumber: 1
        })

        const pickedCard = this.deck.getNewCardForPlayer(player)
        const remainingCards = this.deck.getRemainingCardsOfType(pickedCard)
        const conflicts = remainingCards.filter(card => card.isPicked)
        
        expect(conflicts.length).to.equal(0)
    })
})