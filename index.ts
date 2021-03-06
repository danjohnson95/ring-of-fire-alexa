/**
 * Intent Handlers
 */
import NewGameRequestHandler from './handlers/NewGameRequestHandler'
import UnknownCommandRequestHandler from './handlers/UnknownCommandRequestHandler'
import SpecifyNumberOfPlayersRequestHandler from './handlers/SpecifyNumberOfPlayersRequestHandler'
import SpecifyPlayerRequestHandler from './handlers/SpecifyPlayerRequestHandler'
import NextCardRequestHandler from './handlers/NextCardRequestHandler'
import StopGameRequestHandler from './handlers/StopGameRequestHandler'

import * as Alexa from 'ask-sdk'

exports.handler = Alexa.SkillBuilders
    .standard()
    .addRequestHandlers(
        new NewGameRequestHandler,
        new SpecifyNumberOfPlayersRequestHandler,
        new SpecifyPlayerRequestHandler,
        new NextCardRequestHandler,
        new StopGameRequestHandler,
        new UnknownCommandRequestHandler
    )
    .withTableName('ringOfFireStorage')
    .withAutoCreateTable(true)
    .lambda()
