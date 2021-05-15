const ApiUtils = require('../util/api-utils')
const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = async (args, type, rawMsg, author, time) => {
    console.log('Command invite executed')
    if(!process.vars.isFriendsGame)
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} currently not available`, type)
    const search = await ApiUtils.searchForUsername(args[0])
    if(!search[0]) return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} No player found for that username`, type)
    const count = parseInt(args[1])
    if(isNaN(count)) {
        GameUtils.invitePlayer(search[0].id)
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invited ${search[0].username}`, type)
    }
    for(let i = 0; i < count; i++)
        GameUtils.invitePlayer(search[0].id)
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invited ${search[0].username} ${count} times`, type)
}

module.exports.aliases = ['i', 'inv']
module.exports.usage = '<prefix><cmd> <username> <?count>'
module.exports.description = 'Sends a specific count of invites to a given player'
