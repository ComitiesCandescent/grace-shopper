const express = require('express')
const router = express.Router()
const Cart = require('../db/models/cart')
const stripe = require('stripe')('sk_test_TwTTlid3GeOG6YPydOjARw4I')

// /api/:userId/cart
router.get('/', async (req, res, next) => {
  try {
    res.json(await Cart.findOne({where: {userId: req.params.userId}}))
  } catch (error) {
    next(error)
  }
})
router.post('/charge', async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })

    res.json({status})
  } catch (err) {
    res.status(500).end()
  }
})
router.delete('/')

module.exports = router
