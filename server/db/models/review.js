const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  stars: {
    type: Sequelize.INTEGER
  }
})

module.exports = Review
