const bodyParser = require('body-parser'),
    flash = require('express-flash'),
    session = require('express-session'),
    sessionStore = new session.MemoryStore,
    User = require('../models/quote.js');

module.exports = function(app) {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(session({
        cookie: { maxAge: 60000 },
        store: sessionStore,
        saveUninitialized: true,
        resave: 'true',
        secret: 'seeeecrests'
    }));
    app.use(flash());

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/quotes', function(req, res) {
        var data;
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
};