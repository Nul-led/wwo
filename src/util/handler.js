const CommandHandler = require('./command-handler')
const PlayerUtils = require('./player-utils')

module.exports = class Handler {
    static joinedGame(data) {
        if(process.vars.isFriendsGame) {
            process.emit('opened-lobby')
        }
        if(process.vars.config.logging.gameStateChanges)
            console.log(`Joined a new game with the id ${data.gameId}`)
        process.vars.gameId = data.gameId
    }
    static friendsPublished(data) {
        (data.gameId ? () => {
            if(process.vars.config.logging.gameStateChanges)
                console.log(`Received new gameId ${data.gameId} \nSwitching over to new game...`)
            process.emit('join-game', { gameId: data.gameId })
        } : () => { 
            if(process.vars.config.exitOnGameIdError)
                throw new Error('Did not receive gameId') 
            console.warn('Did not receive gameId, opening new lobby')
            process.emit('new-lobby')
        }).call()
    }
    static userBanned(data) {
         //Uncomment to see the exact reason / data:
         //console.log(data)
        throw new Error('Error user banned')
    }
    static apiError(data) {
        console.warn(`Api responded with an error: \n ${data}`)
    }
    static gameSettings(data) {
        process.vars.gameSettings = data
    }
    static chatMessage(data, type) {
        if(data.msgKey) {
            switch(data.msgKey) {
                case 'player-joined':
                    if(process.vars.isFriendsGame)
                        if(data.msgArgs['player-id'] === process.vars.player.id && !process.vars.ownerJoined)
                            return process.emit('owner-joined')
                    if(process.vars.config.logging.playerJoins)
                        return console.log(`Player ${PlayerUtils.getPlayerUsernameById(data.msgArgs['player-id'])} joined the game`)
                    return
                case 'player-disconnected':
                    if(process.vars.isFriendsGame)
                        if(data.msgArgs['player-id'] === process.vars.player.id)
                            return process.emit('opened-lobby')
                    return
            }
        }       
            
        if(!data.msg) return
        if(process.vars.config.logging.chat) console.log(`Chat: ${data.msg}`)
        if(!data.msg.startsWith(process.vars.config.prefix)) return
        
        const split = data.msg.split(' ')
        const args = split.slice(1)
        const cmd = split[0].substr(process.vars.config.prefix.length).toLowerCase()
        const rawMessage = data.msg.substr(split[0].length + process.vars.config.prefix.length)
        const author = data.authorId
        const time = data.date
        CommandHandler.executeCommand(cmd, args, type, rawMessage, author, time)
    }
}