const express = require('express');
const app = express();
const port = 3000;
var usersRoute = require('./routes/users.js');
var postsRoute = require('./routes/posts.js');
var filesRoute = require('./routes/files.js');

app.get('/', (req, res) => {
  res.redirect('/html/index.html');
});

app.use(usersRoute);
app.use(postsRoute);
app.use(filesRoute);

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
});