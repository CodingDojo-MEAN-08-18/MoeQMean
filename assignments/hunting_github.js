(function() {

    $('.btn.btn-primary').on('click', function() {
        var userName = $('#username').val();
        $.get("https://api.github.com/users/"+ userName, displayName);
        // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
        function displayName(data) {
            console.log(data);
            $('.github--user').html('<h2>Your username is: '+ data.login +'</h2><h2>Location: '+ data.location +'</h2>');
        }
    });

    $('#username').keypress(function(e){
        if (e.which === 13) {
            let userName = $(this).val();
            $.get("https://api.github.com/users/"+ userName, displayName);
            // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
            function displayName(data) {
                console.log(data);
                $('.github--user').html('<h2 class="text-center">Username: '+ data.login +'</h2><h2 class="text-center">Location: '+ data.location +'</h2><h2 class="text-center">Blog: <a href="' + data.blog +'">'+ data.blog +'</a></h2><h2 class="text-center">Company: '+ data.company +'</h2>');
            }
        }
    });

})();

