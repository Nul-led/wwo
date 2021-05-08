const config = require('./config/config.json')
const credentials = require('./config/credentials.json')
const permissions = require('./config/permissions.json')
const Auth = require('./src/util/auth')
const ApiUtils = require('./src/util/api-utils')
const CommandHandler = require('./src/util/command-handler')
const FriendsLobby = require('./src/friends-lobby')
const PublicGame = require('./src/game-lobby')
const GameUtils = require('./src/util/game-utils')

const authenticated = async () => {
    setTimeout(() => Auth.authenticate(), 3300000) 
    const player = await ApiUtils.getOwner()
    const friends = await ApiUtils.getFriends()
    const inventory = await ApiUtils.getInventory()
    setupEnvironmentalVars({ player: player, friends: friends, inventory: inventory })
}

const setupEnvironmentalVars = ({ player, friends, inventory }) => {  
    process.vars.player = player
    process.vars.friends = friends
    process.vars.inventory = inventory
    if(process.vars.config.addOwnerToPermittedUsersByDefault) 
        process.vars.permissions.permittedUsers.push(player.id)

    if(process.vars.init) {
        process.vars.init = false
        new FriendsLobby()
    }
}

process.on('owner-joined', () => {
    process.vars.ownerJoined = true
    console.log(`Owner ${process.vars.player.username} joined the game`)
})

process.on('opened-lobby', () => {
    process.vars.ownerJoined = true
    setTimeout(() => { 
        process.vars.ownerJoined = false 
    }, process.vars.config.inviteOwnerInterval) 
    selfInvite()
})

process.on('new-lobby', () => {
    cleanUpEnvironment()
    new FriendsLobby()
})

process.on('join-game', data => {
    cleanUpEnvironment()
    new PublicGame(data.gameId)
})

const cleanUpEnvironment = () => {
    if(process.vars.socket)
        process.vars.socket.close()
    process.vars.players = {}
    process.vars.gameId = null
    CommandHandler.buildCommandMap()
}

const selfInvite = () => {
    const inviteInterval = setInterval(() => {
        if(process.vars.ownerJoined) return clearInterval(inviteInterval)
        GameUtils.invitePlayer(process.vars.player.id)
    }, config.inviteOwnerInterval)
    setTimeout(() => {
        if(!process.vars.ownerJoined) {
            clearInterval(inviteInterval)
            cleanUpEnvironment()
            process.emit('new-lobby')
        }
    }, config.lobbyTimeoutForOwnerJoin)
}

(() => {
    process.vars = {}
    process.vars.permissions = permissions
    process.vars.config = config
    process.vars.credentials = credentials
    process.vars.init = true
    process.on('authenticated', () => authenticated())
    cleanUpEnvironment()
    Auth.authenticate()
})()