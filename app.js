require('./bootstrap')

// Helper to manage http errors more clearly
var createError = require('http-errors');
// Web application framework
var express = require('express');
// A helper utility to generate and join system paths
var path = require('path');
// populate req.cookies (it's middleware)
var cookieParser = require('cookie-parser');
// Middleware that logs requests to console
var logger = require('morgan');

// Grab external routing files
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var borrowersRouter = require('./routes/borrowers');

// Initialize the app
// Note app.locals can be created for app-level props
// They can be accessed via [req|res].app.locals
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// Log request output
app.use(logger('dev'));
// populates req.body when json content-type
app.use(express.json());
// populate req.body when urlencoded content-type
app.use(express.urlencoded({ extended: false }));
// populate req.cookies with request's cookies
app.use(cookieParser());

/* 
How does Express actually serve the right file in React?

By default React creates an index.html during its build, we want to use that index.html
its full path is react-client/build/index.html

By default express.static serves index.html if no specific file is specified in the request
http://expressjs.com/en/4x/api.html#express.static
You can configure which file should be search for
explicitly by passing express.static() an index option
*/
console.log({
  serve: 'react static files',
  from: path.join(__dirname, 'client/build'),
})
app.use(express.static(path.join(__dirname, 'client/build')));

/*
 Tell express to use these base routes (post,put,get,delete)
 '/' will create routes for the root url
 '/users' will create routes for /users
*/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/borrowers', borrowersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  // This is basically saying, "is Node running in dev or prod mode?"
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error({local: res.locals, env: req.app.get('env')})

  // render the error page
  res.status(err.status || 500);
  res.json(res.locals.error);
});

module.exports = app;
