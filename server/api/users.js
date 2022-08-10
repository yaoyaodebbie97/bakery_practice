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

// user can update account
router.put('/account', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.dataValues.id, {
      attributes: ['id', 'firstName', 'lastName', 'address'],
    });
    await user.update(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// admin can update users
router.put('/:userId', requireToken, isAdmin, async (req, res, next) => {
  try {
    console.log(req.params.userId)
    const user = await User.findByPk(req.params.userId, {
      attributes: ['id', 'firstName', 'lastName', 'address'],
    });
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

// get logged in user
router.get('/account', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.dataValues.id, {
      attributes: ['firstName', 'lastName', 'address'],
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.get('/orders', requireToken, async (req, res, next) => {
  try {
    const userOrder = await Order.findAll({
      where: {
        userId: req.user.dataValues.id,
        status: 'closed'
      },
      include: [
        {
          model: Product,
          attributes: ['id', 'productName', 'price', 'imageUrl', 'category'],
        },
      ],
    });
    res.send(userOrder);
  } catch (err) {
    next(err);
  }
});
