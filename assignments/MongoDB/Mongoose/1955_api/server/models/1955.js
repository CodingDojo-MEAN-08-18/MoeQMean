mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/1955_api', {useNewUrlParser: true });
var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 2}
}, {timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

module.exports = mongoose.model('User', UserSchema);