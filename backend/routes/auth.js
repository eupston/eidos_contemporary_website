var express = require('express');
const isAuth = require('../middleware/is-auth');

const {
    postLogin
} = require('../controllers/auth');

var router = express.Router();

// Login Routes
router.post("/login", postLogin);

// Signup routes


module.exports = router;
