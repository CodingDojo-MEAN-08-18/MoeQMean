const bodyParser = require('body-parser'),
  express = require('express'),
  path = require('path'),
  Task = require('../models/tasks.js');

module.exports = function(app) {
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../../dist/restful-tasks-crud/')));

  app.get('/', function(req, res) {
    console.log('get running');
    res.sendFile(__dirname + '/dist/restful-tasks-crud/index.html');
  });

  // Create new task
  app.post('/new',function(req,res) {
    const newTask = new Task({title: req.body.title, description: req.body.desc});
    newTask.save(function(err, data){
      if (err) {
        console.log(err);
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });

  // Read / get all tasks
  app.get('/task', function (req, res) {
    Task.find({}, function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });

  // Read / get single task
  app.get('/task/:id', function(req, res) {
    Task.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    })
  });

  // Update a task
  app.post('/edit/:id', function(req, res) {
    Task.findOneAndUpdate({_id: req.params.id}, {$set: {title: req.body.title, description: req.body.description}}, {new: true}, function(err, data) {
      if(err) {
        console.log('error setting the data', err);
      } else {
        console.log('Task updated!', data);
      }
    });
  });

  // Delete a task
  app.post('/remove/:id',  function (req, res) {
    Task.deleteOne({_id: req.params.id}, function (err, data) {
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
