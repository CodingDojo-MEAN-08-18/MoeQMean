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

mongoose.connect('mongodb://localhost/mongoose_dashboard', {useNewUrlParser: true });
const WolfSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 2},
    location: {type: String, required: true, minLength: 2},
    age: {type: Number, required: true, min:1, max: 18},
}, {timestamps: true});
mongoose.model('User', WolfSchema);
const Wolf = mongoose.model('User');

app.get('/', function(req, res) {
    Wolf.find({}).sort('-createdAt').exec(function(err, users) {
        console.log(users);
        if (users)  {
            data = users;
        }
        res.render('index', {wolves: data})
    });
});

app.get('/wolves/new', function(req, res) {
   res.render('wolf_new');
});

app.get('/wolves/:id', function(req, res) {
    Wolf.findById(req.params.id, function (err, users) {
        console.log(users);
        if (users)  {
            data = users;
        }
        res.render('wolf', {wolf: data})
    });
});

app.get('/wolves/edit/:id', function(req, res) {
    Wolf.findById(req.params.id, function (err, users) {
        console.log(users);
        if (users)  {
            data = users;
        }
        res.render('wolf_edit', {wolf: data})
    });
});

app.post('/wolves/:id', function(req,res) {
    Wolf.findById(req.params.id, function (err, wolf) {
        console.log(wolf);
        if (err) {
            console.log("We have an error!", err);
            // for(var key in err.errors) {
            //     req.flash('reg', err.errors[key].message);
            // }
            if (req.body.name.length <= 2) {
                req.flash('reg', 'Name cannot be less than 2 characters.');
            } else if (req.body.location.length < 5) {
                req.flash('reg', 'Location must be longer than 5 characters.');
            } else if (req.body.age > 18) {
                req.flash('reg', 'Age cannot be greater than 18.');
            } else {
                req.flash('reg', 'There was an error, try again.')
            }
            res.redirect('/wolves/edit/' + req.params.id);
        } else {
            if (req.body.name.length <= 2) {
                req.flash('reg', 'Name cannot be less than 2 characters.');
                res.redirect('/wolves/edit/' + req.params.id);
            } else if (req.body.location.length < 5) {
                req.flash('reg', 'Location must be longer than 5 characters.');
                res.redirect('/wolves/edit/' + req.params.id);
            } else if (req.body.age > 17) {
                req.flash('reg', 'Age cannot be greater than 17. Healthy Wolves can live up to 17 years.');
                res.redirect('/wolves/edit/' + req.params.id);
            } else if (req.body.age < 1) {
                req.flash('reg', 'Age cannot be less than 1.');
                res.redirect('/wolves/edit/' + req.params.id);
            } else {
                wolf.name = req.body.name;
                wolf.location = req.body.location;
                wolf.age = req.body.age;

                wolf.save();
                res.redirect('/')
            }
        }

    });
});

app.post('/wolves/destroy/:id', function(req, res) {
    Wolf.remove({_id: req.params.id}, function(err, data) {
       if (err) {
           console.log('There was an error');
           res.redirect('/');
       }
       if (data) {
           console.log('Successfully Deleted: ', data);
           res.redirect('/');
       }
    });
});

app.post('/wolves', function(req, res) {
    var user = new Wolf(req.body);
    user.save(function(err) {
        if(err) {
            console.log("We have an error!", err);
            // for(var key in err.errors) {
            //     req.flash('reg', err.errors[key].message);
            // }
            if (req.body.name.length <= 2) {
                req.flash('reg', 'Name cannot be less than 2 characters.');
            } else if (req.body.location.length < 5) {
                req.flash('reg', 'Location must be longer than 5 characters.');
            } else if (req.body.age > 17) {
                req.flash('reg', 'Age cannot be greater than 17 or less than 1. Healthy Wolves can live up to 17 years.');
            } else if (req.body.age < 1) {
                req.flash('reg', 'Age cannot be less than 1.');
            } else {
                req.flash('reg', 'There was an error, try again.')
            }
            res.redirect('/wolves/new');
        } else {
            res.redirect('/');
        }
    })
});


app.listen(port, function() {
    console.log('Listening on port: '+ port);
});