const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 8000;

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {counter: req.session.counter});
});

app.post('/counter', function (req, res) {
    if (isNaN(req.session.counter)) {
        req.session.counter = 0;
    }
    req.session.counter++;
    console.log(req.session.counter);
    res.redirect('/');
});

app.post('/double', function (req, res) {
    if (isNaN(req.session.counter)) {
        req.session.counter = 0;
    }
    req.session.counter = req.session.counter + 2;
    console.log(req.session.counter);
    res.redirect('/');
});

app.post('/reset', function(req, res) {
   req.session.counter = 0;
   res.redirect('/');
});


app.listen(port, function() {
   console.log('Listing on port: '+ port);
});