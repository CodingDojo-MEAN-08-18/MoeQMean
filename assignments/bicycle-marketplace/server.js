const express = require('express'),
  app = express(),
  port = 1337,
  routes = require('./server/routes/routes')(app);

app.listen(port, function() {
  console.log('Listening on port: '+ port);
});
