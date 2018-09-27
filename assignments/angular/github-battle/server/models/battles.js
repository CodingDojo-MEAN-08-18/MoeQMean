const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/github_battle', {useNewUrlParser: true });

let BattleSchema = new mongoose.Schema({
  name: {type: String, required: true},
  score: {type: Number, required: true}
}, {timestamps: true});

mongoose.model('Battle', BattleSchema);
mongoose.set('useFindAndModify', false);

module.exports = mongoose.model('Battle', BattleSchema);
