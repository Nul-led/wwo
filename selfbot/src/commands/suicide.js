const GameUtils = require('../util/game-utils')

module.exports = (args, type, rawMsg, author, time) => {
    console.log('Command suicide executed')
    if(process.vars.isFriendsGame)
        GameUtils.suicide()
}

module.exports.aliases = ['s']
module.exports.usage = '<prefix><cmd>'
module.exports.description = 'Kills yourself if you are in a game'
