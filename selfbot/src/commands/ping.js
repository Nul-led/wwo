const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = (args, type, rawMsg, author, time) => {
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} pong with around ${(Date.now() - time)*2}ms delay`, type)
    console.log('Command ping executed')
}

module.exports.aliases = ['pang', 'peng', 'pong', 'pung']
module.exports.usage = '<prefix><cmd>'
module.exports.description = 'Command for checking if the bot is up and to measure its ping (returned value / 2)'
