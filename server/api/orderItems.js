const router = require('express').Router()
const { models: { User, Order, Product, OrderItems }} = require('../db')
module.exports = router

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
        await OrderItems.findAll({
          where: {
            orderId: order.id,
          },
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
      //  //  if we already added this item to cart, no need to do so 
       const itemExist = await OrderItems.findOne({
         where:{
           productId: req.body.productId
         }
       })
       if (itemExist){
         return;
       }
       else{
              OrderItems.create({
                orderId: order.id,
                productId: req.body.productId,
                totalQuantity: req.body.totalQuantity,
                totalCost: req.body.totalCost
            })
          
            res.send(
            await OrderItems.findAll({
              where: {
                orderId: order.id,
              },
            })
          );
       }

    // res.send(order); // this will send order info id, status, userId, etc

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

        // const item = await OrderItems.findByPk(req.params.id); // this is not correct, the id is the product's id, not the orderItem id 
        // await item.destroy(); 
        await OrderItems.destroy({
            where: {
                productId: req.params.id
            }
        })

      
       res.send(
        await OrderItems.findAll({
          where: {
            orderId: order.id,
          },
        })
      );
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
        await OrderItems.findAll({
          where: {
            orderId: order.id,
          },
        })
      );
    } catch (err) {
      next(err);
    }
  });

