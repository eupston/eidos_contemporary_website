var express = require('express');
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users');

var router = express.Router();

/*
  GET users listing. 
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "User1"}, {id: 2, username: "User2"}
  ]);
});
*/

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
