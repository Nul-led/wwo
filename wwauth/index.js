module.exports = class Auth {
    static async signIn(email, password, onlyToken) {
        const res = await new require('./src/sign_in')(email, password)
        this.validateContent(res);
        if(onlyToken) return res.idToken
        return res
    }
    static async signUp(email, password, onlyToken) {
        const res = await new require('./src/sign_up')(email, password)
        this.validateContent(res)
        if(onlyToken) return res.idToken
        return res
    }
    static async refreshToken(token, onlyToken) {
        const res = await new require('./src/refresh_token')(token)
        this.validateContent(res)
        if(onlyToken) return res.id_token
        return res
    }
    static validateContent(data) {
        if(data.error)
            throw new Error(data.error.message)
    }
}
