const Wrapper = require('arcwrapper')

module.exports = class ApiUtils {
    static async getOwner() {
        const res = await Wrapper.getSelfPlayer({ accessToken: process.vars.accessToken })
        return res
    }
    static async getInventory() {
        const res = await Wrapper.getInventory({ accessToken: process.vars.accessToken })
        return res
    }
    static async getFriends() {
        const res = await Wrapper.getFriends({ accessToken: process.vars.accessToken })
        return res
    }
    static async searchForUsername(username) {
        const res = await Wrapper.searchForPlayerByUsername({ accessToken: process.vars.accessToken, username: username })
        return res
    }
    static async getPlayerInfoById(id) {
        const res = await Wrapper.getPlayerStats({ accessToken: process.vars.accessToken, playerId: id })
        return res
    }
}

