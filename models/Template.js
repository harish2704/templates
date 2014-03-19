// var tungus = require('tungus');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Console schema
 */

var templateSchema = Schema({
    name: String,
    lang: {type: String, default: 'text'},
    snippets: String,
    source: String,
    openTag: { type: String, default: '<%' },
    closeTag: { type: String, default: '%>' },
    settings: {type: Schema.Types.Mixed }
});

module.exports = mongoose.model('Template', templateSchema );
