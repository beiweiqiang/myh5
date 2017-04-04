const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
// const Identicon = require('identicon.js');

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true,
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim(),
    // confirm: req.body.confirm.trim(),
    avatarUrl: req.body.avatarUrl.trim(),
  };
  // console.log('userData');
  // console.log(userData);

  process.nextTick(() => {
    User.findOne({ email: userData.email }, (err, user) => {
      // console.log('findOne');
      // console.log(err);
      // console.log(user);
      if (err) return done(err);
      if (user) {
        return done(null, false);
      }

      const newUser = new User();

      newUser.email = email;
      newUser.password = newUser.generateHash(userData.password);
      newUser.name = userData.name;
      newUser.avatarUrl = userData.avatarUrl;

      newUser.save((saveErr) => {
        if (saveErr) throw saveErr;
        return done(null, newUser);
      });
    });
  });
});
