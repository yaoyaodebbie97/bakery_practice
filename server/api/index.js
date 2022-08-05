const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/products', require('./products'));
<<<<<<< HEAD
router.use('/cart', require('./cart'));
=======
router.use('/cart', require('./orderItems'));
>>>>>>> bec74be98c305a32649668b7b3d2dded57973ccf

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
