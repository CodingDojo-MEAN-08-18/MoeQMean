const express = require("express"),
    app = express(),
    server = app.listen(1337),
    path = require("path"),
    bodyParser = require('body-parser'),
    io = require('socket.io')(server),
    routes = require('./routes/index.js')(app, server);

// static content
app.use(express.static(path.join(__dirname, "./static")));

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');