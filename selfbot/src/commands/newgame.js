module.exports = (args, type, rawMsg, author, time) => {
    console.log('Command newgame executed')
    process.emit('new-lobby')
}

module.exports.aliases = ['ng']
module.exports.usage = '<prefix><cmd>'
module.exports.description = 'Opens a new friends lobby for the owner to join'
