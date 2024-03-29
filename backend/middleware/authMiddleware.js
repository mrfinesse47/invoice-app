const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../model/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //get token from header
      token = req.headers.authorization.split(' ')[1];
      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from token
      req.user = await User.findById(decoded.payload).select('-password');
      // do not send password along
      if (req.user.status === 'Pending') {
        throw new Error(
          'please activate your account, check your email for activation link!'
        );
      }

      next();
    } catch (e) {
      res.status(401);
      throw new Error(e);
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('not authorized');
  }
});

module.exports = { protect };
