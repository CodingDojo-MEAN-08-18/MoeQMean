const express = require("express"),
    app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/cats', function(req, res){
    res.render('cats');
});

app.get('/cars', function(req, res){
    res.render('cars');
});
app.get('/form', function(req, res){
    res.render('form');
});


app.listen(8000, function(){
    console.log("Listening on port: 8000");
});