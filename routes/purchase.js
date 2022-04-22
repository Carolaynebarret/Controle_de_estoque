const router = require('express').Router();
const purchaseController = require('../controllers/purchase');

router.get('/purchases', purchaseController.index);

module.exports = router;
