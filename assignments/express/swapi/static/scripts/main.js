$(document).ready(function(){
    let next = 1;
    $('.peopleBtn').click(function(){
        if ($('.inner-box').hasClass('planets')){
            $('.inner-box').removeClass('planets');
            $('.inner-box').addClass('people');
        }
        $.get('/people/1', function(data){
            let html = '';
            $.each(data.results, function(i, v) {
                console.log(v.name);
                html += '<p>'+ v.name + '</p>';
            });
            $('.inner-box').html(html);
        }, 'json');
    });

    $('.next-10').click(function() {
        next++;

        if ($('.inner-box').hasClass('planets')){
            $.get('/planets/'+next, function(data){
                let html = '';
                $.each(data.results, function(i, v) {
                    console.log(v.name);
                    html += '<p>'+ v.name + '</p>';
                });
                $('.inner-box').html(html);
            }, 'json');
        } else {
            $.get('/people/'+next, function(data){
                let html = '';
                $.each(data.results, function(i, v) {
                    console.log(v.name);
                    html += '<p>'+ v.name + '</p>';
                });
                $('.inner-box').html(html);
            }, 'json');
        }

    });

    $('.prev-10').click(function() {
        if (next <= 1) {
            next = 1;
        } else {
            next--;
        }

        if ($('.inner-box').hasClass('planets')){
            $.get('/planets/'+next, function(data){
                let html = '';
                $.each(data.results, function(i, v) {
                    console.log(v.name);
                    html += '<p>'+ v.name + '</p>';
                });
                $('.inner-box').html(html);
            }, 'json');
        } else {
            $.get('/people/'+next, function(data){
                let html = '';
                $.each(data.results, function(i, v) {
                    console.log(v.name);
                    html += '<p>'+ v.name + '</p>';
                });
                $('.inner-box').html(html);
            }, 'json');
        }
    });

    $('.planetBtn').click(function(){
        if ($('.inner-box').hasClass('people')){
            $('.inner-box').removeClass('people');
            $('.inner-box').addClass('planets');
        } else {
            $('.inner-box').addClass('planets');
        }
        $.get('/planets/1', function(data){
            let html = '';
            $.each(data.results, function(i, v) {
                console.log(v.name);
                html += '<p>'+ v.name + '</p>';
            });
            $('.inner-box').html(html);
        }, 'json');
    });
});