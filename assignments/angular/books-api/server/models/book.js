mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books_api', {useNewUrlParser: true });

const Schema = mongoose.Schema;
var BookSchema = new mongoose.Schema({
  title: {type: String, required: true, minLength: 5, maxLength: 255},
  publication: {type: String, required: true, minLength: 5, maxLength: 255},
  _author: [{type: Schema.Types.ObjectId, ref: 'Author'}]
}, {timestamps: true});
mongoose.model('Book', BookSchema);
var Book = mongoose.model('Book');

var AuthorSchema = new mongoose.Schema({
  first_name: {type: String, required: true, minLength: 2, maxLength: 255},
  last_name: {type: String, required: true, minLength: 2, maxLength: 255},
  country: {type: String, required: true, minLength: 3, maxLength: 255},
  birthday: {type: String, required: true, minLength: 3, maxLength: 255},
  _books: [{type: Schema.Types.ObjectId, ref: 'Book'}]
}, {timestamps: true});
mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author');

module.exports = {
  author: mongoose.model('Author', AuthorSchema),
  book: mongoose.model('Book', BookSchema)
};
