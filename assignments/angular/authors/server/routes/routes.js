const bodyParser = require('body-parser'),
  express = require('express'),
  path = require('path'),
  Author = require('../models/authors.js');

module.exports = function(app) {
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../../dist/authors/')));

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/authors/index.html');
  });

  // Create new Author
  app.post('/new',function(req,res) {
    const newAuthor = new Author({name: req.body.name});
    newAuthor.save(function(err, data){
      if (err) {
        console.log(err);
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });

  // Read / get all authors
  app.get('/authors', function (req, res) {
    Author.find({}, function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });

  // Read / get single author
  app.get('/edit/:id', function(req, res) {
    Author.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    })
  });

  // Update a Author
  app.post('/edit/:id', function(req, res) {
    Author.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name}}, {new: true}, function(err, data) {
      if(err) {
        console.log('error setting the data', err);
      } else {
        console.log('Task updated!', data);
      }
    });
  });

  // Delete a Author
  app.post('/remove/:id',  function (req, res) {
    Author.deleteOne({_id: req.params.id}, function (err, data) {
      if (err) {
        console.log("error: ", err);
        res.json({message: "Error", error: err});
      } else {
        console.log('delete success', data);
        res.json({data});
      }
    })
  });

};
