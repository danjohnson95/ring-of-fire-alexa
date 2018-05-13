import RingOfFireService from '../services/RingOfFireService'
import * as Alexa from 'ask-sdk'
import { Response, IntentRequest } from 'ask-sdk-model'

export default class SpecifyNumberOfPlayersRequestHandler implements Alexa.RequestHandler {
    private intentName = 'SpecifyNumberOfPlayers'

    numberOfPlayers: number

    canHandle (handlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === this.intentName
    }

    handle (handlerInput: Alexa.HandlerInput): Response {
        const sessionData = handlerInput.attributesManager
        const game = new RingOfFireService(handlerInput.attributesManager, handlerInput.requestEnvelope)
        const request: IntentRequest = <IntentRequest> handlerInput.requestEnvelope.request
        const numberOfPlayers = Number.parseInt(request.intent.slots.NumberOfPlayers.value)

        this.numberOfPlayers = numberOfPlayers

        game.setupService.specifyNumberOfPlayers(numberOfPlayers)

        return handlerInput.responseBuilder
            .speak(this.getResponseSpeech())
            .reprompt(this.getRepromptSpeech())
            .getResponse()
    }

    getResponseSpeech () {
        return 'Okay, ' + this.numberOfPlayers + ' it is. Player one, what\'s your name?'
    }

    getRepromptSpeech () {
        return 'Player one, what\'s your name?'
    }
}