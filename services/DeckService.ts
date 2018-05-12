import Card from '../models/Card'
import Player from '../models/Player';

enum Suite {
    Spades = 'Spades',
    Clubs = 'Clubs',
    Hearts = 'Hearts',
    Diamonds = 'Diamonds'
}

interface CardInterface {
    name: string
    suite: Suite
    descriptions: string[]
    isSpecial: boolean
}

abstract class Card {
    isSpecial: boolean = false
}

export abstract class AceCard extends Card {
    name = 'Ace'
    isSpecial = false
    descriptions = [
        'Waterfall.'
    ]
}

export abstract class TwoCard extends Card {
    name = 'Two'
    isSpecial = false
    descriptions = [
        'Two is choose.'
    ]
}

export abstract class ThreeCard extends Card {
    name = 'Three'
    isSpecial = false
    descriptions = [
        'Three is me.'
    ]
}

export abstract class FourCard extends Card {
    name = 'Four'
    isSpecial = false
    descriptions = [
        'This is for the ladies.'
    ]
}

export abstract class FiveCard extends Card {
    name = 'Five'
    isSpecial = true
    descriptions = [
        'Thumbmaster'
    ]
}

export abstract class SixCard extends Card {
    name = 'Six'
    isSpecial = false
    descriptions = [
        'This is for the blokes.'
    ]
}

export abstract class SevenCard extends Card {
    name = 'Seven'
    isSpecial = true
    descriptions = [
        'Heaven'
    ]
}

export abstract class EightCard extends Card {
    name = 'Eight'
    isSpecial = false
    descriptions = [
        'Eight is mate'
    ]
}

export abstract class NineCard extends Card {
    name = 'Nine'
    isSpecial = false
    descriptions = [
        'Nine is rhyme'
    ]
}

export abstract class TenCard extends Card {
    name = 'Ten'
    isSpecial = false
    descriptions = [
        'Categories'
    ]
}

export abstract class JackCard extends Card {
    name = 'Jack'
    isSpecial = true
    descriptions = [
        'Make a rule'
    ]
}

export abstract class QueenCard extends Card {
    name = 'Queen'
    isSpecial = true
    descriptions = [
        'Question master'
    ]
}

export abstract class KingCard extends Card {
    name = 'King'
    isSpecial = false
    descriptions = [
        'Pour some drink in the centre glass'
    ]
}

class AceSpades extends AceCard implements CardInterface {
    suite = Suite.Spades
}

class TwoSpades extends TwoCard implements CardInterface {
    suite = Suite.Spades
}

class ThreeSpades extends ThreeCard implements CardInterface {
    suite = Suite.Spades
}

class FourSpades extends FourCard implements CardInterface {
    suite = Suite.Spades
}

class FiveSpades extends FiveCard implements CardInterface {
    suite = Suite.Spades
}

class SixSpades extends SixCard implements CardInterface {
    suite = Suite.Spades
}

class SevenSpades extends SevenCard implements CardInterface {
    suite = Suite.Spades
}

class EightSpades extends EightCard implements CardInterface {
    suite = Suite.Spades
}

class NineSpades extends NineCard implements CardInterface {
    suite = Suite.Spades
}

class TenSpades extends TenCard implements CardInterface {
    suite = Suite.Spades
}

class JackSpades extends JackCard implements CardInterface {
    suite = Suite.Spades
}

class QueenSpades extends QueenCard implements CardInterface {
    suite = Suite.Spades
}

class KingSpades extends KingCard implements CardInterface {
    suite = Suite.Spades
}

class AceClubs extends AceCard implements CardInterface {
    suite = Suite.Clubs
}

class TwoClubs extends TwoCard implements CardInterface {
    suite = Suite.Clubs
}

class ThreeClubs extends ThreeCard implements CardInterface {
    suite = Suite.Clubs
}

class FourClubs extends FourCard implements CardInterface {
    suite = Suite.Clubs
}

class FiveClubs extends FiveCard implements CardInterface {
    suite = Suite.Clubs
}

class SixClubs extends SixCard implements CardInterface {
    suite = Suite.Clubs
}

class SevenClubs extends SevenCard implements CardInterface {
    suite = Suite.Clubs
}

class EightClubs extends EightCard implements CardInterface {
    suite = Suite.Clubs
}

class NineClubs extends NineCard implements CardInterface {
    suite = Suite.Clubs
}

class TenClubs extends TenCard implements CardInterface {
    suite = Suite.Clubs
}

class JackClubs extends JackCard implements CardInterface {
    suite = Suite.Clubs
}

class QueenClubs extends QueenCard implements CardInterface {
    suite = Suite.Clubs
}

