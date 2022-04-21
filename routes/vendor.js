const router = require('express').Router();
const vendorController = require('../controllers/vendor');

router.get('/vendors', vendorController.index);

module.exports = router;
