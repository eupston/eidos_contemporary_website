const Product = require('../models/Product');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Add Product to Database
// @route   GET /api/v1/shop/products
// @access  PUBLIC
exports.getAllProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find({"display_on_site" : true});
    res
        .status(200)
        .json({
            success: true,
            data: products
        });

});