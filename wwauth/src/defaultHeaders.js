const data = require('../data.json')
module.exports = {
    'Content-Type': 'application/json',
    'X-Android-Package': data.package,
    'X-Android-Cert': data['sha-1']
}
