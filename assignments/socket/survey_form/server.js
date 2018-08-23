const express = require('express');
const app = express();
const server = app.listen(1337);
const io = require('socket.io')(server),
    routes = require('./routes/index.js')(app);
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

io.on('connection', function (socket) { //2

    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) { //7
        console.log(data.msg);
    });

    socket.on('posting_form', function(data) {
        socket.emit('updated_message', {msg: data});
        socket.emit('random_number', {number: Math.floor(Math.random() * 778)})
    });

});
