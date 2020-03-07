const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

module.exports = async (req, res, next) => {

    const authHeader = req.get('Authorization');
    if(!authHeader){
        return next(
            new ErrorResponse('Not authenticated.',
                401)
            );
    }
  const token = authHeader.split(' ')[1]; // request on frontend will be 'Bearer ' + token
  let decodedToken;
  try {
      //TODO put publicKey in config.env
      decodedToken = jwt.verify(token, 'secret');
  }
  catch(err){
      return next(
          new ErrorResponse(err,
              500)
      );
  }
  if(!decodedToken){
      return next(
          new ErrorResponse('Not authenticated.',
              401)
      );
  }

    const user = await User.findById(decodedToken.userId);
    if(!user.isAdmin){
        return next(
            new ErrorResponse(`User ${user.email} is not an admin `,
                401)
        );
    }
  next();
};