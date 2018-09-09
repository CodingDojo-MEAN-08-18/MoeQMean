const express = require('express'),
  path = require('path'),
  port = 8000,
  app = express();

app.use(express.static(path.join(__dirname, '/dist/books-api/')));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/books-api/index.html');
});

const routes = require('./server/routes/routes.js')(app);

app.listen(port, function() {
  console.log('Listening on port: '+ port);
});
