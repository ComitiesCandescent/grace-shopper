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
    res.json(await Review.findOne({
      where:{
        productId: req.params.productId
      }
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
