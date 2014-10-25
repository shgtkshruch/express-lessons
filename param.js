var express = require('express');
var app = express();

app.param('id', function (req, res, next, id) {
  var users = ['tom', 'jan', 'sora'];
  req.params.name = users[id];
  next();
});

app.get('/hello/:id', function (req, res) {
  res.send('hello ' + req.params.name);
});

app.get('/bye/:id', function (req, res) {
  res.send('bye ' + req.params.name);
});

app.listen(3000);
console.log('server starting...');
