const fetch = require('node-fetch')
const data = require('../data.json')
const defaultHeaders = require('./defaultHeaders')

module.exports = async (email, password) => {
    const res = await fetch(`${data.endpoints.sign_in}?key=${data.apiKey}`, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    return await res.json()
}
