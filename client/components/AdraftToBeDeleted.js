// // for /api/cart
// router.get("/", requireToken, async (req, res, next) => {
//     try {
//       const user = await User.findByPk(req.user.id)
//       if (user) {
//         const currentCart = await Order.findOne({
//           where: {
//             userId: user.id,
//             status: "open",
//           },
//         });
//       }  
//       else {
//         const currentCart = window.sessionStorage.getItem('cart') 
//       }
//       currentCart.length() > 0 
//       ? res.json(currentCart)
//       : res.send('Your Shopping Cart is empty')

//     } catch (err) {
//       next(err);
//     }
//   });

// // using /category/:categorgy
// // / changes made to 
// // 1. api - products
// // 2. routes file 
// // 3. category reducer 
// // 4. home page 

// // add to cart, need a body // product ID + quantity 