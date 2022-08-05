const router = require('express').Router();
const {
  models: { User, Order, Product, OrderItems },
} = require('../db');
const { requireToken, isAdmin } = require('./middleware');
module.exports = router;

//admin see all open orders
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      attributes: ['id', 'status', 'userId'],
      where: { status: 'open' },
      include: [
        {
          model: Product,
          attributes: ['id', 'productName', 'price', 'imageUrl', 'category'],
        },
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName', 'email', 'address'],
          group: ['User.id'],
        },
      ],
    });
    res.json(allOrders);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', requireToken, async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      attributes: ['id', 'status', 'userId'],
      where: { status: 'open' },
      include: [
        {
          model: Product,
          attributes: ['id', 'productName', 'price', 'imageUrl', 'category'],
        },
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName', 'email', 'address'],
          where: { id: req.params.userId },
        },
      ],
    });
    res.json(allOrders);
  } catch (err) {
    next(err);
  }
});

router.post('/:userId', async (req, res, next) => {
  const { productId, quantity } = req.body;
  try {
    let orderExists = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'open',
      },
    });

    if (!orderExists) {
      const createOrder = await Order.create({
        status: 'open',
        userId: req.params.userId,
      });
      orderExists = createOrder;
    }

    console.log(orderExists);
    console.log(orderExists.dataValues.id);
    console.log(orderExists.dataValues.userId);

    const updateCart = await OrderItems.create({
      productId: productId,
      totalQuantity: quantity,
      userId: orderExists.dataValues.userId,
    });
    console.log(Object.keys(Product.prototype));

    res.status(200).send(updateCart);
  } catch (err) {
    next(err);
  }
});

router.post('/:userId');
// OrderItems.create({
//   include: Product,
//   where: {
//     orderId: createOrder,
//     productId: productId,
//     totalQuantity: quantity,
//     totalCost: 'Product.price',
//   },
// });

// router.get('/:orderId', async (req, res, next) => {
//   try {
//     const order = await Order.findByPK(req.params.orderId, {
//       include: Product,
//     });
//     res.send(order);
//   } catch (err) {
//     next(err);
//   }
// });

// router.delete('/:orderId', async (req, res, next) => {
//   try {
//     const user = await User.findByPK(req.params.id, {
//       include: [Order]
//     })
//     res.send(user);
//   } catch (err) {
//     next(err);
//   }
// });
