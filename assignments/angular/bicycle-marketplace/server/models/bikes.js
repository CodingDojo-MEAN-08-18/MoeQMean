const mongoose = require('mongoose');

// 1. Connect to the DB
mongoose.connect('mongodb://localhost/bicycle-manager', {useNewUrlParser: true });

// 2. Define the schema(s)
let Schema = mongoose.Schema;

let ListingSchema = new mongoose.Schema({
  title: {type: String, required: true, minLength: 3, maxLength: 255},
  description: {type: String, required: true, maxLength: 200},
  location: {type: String, required: true, minLength: 3, maxLength: 255},
  price: {type: Number, required: true, min: 1},
  image: {data: Buffer, contentType: String},
  user: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {timestamps: true});

let UserSchema = mongoose.Schema({
  firstName: {type: String, required: true, minLength: 3, maxLength: 255},
  lastName: {type: String, required: true, minLength: 3, maxLength: 255},
  email: {type: String, required: true, minLength: 3, maxLength: 255},
  password: {type: String, required: true, minLength: 3, maxLength: 255},
  listing: [{type: Schema.Types.ObjectId, ref: 'Listing'}]
});

// 3. Define the Model
mongoose.model('Listing', ListingSchema);
let Listing = mongoose.model('Listing', ListingSchema);
let User = mongoose.model('User', UserSchema);

mongoose.set('useFindAndModify', false);

// 4. Export the module and model
module.exports = {
  Listing:  Listing,
  User: User
};

