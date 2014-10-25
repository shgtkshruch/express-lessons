var express = require('express');
var app = express();
var bodyParser= require('body-parser');

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/new', function (req, res) {
  res.render('post');
});

app.post('/create', function (req, res) {
  res.send('Hello ' + req.body.name);
});

app.listen(3000);
console.log('server starting...');
