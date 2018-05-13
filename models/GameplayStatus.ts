import Player from "./Player";
import { CardInterface } from "./Card";

export default interface GameplayStatus {
    players?: Player[]
    cards?: CardInterface[]
}