const express = require('express');
const app = express();
const port = 3000;
let usersRoute = require('./routes/users.js');
let postsRoute = require('./routes/posts.js');
let filesRoute = require('./routes/files.js');
let arduinosRoute = require('./routes/arduino.js');

app.get('/', (req, res) => {
  res.redirect('/html/index.html');
});

app.use(usersRoute);
app.use(postsRoute);
app.use(filesRoute);
app.use(arduinosRoute);

app.listen(port, () => {
  console.log('Example app listening at http://localhost:'+port);
});