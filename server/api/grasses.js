const express = require('express');
const router = express.Router();
const Product = require('../db/models/product');

router.get('/', async (req, res, next) => {
    try {
      res.json(await Product.findAll());
    } catch (error) {
      next(error);
    }
  })
router.get('/:productId', async (req, res, next) => {
try {
    res.json(await Product.findById(req.params.productId))
} catch (error) {
    next(error);
}

});

module.exports = router
