import RingOfFireService from '../services/RingOfFireService'
import { Response } from 'ask-sdk-model'
import { RequestHandler, HandlerInput } from 'ask-sdk-core'

export default class NewGameRequestHandler implements RequestHandler {

    private intentName = 'NewGame'

    private responseSpeeches = [
        'Now you\'re talking!',
        'Ready to get your drink on?',
        'Let\'s go.',
        'Party time.',
        'Gather round.'
    ]

    private repromptSpeeches = [
        'How many people playing?',
        'How many players?',
        'How many people joining in?'
    ]

    get randomResponseSpeech (): string {
        return this.responseSpeeches[Math.floor(Math.random() * this.responseSpeeches.length)]
    }

    get randomRepromptSpeech (): string {
        return this.repromptSpeeches[Math.floor(Math.random() * this.repromptSpeeches.length)]
    }

    canHandle (handlerInput: HandlerInput): boolean | Promise<boolean> {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === this.intentName)
            || handlerInput.requestEnvelope.request.type === 'LaunchRequest'
    }

    handle (handlerInput: HandlerInput): Response | Promise<Response> {
        const requestEnvelope = handlerInput.requestEnvelope
        const game = new RingOfFireService(requestEnvelope)

        if (game.gameStarted) {
            return this.gameAlreadyInProgressResponse(handlerInput)
        }

        game.startNewGame()

        return handlerInput.responseBuilder
            .speak(this.getResponseSpeech())
            .reprompt(this.getRepromptSpeech())
            .getResponse()
    }

    getResponseSpeech (): string {
        return this.randomResponseSpeech + ' ' + this.randomRepromptSpeech
    }

    getRepromptSpeech (): string {
        return this.randomRepromptSpeech
    }

    gameAlreadyInProgressResponse (handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak('There\'s already a game in progress. If you want to start over, just say "Alexa, ask Ring of Fire to end this game"')
            .getResponse()
    }
}
