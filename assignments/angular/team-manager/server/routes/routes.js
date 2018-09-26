const path = require('path'),
  bodyParser = require('body-parser'),
  express = require('express'),
  Player = require('../models/players.js');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../../dist/team-manager/')));

  app.get('/', function(req, res) {
    res.sendFile(__dirname + 'index.html');
  });

  // New player
  app.post('/new', function(req,res) {
    const newPlayer = new Player({name: req.body.name, position: req.body.position});
    newPlayer.save(function(err, data) {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  });

  // Get players
  app.get('/players', function(req, res) {
    Player.find({}, function(err, data){
      if (err) {
        res.json({message: "There was an error:", error: err});
      } else {
        res.json(data);
      }
    })
  });

  // Update a player
  app.post('/edit/:id', function(req, res) {
    Player.findOneAndUpdate({_id: req.params.id}, {$set: {actions: req.body.action}}, {new: true}, function(err, data) {
      if(err) {
        console.log('error setting the data', err);
      } else {
        res.json(data);
      }
    });
  });

  // Delete a player
  app.post('/remove/:id',  function (req, res) {
    Player.deleteOne({_id: req.params.id}, function (err, data) {
      if (err) {
        console.log("error: ", err);
        res.json({message: "Error", error: err});
      } else {
        console.log('Player deleted!', data);
        res.json(data);
      }
    })
  });
};