class KingClubs extends KingCard implements CardInterface {
    suite = Suite.Clubs
}

class AceHearts extends AceCard implements CardInterface {
    suite = Suite.Hearts
}

class TwoHearts extends TwoCard implements CardInterface {
    suite = Suite.Hearts
}

class ThreeHearts extends ThreeCard implements CardInterface {
    suite = Suite.Hearts
}

class FourHearts extends FourCard implements CardInterface {
    suite = Suite.Hearts
}

class FiveHearts extends FiveCard implements CardInterface {
    suite = Suite.Hearts
}

class SixHearts extends SixCard implements CardInterface {
    suite = Suite.Hearts
}

class SevenHearts extends SevenCard implements CardInterface {
    suite = Suite.Hearts
}

class EightHearts extends EightCard implements CardInterface {
    suite = Suite.Hearts
}

class NineHearts extends NineCard implements CardInterface {
    suite = Suite.Hearts
}

class TenHearts extends TenCard implements CardInterface {
    suite = Suite.Hearts
}

class JackHearts extends JackCard implements CardInterface {
    suite = Suite.Hearts
}

class QueenHearts extends QueenCard implements CardInterface {
    suite = Suite.Hearts
}

class KingHearts extends KingCard implements CardInterface {
    suite = Suite.Hearts
}

class AceDiamonds extends AceCard implements CardInterface {
    suite = Suite.Diamonds
}

class TwoDiamonds extends TwoCard implements CardInterface {
    suite = Suite.Diamonds
}

class ThreeDiamonds extends ThreeCard implements CardInterface {
    suite = Suite.Diamonds
}

class FourDiamonds extends FourCard implements CardInterface {
    suite = Suite.Diamonds
}

class FiveDiamonds extends FiveCard implements CardInterface {
    suite = Suite.Diamonds
}

class SixDiamonds extends SixCard implements CardInterface {
    suite = Suite.Diamonds
}

class SevenDiamonds extends SevenCard implements CardInterface {
    suite = Suite.Diamonds
}

class EightDiamonds extends EightCard implements CardInterface {
    suite = Suite.Diamonds
}

class NineDiamonds extends NineCard implements CardInterface {
    suite = Suite.Diamonds
}

class TenDiamonds extends TenCard implements CardInterface {
    suite = Suite.Diamonds
}

class JackDiamonds extends JackCard implements CardInterface {
    suite = Suite.Diamonds
}

class QueenDiamonds extends QueenCard implements CardInterface {
    suite = Suite.Diamonds
}

class KingDiamonds extends KingCard implements CardInterface {
    suite = Suite.Diamonds
}

export default class DeckService {
    private cards: Card[]

    /**
     * Gets a random unpicked card from the deck and marks it
     * as picked
     * @return {Card}
     */
    getRandomCard (): Card {

    }

    /**
     * Gets all the cards that haven't been picked yet
     * @return {Card[]}
     */
    getRemainingCards (): Card[] {
        return this.cards.filter(card => !card.isPicked)
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
    getAllCardsPickedBy (player: Player): Card[] {
        return this.cards.filter(card => card.pickedBy === player)
    }

    // getCardTypePickedBy (player: Player, card: Card): Card[] {

    // }

    static generateNewDeck (): Card[] {
        return [
            new AceSpades,
            new TwoSpades,
            new ThreeSpades,
            new FourSpades,
            new FiveSpades,
            new SixSpades,
            new SevenSpades,
            new EightSpades,
            new NineSpades,
            new TenSpades,
            new JackSpades,
            new QueenSpades,
            new KingSpades,
            new AceClubs,
            new TwoClubs,
            new ThreeClubs,
            new FourClubs,
            new FiveClubs,
            new SixClubs,
            new SevenClubs,
            new EightClubs,
            new NineClubs,
            new TenClubs,
            new JackClubs,
            new QueenClubs,
            new KingClubs,
            new AceHearts,
            new TwoHearts,
            new ThreeHearts,
            new FourHearts,
            new FiveHearts,
            new SixHearts,
            new SevenHearts,
            new EightHearts,
            new NineHearts,
            new TenHearts,
            new JackHearts,
            new QueenHearts,
            new KingHearts,
            new AceDiamonds,
            new TwoDiamonds,
            new ThreeDiamonds,
            new FourDiamonds,
            new FiveDiamonds,
            new SixDiamonds,
            new SevenDiamonds,
            new EightDiamonds,
            new NineDiamonds,
            new TenDiamonds,
            new JackDiamonds,
            new QueenDiamonds,
            new KingDiamonds
        ]
    }

    constructor (cards: Card[]) {
        this.cards = cards
    }
}