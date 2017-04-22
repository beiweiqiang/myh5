const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
const UserSchema = new mongoose.Schema({
  // **邮箱
  // userAccount: {
  //   email: String,
  // },
  email: {
    type: String,
    index: { unique: true },
  },
  // **密码
  password: String,
  // **用户名
  name: String,
  // **用户头像url
  avatarUrl: String,
  createTime: Number,
});


// **密码加密
UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// **验证输入的密码是否正确
UserSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compareSync(password, this.password);
};


/**
 * The pre-save hook method.
 */
// UserSchema.pre('save', function saveHook(next) {
//   console.log(this);
//   const user = this;

//   // proceed further only if the password is modified or the user is new
//   // 如果用户password没有修改，则 next()
//   if (!user.isModified('password')) return next();


//   return bcrypt.genSalt((saltError, salt) => {
//     if (saltError) { return next(saltError); }

//     return bcrypt.hash(user.password, salt, (hashError, hash) => {
//       if (hashError) { return next(hashError); }

//       // replace a password string with hash value
//       user.password = hash;

//       return next();
//     });
//   });
// });


module.exports = mongoose.model('User', UserSchema);
