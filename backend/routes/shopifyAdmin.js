var express = require('express');
const shopifyAdminController = require('../controllers/shopifyAdmin');

var router = express.Router();

// Shopify Admin Product Routes

router.get('/vendor_product_types', shopifyAdminController.getVendorProductTypes);

module.exports = router;