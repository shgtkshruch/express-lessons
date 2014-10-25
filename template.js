var express = require('express');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/:name?', function (req, res) {
  var name = req.params.name;
  if (name) {
    res.render('template', {name: name});
  } else {
    res.render('template', {name: 'gest'});
  }
});

app.listen(3000);
console.log('server starting...');

