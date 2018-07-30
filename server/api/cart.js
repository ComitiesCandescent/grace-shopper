const express = require('express')
const router = express.Router()
const Cart = require('../db/models/cart')
const stripe = require('stripe')('sk_test_TwTTlid3GeOG6YPydOjARw4I')

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    res.json(await Cart.findOne({where: {userId: req.params.userId}}))
  } catch (error) {
    next(error)
  }
})

// POST /api/cart/charge
router.post('/charge', async (req, res, next) => {
  try {
    const {status} = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'A purchase of grass',
      source: req.body
    })

    res.status(201).json({status})
  } catch (err) {
    res.status(500).end()
  }
})

// DELETE /api/cart/:userId
router.delete('/:userId', (req, res, next) => {
  Cart.destroy({where: {userId: req.params.userId}})
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

module.exports = router
