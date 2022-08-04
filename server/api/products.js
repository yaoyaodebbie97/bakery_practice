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

// admin can create add products
router.post(`/`, requireToken, isAdmin, async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.send(newProduct);
  } catch (error) {
    next(error);
  }
});

// admin can update products
router.put('/:productId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body)
    res.send(product)
  } catch (error) {
    next(error);
  }
});

// admin can delete products
router.delete('/:productId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
      await product.destroy();
      res.send(product)
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

module.exports = router;
