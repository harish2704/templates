var helpers = exports;
var lingo = require('lingo');
helpers.camelcase= lingo.camelcase;
helpers.small = function( str ){
    return str.toLowerCase();
};
helpers.capitalize = lingo.capitalize;
helpers.singularize = function ( str ) {
    return lingo.en.singularize( str );
};
helpers.pluralize = function(str){ return lingo.en.pluralize(str); };

