import RingOfFireService from '../services/RingOfFireService'
import * as Alexa from 'ask-sdk'
import { Response, IntentRequest } from 'ask-sdk-model'

export default class SpecifyPlayerRequestHandler implements Alexa.RequestHandler {
    private intentName = 'SpecifyPlayer'

    name: string
    game: RingOfFireService

    canHandle (handlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === this.intentName
    }

    handle (handlerInput: Alexa.HandlerInput): Promise<Response> | Response {
        this.game = new RingOfFireService(handlerInput.attributesManager, handlerInput.requestEnvelope)
        const request: IntentRequest = <IntentRequest> handlerInput.requestEnvelope.request
        const name = request.intent.slots.name.value

        this.name = name

        this.game.setupService.specifyNameOfNextPlayer(name)

        if (this.game.setupService.haveAllPlayersBeenDefined()) {
            return this.game.persistPlayersFromSetup()
                .then(() => {

                    return handlerInput.responseBuilder
                        .speak('Hey ' + this.name + '! Looks like that\'s everyone. When you\'re ready for a card, just say "Alexa, ask Ring of Fire for a card')
                        .getResponse()
                })
        }

        return handlerInput.responseBuilder
            .speak(this.getResponseSpeech())
            .reprompt(this.getRepromptSpeech())
            .getResponse()
    }

    getResponseSpeech () {
        return 'Hey ' + this.name + '! ' + this.getRepromptSpeech()
    }

    getRepromptSpeech () {
        return 'Player ' + (this.game.setupService.playerNames.length + 1) + ', what\'s your name?'
    }
}