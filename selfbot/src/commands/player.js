const PlayerUtils = require('../util/player-utils')
const ApiUtils = require('../util/api-utils')
const GameUtils = require('../util/game-utils')

module.exports = async (args, type, rawMsg, author, time) => {
    console.log('Command player executed')
    const search = await ApiUtils.searchForUsername(args[0])
    if(!search[0]) return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} No player found for that username`, type)
    const player = await ApiUtils.getPlayerInfoById(search[0].id)
    const playerInfo = `Player '${player.username}': [ Level: ${player.level} | Status: ${player.playerStatus} | Creation Date: ${new Date(player.creationTime).toLocaleDateString()} ]`
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} ${playerInfo}`, type)
}

module.exports.aliases = ['p', 'pl', 'playerinfo']
module.exports.usage = '<prefix><cmd> <username>'
module.exports.description = 'Displays detailed information about a given player'
