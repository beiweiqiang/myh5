const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');

const passport = require('passport');
const config = require('./config');

// 链接数据库 加载models
require('./server/models').connect(config.dbUri);

const app = express();

// 指定端口
const PORT = process.env.PORT || 3000;

// app 静态资源
app.use(express.static(path.resolve(__dirname, 'server', 'static')));
app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

// 解析http body信息
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

// flash
app.use(session({
  secret: 'my secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(flash());

// passport 中间件
app.use(passport.initialize());
app.use(passport.session());

// 加载 passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// authentication checker 中间件，要在 routes 之前
const authCheckMiddleware = require('./server/middleware/auth-check');

app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
