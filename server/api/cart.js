const express = require(`express`)
const router = express.Router()
const User = require(`../db/models/user`)
const Cart = require(`../db/models/cart`)
const Orders = require('../db/models/orders')
const stripe = require(`stripe`)(`sk_test_TwTTlid3GeOG6YPydOjARw4I`)
// GET /api/cart
router.get(`/:userId`, async (req, res, next) => {
  try {
    res.json(await Cart.findOne({where: {userId: req.params.userId}}))
  } catch (error) {
    next(error)
  }
})

// PUT /api/cart/:userId
router.put(`/:userId`, (req, res, next) => {
  try {
    Cart.findOrCreate({
      where: {userId: Number(req.params.userId)},
      defaults: {
        cartProducts: req.body.products,
        userId: Number(req.params.userId)
      },
      include: [User]
    }).spread((result, created) => {
      if (!created) {
        Cart.update({cartProducts: req.body.products}, {where: {id: result.id}})
      }
    })
    res.status(201).send()
  } catch (err) {
    next(err)
  }
})
router.post('/order', async (req, res, next) => {
  try {
    const newOrder = Orders.create(req.body)
    res.json(newOrder)
  } catch (error) {
    next(error)
  }
})
// POST /api/cart/charge
router.post(`/charge`, async (req, res, next) => {
  try {
    const {status} = await stripe.charges.create({
      amount: req.body.price,
      currency: `usd`,
      description: `A purchase of grass`,
      source: req.body.id
    })

    res.status(201).json({status})
  } catch (err) {
    res.status(500).end()
  }
})

// DELETE /api/cart/:userId
router.delete(`/:userId`, (req, res, next) => {
  Cart.destroy({where: {userId: req.params.userId}})
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

module.exports = router
