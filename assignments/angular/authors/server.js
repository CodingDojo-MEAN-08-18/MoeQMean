const express = require('express'),
  path = require('path'),
  app = express(),
  port = 1337;

let routes = require('./server/routes/routes.js')(app);

app.listen(port, function() {
  console.log('Listening on port: '+ port);
});
