var post = {};
var posts = [
  {title: 'title0', body: 'body0'},
  {title: 'title1', body: 'body1'},
  {title: 'title2', body: 'body2'}
];

post.index = function (req, res) {
  res.render('posts/index', {posts: posts});
}

post.show = function (req, res) {
  res.render('posts/show', {post: posts[req.params.id]});
}

post.new = function (req, res) {
  res.render('posts/new');
}

post.create = function (req, res) {
  var post = {
    title: req.body.title,
    body: req.body.body,
  }
  posts.push(post);
  res.redirect('/');
}

post.edit = function (req, res) {
  var id = req.params.id;
  res.render('posts/edit', {post: posts[id], id: id});
}

post.update = function (req, res) {
  posts[req.params.id] = {
    title: req.body.title,
    body: req.body.body
  };
  res.redirect('/');
}

post.destroy = function (req, res) {
  posts.splice([req.params.id], 1);
  res.redirect('/');
}

module.exports = post;
