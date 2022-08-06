const router = require('express').Router();
const {
  models: { User, Order, Product, OrderItems },
} = require('../db');
module.exports = router;
const { requireToken } = require('./middleware');

// api/cart  (can think of orderItems as items in cart )
router.get('/', requireToken, async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
    });
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: req.user.dataValues.id,
      });
    }

    res.send(
      await Order.findOne({
        where: {
          id: order.id,
        },
        include: [Product],
        order: [[Product, 'id', 'desc']], // adding order by so the result will not jump around
      })
    );
  } catch (ex) {
    next(ex);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/', requireToken, async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
    });
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: req.user.dataValues.id,
      });
    }
    let itemExist = await OrderItems.findOne({
      where: {
        productId: req.body.productId,
      },
    });
    if (itemExist) return;
    else {
      await OrderItems.create({
        orderId: order.id,
        productId: req.body.productId,
        totalQuantity: req.body.totalQuantity,
        totalCost: req.body.totalCost,
      });

      res.send(
        await Order.findOne({
          where: {
            id: order.id,
          },
          include: [Product],
          order: [[Product, 'id', 'desc']],
        })
      );
    }
  } catch (error) {
    next(error);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

// for delete, no need things in request body, so just make it /id
router.delete('/:id', requireToken, async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
    });
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: req.user.dataValues.id,
      });
    }

    await OrderItems.destroy({
      where: {
        productId: req.params.id,
      },
    });

    res.send(
      await Order.findOne({
        where: {
          id: order.id,
        },
        include: [Product],
        order: [[Product, 'id', 'desc']],
      })
    );
  } catch (err) {
    next(err);
  }
});

////////////////////////////////////////////////////////////////////////////////

router.put('/', requireToken, async (req, res, next) => {
  try {
    let order = await Order.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: 'open',
      },
    });
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: req.user.dataValues.id,
      });
    }

    let item = await OrderItems.findOne({
      where: {
        id: req.body.itemId,
      },
    });
    const newQuantity = item.totalQuantity + req.body.quantityChange;
    const newCost = (item.totalCost * newQuantity) / item.totalQuantity;

    await item.update({
      totalQuantity: newQuantity,
      totalCost: newCost,
    });

    res.send(
      await Order.findOne({
        where: {
          id: order.id,
        },
        include: [Product],
        order: [[Product, 'id', 'desc']],
      })
    );
  } catch (err) {
    next(err);
  }
});
