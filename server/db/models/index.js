const User = require(`./user`)
const Product = require(`./product`)
const Review = require(`./review`)
const Cart = require(`./cart`)
const Orders = require(`./orders`)
// Cart should have orders table to link product to User

Orders.belongsTo(User)
User.hasMany(Orders)

Review.belongsTo(Product)
Product.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

Cart.belongsTo(User)
User.hasOne(Cart)
module.exports = {
  User,
  Product,
  Review,
  Cart,
  Orders
}
