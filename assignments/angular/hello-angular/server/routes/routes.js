const bodyParser = require('body-parser'),
    Task = require('../models/task.js');

module.exports = function(app) {
    app.use(bodyParser.json());

    app.get('/task', function (req, res) {
      Task.find({}, function(err, data) {
        if (err) {
          res.json({message: "Error", error: err});
        } else {
          res.json({data});
        }
      });
    });
    app.get('/new/:task', function(req, res) {
        const newTask = new Task({task: req.params.task});
        newTask.save(function(err, data){
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success: ", data});
            }
        });
    });
    app.get('/remove/:task', function(req, res) {
        Task.remove({task: req.params.task}, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err})
            } else {
                res.redirect('/');
            }
        });
    });
    app.get('/:task', function(req, res) {
        Task.findOne({task: req.params.task}, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({data});
            }
        })
    });
};
