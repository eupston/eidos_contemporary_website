const User = require('../models/User');

// @desc    Get all Users
// @route   GET /api/v1/users
// @access  PUBLIC
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
    
        res
        .status(200)
        .json({
            success: true,
            data: users
        });
    }catch (err){
        res.status(400).json({ success: false });
    }
    
};

// @desc    Get User by id
// @route   GET /api/v1/users/:id
// @access  PUBLIC
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        
        if (!user){
            return next(
                new ErroResponse(`User not found in id of ${req.params.id}`,
                404)
            );  
        }

        res
        .status(200)
        .json({
            success: true,
            data: user
        });
    }catch (err){
        res.status(400).json({ success: false });
    }
};

// @desc    Create a User
// @route   POST /api/v1/users
// @access  PRIVATE
exports.createUser = async (req, res, next) => {
    try {
        //const user = await User.create(req.body);

        res
        .status(201)
        .json({
            success: true,
            data: user
        });
    }catch (err){
        res.status(400).json({ success: false });
    }
};

// @desc    Update a User
// @route   PUT /api/v1/users
// @access  PRIVATE
exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!user){
            return next(
                new ErroResponse(`User not found in id of ${req.params.id}`,
                404)
            );  
        }

        res
        .status(200)
        .json({
            success: true,
            data: user
        });
    }catch (err){
        res.status(400).json({ success: false });
    }
};

// @desc    Delete a User
// @route   DELETE /api/v1/users/:id
// @access  PRIVATE
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user){
            return next(
                new ErroResponse(`User not found in id of ${req.params.id}`,
                404)
            );  
        }

        res
        .status(200)
        .json({
            success: true,
            data: user
        });

    }catch (err){
        res.status(400).json({ success: false });
    }
};