const io = require('socket.io-client')
const Handler = require('./util/handler')
const GameHandler = require('./util/game-handler')
const PlayerHandler = require('./util/player-handler')

module.exports = class PublicGame {
    constructor(gameId) {
        this.socket = io.connect('https://api-games.werewolf-apps.com', {
            query: {
                firebaseToken: process.vars.accessToken,
                gameId: gameId,
                reconnect: true
            },
            transports: ['websocket']
		});
        process.vars.socket = this.socket
        process.vars.isFriendsGame = false
        this.configureListeners()
    }
    configureListeners() {
        this.socket.on('game-joined', data => Handler.joinedGame(JSON.parse(data)))
        this.socket.on('error-user-banned', data => Handler.userBanned(JSON.parse(data)))
        this.socket.on('error-api', data => Handler.apiError(JSON.parse(data)))
        this.socket.on('game:chat-public:msg', data => Handler.chatMessage(JSON.parse(data), 'public'))
        this.socket.on('game:chat-werewolves:msg', data => Handler.chatMessage(JSON.parse(data), 'werewolves'))
        this.socket.on('game:chat-zombie:msg', data => Handler.chatMessage(JSON.parse(data), 'zombie'))
        this.socket.on('game:chat-bandit:msg', data => Handler.chatMessage(JSON.parse(data), 'bandit'))
        this.socket.on('game:chat-jailer:msg', data => Handler.chatMessage(JSON.parse(data), 'jailer'))
        this.socket.on('lobby:chat-msg', data => Handler.chatMessage(JSON.parse(data), 'lobby-public'))
        this.socket.on('roses-for-all', data => GameHandler.roseReceived(data, 'rfa'))
        this.socket.on('roses-for-player', data => GameHandler.roseReceived(data, 'rfp'))
        this.socket.on('game-started', data => GameHandler.gameStarted(JSON.parse(data)))
        this.socket.on('game-day-voting-started', () => GameHandler.votingPhase())
        this.socket.on('game-day-vote-set', data => GameHandler.voteAdded(JSON.parse(data)))
        this.socket.on('game-day-vote-remove', data => GameHandler.voteRemoved(JSON.parse(data)))
        this.socket.on('game-over-awards-available', data => GameHandler.gameOverAwards(JSON.parse(data)))
        this.socket.on('show-emoji', data => GameHandler.emojiReceived(JSON.parse(data)))
        this.socket.on('game-game-over', data => GameHandler.gameOver(JSON.parse(data)))
        this.socket.on('game-day-started', data => GameHandler.dayStarted(JSON.parse(data)))
        this.socket.on('game-night-started', data => GameHandler.nightStarted(JSON.parse(data)))
        this.socket.on('players-and-equipped-items', data => PlayerHandler.playersAndEquippedItems(JSON.parse(data)))
        this.socket.on('player-disconnected', data => PlayerHandler.playerDisconnected(JSON.parse(data)))
        this.socket.on('player-connected', data => PlayerHandler.playerConnected(JSON.parse(data)))
        this.socket.on('player-joined-and-equipped-items', data => PlayerHandler.playerJoined(JSON.parse(data)))
        this.socket.on('game-settings-changed', data => Handler.gameSettings(JSON.parse(data)))
    }
}