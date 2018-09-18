mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true });

var AuthorSchema = new mongoose.Schema({
  name: {type: String, required: true, minLength: 1, maxLength: 50}
}, {timestamps: true});

mongoose.model('Author', AuthorSchema);

var Author = mongoose.model('Author');

mongoose.set('useFindAndModify', false);

module.exports = mongoose.model('Author', AuthorSchema);
