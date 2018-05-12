import Player from './Player'

export enum Suite {
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
    isPicked: boolean
    pickedBy: Player | null
}

export abstract class Card {
    isPicked = false
    pickedBy = null
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

export class AceSpades extends AceCard implements CardInterface {
    suite = Suite.Spades
}

export class TwoSpades extends TwoCard implements CardInterface {
    suite = Suite.Spades
}

export class ThreeSpades extends ThreeCard implements CardInterface {
    suite = Suite.Spades
}

export class FourSpades extends FourCard implements CardInterface {
    suite = Suite.Spades
}

export class FiveSpades extends FiveCard implements CardInterface {
    suite = Suite.Spades
}

export class SixSpades extends SixCard implements CardInterface {
    suite = Suite.Spades
}

export class SevenSpades extends SevenCard implements CardInterface {
    suite = Suite.Spades
}

export class EightSpades extends EightCard implements CardInterface {
    suite = Suite.Spades
}

export class NineSpades extends NineCard implements CardInterface {
    suite = Suite.Spades
}

export class TenSpades extends TenCard implements CardInterface {
    suite = Suite.Spades
}

export class JackSpades extends JackCard implements CardInterface {
    suite = Suite.Spades
}

export class QueenSpades extends QueenCard implements CardInterface {
    suite = Suite.Spades
}

export class KingSpades extends KingCard implements CardInterface {
    suite = Suite.Spades
}

export class AceClubs extends AceCard implements CardInterface {
    suite = Suite.Clubs
}

export class TwoClubs extends TwoCard implements CardInterface {
    suite = Suite.Clubs
}

export class ThreeClubs extends ThreeCard implements CardInterface {
    suite = Suite.Clubs
}

export class FourClubs extends FourCard implements CardInterface {
    suite = Suite.Clubs
}

export class FiveClubs extends FiveCard implements CardInterface {
    suite = Suite.Clubs
}

export class SixClubs extends SixCard implements CardInterface {
    suite = Suite.Clubs
}

export class SevenClubs extends SevenCard implements CardInterface {
    suite = Suite.Clubs
}

export class EightClubs extends EightCard implements CardInterface {
    suite = Suite.Clubs
}

export class NineClubs extends NineCard implements CardInterface {
    suite = Suite.Clubs
}

export class TenClubs extends TenCard implements CardInterface {
    suite = Suite.Clubs
}

export class JackClubs extends JackCard implements CardInterface {
    suite = Suite.Clubs
}

export class QueenClubs extends QueenCard implements CardInterface {
    suite = Suite.Clubs
}

export class KingClubs extends KingCard implements CardInterface {
    suite = Suite.Clubs
}

export class AceHearts extends AceCard implements CardInterface {
    suite = Suite.Hearts
}

export class TwoHearts extends TwoCard implements CardInterface {
    suite = Suite.Hearts
}

export class ThreeHearts extends ThreeCard implements CardInterface {
    suite = Suite.Hearts
}

export class FourHearts extends FourCard implements CardInterface {
    suite = Suite.Hearts
}

export class FiveHearts extends FiveCard implements CardInterface {
    suite = Suite.Hearts
}

export class SixHearts extends SixCard implements CardInterface {
    suite = Suite.Hearts
}

export class SevenHearts extends SevenCard implements CardInterface {
    suite = Suite.Hearts
}

export class EightHearts extends EightCard implements CardInterface {
    suite = Suite.Hearts
}

export class NineHearts extends NineCard implements CardInterface {
    suite = Suite.Hearts
}

export class TenHearts extends TenCard implements CardInterface {
    suite = Suite.Hearts
}

export class JackHearts extends JackCard implements CardInterface {
    suite = Suite.Hearts
}

export class QueenHearts extends QueenCard implements CardInterface {
    suite = Suite.Hearts
}

export class KingHearts extends KingCard implements CardInterface {
    suite = Suite.Hearts
}

export class AceDiamonds extends AceCard implements CardInterface {
    suite = Suite.Diamonds
}

export class TwoDiamonds extends TwoCard implements CardInterface {
    suite = Suite.Diamonds
}

export class ThreeDiamonds extends ThreeCard implements CardInterface {
    suite = Suite.Diamonds
}

export class FourDiamonds extends FourCard implements CardInterface {
    suite = Suite.Diamonds
}

export class FiveDiamonds extends FiveCard implements CardInterface {
    suite = Suite.Diamonds
}

export class SixDiamonds extends SixCard implements CardInterface {
    suite = Suite.Diamonds
}

export class SevenDiamonds extends SevenCard implements CardInterface {
    suite = Suite.Diamonds
}

export class EightDiamonds extends EightCard implements CardInterface {
    suite = Suite.Diamonds
}

export class NineDiamonds extends NineCard implements CardInterface {
    suite = Suite.Diamonds
}

export class TenDiamonds extends TenCard implements CardInterface {
    suite = Suite.Diamonds
}

export class JackDiamonds extends JackCard implements CardInterface {
    suite = Suite.Diamonds
}

export class QueenDiamonds extends QueenCard implements CardInterface {
    suite = Suite.Diamonds
}

export class KingDiamonds extends KingCard implements CardInterface {
    suite = Suite.Diamonds
}