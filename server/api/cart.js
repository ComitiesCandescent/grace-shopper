const express = require('express')
const router = express.Router()
const Cart = require('../db/models/cart')

// /api/:userId/cart
router.get('/', async (req, res, next) => {
  try {
    res.json(await Cart.findOne({where: {userId: req.params.userId}}))
  } catch (error) {
    next(error)
  }
})

router.delete('/')

module.exports = router
