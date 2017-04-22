const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true,
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
  };

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) return done(err);

    // **没有此用户
    if (!user) {
      const error = new Error('email 不存在');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // **检查password
    if (!user.comparePassword(userData.password)) {
      // return done(null, false, 'password incorrect');
      const error = new Error('password 错误');
      error.name = 'IncorrectCredentialsError';
      return done(error);
    }

    const payload = {
      sub: user._id,
    };

    // **创建token Synchronous
    const token = jwt.sign(payload, config.jwtSecret);
    console.log(`jwt token: ${token}`);
    const data = {
      email: user.name,
      name: user.name,
      password: user.password,
      avatarUrl: user.avatarUrl,
      createTime: user.createTime,
    };

    // **传递3个参数
    return done(null, token, data);
  });
});
