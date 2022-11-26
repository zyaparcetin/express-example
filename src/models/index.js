const User = require('./user')
const Product = require('./product')
// const Review = require('./review')

const kerem = new User('kerem', 11)
const mete = new User('mete', 7)

const teddyBear = new Product('teddy bear', 19.99)
const kitty = new Product('kitty', 14.99)
const bunny = new Product('bunny', 9.99)
const froglet = new Product('froglet', 9.99)
const products = [teddyBear, kitty, bunny, froglet]

mete.greet()

kerem.addToBasket(kitty)
mete.addToBasket(teddyBear)

kerem.likeProduct(kitty)

kerem.review(kitty, 'Wonderful toy!', 5)

console.log(kerem)
console.log(mete)

console.log(kitty)

module.exports = { products }

/* const User = require('./user')

const armagan = new User('armagan', 20)
const steve = new User('steve', 22)
const zeynep = new User('zeynep', 38)

const users = [armagan, steve, zeynep]

module.exports = { users } */
