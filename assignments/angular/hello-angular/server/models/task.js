mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task_api', {useNewUrlParser: true });
var TaskSchema = new mongoose.Schema({
  task: {type: String, required: true, minLength: 5, maxLength: 20},
  details: {type: String, required: false, minLength: 5, maxLength:255}
}, {timestamps: true});
mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

module.exports = mongoose.model('Task', TaskSchema);
