import RingOfFireService from '../services/RingOfFireService'
import * as Alexa from 'ask-sdk'
import { Response, IntentRequest } from 'ask-sdk-model'

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
                    .speak(card.name)
                    .getResponse()
            })
    }
}