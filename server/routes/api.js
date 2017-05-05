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
const formidable = require('formidable');

const urlPrefix = require('../../config').qiniuOnline.urlPrefix;
const config = require('../../config');

const router = new express.Router();

// 要上传的空间
const myBucket = config.qiniuOnline.bucket;

// 七牛构建上传策略函数
const uptoken = (bucketName, key) => {
  // const putPolicy = new qiniu.rs.PutPolicy(bucketName + ':' + key);
  const putPolicy = new qiniu.rs.PutPolicy(`${bucketName}:${key}`);
  return putPolicy.token();
};

// 不存在目录则生成
const checkDir = (dir) => {
  // const d = join(__dirname, dir);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

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

router.post('/wechatImgUpload', (req, res) => {
  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  // decode the token using a secret key-phrase
  const payload = jwt.verify(token, config.jwtSecret);
  const userId = payload.sub;
  // 不存在该目录则生成
  const dir = join(__dirname, `../temp/uploads/img/${userId}`);
  checkDir(dir);
  const form = new formidable.IncomingForm();
  form.multiples = false;
  form.uploadDir = dir;
  form.on('file', (field, file) => {
    const suffix = file.name.replace(/.*(\..*)/gi, '$1');
    const fileName = `${Date.now()}${suffix}`;
    fs.rename(file.path, join(form.uploadDir, fileName));

    // 上传七牛云
    const key = `resource/${userId}/img/${fileName}`;
    // 生成上传 Token
    const token = uptoken(myBucket, key);
    // 构造上传函数
    function uploadFile(myUptoken, myKey, localFile) {
      const extra = new qiniu.io.PutExtra();
      qiniu.io.putFile(myUptoken, myKey, localFile, extra, (err, ret) => {
        if (!err) {
          // 上传成功， 处理返回值
          // console.log(ret.hash, ret.key, ret.persistentId);
          const url = `http://${urlPrefix}/${ret.key}`;
          // 把在服务器生成的对应临时目录删除
          exec(`rmdir ${dir} /s /q `, function (err, stdout, stderr) {
            // your callback goes here
            console.log('已删除临时上传的wechat img');
          });
          res.status(200).json({
            url,
          });
        } else {
          // 上传失败， 处理返回代码
          console.log(err);
        }
      });
    }
    // 调用uploadFile上传
    const filePath = join(dir, fileName);
    uploadFile(token, key, filePath);
  });

  form.on('error', (err) => {
    console.log('An error has occured: \n' + err);
  });

  form.parse(req);
});

// ajax上传图片，临时保存在本地，然后上传到七牛云
router.post('/picUpload', (req, res) => {
  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  // decode the token using a secret key-phrase
  const payload = jwt.verify(token, config.jwtSecret);
  const userId = payload.sub;
  // 不存在该目录则生成
  const dir = join(__dirname, `../temp/uploads/img/${userId}`);
  checkDir(dir);
  // create an incoming form object
  const form = new formidable.IncomingForm();
  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;
  form.uploadDir = dir;

  // 用来放ajax传来的files
  const fileArr = [];

  form.on('file', (field, file) => {
    // console.log(file);
    const suffix = file.name.replace(/.*(\..*)/gi, '$1');
    const fileName = `${Date.now() + fileArr.length}${suffix}`;
    console.log(fileName);
    fs.rename(file.path, join(form.uploadDir, fileName));
    // const fileDir = join(dir, fileName);
    fileArr.push(fileName);
  });

  form.on('error', (err) => {
    console.log('An error has occured: \n' + err);
  });

  form.on('end', () => {
    // 用于计算上传到七牛云成功的次数
    let uploadSuccessCount = 0;
    // 用来放上传七牛云成功以后的pic url
    const filePathArr = [];
    fileArr.map((fileName, index) => {
      // 上传七牛云
      const key = `resource/${userId}/img/${fileName}`;
      // 生成上传 Token
      const token = uptoken(myBucket, key);
      // 构造上传函数
      function uploadFile(myUptoken, myKey, localFile) {
        const extra = new qiniu.io.PutExtra();
        qiniu.io.putFile(myUptoken, myKey, localFile, extra, (err, ret) => {
          if (!err) {
            // 上传成功， 处理返回值
            console.log(ret.hash, ret.key, ret.persistentId);
            const uploadPath = `http://${urlPrefix}/${ret.key}`;
            filePathArr.push({
              url: uploadPath,
            });
            // 把在服务器生成的对应临时目录删除
            const folder = join(__dirname, `../temp/uploads/img/${userId}`);
            uploadSuccessCount += 1;
            if (uploadSuccessCount === fileArr.length) {
              exec(`rmdir ${folder} /s /q `, function (err, stdout, stderr) {
                // your callback goes here
                console.log('已删除临时上传的pic');
              });
              // 返回添加已上传的pic url数组
              res.status(200).json({
                uploadPicUrlArr: filePathArr,
              });
            }

            // 更新用户数据
            User.findByIdAndUpdate(
              userId,
              { $push: { uploadPic: { url: uploadPath } } },
              (err, user) => {
                if (err) throw err;
                // console.log(user.uploadPic);
              });
          } else {
            // 上传失败， 处理返回代码
            console.log(err);
          }
        });
      }
      // 调用uploadFile上传
      const filePath = join(dir, fileName);
      uploadFile(token, key, filePath);
    });
    // 在这里发送响应
    // res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

  // check if a user exists
  // User.findById(userId, (userErr, user) => {
  //   if (userErr || !user) {
  //     return res.status(400).json({
  //       success: false,
  //       errors: '用户出错，请退出后重新登录',
  //     });
  //   }
  //   res.status(200).json({
  //     message: '登录成功',
  //     success: true,
  //     user,
  //   });
  // });
});

// 前端的数据填充在ejs模板里，
// 填充数据后的html上传至七牛云
// 更新用户数据库
router.post('/publish', (req, res) => {
  const { pages, title, wechatSettings } = req.body;

  const secretToken = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(secretToken, config.jwtSecret);
  const userId = payload.sub;

  // 生成已填数据的html模板
  const renderStr = ejs.render(read(join(__dirname, '../template/index.ejs'), 'utf8'), { pages, title, wechatSettings });

  // 不存在该目录则生成
  const dir = join(__dirname, `../temp/html/${userId}`);
  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  // }
  checkDir(dir);
  // 生成file的位置
  const filePath = join(__dirname, `../temp/html/${userId}/index.html`);
  fs.writeFile(filePath, renderStr, (err) => {
    if (err) throw err;

    // 上传七牛云
    // 获取当前时间，作为文件名以及插入数据库
    const createTime = Date.now();
    // 把html文件放在七牛云html文件夹下 对应userid文件夹下 html文件夹 内
    const key = `html/${userId}/html/${createTime}.html`;
    // 生成上传 Token
    const token = uptoken(myBucket, key);
    // 构造上传函数
    function uploadFile(myUptoken, myKey, localFile) {
      const extra = new qiniu.io.PutExtra();
      qiniu.io.putFile(myUptoken, myKey, localFile, extra, (err, ret) => {
        if (!err) {
          // 把在服务器生成的对应临时目录删除
          const folder = join(__dirname, `../temp/html/${userId}`);
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
