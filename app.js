var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/front page');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var shoppingRouter = require('./routes/allCategories');
var menRouter = require('./routes/menDep');
var womenRouter = require('./routes/womenDep');
var babyRouter = require('./routes/babyDep');
var kidsRouter = require('./routes/kidsDep');
var cardRouter = require('./routes/card');
var aboutRouter = require('./routes/about');
var apiRouter = require('./routes/API');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/allCategories', shoppingRouter);
app.use('/menDep', menRouter);
app.use('/womenDep', womenRouter);
app.use('/kidsDep', kidsRouter);
app.use('/babyDep', babyRouter);
app.use('/card', cardRouter);
app.use('/about', aboutRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
