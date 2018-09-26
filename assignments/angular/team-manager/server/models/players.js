const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/team_manager', {useNewUrlParser: true });

let PlayerSchema = new mongoose.Schema({
  name: {type: String, required: true, minLength: 2, maxLength: 60},
  position: {type: String, required: true, minLength: 2, maxLength: 60},
  actions: {type: String}
}, {timestamps: true});

let Player = mongoose.model('Player', PlayerSchema);

mongoose.set('useFindAndModify', false);

module.exports = Player;
