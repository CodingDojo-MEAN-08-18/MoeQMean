const express = require("express"),
    app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function(req, res){
    res.render('static/index.html');
});

app.get('/cats', function(req, res){
    res.render('static/cats.html');
});

app.get('/cars', function(req, res){
    res.render('static/cars.html');
});

app.get('/form', function(req, res){
    res.render('static/form.html');
});

app.listen(8000, function(){
    console.log("Listening on port: 8000");
});