const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');

const config = require('../../config');

const router = new express.Router();

router.get('/topbar', (req, res) => {
  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  // decode the token using a secret key-phrase
  const payload = jwt.verify(token, config.jwtSecret);
  const userId = payload.sub;

    // check if a user exists
  User.findById(userId, (userErr, user) => {
    if (userErr || !user) {
      return res.status(400).json({
        success: false,
        errors: '用户出错，请退出后重新登录',
      });
    }
    res.status(200).json({
      message: '登录成功',
      success: true,
      user: {
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
      },
    });
  });
});

module.exports = router;
