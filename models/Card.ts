import Player from './Player'

export default interface Card {
    name: string
    isPicked: boolean
    isSpecial: boolean
    pickedBy: Player | null
    descriptions: string[]
}