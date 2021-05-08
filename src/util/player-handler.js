const PlayerUtils = require('./player-utils')

module.exports = class PlayerHandler {
    static playersAndEquippedItems(data) {
        PlayerUtils.setPlayersFromArray(data.players)
    }
    static playerDisconnected(data) {
        PlayerUtils.setPlayerFromObject(data)
    }
    static playerConnected(data) {
        PlayerUtils.setPlayerFromObject(data)
    }
    static playerJoined(data) {
        PlayerUtils.setPlayerFromObject(data.player)
    }
    static gameStartedPlayers(data) {
        PlayerUtils.setPlayerFromObject(data)
    }
}