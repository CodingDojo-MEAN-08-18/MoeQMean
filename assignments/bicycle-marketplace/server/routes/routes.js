const bodyParser = require('body-parser'),
  path = require('path'),
  express = require('express'),
  Models = require('../models/bikes');

module.exports = function(app) {
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../../dist/bicycle-marketplace/')));

  app.get('/', function(req, res) {
    res.sendFile(__dirname + 'index.html');
  });

  app.post('/login', function(req, res) {
    Models.User.findOne({email: req.params.email, password: req.params.password}, function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    })
  });

  app.post('/register',function(req,res) {
    const newUser = new Models.User({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password});
    newUser.save(function(err, data){
      if (err) {
        console.log(err);
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });
};
