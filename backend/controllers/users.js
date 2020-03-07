const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc    Get all Users
// @route   GET /api/v1/users
// @access  PUBLIC
exports.getUsers = asyncHandler(async (req, res, next) => {

    const users = await User.find();

    res
    .status(200)
    .json({
        success: true,
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