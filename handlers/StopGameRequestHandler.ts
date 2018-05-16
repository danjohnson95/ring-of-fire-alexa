import * as Alexa from 'ask-sdk'
import RingOfFireService from '../services/RingOfFireService'
import { Response } from 'ask-sdk-model'

export default class StopGameRequestHandler implements Alexa.RequestHandler {
    canHandle (handlerInput: Alexa.HandlerInput): boolean | Promise<boolean> {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent'))
            // || handlerInput.requestEnvelope.request.type === 'LaunchRequest'
    }

    handle (handlerInput: Alexa.HandlerInput): Response | Promise<Response> {
        const game = new RingOfFireService(handlerInput.attributesManager, handlerInput.requestEnvelope)

        if (game.gameInProgress) {
            return game.endGame()
                .then(() => {

                    return handlerInput.responseBuilder
                        .speak('Thanks for playing!')
                        .getResponse()
                })
        }
    }
}