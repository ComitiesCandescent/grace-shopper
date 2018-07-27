const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Cart
