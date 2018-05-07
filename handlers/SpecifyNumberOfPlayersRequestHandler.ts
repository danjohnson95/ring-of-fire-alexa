import RingOfFireService from '../services/RingOfFireService'
import { HandlerInput, RequestHandler } from 'ask-sdk'
import { Response, IntentRequest } from 'ask-sdk-model'

export default class SpecifyNumberOfPlayersRequestHandler implements RequestHandler {
    private intentName = 'SpecifyNumberOfPlayers'

    canHandle (handlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === this.intentName
    }

    handle (handlerInput: HandlerInput): Response {
        const sessionData = handlerInput.attributesManager
        const game = new RingOfFireService(sessionData)
        const request: IntentRequest = handlerInput.requestEnvelope.request
        const numberOfPlayers = Number.parseInt(request.intent.slots.number.value)

        game.specifyNumberOfPlayers(numberOfPlayers)

        return handlerInput.responseBuilder
            .speak(this.getResponseSpeech())
            .reprompt(this.getRepromptSpeech())
            .getResponse()
    }
}