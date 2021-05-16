const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = (args, type, rawMsg, author, time) => {
    console.log('Command aliases executed')
    if(!args[0])
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invalid arguments (${process.vars.config.prefix}help)`, type)
    if(process.vars.aliases.has(args[0]))
        args[0] = process.vars.aliases.get(args[0])
    if(!process.vars.commands.has(args[0]))
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invalid command (${process.vars.config.prefix}help)`, type)
    const aliases = require(`../commands/${args[0]}`).aliases
    if(aliases.length !== 0)
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Aliases for ${args[0]}: [ ${aliases.toString().replaceAll(',', ' | ')} ]`, type)
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Command ${args[0]} has no aliases`, type)
}

module.exports.aliases = []
module.exports.usage = '<prefix><cmd> <command to look up>'
module.exports.description = 'Displays all aliases for a given command'
