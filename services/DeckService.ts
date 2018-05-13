import * as Cards from '../models/Card'
import Player from '../models/Player';

import * as Alexa from 'ask-sdk'

export default class DeckService {
    cards: Cards.Card[]

    /**
     * Gets a random unpicked card from the deck and marks it
     * as picked
     * @return {Card}
     */
    getNewCardForPlayer (player: Player): Cards.Card {
        const remainingCards = this.getRemainingCards()
        const randomIndex = Math.floor(Math.random() * remainingCards.length)
        const newCard = remainingCards[randomIndex]

        newCard.isPicked = true
        newCard.pickedBy = player

        return newCard
    }

    /**
     * Gets all the cards that haven't been picked yet
     * @return {Card[]}
     */
    getRemainingCards (): Cards.Card[] {
        return this.cards.filter(card => !card.isPicked)
    }

    /**
     * Gets the remaining cards that match the type specified
     * @param {Card} card
     * @return {Card[]}
     */
    getRemainingCardsOfType (card: Cards.Card): Cards.Card[] {
        return this.getRemainingCards().filter((remaining) => {
            return remaining === card
        })
    }

    /**
     * Returns all the cards picked by the specified player
     * @param {Player} player
     * @return {Card[]}
     */
    getAllCardsPickedBy (player: Player): Cards.Card[] {
        return this.cards.filter(card => card.pickedBy === player)
    }

    /**
     * Generates a fresh new deck
     * @return {Card[]}
     */
    static generateNewDeck (): Cards.Card[] {
        return [
            new Cards.AceSpades,
            new Cards.TwoSpades,
            new Cards.ThreeSpades,
            new Cards.FourSpades,
            new Cards.FiveSpades,
            new Cards.SixSpades,
            new Cards.SevenSpades,
            new Cards.EightSpades,
            new Cards.NineSpades,
            new Cards.TenSpades,
            new Cards.JackSpades,
            new Cards.QueenSpades,
            new Cards.KingSpades,
            new Cards.AceClubs,
            new Cards.TwoClubs,
            new Cards.ThreeClubs,
            new Cards.FourClubs,
            new Cards.FiveClubs,
            new Cards.SixClubs,
            new Cards.SevenClubs,
            new Cards.EightClubs,
            new Cards.NineClubs,
            new Cards.TenClubs,
            new Cards.JackClubs,
            new Cards.QueenClubs,
            new Cards.KingClubs,
            new Cards.AceHearts,
            new Cards.TwoHearts,
            new Cards.ThreeHearts,
            new Cards.FourHearts,
            new Cards.FiveHearts,
            new Cards.SixHearts,
            new Cards.SevenHearts,
            new Cards.EightHearts,
            new Cards.NineHearts,
            new Cards.TenHearts,
            new Cards.JackHearts,
            new Cards.QueenHearts,
            new Cards.KingHearts,
            new Cards.AceDiamonds,
            new Cards.TwoDiamonds,
            new Cards.ThreeDiamonds,
            new Cards.FourDiamonds,
            new Cards.FiveDiamonds,
            new Cards.SixDiamonds,
            new Cards.SevenDiamonds,
            new Cards.EightDiamonds,
            new Cards.NineDiamonds,
            new Cards.TenDiamonds,
            new Cards.JackDiamonds,
            new Cards.QueenDiamonds,
            new Cards.KingDiamonds
        ]
    }

    constructor (attributesManager: Alexa.AttributesManager) {
        const newDeck = DeckService.generateNewDeck()

        // Apply the session data to the new deck.
        if (sess)
        this.cards = newDeck
    }
}