mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true });
var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 2},
    quote: {type: String, required: true, maxLength: 255}
}, {timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

module.exports = mongoose.model('User', UserSchema);