var express = require('express');
const shopController = require('../controllers/shop');

var router = express.Router();

// Shop Product Routes
router.get('/products', shopController.getAllProducts);




module.exports = router;