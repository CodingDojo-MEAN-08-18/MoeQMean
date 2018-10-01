const mongoose = require('mongoose');

// 1. Connect to the DB
mongoose.connect('mongodb://localhost/mean_exam', {useNewUrlParser: true });

// 2. Define the schema
let Schema = mongoose.Schema;

let ReviewSchema = new mongoose.Schema({
  reviewer: {type: String, required: true},
  stars: {type: String, required: true},
  description:{type: String, required: true, maxLength: 255},
  restaurant: [{type: Schema.Types.ObjectId, ref: 'Restaurant'}]
});
let RestaurantSchema = new mongoose.Schema({
  name: {type: String, required: true, minLength: 3, maxLength: 255},
  cuisine: {type: String, required: true, minLength: 3, maxLength: 255},
  review: [{type: Schema.Types.ObjectId, ref: 'Review'}]
}, {timestamps: true});

// 3. Define the Model
let Restaurant = mongoose.model('Restaurant', RestaurantSchema);
let Review = mongoose.model('Review', ReviewSchema);

mongoose.set('useFindAndModify', false);

// 4. Export the module and model
module.exports = {
  Restaurant: Restaurant,
  Review: Review
};

