const PlayerUtils = require('../util/player-utils')
const GameUtils = require('../util/game-utils')

module.exports = async (args, type, rawMsg, author, time) => {
    console.log('Command roses executed')
    const gridIdx = parseInt(args[0])
    const count = parseInt(args[1])
    if(isNaN(gridIdx)) return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invalid arguments (${process.vars.config.prefix}help)`, type)
    const playerId = PlayerUtils.getPlayerByGridIdx(gridIdx - 1).id
    if(!playerId) GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invalid arguments (${process.vars.config.prefix}help)`, type)
    if(isNaN(count)) return GameUtils.sendRoses(1, playerId)
    GameUtils.sendRoses(count, playerId)
}

module.exports.aliases = ['r', 'rose', 'rfp']
module.exports.usage = '<prefix><cmd> <target number> <?count>'
module.exports.description = 'Sends a given amount of roses (default: 1) to a given player'
