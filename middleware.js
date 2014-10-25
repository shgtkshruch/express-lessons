var express = require('express');
var app = express();

// a middleware sub-stack which prints request info for any type of HTTP request to /user/:id
app.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.get('/user/:id', function (req, res) {
  res.send('USER ID : ' + req.params.id);
});

app.use(function (req, res, next) {
  console.log('my custom middleware');
  next();
});

app.listen(3000);
console.log('server starting...');
