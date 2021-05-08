module.exports = class ChatUtils {
    static publicChatMsg(msg) {
        process.vars.socket.emit('game:chat-public:msg', JSON.stringify({
            msg: msg
        }))
    }
    static werewolvesChatMsg(msg) {
        process.vars.socket.emit('game:chat-werewolves:msg', JSON.stringify({
            msg: msg
        }))
    }
    static zombieChatMsg(msg) {
        process.vars.socket.emit('game:chat-zombie:msg', JSON.stringify({
            msg: msg
        })) 
    }
    static banditChatMsg(msg) {
        process.vars.socket.emit('game:chat-bandit:msg', JSON.stringify({
            msg: msg
        })) 
    }
    static jailerChatMsg(msg) {
        process.vars.socket.emit('game:chat-jailer:msg', JSON.stringify({
            msg: msg
        })) 
    }
    static lobbyChatMsg(msg) {
        process.vars.socket.emit('lobby:chat-msg', JSON.stringify({
            msg: msg
        })) 
    }
    static friendsChatMsg(msg) {
        process.vars.socket.emit('lobby-setup-chat', JSON.stringify({
            msg: msg
        })) 
    }
}