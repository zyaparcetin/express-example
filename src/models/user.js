const Review = require('./review')

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.likes = []
    this.basket = []
    this.reviews = []
  }

  greet() {
    console.log(`Hello ${this.name}, welcome to Joy Toys!`)
  }

  likeProduct(product) {
    this.likes.push(product)
    product.likedBy.push(this.name)
  }

  addToBasket(product) {
    this.basket.push(product)
  }

  review(product, text, rate) {
    const review = new Review(text, rate, this.name)
    this.reviews.push(review)
    product.reviews.push(review)
  }
}

module.exports = User

/* class User {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.bio = ''
  }

  get profile() {
    return `${this.name} (${this.age}), Bio: ${this.bio}`
  }
}

module.exports = User */
