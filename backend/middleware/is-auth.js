const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const authHeader = req.get('Authorization');
    if(!authHeader){
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
  const token = authHeader.split(' ')[1]; // request on frontend will be 'Bearer ' + token
  let decodedToken;
  try {
      //TODO put publicKey in config.env
      decodedToken: jwt.verify(token, 'secret');
  }
  catch(err){
      err.statusCode = 500;
      throw err;
  }
  if(!decodedToken){
      const error = new Error('Not authenticated.');
      error.statusCode = 401;
      throw error;
  }
  req.userId = decodedToken.userId;
  next();
};