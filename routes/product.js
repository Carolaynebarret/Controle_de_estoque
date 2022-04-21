const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/products', productController.index);

module.exports = router;
