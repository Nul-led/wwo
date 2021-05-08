const io = require('socket.io-client')
const Handler = require('./util/handler')
const PlayerHandler = require('./util/player-handler')

module.exports = class FriendsLobby {
    constructor() {
        this.socket = io.connect('https://api-games.werewolf-apps.com', {
            query: {
                firebaseToken: process.vars.accessToken,
                gameMode: process.vars.config.defaultGameMode,
                playWithFriends: true
            },
            transports: ['websocket']
        })
        process.vars.socket = this.socket
        process.vars.isFriendsGame = true
        this.configureListeners()
    }
    configureListeners() {
        this.socket.on('game-joined', data => Handler.joinedGame(JSON.parse(data)))
        this.socket.on('friends-game-published', data => Handler.friendsPublished(JSON.parse(data)))
        this.socket.on('error-user-banned', data => Handler.userBanned(JSON.parse(data)))
        this.socket.on('error-api', data => Handler.apiError(JSON.parse(data)))
        this.socket.on('lobby-setup-chat', data => Handler.chatMessage(JSON.parse(data), 'friends-setup'))
        this.socket.on('players-and-equipped-items', data => PlayerHandler.playersAndEquippedItems(JSON.parse(data)))
        this.socket.on('player-disconnected', data => PlayerHandler.playerDisconnected(JSON.parse(data)))
        this.socket.on('player-connected', data => PlayerHandler.playerConnected(JSON.parse(data)))
        this.socket.on('player-joined-and-equipped-items', data => PlayerHandler.playerJoined(JSON.parse(data)))
        this.socket.on('game-settings-changed', data => Handler.gameSettings(JSON.parse(data)))
    }
}