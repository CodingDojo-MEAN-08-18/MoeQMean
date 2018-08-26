$(document).ready(function (){

    var socket = io();
    var userName;
    var dialog = $('.dialog');
    var user_list = [];
    var html;

    $('.sub-btn').on('click', function(){
        userName = $('#name').val();

        $('.row.reg').fadeOut();
        $('.row.hidden').css("display", "flex")
            .hide()
            .fadeIn();
        $('.title').css("max-width", "none")
            .hide()
            .fadeIn();

        socket.emit('add user', {
            name: userName
        });
    });

    $('.postform').submit(function(e){
        e.preventDefault();
        socket.emit('new_message', {
            msg: $('#chatSend').val(),
            user: userName
        });
        $('#chatSend').val('');
    });

    socket.on('new message', function(data){
        dialog.append('<div><span>'+ data.username +': </span><span>'+ data.message +'</span></div>');
        $('.users-online').html('<p>Users online: '+ data.numUsers +'</p>');
        dialog.scrollTop(dialog[0].scrollHeight);
    });

    socket.on('your msg', function(data) {
        $(".dialog").append('<div><span>You: </span><span>'+ data.msg +'</span></div>');
        dialog.scrollTop(dialog[0].scrollHeight);
        $('.users-online').html('<p>Users online: '+ data.numUsers +'</p>');
    });

    socket.on('user joined', function(data) {
        $('.dialog').append('<p>'+ data.user +' joined.</p>');
        user_list.push(data.user);
        console.log('Users online: ', user_list);
    });

    socket.on('login', function(data) {
        $('.users-online').html('<p>Users online: '+ data.numUsers +'</p>');
        $('.dialog').append('<p>'+ data.user +' joined.</p>');
        user_list.push(data.user);
        console.log('Users online: ', user_list);
    });

    socket.on('user left', function(data) {
        $(".dialog").append('<div>'+ data.username +' left.</div>');
        $('.users-online').html('<p>Users online: '+ data.numUsers);
    });

});