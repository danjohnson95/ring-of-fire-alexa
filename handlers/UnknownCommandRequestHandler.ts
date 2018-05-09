import { HandlerInput, RequestHandler } from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'

export default class UnknownCommandRequestHandler implements RequestHandler {
    private errorSpeeches = [
        'Sorry, I didn\'t understand that',
    ]

    canHandle (handlerInput): boolean {
        return true
    }

    handle (handlerInput: HandlerInput): Response {
        return handlerInput.responseBuilder
            .speak(this.errorSpeeches[0])
            .getResponse()
    }
}