# myh5

一个让你轻松编辑和发布H5的平台

地址: http://myh5.beiweiqiang.com

所用技术：
react, redux, react-router4, react-redux, webpack, eslint, mongoose
上传的图片和生成的页面放在七牛云上

功能：
- 注册登录
- h5发布页面，可添加文本、图片，一键生成二维码
- 我的h5页面
- 未编辑完的h5可以本地保存
- 接入微信sdk接口

使用：
1. clone 本仓库
2. npm i
3. npm start 开启服务器
4. npm run dev 开启 webpack-dev-server，浏览器自动打开 localhost:8080
5. 如果要生成生产模式下的文件，使用 npm run build，build文件夹内的文件直接可放到服务器上
6. npm run clean 清除生产文件


部分特点：

接下来实现：
- 让用户选择是否30天内免登陆
- 密码修改
- 头像修改
- 加动画

bug：
- 在MyRnd处存在16px的bug，y设为0但是实际上是16px
  解决：原来是在组件的style里直接写position: absolute，改成用className就行了