const router = require('express').Router()
const { models: { User, Order }} = require('../db')
const { requireToken, isAdmin } = require('./middleware')
module.exports = router

// get all users if logged in & admin
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.send(users)
  } catch (err) {
    next(err)
  }
})

// create new user
router.post(`/`, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.send(newUser)
  } catch (error) {
    next(error)
  }
})

// get user order history
router.get('/:userId/orders', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPK(req.params.id, {
      include: [Order]
    })
    res.send(user);
  } catch (err) {
    next(err);
  }
});
