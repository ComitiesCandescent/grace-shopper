const router = require(`express`).Router()
const {User} = require(`../db/models`)
module.exports = router

// GET /api/users
router.get(`/`, async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET /api/users/:userId
router.get(`/:userId`, async (req, res, next) => {
  try {
    const singleUser = await User.findById(Number(req.params.userId))
    res.json(singleUser)
  } catch (err) {
    next(err)
  }
})

// POST /api/users
router.post(`/`, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (error) {
    next(error)
  }
})
