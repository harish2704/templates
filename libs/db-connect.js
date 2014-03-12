var config = require('../config');
var db = config.db;
// require('tungus');
var mongoose = require('mongoose');


var url = 'mongodb://';
if ( db.user ){
    url  = url + db.user + ':' + db.password + '@';
}
url += db.host;
if ( db.port ){
    url += ':' + db.port;
}
url += '/' + db.database;

console.log(  url );
mongoose.connect( url );
