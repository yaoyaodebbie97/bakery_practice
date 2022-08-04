const router = require('express').Router();
const {
  models: { Product },
} = require('../db');
const { requireToken, isAdmin } = require('./middleware');

//ROUTE /api/products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll({
      attributes: [
        'id',
        'productName',
        'description',
        'price',
        'imageUrl',
        'category',
      ],
    });
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
    await product.update(req.body);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// admin can delete products
router.delete('/:productId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      attributes: [
        'id',
        'productName',
        'description',
        'price',
        'imageUrl',
        'category',
      ],
    });
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
      attributes: [
        'id',
        'productName',
        'description',
        'price',
        'imageUrl',
        'category',
      ],
    });
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
