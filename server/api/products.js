const router = require('express').Router();
const {
  models: { Product },
} = require('../db');

//ROUTE /api/products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
});


router.get('/category/:category', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll({
      where: {
        category: req.params.category,
      },
    });
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }

});

// const category = ['bread', 'cupcakes', 'cookies', 'pies','pastries','muffins','cakes'];
// router.get('/:sth', async (req, res, next) => {
//     try {
//         const sth = req.params.sth;
//         if  (category.includes(sth)){
//             const allProducts = await Product.findAll({
//                 where: {
//                 category: sth,
//                 },
//             })
//             res.json(allProducts);
//         }
//         else {
//             const product = await Product.findByPk(sth);
//             res.json(product);
//         }
//     } catch (err) {
//       next(err);
//     }
//   });

module.exports = router;
