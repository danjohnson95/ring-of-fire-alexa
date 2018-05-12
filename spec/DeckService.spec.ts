import 'mocha'
import { expect } from 'chai'
import DeckService from '../services/DeckService';
import { Suite } from '../models/Card';

describe('Generating a new deck', () => {
    beforeEach(() => {
        this.deck = new DeckService({})
    })

    this.cardsMatchingSuite = (suite: Suite) => {
        return this.deck.cards.filter((card) => {
            return card.suite === suite
        })
    }

    it('should store 52 cards', () => {
        expect(this.deck.cards.length).to.equal(52)
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