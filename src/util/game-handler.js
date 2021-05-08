const PlayerUtils = require('./player-utils')
const GameUtils = require('./game-utils')
const PlayerHandler = require('./player-handler')

module.exports = class GameHandler {
    static emojiReceived(data) {
        if(process.vars.config.logging.emojis)
            console.log(`Player ${PlayerUtils.getPlayerUsernameById(data.playerId)} just showed an emoji`)
        
        if(process.vars.config.replicateEmojisFromOtherUsers)
            GameUtils.showEmoji(data.emojiId)
    }
    static gameStarted(data) {
        PlayerHandler.gameStartedPlayers(data.players)
        process.vars.ownRole = data.role
        if(!process.vars.config.logging.gameStateChanges) return
        console.log(`Started game with role ${data.role}`)
    }
    static gameOver(data) {
        if(process.vars.config.openNewLobbyAfterGameOver) 
            setTimeout(() => process.emit('new-lobby'), 5000)
        if(!process.vars.config.logging.gameResults) return
        let obj = {}
        Object.keys(data.playersRoleMapping).forEach(entry => obj[PlayerUtils.getPlayerUsernameById(entry)] = {})
        Object.entries(data.playersWinnerMapping).forEach(p => obj[PlayerUtils.getPlayerUsernameById(p[0])].isWinner = p[1])
        Object.entries(data.playersRoleMapping).forEach(p => obj[PlayerUtils.getPlayerUsernameById(p[0])].role = p[1])
        console.table(obj)
    }
    static gameOverAwards(data) {
        const log = () => console.log(`Gained ${data.playerAward.awardedLevels} level, ${data.playerAward.awardedTotalXp} xp and ${data.playerAward.awardedLootBoxes} as reward from the game`)
        if(process.vars.config.autoDoubleXp) {
            if(data.playerAward.canClaimDoubleXp) 
                return GameUtils.doubleXp()
            return process.vars.config.logging.gameRewards ? log() : null
        }
        return process.vars.config.logging.gameRewards ? log() : null
    }
    static votingPhase() {
        if(!process.vars.config.logging.dayVoting) return
        console.log(`Voting started`)
    }
    static voteAdded(data) {
        if(!process.vars.config.logging.dayVoting) return
        console.log(`Player ${PlayerUtils.getPlayerUsernameById(data.playerId)} voted for ${PlayerUtils.getPlayerUsernameById(data.targetPlayerId)}`)
    }
    static voteRemoved(data) {
        if(!process.vars.config.logging.dayVoting) return
        console.log(`Player ${PlayerUtils.getPlayerUsernameById(data.playerId)} removed their vote`)
    }
    static roseReceived(data, type) {
        if(!process.vars.config.logging.rosesForYou) return
        switch(type) {
            case 'rfa':
                console.log(`Player ${PlayerUtils.getPlayerUsernameById(data.fromPlayerId)} has sent everyone ${data.amount} rose(s)`)
                return
            case 'rfp':
                if(data.targetPlayerId === process.vars.player)
                    console.log(`Player ${PlayerUtils.getPlayerUsernameById(data.fromPlayerId)} has sent you ${data.amount} rose(s)`)
                return
        }
    }
    static dayStarted(data) {
        if(process.vars.config.logging.dayAndNightCycle)
            console.log(`Day ${data.day} just started`)
    }
    static nightStarted(data) {
        if(process.vars.config.logging.dayAndNightCycle)
            console.log(`Night ${data.day} just started`)
    }

}
