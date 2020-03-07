var express = require('express');
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users');

var router = express.Router();

// User Routes
router
  .route('/')
  .get(getUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;
