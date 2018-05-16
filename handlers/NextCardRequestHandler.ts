import RingOfFireService from '../services/RingOfFireService'
import * as Alexa from 'ask-sdk'
import { Response, IntentRequest } from 'ask-sdk-model'
import { Card, CardInterface } from '../models/Card'

export default class NextCardRequestHandler implements Alexa.RequestHandler {
    private intentName = 'GetNextCard'

    name: string
    game: RingOfFireService

    canHandle (handlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === this.intentName
    }

    handle (handlerInput: Alexa.HandlerInput): Promise<Response> | Response {
        this.game = new RingOfFireService(handlerInput.attributesManager, handlerInput.requestEnvelope)

        return this.game.getGameplayStatus()
            .then(() => {
                return this.game.pickNextCard()
            })
            .then((card) => {
                return handlerInput.responseBuilder
                    .speak(this.getSpeechForCard(card))
                    .getResponse()
            })
    }

    getSpeechForCard (card: CardInterface): string {
        const intro = 'It\'s ' + card.name + ' of ' + card.suite + '. '
        const randomIndex = Math.floor(Math.random() * card.descriptions.length)

        return intro + card.descriptions[randomIndex]
    }
}