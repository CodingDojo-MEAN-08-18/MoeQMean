const express = require("express"),
    axios = require('axios'),
    app = express();

app.use(express.static(__dirname + "/static/"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/people/:page', function(req, res) {
    let url = 'https://swapi.co/api/people/?page='+ req.params.page +'&format=json';
    axios.get(url)
        .then(data => {
            // console.log(data.data);
            res.json(data.data);
        })
        .catch(error => {
            console.log(error);
            res.json(error);
        })
});
app.get('/planets/:page', function(req, res) {
    let url = 'https://swapi.co/api/planets/?page='+ req.params.page +'&format=json';
    axios.get(url)
        .then(data => {
            res.json(data.data);
        })
        .catch(error => {
            console.log(error);
            res.json(error);
        })
});

app.listen('1337', function() {
    console.log('Listening on port 1337.');
});