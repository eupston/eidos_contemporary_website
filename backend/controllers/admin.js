const Product = require('../models/Product');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Add Product to Database
// @route   GET /api/v1/admin/products
// @access  PRIVATE
exports.createProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201)
        .json({
            success: true,
            data: product
        });
});

// @desc    Gets All Product from Database
// @route   POST /api/v1/admin/products
// @access  PRIVATE
exports.getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find();
    res
        .status(200)
        .json({
            success: true,
            data: products
        });

});

// @desc    Get Product by id
// @route   POST /api/v1/admin/products/:id
// @access  PRIVATE
exports.getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product){
        return next(
            new ErrorResponse(`Product not found with id of ${req.params.id}`,
                404)
        );
    }
    res
        .status(200)
        .json({
            success: true,
            data: product
        });
});

// @desc    Update a Product by id
// @route   PUT /api/v1/admin/products/:id
// @access  PRIVATE
exports.updateProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        });

    if (!product){
        return next(
            new ErrorResponse(`Product not found with id of ${req.params.id}`,
                404)
        );
    }
    res
        .status(200)
        .json({
            success: true,
            data: product
        });
});

// @desc    Delete a Product
// @route   DELETE /api/v1/products/:id
// @access  PRIVATE
exports.deleteProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product){
        return next(
            new ErrorResponse(`Product not found with id of ${req.params.id}`,
                404)
        );
    }

    res
        .status(200)
        .json({
            success: true,
            data: product
        });
});