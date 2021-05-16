const GameUtils = require('../util/game-utils')

module.exports = async (args, type, rawMsg, author, time) => {
    console.log('Command rosesforall executed')
    const count = parseInt(args[0])
    if(isNaN(count)) return GameUtils.sendRoseBundle(1)
    GameUtils.sendRoseBundle(count)
}

module.exports.aliases = ['rb', 'rosebundle', 'bundle', 'rfa']
module.exports.usage = '<prefix><cmd> <?count>'
module.exports.description = 'Sends a given amount of rosebundles (default: 1) into the game/lobby'
