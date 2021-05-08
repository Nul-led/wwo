const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = (args, type, rawMsg, author, time) => {
    console.log('Command invitefriends executed')
    if(!process.vars.isFriendsGame)
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} currently not available`, type)
    if(process.vars.friends.length === 0)
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} no friends to invite`, type)
    const count = parseInt(args[0])
    if(isNaN(count)) {
        process.vars.friends.forEach(f => GameUtils.invitePlayer(f.id))
        return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invited friends`, type)
    }
    process.vars.friends.forEach(f => { 
        for(let i = 0; i < count; i++)
            GameUtils.invitePlayer(f.id)
    })
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Invited friends ${count} times`, type)
}

module.exports.aliases = ['if', 'invf']
module.exports.usage = '<prefix><cmd> <?count>'
module.exports.description = 'Sends a specific count of invites to all players in the bot owners friendlist'