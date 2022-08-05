const router = require('express').Router()
const { models: { User, Order, Product, OrderItems }} = require('../db')
module.exports = router
const { requireToken, isAdmin } = require('./middleware');


// api/cart  (can think of orderItems as items in cart )

router.get("/", async (req, res, next) => {
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

      res.send(
        await Order.findOne({
          where:{
            id: order.id
          },
          include:[Product]
        })
      );
    } catch (ex) {
      next(ex);
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/", requireToken, async (req, res, next) => {
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
        OrderItems.create({
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
            include:[Product]
          })
        );


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
            include:[Product]
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
    }
  });
  
  ////////////////////////////////////////////////////////////////////////////////

  router.put("/", async (req, res, next) => {
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

     let item = await OrderItems.findOne({
          where: {
              id: req.body.itemId
          }
      })
      const newQuantity = item.totalQuantity + req.body.quantityChange
      const newCost =  item.totalCost * newQuantity/item.totalQuantity;
      await item.update({
          totalQuantity: newQuantity,
          totalCost: newCost
      })

      res.send(
        await Order.findOne({
          where:{
            id: order.id
          },
          include:[Product]
        })
      );
    } catch (err) {
      next(err);
    }
  });





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