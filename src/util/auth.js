const WWAuth = require('wwauth')

module.exports = class Auth {
    static async authenticate() {
        WWAuth.signIn(process.vars.credentials.email, process.vars.credentials.password, true).then(res => {
            (res.length > 10 ? () => {
                process.vars.accessToken = res
                process.emit('authenticated')
            } : () => { throw new Error('Could not authenticate') }).call()
        })
    }
}