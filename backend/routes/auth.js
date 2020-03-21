var express = require('express');

const {
    postLogin,
    postSignup,
    postEmail
} = require('../controllers/auth');

var router = express.Router();

// Login Routes
router.post("/login", postLogin);

// Signup routes
router.post("/signup", postSignup);

// Email Route
router.post("/email", postEmail);


module.exports = router;
