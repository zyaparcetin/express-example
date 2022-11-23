const User = require('./user')

const armagan = new User('armagan', 20)
const steve = new User('steve', 22)
const zeynep = new User('zeynep', 38)

const users = [armagan, steve, zeynep]

module.exports = { users }
