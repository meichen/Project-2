const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project-2');

mongoose.Promise = Promise;

module.exports = mongoose;
