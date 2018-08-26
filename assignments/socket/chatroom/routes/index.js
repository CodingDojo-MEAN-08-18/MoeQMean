const bodyParser = require('body-parser');
var numUsers = 0;
var user_list =  [];
var last;

module.exports = function Route(app, server) {

    const io = require('socket.io')(server, {
        pingInterval: 10000,
        pingTimeout: 5000,
        cookie: false
    });


    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/', function (req, res) {
        res.render('index');
    });

    // app.post('/chatroom', function(req, res) {
    //     const user = {
    //         name: req.body.name
    //     };
    //     res.render('chatroom', {user: user, listUsers: user_list});
    // });

    // =========== SOCKET ===========  \\
    io.on('connection', function (socket) {
        var addedUser = false;

        // default username
        socket.nickname = "Anonymous";

        socket.on('add user', (username) => {
            if (addedUser) return;

            user_list.push(username.name);
            last = user_list[user_list.length - 1];

            console.log('users online: ', user_list);
            console.log('last user', last);

            socket.nickname = username.name;
            ++numUsers;
            addedUser = true;

            io.sockets.emit('login', {
                numUsers: numUsers,
                user: username.name,
                lastUser: last
            });

        });

        socket.on('new_message', (data) => {
            console.log(data);
            socket.broadcast.emit('new message', {
                username: data.user,
                message: data.msg,
                numUsers: numUsers
            });
            socket.emit('your msg', {
                msg: data.msg,
                numUsers: numUsers,
                lastUser: last
            });
        });

        socket.on('user left', function(data) {
            console.log(data.user, ' has disconnected');
        });

        socket.on('disconnect', (data) => {
            if (addedUser) {
                --numUsers;

                // echo globally that this client has left
                socket.broadcast.emit('user left', {
                    username: socket.nickname,
                    numUsers: numUsers
                });
            }

            console.log(data);
        });

    });

};