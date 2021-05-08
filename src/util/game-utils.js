const ChatUtils = require('./chat-utils')

module.exports = class GameUtils {
    static showEmoji(id) {
        process.vars.gameSocket.emit('show-emoji', JSON.stringify({
            emojiId: id
        }))
    }
    static sendChatMsg(msg, type) {
        switch(type) {
            case 'public':
                ChatUtils.publicChatMsg(msg)
                return
            case 'werewolves':
                ChatUtils.werewolvesChatMsg(msg)
                return
            case 'zombie':
                ChatUtils.zombieChatMsg(msg)
                return
            case 'bandit':
                ChatUtils.banditChatMsg(msg)
                return
            case 'jailer':
                ChatUtils.jailerChatMsg(msg)
                return
            case 'lobby-public':
                ChatUtils.lobbyChatMsg(msg)
                return
            case 'friends-setup':
                ChatUtils.friendsChatMsg(msg)
                return
        }

    }
    static sendRoses(count, targetPlayerId) {
        process.vars.socket.emit('roses-for-player', JSON.stringify({
            targetPlayerId: targetPlayerId,
            amount: count
        }))
    }
    static sendRoseBundle(count) {
        process.vars.socket.emit('roses-for-all', JSON.stringify({
            amount: count
        }))
    }
    static doubleXp() {
        process.vars.socket.emit('game-over-double-xp')
    }
    static suicide() {
        process.vars.socket.emit('game-commit-suicide')
    }
    static invitePlayer(id) {
        process.vars.socket.emit('friends-game-invite-player', JSON.stringify({
            targetPlayerId: id
        }))
    }
    static cancelInvite(id) {
        process.vars.socket.emit('friends-game-cancel-invite-player', JSON.stringify({
            targetPlayerId: id
        }))
    }
    static toggleAllowInvite() {
        process.vars.socket.emit('friends-game-allow-everyone-to-invite')
    }
    static toggleTypingAnimation(boolean) {
        boolean ? process.vars.socket.emit('lobby-typing') : process.vars.socket.emit('lobby-typing-clear')
    }
}
