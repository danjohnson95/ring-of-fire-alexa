/**
 * Intent Handlers
 */
import NewGameRequestHandler from './handlers/NewGameRequestHandler'
import UnknownCommandRequestHandler from './handlers/UnknownCommandRequestHandler'
import { SkillBuilders } from 'ask-sdk';

export const handler = SkillBuilders
    .standard()
    .addRequestHandlers(
        new NewGameRequestHandler,
        new UnknownCommandRequestHandler
    )
    .lambda()