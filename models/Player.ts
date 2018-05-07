export default class Player {
    name: string
    playerNumber: number

    constructor (data: any) {
        this.name = data.name
        this.playerNumber = data.playerNumber
    }
}