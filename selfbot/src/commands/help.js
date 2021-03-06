const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = (args, type, rawMsg, author, time) => {
    console.log('Command aliases executed')
    if(!args[0])
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Command usage: '${process.vars.config.prefix}usage <cmd>', Command aliases: '${process.vars.config.prefix}aliases <cmd>', Command description: '${process.vars.config.prefix}help <cmd>'`, type)
    if(process.vars.aliases.has(args[0]))
        args[0] = process.vars.aliases.get(args[0])
    if(!process.vars.commands.has(args[0]))
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invalid command`, type)
    const description = require(`../commands/${args[0]}`).description
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} ${description}`, type)
}

module.exports.aliases = ['h']
module.exports.usage = '<prefix><cmd> <?command>'
module.exports.description = 'Displays information regarding commands in general or specific commands'
