let path = require('path'),
  bodyParser = require('body-parser'),
  express = require('express'),
  Models = require('../models/quotes'),
  Author = Models.Author,
  Quote = Models.Quote;

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../../dist/quote-ranks/')));

  app.get('/', function (req, res) {
    console.log('get running');
    res.sendFile(__dirname + '/dist/quote-ranks/index.html');
  });

  // Create new
  app.post('/new',function(req, res) {
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

  // Create -> Quote
  app.post('/add/quote/:id', function(req, res) {

    Author.findOne({_id: req.params.id}, function(err, data) {
      if(err) {
        console.log('error setting the data', err);
      } else {
        const newQuote = new Quote({quote: req.body.quote});
        newQuote.author = data._id;
        Author.updateOne({_id: data._id}, {$push: {quotes: newQuote}}, function(error, quoteData) {
          if (error) {
            console.log(error)
          } else {
            newQuote.save(function(saveErr, saveData) {
              if (saveErr) {
                console.log('There was an error saving', saveErr);
              } else {
                console.log('Successfully saved quote');
                res.json({saveData});
              }
            });
          }
        });
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

  // Read / get single
  app.get('/author/:id', function(req, res) {
    Author.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({data});
      }
    })
  });

  // Read / get quotes
  app.get('/quotes/:id', function(req, res){
    Author.findOne({_id: req.params.id})
      .populate('quotes')
      .exec(function(err, data){
        if (err) {
          console.log('Error getting the review data:', err);
        } else {
          res.json({data});
        }
      });
  });

  // Update -> Author
  app.post('/edit/:id', function(req, res) {
    Author.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name}}, {new: true}, function(err, data) {
      if(err) {
        console.log('error setting the data', err);
      } else {
        console.log('Author updated!');
        res.json({data});
      }
    });
  });

  // Update / Add -> Votes
  app.post('/votes/:id', function(req, res) {
    Quote.findOneAndUpdate({_id: req.params.id}, {$set: {votes: req.body.vote}}, {new: true}, function(err, data) {
      if(err) {
        console.log('error setting the data', err);
      } else {
        console.log('Vote updated!');
        res.json({data});
      }
    });
  });

  // Delete -> Author
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

  // Delete -> Quote
  app.post('/remove/quote/:id',  function (req, res) {
    Quote.deleteOne({_id: req.params.id}, function (err, data) {
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
