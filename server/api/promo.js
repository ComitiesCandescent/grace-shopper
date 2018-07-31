const router = require(`express`).Router()
const {Promo} = require(`../db/models`)
module.exports = router
router.put('/', async (req, res, next) => {
  try {
    console.log(req.body)
    const usePromo = await Promo.useCoupon(req.body.promo, req.body.total)
    res.json(usePromo)
  } catch (error) {
    next(error)
  }
})
