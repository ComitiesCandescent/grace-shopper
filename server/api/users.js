const router = require(`express`).Router()
const { User } = require(`../db/models`)
module.exports = router

router.get(`/`, async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get(`/:userId`, async (req, res, next) => {
  try {
    const singleUser = await User.findById(Number(req.params.userId))
    res.json(singleUser)
  } catch (err) {
    next(err)
  }
})

router.get(`/:userId/cart`, (req, res, next) => {
  try {
    // get all products
    res.json(`hi`)
  } catch (err) {
    next(err)
  }
})
