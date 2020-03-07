const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('../middleware/async');

// @desc    Logs user in
// @route   GET /api/v1/auth/login
// @access  PUBLIC
exports.postLogin = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    try {
        const user = await User.findOne({email: email});
        console.log(user);
        if (!user) {
            return res.status(401)
                .json({
                    success: false,
                    data: "invalid email"
                });
        }
        else {
            loadedUser = user;
            bcrypt
                .compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({
                            email: loadedUser.email,
                            userId: loadedUser._id.toString()
                        }, 'secret', {expiresIn:'1h'});
                        return res.status(200)
                                .json({
                                    token: token,
                                    userId:loadedUser._id.toString()
                                 });
                    }
                    else {
                        return res.status(401)
                            .json({
                                success: false,
                                data: "invalid password"
                            });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
    catch (err){
        res.status(400).json({ success: false, data:err });
    }
};