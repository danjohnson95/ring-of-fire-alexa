import * as Cards from '../models/Card'
import Player from '../models/Player';

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

        // Now get that card from the deck.
        const newCardFromDeck = this.cards.find(card => card === newCard)

        newCardFromDeck.isPicked = true
        newCardFromDeck.pickedBy = player

        return newCardFromDeck
    }

    /**
     * Gets all the cards that haven't been picked yet
     * @return {Card[]}
     */
    getRemainingCards (): Cards.Card[] {
        return this.cards.filter(card => !card.isPicked)
    }

    getRemainingCardsOfType (card: Cards.Card): Cards.Card[] {
        return this.getRemainingCards().filter((remaining) => {
            return remaining === card
        })
    }

    /**
     * The total number of remaining cards in the deck
     * @return {number}
     */
    getNumberOfRemainingCards (): number {
        return this.getRemainingCards().length
    }

    // /**
    //  * The remaining count of the specified card
    //  * @param {Card} card 
    //  * @return {number}
    //  */
    // getNumberOfRemainingCard (card: Card): number {
    //     const remainingCards = this.getRemainingCards()
    //     // return remainingCards.filter((remainingCard) => remainingCard typeof card).length
    // }


    /**
     * Returns all the cards picked by the specified player
     * @param {Player} player
     * @return {Card[]}
     */
    getAllCardsPickedBy (player: Player): Cards.Card[] {
        return this.cards.filter(card => card.pickedBy === player)
    }

    // getCardTypePickedBy (player: Player, card: Card): Card[] {

    // }

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

    constructor (sessionData: any) {
        const newDeck = DeckService.generateNewDeck()

        // Apply the session data to the new deck.

        this.cards = newDeck
    }
}