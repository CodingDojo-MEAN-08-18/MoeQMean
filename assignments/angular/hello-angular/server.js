const express = require('express'),
  path = require('path'),
  port = 1337,
  app = express(),
  routes = require('./server/routes/routes.js')(app);

app.use(express.static( __dirname + '/hello-angular/dist/hello-angular'));

app.listen(port, function() {
  console.log('Listening on port: '+ port);
});
