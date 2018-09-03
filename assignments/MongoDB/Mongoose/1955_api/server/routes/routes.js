const bodyParser = require('body-parser'),
    User = require('../models/1955.js');

module.exports = function(app) {
    app.use(bodyParser.json());

    app.get('/', function (req, res) {
        User.find({}, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({data});
            }
        });
    });
    app.get('/new/:name', function(req, res) {
        const newUser = new User({name: req.params.name});
        newUser.save(function(err){
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.redirect('/');
            }
        });
    });
    app.get('/remove/:name', function(req, res) {
        User.remove({name: req.params.name}, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err})
            } else {
                res.redirect('/');
            }
        });
    });
    app.get('/:name', function(req, res) {
        User.findOne({name: req.params.name}, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({data});
            }
        })
    });
};