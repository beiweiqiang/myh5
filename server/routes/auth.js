const express = require('express');
const passport = require('passport');

const router = new express.Router();

router.post('/signup', (req, res, next) => {
  return passport.authenticate('local-signup', (err, user, info) => {
    if (err) {
      // if (err.name === 'MongoError' && err.code === 11000) {
      //   // the 11000 Mongo code is for a duplication email error
      //   // the 409 HTTP status code is for conflict error
      //   return res.status(409).json({
      //     success: false,
      //     message: 'Check the form for errors.',
      //     errors: {
      //       email: 'This email is already taken.',
      //     },
      //   });
      // }
      return res.status(400).json({
        success: false,
        error: '注册出错，请重试',
      });
    }

    if (!user) {
      return res.status(200).json({
        success: false,
        error: '已存在用户',
      });
    }

    return res.status(200).json({
      success: true,
      message: '注册成功',
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {

  return passport.authenticate('local-login', (err, token, user) => {
    // console.log('local-login');
    // console.log(err);
    // console.log(token);
    // console.log(user);
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
      });
    }

    return res.json({
      success: true,
      message: 'successfully log in',
      token,
      user,
    });
  })(req, res, next);
});

module.exports = router;
