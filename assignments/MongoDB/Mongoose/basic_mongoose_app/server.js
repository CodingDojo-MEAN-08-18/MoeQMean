const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    app = express(),
    port = 1337;

app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/basic_mongoose', {useNewUrlParser: true });
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User'); // We are retrieving this Schema from our Models, named 'User'


app.get('/', function(req, res) {
    User.findOne({}, function(err, users){
        var data = {};
        data = users;
        console.log(data.name);
    });
    res.render('index');
});
app.post('/users', function(req, res) {
    console.log('Post Data:', req.body);
    var user = new User({name: req.body.name, age: req.body.age});

    user.save(function(err) {
        if(err) {
            console.log('Something went wrong');
        } else {
            console.log('Successfully saved a user');
            res.redirect('/');
        }
    });
});

app.listen(port, function() {
   console.log('Listening on port: '+ port);
});