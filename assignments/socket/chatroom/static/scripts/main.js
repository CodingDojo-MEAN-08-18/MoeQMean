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

    $('#name').on("keypress", function(e) {
        if (e.which === 13) {
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
        }
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
        dialog.append('<div class="message-text"><span class="their-txt">'+ data.username +': </span><span>'+ data.message +'</span></div>').hide().fadeIn();
        $('.users-online').html('<p>Users online: '+ data.numUsers +'</p>');
        dialog.scrollTop(dialog[0].scrollHeight);
    });

    socket.on('your msg', function(data) {
        $(".dialog").append('<div class="message-txt"><span class="your-txt">You: </span><span>'+ data.msg +'</span></div>');
        // Scroll to bottom of dialog box if too much text
        dialog.scrollTop(dialog[0].scrollHeight);
    });

    socket.on('login', function(data) {
        let html = '';
        $('.dialog').append('<div>'+ data.user +' joined.</div>');
        console.log(data.usersList);
        for (let user of data.usersList) {
            if (user !== 'undefined') {
                html += '<div>'+ user +'</div>';
            }
        }
        $('.online').html(html);
    });

    socket.on('user left', function(data) {
        let html = '';
        $(".dialog").append('<div>'+ data.username +' left.</div>');
        $('.users-online').html('<p>Users online: '+ data.numUsers);

        for (let user of data.usersList) {
            if (user !== 'undefined') {
                html += '<div>'+ user +'</div>';
            }
        }
        $('.online').html(html);
    });

});