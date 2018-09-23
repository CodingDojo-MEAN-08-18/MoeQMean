const express = require('express'),
  port = 1337,
  app = express();
let routes = require('./server/routes/routes.js')(app);

app.listen(port, function() {
  console.log('Listening on port: '+ port);
});
