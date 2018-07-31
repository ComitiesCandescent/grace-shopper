const Sequelize = require(`sequelize`)
const db = require(`../db`)

const Orders = db.define(`orders`, {
  orderProducts: {
    type: Sequelize.JSON
  },
  shippingAdd: {
    type: Sequelize.JSON
  },
  billingAdd: {
    type: Sequelize.JSON
  },
  strype: {
    type: Sequelize.JSON
  },
  totalPrice: {
    type: Sequelize.JSON
  },
})

module.exports = Orders
