const User = require('./user')
const Product = require('./product')
// const Review = require('./review')

const kerem = new User('kerem', 11)
const mete = new User('mete', 7)

const teddyBear = new Product('teddy bear', 19.99)
const kitty = new Product('kitty', 14.99)

kerem.addToBasket(kitty)
mete.addToBasket(teddyBear)

console.log(kerem)
console.log(mete)

// module.exports = { users }

/* const User = require('./user')

const armagan = new User('armagan', 20)
const steve = new User('steve', 22)
const zeynep = new User('zeynep', 38)

const users = [armagan, steve, zeynep]

module.exports = { users } */
