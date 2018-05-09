import RingOfFireService from '../services/RingOfFireService'
import { Response, IntentRequest } from 'ask-sdk-model'
import { RequestHandler, HandlerInput } from 'ask-sdk-core'

export default class SpecifyNumberOfPlayersRequestHandler implements RequestHandler {
    private intentName = 'SpecifyNumberOfPlayers'

    numberOfPlayers: number

    canHandle (handlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === this.intentName
    }

    handle (handlerInput: HandlerInput): Response {
        const sessionData = handlerInput.attributesManager
        const game = new RingOfFireService(sessionData)
        const request: IntentRequest = <IntentRequest> handlerInput.requestEnvelope.request
        const numberOfPlayers = Number.parseInt(request.intent.slots.number.value)

        this.numberOfPlayers = numberOfPlayers

        game.specifyNumberOfPlayers(numberOfPlayers)

        return handlerInput.responseBuilder
            .speak(this.getResponseSpeech())
            .reprompt(this.getRepromptSpeech())
            .getResponse()
    }

    getResponseSpeech () {
        return 'Okay, ' + this.numberOfPlayers + ' it is.'
    }

    getRepromptSpeech () {
        return 'Sorry, how many was that?'
    }
}