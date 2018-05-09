import Player from './Player'
import Card from './Card'

export default interface GameplayStatus {
    numberOfPlayers: number
    players: Player[]
    pickedCards: Card[]
}