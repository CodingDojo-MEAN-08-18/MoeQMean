const bodyParser = require('body-parser'),
  express = require('express'),
  path = require('path'),
  Battle = require('../models/battles');

module.exports = function(app) {
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../../dist/github-battle/')));

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/github-battle/index.html');
  });

  // Create new battle
  app.post('/new',function(req,res) {
    const newBattle = new Battle({note: req.body.note});
    newBattle.save(function(err, data){
      if (err) {
        console.log(err);
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });

  // Read / get all battles
  app.get('/battles', function (req, res) {
    Battle.find({}).sort({createdAt: -1}).exec(function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });


};
