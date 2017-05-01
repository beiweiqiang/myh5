# myh5

一个让你轻松编辑和发布H5的平台

地址: http://myh5.beiweiqiang.com

所用技术：
react, redux, react-router4, react-redux, webpack, eslint, mongoose
上传的图片和生成的页面放在七牛云上

功能：
1. 注册登录
2. h5发布页面，可添加文本、图片，一键生成二维码
3. 我的h5页面

使用：
1. clone 本仓库
2. npm i
3. 把config_example文件重命名为config
4. 把config文件里的index.json里面的信息改成自己的
5. 开两个terminal，一个运行npm start，一个运行npm run bundle


部分特点：

接下来实现：
1. 研究本地如何缓存图片
2. 让用户选择是否30天内免登陆
3. 密码修改
4. 头像修改

bug：
1. 在MyRnd处存在16px的bug，y设为0但是实际上是16px
  解决：原来是在组件的style里直接写position: absolute，改成用className就行了