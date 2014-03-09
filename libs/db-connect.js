require('tungus');
var mongoose = require('mongoose');

mongoose.connect('tingodb://' + process.env.PWD + '/database');
