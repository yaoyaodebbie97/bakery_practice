// OrderItem --> Order 

import productsReducer from "../store/products"

// // create a class method 
// Order.getOrCreateShoppingCart = async function (userId) {
//       // if there is a cart
//       let currentOrder = await Order.findOne({
//         where: {
//           type: 'open',
//           userId: userId,
//         },
//       });
  
//       // If cart does not exist, create a new one 
//       if (!currentOrder) {
//         currentOrder = await Order.create({
//           type: 'open',
//           userId: userId,
//         });
//       }
//       return currentOrder;
      
//   };


// // this is for the cart route api/cart
// // get all items by orderId -- this is to get the cart
// app.get("/", async (req, res, next) => {
//   try {
//     const user = await User.findByToken(req.headers.authorization);
//     const myOrder = await Order.getOrCreateShoppingCart(user.id);
//     res.send(
//       await orderItem.findAll({
//         where: {
//           orderId: myOrder.id,
//         },
//       })
//     );
//   } catch (ex) {
//     next(ex);
//   }
// });



// using /category/:categorgy
// / changes made to 
// 1. api - products
// 2. routes file 
// 3. category reducer 
// 4. home page 

// todo: singleItem add multiple to the cart