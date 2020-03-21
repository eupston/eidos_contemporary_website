const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');


const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: process.env.SEND_GRID_API_KEY
    }
}));

// @desc    Emails the Site Admin
// @route   POST /api/v1/auth/email
// @access  PUBLIC
exports.postEmail = asyncHandler(async (req, res, next) => {
    const result = await transporter.sendMail({
                    to: "eupston130@gmail.com",
                    from: 'site-admin@eidoscontemporary.com',
                    subject: req.body.subject,
                    html: req.body.content
                });
    return res.status(200)
        .json({
            data: result,
        });
});


// @desc    Logs user in
// @route   POST /api/v1/auth/login
// @access  PUBLIC
exports.postLogin = asyncHandler(async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    const user = await User.findOne({email: email});
    if (!user) {
        return next(
            new ErrorResponse("Email Not Found",
                404)
        );
    }
    else {
        loadedUser = user;
        const doMatch = await bcrypt.compare(password, user.password);

        if (doMatch) {
            const token = jwt.sign(
                {
                    email: loadedUser.email,
                    userId: loadedUser._id.toString()
                },
                process.env.JWT_PRIVATE_KEY, {expiresIn: '1h'}
            );
            return res.status(200)
                .json({
                    token: token,
                    userId: loadedUser._id.toString()
                });
        } else {
            return next(
                new ErrorResponse("invalid password",
                    401)
            );
        }
    }
});

// @desc    signs user in
// @route   POST /api/v1/auth/signup
// @access  PUBLIC
exports.postSignup = asyncHandler(async (req, res, next) => {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    console.log(req.body);
    if(password !== confirmPassword){
        return next(
            new ErrorResponse("Passwords do not Match",
                400)
        );
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const payload = {...req.body, password:hashedPassword, isAdmin:false};
    const user = await User.create(payload);
    return res.status(201)
        .json({
            success: true,
            data: user
        });
});
