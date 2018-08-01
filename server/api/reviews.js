const express = require('express')
const router = express.Router()
const Review = require('../db/models/review')

// /api/reviews
router.get('/', async (req, res, next) => {
  try {
    res.json(await Review.findAll())
  } catch (error) {
    next(error)
  }
})

// /api/reviews/product/:productId
router.get('/product/:productId', async (req, res, next) => {
  try {
    res.json(await Review.findAll({
      where:{
        productId: req.params.productId
      }
    }))
  } catch (error) {
    next(error)
  }
})

router.post('/product/:productId', async (req, res, next) => {
  try {
    res.status(201).json(await Review.create({
      name: req.body.name,
      title: req.body.title,
      body: req.body.body,
      stars: req.body.stars,
      productId: req.body.productId,
      userId: req.body.userId
    }))
  } catch (error) {
    next(error)
  }
})

// /api/reviews/:reviewId
router.get('/:reviewId', async (req, res, next) => {
  try {
    res.json(
      await Review.findOne({
        where: {
          id: req.params.reviewId
        }
      })
    )
  } catch (error) {
    next(error)
  }
})

module.exports = router
