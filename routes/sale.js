const router = require('express').Router();
const saleController = require('../controllers/sale');

router.get('/sales', saleController.index);
router.post('/sales', saleController.create);

module.exports = router;
