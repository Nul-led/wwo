const PlayerUtils = require('../util/player-utils')
const GameUtils = require('../util/game-utils')

module.exports = async (args, type, rawMsg, author, time) => {
    console.log('Command typing executed')
    if(!args[0])
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invalid arguments (${process.vars.config.prefix}help)`, type)
    const doAnimation = args[0] === 'true'
    GameUtils.toggleTypingAnimation(doAnimation)
}

module.exports.aliases = ['type', 'tanim']
module.exports.usage = '<prefix><cmd> <boolean>'
module.exports.description = 'Toggles typing animation visible in friends lobby'
