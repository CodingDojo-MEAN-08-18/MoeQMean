const mongoose = require('mongoose');

// 1. Connect to the DB
mongoose.connect('mongodb://localhost/quote_ranks', {useNewUrlParser: true });

// 2. Define the schema
let Schema = mongoose.Schema;

let QuoteSchema = new mongoose.Schema({
  quote:{type: String, required: true, maxLength: 255},
  votes: {type: Number},
  author: [{type: Schema.Types.ObjectId, ref: 'Author'}]
});
let AuthorSchema = new mongoose.Schema({
  name: {type: String, required: true, minLength: 3, maxLength: 255},
  quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}]
}, {timestamps: true});

// 3. Define the Model
let Quote = mongoose.model('Quote', QuoteSchema);
let Author = mongoose.model('Author', AuthorSchema);

mongoose.set('useFindAndModify', false);

// 4. Export the module and model
module.exports = {
  Quote: Quote,
  Author: Author
};
