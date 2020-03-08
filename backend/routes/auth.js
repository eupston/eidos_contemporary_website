var express = require('express');

const {
    postLogin,
    postSignup
} = require('../controllers/auth');

var router = express.Router();

// Login Routes
router.post("/login", postLogin);

// Signup routes
router.post("/signup", postSignup);


module.exports = router;
