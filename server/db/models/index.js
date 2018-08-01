const User = require(`./user`)
const Product = require(`./product`)
const Review = require(`./review`)
const Cart = require(`./cart`)
const Orders = require(`./orders`)
const Promo = require('./promo')
// Cart should have orders table to link product to User

Orders.belongsTo(User)
User.hasMany(Orders)

Review.belongsTo(Product)
Product.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

Cart.belongsTo(User)
User.hasOne(Cart, {as: `user`})
module.exports = {
  User,
  Product,
  Review,
  Cart,
  Orders,
  Promo
}
