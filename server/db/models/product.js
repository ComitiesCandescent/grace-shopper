const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.FLOAT
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://previews.123rf.com/images/digitalgenetics/digitalgenetics1112/digitalgenetics111200025/11350545-3d-colorful-grass-on-white-background.jpg'
  },
  description: {
    type: Sequelize.TEXT
  }
})
Product.beforeCreate(productOne => {
  if (productOne.imageUrl === '') {
    productOne.imageUrl =
      'https://previews.123rf.com/images/digitalgenetics/digitalgenetics1112/digitalgenetics111200025/11350545-3d-colorful-grass-on-white-background.jpg'
  }
})

module.exports = Product
