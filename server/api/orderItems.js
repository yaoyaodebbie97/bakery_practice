const router = require('express').Router()
const { models: { User, Order, Product, OrderItems }} = require('../db')
module.exports = router

// router.get('/:orderId', async (req, res, next) => {
//   try {
//     const order = await Order.findByPK(req.params.id, {
//       include: [Product, OrderItems]
//     })
//     res.send(order)
//   } catch (err) {
//     next(err)
//   }
// })

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
