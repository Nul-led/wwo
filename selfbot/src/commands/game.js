const GameUtils = require('../util/game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = (args, type, rawMsg, author, time) => {
    console.log('Command game executed')
    const gamemode = process.vars.gameSettings.gameMode
    const gameId = process.vars.gameId
    const isLobby = process.vars.isFriendsGame
    const playerCount = PlayerUtils.getPlayerCount()
    GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Current Game: [ Gamemode: ${gamemode} | PlayerCount: ${playerCount} | IsLobby: ${isLobby} | GameID: ${gameId} ]`, type)
}

module.exports.aliases = ['g', 'gameinfo']
module.exports.usage = '<prefix><cmd>'
module.exports.description = 'Displays detailed information about the current game/lobby'
