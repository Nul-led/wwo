const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = (args, type, rawMsg, author, time) => {
    console.log('Command aliases executed')
    if(!args[0])
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invalid arguments`, type)
    if(process.vars.aliases.has(args[0]))
        args[0] = process.vars.aliases.get(args[0])
    if(!process.vars.commands.has(args[0]))
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invalid command`, type)
    const usage = require(`../commands/${args[0]}`).usage
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Usage for ${args[0]}: ${usage} (? before param = optional)`, type)
}

module.exports.aliases = []
module.exports.usage = '<prefix><cmd> <command to look up>'
module.exports.description = 'Displays how to use for a given command (? before parameter means its optional)'