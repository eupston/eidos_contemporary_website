var express = require('express');
const {
  getUser,
  getUsers,
  createUser
} = require('../controllers/users');

var router = express.Router();

// User Routes
router
  .route('/')
  .get(getUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUser);


module.exports = router;
