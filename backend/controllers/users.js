const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc    Get all Users
// @route   GET /api/v1/users
// @route   GET /api/v1/users/:userId/products
// @access  PUBLIC
exports.getUsers = asyncHandler(async (req, res, next) => {
    let query;




    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ['select','sort','limit', 'page', 'limit'];
    removeFields.forEach(p => delete reqQuery[p]);

    let queryStr = JSON.stringify(reqQuery);
    console.log(queryStr);

    // https://docs.mongodb.com/manual/reference/operator/query/gt/
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => {
        return `$${match}`;
    });

    console.log(queryStr);

    query = User.find(JSON.parse(queryStr));

    // Select Fields
    // https://mongoosejs.com/docs/queries.html
    if(req.query.select) {
        const fields = req.query.select.split(',').join(' ');
        query = query.select(fields);
    }

    if(req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
    } else {
        query = query.sort('-createdAt');
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 5;
    const startIndex = (page -1) * limit;
    const endIndex = page * limit;
    const total = await User.countDocuments();

    query = query.skip(startIndex).limit(limit);

    const users = await query;

    const pagination = {};

    if(endIndex < total){
        pagination.next = {
            page: page + 1,
            limit
        }
    }

    if (startIndex > 0) {
        pagination.prev = {
            page: page -1,
            limit
        }
    }

    res
    .status(200)
    .json({
        success: true,
        count: users.length,
        pagination,
        data: users
    });
    
});

// @desc    Get User by id
// @route   GET /api/v1/users/:id
// @access  PUBLIC
exports.getUser = asyncHandler(async (req, res, next) => {

    const user = await User.findById(req.params.id);
    
    if (!user){
        return next(
            new ErrorResponse(`User not found in id of ${req.params.id}`,
            404)
        );  
    }

    res
    .status(200)
    .json({
        success: true,
        data: user
    });
});

// @desc    Create a User
// @route   POST /api/v1/users
// @access  PRIVATE
exports.createUser = asyncHandler(async (req, res, next) => {

    const user = await User.create(req.body);

    res
    .status(201)
    .json({
        success: true,
        data: user
    });

});

// @desc    Update a User
// @route   PUT /api/v1/users
// @access  PRIVATE
exports.updateUser = asyncHandler(async (req, res, next) => {

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!user){
        return next(
            new ErrorResponse(`User not found in id of ${req.params.id}`,
            404)
        );  
    }

    res
    .status(200)
    .json({
        success: true,
        data: user
    });

});

// @desc    Delete a User
// @route   DELETE /api/v1/users/:id
// @access  PRIVATE
exports.deleteUser = asyncHandler(async (req, res, next) => {

    const user = await User.findByIdAndDelete(req.params.id);

    if (!user){
        return next(
            new ErrorResponse(`User not found in id of ${req.params.id}`,
            404)
        );  
    }

    res
    .status(200)
    .json({
        success: true,
        data: user
    });


});