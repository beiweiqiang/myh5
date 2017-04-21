const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const qiniu = require('qiniu');
const fs = require('fs');
const ejs = require('ejs');
const join = require('path').join;
const read = require('fs').readFileSync;

const urlPrefix = require('../../config').qiniu.urlPrefix;

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



router.post('/publish', (req, res, next) => {
  const { pages, email } = req.body;
  const renderStr = ejs.render(read(join(__dirname, '../template/index.ejs'), 'utf8'), { pages });
  fs.writeFile(join(__dirname, '../template/index.html'), renderStr, (err) => {
    if (err) throw err;

    // 要上传的空间
    const bucket = 'myh5';
    // 上传到七牛后保存的文件名
    const key = `${email}/${Date.now()}.html`;
    // 构建上传策略函数
    function uptoken(bucket, key) {
      const putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
      return putPolicy.token();
    }
    // 生成上传 Token
    const token = uptoken(bucket, key);
    // 要上传文件的本地路径
    const filePath = join(__dirname, '../template/index.html');
    // 构造上传函数
    function uploadFile(uptoken, key, localFile) {
      const extra = new qiniu.io.PutExtra();
      qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if (!err) {
          // 上传成功， 处理返回值
          // console.log(ret.hash, ret.key, ret.persistentId);
          res.status(200).json({
            url: `http://${urlPrefix}/${ret.key}`,
          });
        } else {
          // 上传失败， 处理返回代码
          console.log(err);
        }
      });
    }
    // 调用uploadFile上传
    uploadFile(token, key, filePath);
  });
});

module.exports = router;
