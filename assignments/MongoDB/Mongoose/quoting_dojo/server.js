const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    flash = require('express-flash'),
    session = require('express-session'),
    sessionStore = new session.MemoryStore,
    port = 1337,
    app = express();

app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'seeeecrests'
}));
app.use(flash());

mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true });
var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 2},
    quote: {type: String, required: true, maxLength: 255}
}, {timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function(req, res) {
   res.render('index');
});

app.get('/quotes', function(req, res) {
    var data;
    // User.find({}, function(err, users){
    //     console.log(users);
    //     data = users;
    // });
    User.find({}).sort('-createdAt').exec(function(err, users) {
        console.log(users);
        if (users)  {
            data = users;
        }
        res.render('quotes', {userQuotes: data})
    });
});

app.post('/quotes', function(req, res) {
    var user = new User(req.body);
    user.save(function(err) {
        if(err) {
            console.log("We have an error!", err);
            // for(var key in err.errors) {
            //     req.flash('reg', err.errors[key].message);
            // }
            if (req.body.name.length <= 2) {
                req.flash('reg', 'Name cannot be less than 2 characters.');
            } else if (req.body.quote.length < 10) {
                req.flash('reg', 'Quote must be longer than 10 characters.');
            } else {
                req.flash('reg', 'There was an error, try again.')
            }
            res.redirect('/');
        } else {
            res.redirect('/quotes');
        }
    })
});


app.listen(port, function() {
   console.log('Listening on port: '+ port);
});