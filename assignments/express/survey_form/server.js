const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 8000;

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'qwertybawse',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   res.render('index');
});

app.post('/form', function(req, res) {
    req.session.name = req.body.name;
    req.session.language = req.body.language;
    req.session.location = req.body.location;
    req.session.comment = req.body.comment;

    console.log("Name: ", req.session.name);
    console.log("language: ", req.session.language);
    console.log("location: ", req.session.location);
    console.log("comment: ", req.session.comment);

    res.redirect('/results');
});

app.get('/results', function(req, res) {
   const form_res = [{
       name: req.session.name,
       language: req.session.language,
       location: req.session.location,
       comment: req.session.comment
   }];
    res.render('results', {results: form_res})
});

app.listen(port, function(){
   console.log("Listening on port: "+ port);
});