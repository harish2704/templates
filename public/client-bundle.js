var pack = exports;
pack.lingo = require('lingo');
pack.ect = require('ect');
pack._ = require('underscore');
require('./js/client-helpers');
var ace = require('brace');
require('brace/mode/javascript');
require('brace/theme/monokai');
require('brace/misc/keybinding-vim');
require('brace/misc/ext-language_tools');
require('brace/snippets/text');
require('brace/snippets/javascript');
// pack['ace/keyboard/vim'] = require('brace/keybinding-vim');
// pack['ace/keyboard/emacs'] = require('brace/keyboard/emacs');

if ( window ){
    window.require = require;
}
