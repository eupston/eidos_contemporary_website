const isAdmin = require('../middleware/isAdmin');
var express = require('express');
const adminController = require('../controllers/admin');

var router = express.Router();

// Admin Product Routes

router.post('/products', isAdmin, adminController.createProduct);

router.get('/products', isAdmin, adminController.getProducts);

router.get('/products/:id', isAdmin, adminController.getProduct);

router.put('/products/:id', isAdmin, adminController.updateProduct);

router.delete('/products/:id', isAdmin, adminController.deleteProduct);

module.exports = router;