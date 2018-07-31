const Sequelize = require(`sequelize`)
const db = require(`../db`)

const Cart = db.define(`cart`, {
  cartProducts: {
    type: Sequelize.JSON
  }
})

module.exports = Cart
