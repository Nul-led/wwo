const fs = require('fs')
const GameUtils = require('./game-utils')
const PlayerUtils = require('../util/player-utils')

module.exports = class CommandHandler {
    static cmdFromAlias(cmd) {
        if(process.vars.aliases.has(cmd))
            return process.vars.aliases.get(cmd)
    }
    static executeCommand(cmd, args, type, rawMessage, author, time) {
        const cmdFromAlias = this.cmdFromAlias(cmd)
        if(cmdFromAlias) cmd = cmdFromAlias
        if(!process.vars.commands.has(cmd)) return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Unknown command`, type)
        if(!this.isPermitted(cmd, author)) return GameUtils.sendChatMsg(`@${PlayerUtils.getGridIdxById(author) + 1} Missing permissions`, type)
        new require(`../commands/${process.vars.commands.get(cmd)}`)(args, type, rawMessage, author, time)
    }
    static buildCommandMap() {
        process.vars.commands = new Map()
        const files = fs.readdirSync('./src/commands')
        files.forEach(file => process.vars.commands.set(file.substring(0, file.indexOf('.')), file))
        this.buildAliasMap()
    }
    static buildAliasMap() {
        process.vars.aliases = new Map()
        process.vars.commands.forEach((val, key) => {
            const aliases = require(`../commands/${val}`).aliases
            aliases.forEach(val => {
                process.vars.aliases.set(val, key)
            }) 
        })
    }
    static isPermitted(cmd, playerId) {
        const perms = process.vars.permissions
        if(perms.publicCmds.indexOf(cmd) !== -1) return true
        if(perms.disabledCmds.indexOf(cmd) !== -1) return false
        const isPermittedUser = process.vars.permissions.permittedUsers.indexOf(playerId) !== -1
        if(perms.restrictedCmds.indexOf(cmd) === -1) {
            console.warn(`Missing permission config for command ${cmd}`)
            return false
        }
        if(isPermittedUser) return true
        return false
    }
}