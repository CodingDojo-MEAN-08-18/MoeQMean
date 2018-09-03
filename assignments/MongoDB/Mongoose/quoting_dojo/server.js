const express = require('express'),
    path = require('path'),
    port = 1337,
    app = express(),
    routes = require('./server/routes/routes.js')(app);

app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.listen(port, function() {
   console.log('Listening on port: '+ port);
});