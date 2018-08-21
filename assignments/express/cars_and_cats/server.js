const express = require("express"),
    app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/cats', function(req, res) {
    res.render('cats');
});

app.get('/ciggy', function(req, res) {
    const cat_info = [
        {favorite_food: "Marlboro Chow", age: 9, sleeping_spots: "In a dark alley next to a nightclub, asking people for cigarettes."}
    ];
   res.render('ciggy', {ciggy: cat_info})
});

app.get('/hipster', function(req, res) {
    const cat_info = [
        {favorite_food: "Molly Mix", age: 5, sleeping_spots: "Inside of a nightclub, right next to the DJ booth."}
    ];
    res.render('hipster', {hipster: cat_info})
});

app.get('/catso', function(req, res) {
    const cat_info = [
        {favorite_food: "Doggy Treats", age: 35, sleeping_spots: "The whole town is his, u gotta problem?"}
    ];
    res.render('catso', {catso: cat_info})
});

app.get('/cars', function(req, res) {
    res.render('cars');
});
app.get('/form', function(req, res) {
    res.render('form');
});


app.listen(8000, function(){
    console.log("Listening on port: 8000");
});