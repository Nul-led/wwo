const ChatUtils = require('../util/chat-utils')
const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = (args, type, rawMsg, author, time) => {
    try {
        const res = eval(rawMsg)
        res ? GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} ${String(res)}`, type) :
            GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Eval executed`, type)
        console.log('Command eval executed')
    } catch(e) {
        console.warn('Command eval failed', '\n', e)
        GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Eval failed => console`, type)
    }
}

module.exports.aliases = []
module.exports.usage = '<prefix><cmd> <string to evaluate>'
module.exports.description = 'Evaluates a given string of valid javascript code'