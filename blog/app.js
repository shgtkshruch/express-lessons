var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var methodOverride = require('method-override');
var post = require('./routes/post');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

app.get('/', post.index);
// app.get('/posts/new', post.new);
// app.post('/posts/create', post.create);
// app.get('/posts/:id', post.show);
// app.get('/posts/:id/edit', post.edit);
// app.put('/posts/:id', post.update);
// app.delete('/posts/:id', post.destroy);

app.listen(3000);
console.log('server starting...');

