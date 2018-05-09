/**
 * Intent Handlers
 */
// import NewGameRequestHandler from './handlers/NewGameRequestHandler'
// import UnknownCommandRequestHandler from './handlers/UnknownCommandRequestHandler'
import { SkillBuilders } from 'ask-sdk-core'
import { RequestEnvelope } from 'ask-sdk-model'

export const handler = SkillBuilders
    .custom()
    .addRequestHandlers(
        // new NewGameRequestHandler,
        // new UnknownCommandRequestHandler
    )
    .lambda()