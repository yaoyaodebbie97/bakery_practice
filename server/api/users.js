const router = require('express').Router();
const {
  models: { User, Order, Product },
} = require('../db');
const { requireToken, isAdmin } = require('./middleware');
module.exports = router;

// get all users if logged in & admin
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'firstName', 'lastName', 'email', 'address'],
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

// admin can create add users
router.post(`/`, requireToken, isAdmin, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
});

// admin can update users
router.put('/:userId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// admin can delete users
router.delete('/:userId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId/orders', requireToken, async (req, res, next) => {
  try {
    const userOrder = await Order.findAll({
      include: [Product],
      where: {
        userId: req.params.userId,
      },
    });
    res.send(userOrder);
  } catch (err) {
    next(err);
  }
});

console.log(req.headers.authorization);
