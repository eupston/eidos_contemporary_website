var express = require('express');
const {
  getProducts
} = require('../controllers/products');

var router = express.Router();

// User Routes
router
  .route('/')
  .get(getProducts);



module.exports = router;