mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful_crud', {useNewUrlParser: true });

var TaskSchema = new mongoose.Schema({
  title: {type: String, required: true, minLength: 1, maxLength: 50},
  description: {type: String, required: true, minLength: 5, maxLength: 255}
}, {timestamps: true});

mongoose.model('Task', TaskSchema);

var Task = mongoose.model('Task');

mongoose.set('useFindAndModify', false);

module.exports = mongoose.model('Task', TaskSchema);
