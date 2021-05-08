const fs = require('fs')
const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = async (args, type, rawMsg, author, time) => {
    console.log('Command prefix executed')
    if(!args[0]) return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} invalid arguments (${process.vars.config.prefix}help)`, type)
    process.vars.config.prefix = args[0]
    fs.writeFileSync('./config/config.json', JSON.stringify(process.vars.config))
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} prefix changed to ${process.vars.config.prefix}`, type)
}

module.exports.aliases = []
module.exports.usage = '<prefix><cmd> <new prefix>'
module.exports.description = 'Changes the prefix for running commands'