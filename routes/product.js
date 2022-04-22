const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/products', productController.index);
router.post('/products', productController.create);
router.delete('/products/:id', productController.delete);

module.exports = router;
