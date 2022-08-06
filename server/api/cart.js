const router = require('express').Router();
const {
  models: { User, Order, Product, OrderItems },
} = require('../db');
<<<<<<< HEAD
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
=======
module.exports = router;
const { requireToken, isAdmin } = require('./middleware');

// api/cart  (can think of orderItems as items in cart )
<<<<<<<< HEAD:server/api/cart.js
router.get("/", async (req, res, next) => {
    try {
      const user = await User.findByToken(req.headers.authorization);
      console.log(req);
      let order = await Order.findOne({
          where: {
              userId: user.id,
              status: 'open'
          }
      })
      if (!order) {
          order = await Order.create({
              status: 'open',
              userId: user.id
          })
      }

      res.send(
        await Order.findOne({
          where:{
            id: order.id
          },
          include:[Product],
          order:[[Product, 'id','desc']] // adding order by so the result will not jump around 
        })
      );
    } catch (ex) {
      next(ex);
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/", async (req, res, next) => {
    try {
        const user = await User.findByToken(req.headers.authorization);
        let order = await Order.findOne({
            where: {
                userId: user.id,
                status: 'open'
            }
        })
        if (!order) {
            order = await Order.create({
                status: 'open',
                userId: user.id
            })
        }
// add the check here, so not allow user to add twice 
        let itemExist = await OrderItems.findOne({
          where:{
            productId: req.body.productId
          }
        })
        if (itemExist) return;
        else {await OrderItems.create({
                  orderId: order.id,
                  productId: req.body.productId,
                  totalQuantity: req.body.totalQuantity,
                  totalCost: req.body.totalCost
          })
            
          res.send(
            await Order.findOne({
              where:{
                id: order.id
              },
              include:[Product],
              order:[[Product, 'id','desc']]
            })
          );
        }


    } catch (error) {
      next(error);
    }
  });
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // for delete, no need things in request body, so just make it /id 
  router.delete("/:id", async (req, res, next) => {
    try {
        const user = await User.findByToken(req.headers.authorization);
        let order = await Order.findOne({
            where: {
                userId: user.id,
                status: 'open'
            }
        })
        if (!order) {
            order = await Order.create({
                status: 'open',
                userId: user.id
            })
        }

        await OrderItems.destroy({
            where: {
                productId: req.params.id
            }
        })

        res.send(
          await Order.findOne({
            where:{
              id: order.id
            },
            include:[Product],
            order:[[Product, 'id','desc']]
          })
        );
      
      //  res.send(
      //   await OrderItems.findAll({
      //     where: {
      //       orderId: order.id,
      //     },
      //   })
      // );
    } catch (err) {
      next(err);
========

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    let order = await Order.findOne({
      where: {
        userId: user.id,
        status: 'open',
      },
    });
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: user.id,
      });
>>>>>>>> c704a43071ec1d366759704eb82ebb7d29821c60:server/api/orderItems.js
    }

    res.send(
      await Order.findOne({
        where: {
          id: order.id,
        },
        include: [Product],
      })
    );
  } catch (ex) {
    next(ex);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    let order = await Order.findOne({
      where: {
        userId: user.id,
        status: 'open',
      },
    });
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: user.id,
      });
    }
    OrderItems.create({
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
      })
    );
  } catch (error) {
    next(error);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

<<<<<<<< HEAD:server/api/cart.js
      res.send(
        await Order.findOne({
          where:{
            id: order.id
          },
          include:[Product],
          order:[[Product, 'id','desc']]
        })
      );

    } catch (err) {
      next(err);
========
// for delete, no need things in request body, so just make it /id
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    let order = await Order.findOne({
      where: {
        userId: user.id,
        status: 'open',
      },
    });
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: user.id,
      });
>>>>>>>> c704a43071ec1d366759704eb82ebb7d29821c60:server/api/orderItems.js
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
      })
    );

    //  res.send(
    //   await OrderItems.findAll({
    //     where: {
    //       orderId: order.id,
    //     },
    //   })
    // );
>>>>>>> c704a43071ec1d366759704eb82ebb7d29821c60
  } catch (err) {
    next(err);
  }
});

<<<<<<< HEAD
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
=======
////////////////////////////////////////////////////////////////////////////////

router.put('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    let order = await Order.findOne({
      where: {
        userId: user.id,
        status: 'open',
      },
    });
    if (!order) {
      order = await Order.create({
        status: 'open',
        userId: user.id,
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
      })
    );
>>>>>>> c704a43071ec1d366759704eb82ebb7d29821c60
  } catch (err) {
    next(err);
  }
});

<<<<<<< HEAD
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
=======
<<<<<<<< HEAD:server/api/cart.js
//   //admin see all open orders
// router.get('/', requireToken, isAdmin, async (req, res, next) => {
//   try {
//     const allOrders = await Order.findAll({
//       attributes: ['id', 'status', 'userId'],
//       where: { status: 'open' },
//       include: [
//         {
//           model: Product,
//           attributes: ['id', 'productName', 'price', 'imageUrl', 'category'],
//         },
//         {
//           model: User,
//           attributes: ['id', 'firstName', 'lastName', 'email', 'address'],
//           group: ['User.id'],
//         },
//       ],
//     });
//     res.json(allOrders);
>>>>>>> c704a43071ec1d366759704eb82ebb7d29821c60
//   } catch (err) {
//     next(err);
//   }
// });
<<<<<<< HEAD
=======
========
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
>>>>>>>> c704a43071ec1d366759704eb82ebb7d29821c60:server/api/orderItems.js
>>>>>>> c704a43071ec1d366759704eb82ebb7d29821c60
