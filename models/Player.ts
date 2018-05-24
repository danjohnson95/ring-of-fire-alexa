export default class Player {
    name: string
    playerNumber: number
    active: boolean = false

    constructor (data: any) {
        this.name = data.name
        this.playerNumber = data.playerNumber
    }
}