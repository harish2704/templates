var tungus = require('tungus');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Console schema
 */

var templateSchema = Schema({
    name: String,
    source : String,
    settings : {type: Schema.Types.Mixed }
});

module.exports = mongoose.model( 'Template', templateSchema );
