var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/users/:name?', function (req, res) {
  var name = req.params.name;
  if (name) {
    res.send('hello ' + name);
  } else {
    res.send('hello, nobody');
  }
});

app.get('/items/:id([0-9]+)?', function (req, res) {
  var id = req.params.id;
  if (id) {
    res.send('item number ' + id);
  } else {
    res.send('no item number');
  }
});

app.listen(3000);
console.log('server starting...');
