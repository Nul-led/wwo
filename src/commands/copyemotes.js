const fs = require('fs')
const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = async (args, type, rawMsg, author, time) => {
    console.log('Command copyemotes executed')
    process.vars.config.replicateEmojisFromOtherUsers = !process.vars.config.replicateEmojisFromOtherUsers
    fs.writeFileSync('./config/config.json', JSON.stringify(process.vars.config))
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} toggled emoji copying to ${process.vars.config.replicateEmojisFromOtherUsers}`, type)
}

module.exports.aliases = ['emotes', 'ce']
module.exports.usage = '<prefix><cmd>'
module.exports.description = 'Toggles emoji copying on and off'