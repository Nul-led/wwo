const fetch = require('node-fetch')
const data = require('../data.json')

module.exports = async (token) => {
    const res = await fetch(`${data.endpoints.refresh_token}?key=${data.apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Android-Package': data.package,
            'X-Android-Cert': data['sha-1']
        },
        body: `grant_type=refresh_token&refresh_token=${token}`
    })
    return await res.json()
}
