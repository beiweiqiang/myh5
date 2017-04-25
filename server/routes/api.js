const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const qiniu = require('qiniu');
const fs = require('fs');
const ejs = require('ejs');
const join = require('path').join;
const read = require('fs').readFileSync;
const QRCode = require('qrcode');
const exec = require('child_process').exec;

const urlPrefix = require('../../config').qiniu.urlPrefix;
const config = require('../../config');

const router = new express.Router();

// 检查本地token情况
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
      user,
    });
  });
});



// 前端的数据填充在ejs模板里，
// 填充数据后的html上传至七牛云
// 更新用户数据库
router.post('/publish', (req, res, next) => {
  const { pages, email, title } = req.body;

  const secretToken = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(secretToken, config.jwtSecret);
  const userId = payload.sub;

  // 生成已填数据的html模板
  const renderStr = ejs.render(read(join(__dirname, '../template/index.ejs'), 'utf8'), { pages, title });

  // 不存在该目录则生成
  const dir = join(__dirname, `../template/${email}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  // 生成file的位置
  const filePath = join(__dirname, `../template/${email}/index.html`);
  fs.writeFile(filePath, renderStr, (err) => {
    if (err) throw err;

    // 上传七牛云
    // 要上传的空间
    const bucket = 'myh5';
    // 上传到七牛后保存的文件名
    const createTime = Date.now();
    const key = `${email}/${createTime}.html`;

    // 七牛构建上传策略函数
    function uptoken(bucket, key) {
      const putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
      return putPolicy.token();
    }
    // 生成上传 Token
    const token = uptoken(bucket, key);
    // 构造上传函数
    function uploadFile(uptoken, key, localFile) {
      const extra = new qiniu.io.PutExtra();
      qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if (!err) {

          // 把在服务器生成的对应临时目录删除
          const folder = join(__dirname, `../template/${email}`);
          exec(`rmdir ${folder} /s /q `, function (err, stdout, stderr) {
            // your callback goes here
          });
          // 上传成功， 处理返回值
          QRCode.toDataURL(`http://${urlPrefix}/${ret.key}`, function (err, qrcodeUrl) {

            // 更新用户数据
            User.findByIdAndUpdate(
              userId,
              { $push: { myH5: { pages, createTime, title, qrcodeUrl } } },
              (err, user) => {
                if (err) throw err;
              });
            res.status(200).json({
              qrcodeUrl,
            });
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
