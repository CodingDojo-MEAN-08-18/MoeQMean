const express = require('express');
const app = express();
const server = app.listen(6789);
const io = require('socket.io')(server);
var count = 0;

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   res.render('index');
});

io.on('connection', function (socket) {

    socket.on('button pushed', function(data) {
        count++;
        console.log('button was pushed: ' + count + ' times');
        socket.emit('times pushed', {counter: count});
    });

    socket.on('button reset', function() {
        count = 0;
        socket.emit('button has reset', {count: count});
    });

});
