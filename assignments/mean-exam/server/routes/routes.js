const bodyParser = require('body-parser'),
  express = require('express'),
  path = require('path'),
  Models = require('../models/models'),
  Restaurant = Models.Restaurant,
  Review = Models.Review;

module.exports = function(app) {
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../../dist/mean-exam/')));

  app.get('/', function(req, res) {
    console.log('get running');
    res.sendFile(__dirname + '/dist/mean-exam/index.html');
  });

  // Create new
  app.post('/new',function(req,res) {
    const newRestaurant = new Restaurant({name: req.body.name, cuisine: req.body.cuisine});
    newRestaurant.save(function(err, data){
      if (err) {
        console.log(err);
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });

  // Read / get all
  app.get('/get', function (req, res) {
    Restaurant.find({}, function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    });
  });

  // Read / get single
  app.get('/get/:id', function(req, res) {
    Restaurant.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    })
  });

  // Update
  app.post('/edit/:id', function(req, res) {
    Restaurant.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name, cuisine: req.body.cuisine}}, {new: true}, function(err, data) {
      if(err) {
        console.log('error setting the data', err);
      } else {
        console.log('Restaurant updated!');
        res.json({data});
      }
    });
  });

  // Add review
  app.post('/add/review/:id', function(req, res) {

    Restaurant.findOne({_id: req.params.id}, function(err, data) {
      if(err) {
        console.log('error setting the data', err);
      } else {
        const newReview = new Review({reviewer: req.body.reviewer, stars: req.body.stars, description: req.body.desc});
        newReview.restaurant = data._id;
        Restaurant.update({_id: data._id}, {$push: {review: newReview}}, function(error, reviewData) {
          if (error) {
            console.log(error)
          } else {
            newReview.save(function(saveErr, saveData) {
              if (saveErr) {
                console.log('There was an error saving', saveErr);
              } else {
                console.log('Successfully saved review', saveData);
                res.json({saveData});
              }
            });
          }
        });
        console.log('Restaurant review added!', data);
      }
    });
  });

  // Get single restaurant reviews
  app.get('/reviews/:id', function(req, res){
    Restaurant.findOne({_id: req.params.id})
      .populate('review')
      .exec(function(err, data){
      if (err) {
        console.log('Error getting the review data:', err);
      } else {
        res.json({data});
      }
    });
  });

  // Delete -> restaurant
  app.post('/remove/:id',  function (req, res) {
    Restaurant.deleteOne({_id: req.params.id}, function (err, data) {
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
