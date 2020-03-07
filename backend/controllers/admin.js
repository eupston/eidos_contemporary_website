const Product = require('../models/Product');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');


// @desc    Add Product to Database
// @route   GET /api/v1/admin/add-product
// @access  PRIVATE
exports.postAddProduct = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.userId);
    if(!user.isAdmin){
        return next(
            new ErrorResponse(`User ${user.email} is not an admin `,
                401)
        );
    }
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const display_on_site = req.body.display_on_site;
    const customizable = req.body.customizable;
    const product = new Product({
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl,
        display_on_site: display_on_site,
        customizable: customizable
    });
    const result = await product.save();
    res.status(200)
        .json({
            success: true,
            data: result
        });
});