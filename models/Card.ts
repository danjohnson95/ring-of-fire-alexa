import Player from './Player'

export interface Card {
    name: string
    isPicked: boolean
    isSpecial: boolean
    pickedBy: Player | null
    descriptions: string[]
}