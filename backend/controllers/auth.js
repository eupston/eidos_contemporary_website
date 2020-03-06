const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @desc    Logs user in
// @route   GET /api/v1/auth/login
// @access  PUBLIC
exports.postLogin = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password.toString();
    try {
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(422)
                .json({
                    success: false,
                    data: "invalid email"
                });
        }
        else {
            bcrypt
                .compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            console.log(err);
                            res
                            .status(200)
                            .json({
                                success: true,
                            });
                        });
                    }
                    else {
                        return res.status(422)
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