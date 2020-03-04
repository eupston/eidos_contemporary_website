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
        const user = await User.create(req.body);

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