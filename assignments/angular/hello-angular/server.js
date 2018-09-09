const express = require('express'),
  path = require('path'),
  port = 8000,
  app = express();

app.use(express.static(path.join(__dirname, '/dist/hello-angular/')));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dist/hello-angular/index.html');
});

const routes = require('./server/routes/routes.js')(app);

app.listen(port, function() {
  console.log('Listening on port: '+ port);
});
