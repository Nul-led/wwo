module.exports = class PlayerUtils {
    static setPlayersFromArray(data) {
        const obj = {}
        data.forEach(p => {
            obj[p.id] = {
                id: p.id,
                username: p.username,
                connected: p.connectionStatus === 'connected',
                level: p.level,
                gridIdx: p.gridIdx
            }
        })
        this.modifyGlobal(obj)
    }
    static setPlayerFromObject(data) {
        if(!data.id || !data.username) return
        const obj = {}
        obj[data.id] = {
            id: data.id,
            username: data.username,
            connected: data.connectionStatus === 'connected',
            level: data.level || 1,
            gridIdx: data.gridIdx || 0
        }
        this.modifyGlobal(obj)     
    }
    static modifyGlobal(obj) {
        Object.entries(obj).forEach(e => {
            process.vars.players[e[0]] = e[1]
        })
    }
    static getPlayerById(id) {
        return process.vars.players[id]
    }
    static getPlayerByUsername(username) {
        return Object.values(process.vars.players).find(v => v.username === username)
    }
    static getPlayerByGridIdx(gridIdx) {
        return Object.values(process.vars.players).find(v => v.gridIdx === gridIdx)
    }
    static getPlayerUsernameById(id) {
        const player = this.getPlayerById(id)
        if(player) return player.username
    }
    static getGridIdxById(id) {
        const player = this.getPlayerById(id)
        if(player) return player.gridIdx
    }
    static getPlayerIdByGridIdx(gridIdx) {
        const player = this.getPlayerByGridIdx(gridIdx)
        if(player) return player.id
    }
    static getPlayerCount() {
        return Object.keys(process.vars.players).length
    }
}
