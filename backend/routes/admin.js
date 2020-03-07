const isAuth = require('../middleware/is-auth');
var express = require('express');
const adminController = require('../controllers/admin');

var router = express.Router();

// Product Routes
router.post('/add-product', isAuth, adminController.postAddProduct);

module.exports = router;