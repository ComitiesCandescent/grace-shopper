const router = require(`express`).Router()
const {Promo} = require(`../db/models`)
module.exports = router
router.put('/', async (req, res, next) => {
  try {
    const usePromo = await Promo.useCoupon(req.body)
    res.json(usePromo)
  } catch (error) {
    next(error)
  }
})
