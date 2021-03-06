const router = require(`express`).Router()
const { User } = require(`../db/models`)
module.exports = router


// POST /api/users
router.post(`/`, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    req.login(newUser, err => (err ? next(err) : res.status(201).json(newUser)))
  } catch (error) {
    next(error)
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

// GET /api/users/email/:email
router.get(`/email/:email`, async (req, res, next) => {
  try {
    const singleUser = await User.findByEmail(req.params.email)
    req.user = singleUser
    req.login(singleUser, err => (err ? next(err) : res.json(singleUser)))
  } catch (err) {
    next(err)
  }
})

// GET /api/users
router.get(`/`, async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/users/:userId
router.delete(`/:userId`, (req, res, next) => {
  User.destroy({ where: { id: req.params.userId } })
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})
