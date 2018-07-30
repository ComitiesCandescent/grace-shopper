const express = require('express')
const router = express.Router()
const Product = require('../db/models/product')

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    res.json(await Product.findAll())
  } catch (error) {
    next(error)
  }
})

// GET /api/products/:productId
router.get('/:productId', async (req, res, next) => {
  try {
    res.json(
      await Product.findOne({
        where: {
          id: req.params.productId
        }
      })
    )
  } catch (error) {
    next(error)
  }
})

module.exports = router
