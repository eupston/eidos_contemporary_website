const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');

// @desc    Get all Products
// @route   GET /api/v1/products
// @route   GET /api/v1/users/:userid/products
// @access  PUBLIC
exports.getProducts = asyncHandler(async (req, res, next) => {
    let query;

    if(req.params.bootcampId) {
        query = Product.find({ user: req.params.userId });
    } else {
        query = Product.find();
    }
    const products = await query;
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });
});