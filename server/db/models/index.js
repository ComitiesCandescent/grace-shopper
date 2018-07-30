const User = require(`./user`)
const Product = require(`./product`)
const Review = require(`./review`)
const Cart = require(`./cart`)

// Cart should have orders table to link product to User

Review.belongsTo(Product)
Product.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

Cart.belongsTo(User)

Cart.hasMany(Product)

module.exports = {
  User,
  Product,
  Review,
  Cart
}
