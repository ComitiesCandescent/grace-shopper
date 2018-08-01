const express = require(`express`)
const router = express.Router()
const User = require(`../db/models/user`)
const Cart = require(`../db/models/cart`)
const Orders = require(`../db/models/orders`)
const stripe = require(`stripe`)(`sk_test_TwTTlid3GeOG6YPydOjARw4I`)
// GET /api/cart
router.get(`/:userId`, async (req, res, next) => {
  try {
    const key = req.params.userId

    if (!isNaN(Number(key))) {
      Cart.findOrCreate({ where: { userId: Number(key) }, defaults: { cartProducts: req.body.products, userId: Number(key) } }).spread(result => res.json(result))

    } else {
      Cart.findOrCreate({ where: { session: key }, defaults: { cartProducts: req.body.products, session: key } }).spread(result => res.json(result))
    }
  } catch (error) {
    next(error)
  }
})
// PUT / api / cart /: userId
router.put(`/:userId`, async (req, res, next) => {
  try {
    const key = req.params.userId

    if (!isNaN(Number(key))) {
      Cart.findOrCreate({
        where: { userId: Number(key) },
        defaults: { cartProducts: req.body.products, userId: Number(key) },
        include: [User]
      })
        .spread((result, created) => {
          if (!created) {
            Cart.update(
              { cartProducts: req.body.products },
              { where: { id: result.id } }
            )
          }
        })

    } else {
      Cart.findOrCreate({
        where: { session: key },
        defaults: { cartProducts: req.body.products, session: key }
      })
        .spread((result, created) => {
          if (!created) {
            Cart.update(
              { cartProducts: req.body.products },
              { where: { session: result.session } }
            )
          }
        })
    }
    res.status(201).send()
  } catch (err) {
    next(err)
  }
})
router.post(`/order`, async (req, res, next) => {
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
    const { status } = await stripe.charges.create({
      amount: req.body.price,
      currency: `usd`,
      description: `A purchase of grass`,
      source: req.body.id
    })

    res.status(201).json({ status })
  } catch (err) {
    res.status(500).end()
  }
})

// DELETE /api/cart/:userId
router.delete(`/:userId`, (req, res, next) => {
  Cart.destroy({ where: { userId: req.params.userId } })
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

module.exports = router
