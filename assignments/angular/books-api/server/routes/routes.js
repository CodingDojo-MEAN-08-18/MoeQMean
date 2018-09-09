const bodyParser = require('body-parser'),
  Author = require('../models/book.js');

module.exports = function(app) {
  app.use(bodyParser.json());

  app.get('/authors', function (req, res) {
    Author.author.find({}, function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });
  app.post('/new', function(req, res) {
    console.log(req.body);
    const newAuthor = new  Author.author({first_name: req.body.firstName, last_name: req.body.lastName, country: req.body.country, birthday: req.body.birthday});
    newAuthor.save(function(err, data){
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({message: "Success: ", data});
      }
    });
  });
  // app.get('/remove/:task', function(req, res) {
  //   Task.remove({task: req.params.task}, function(err, data) {
  //     if (err) {
  //       res.json({message: "Error", error: err})
  //     } else {
  //       res.redirect('/');
  //     }
  //   });
  // });
  // app.get('/:task', function(req, res) {
  //   Task.findOne({task: req.params.task}, function(err, data) {
  //     if (err) {
  //       res.json({message: "Error", error: err});
  //     } else {
  //       res.json({data});
  //     }
  //   })
  // });
};
