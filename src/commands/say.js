const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = (args, type, rawMsg, author, time) => {
    console.log('Command say executed')
    GameUtils.sendChatMsg(`(${PlayerUtils.getPlayerUsernameById(author)}): "${rawMsg}"`, type)
}

module.exports.aliases = []
module.exports.usage = '<prefix><cmd> <string to display>'
module.exports.description = 'Command mainly intended to check the bots functionality'