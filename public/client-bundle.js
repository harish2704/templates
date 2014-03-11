// var aceThemes = [ "ambiance", "chaos", "chrome", "clouds", "clouds_midnight", "cobalt", "crimson_editor", "dawn", "dreamweaver", "eclipse", "github", "idle_fingers", "katzenmilch", "kr", "kuroir", "merbivore", "merbivore_soft", "mono_industrial", "monokai", "pastel_on_dark", "solarized_dark", "solarized_light", "terminal", "textmate", "tomorrow", "tomorrow_night_blue", "tomorrow_night_bright", "tomorrow_night_eighties", "tomorrow_night", "twilight", "vibrant_ink", "xcode" ];

// var aceModes = [ 'javascript', 'java', 'c_cpp', 'coffee', 'diff', 'html', 'java', 'markdown', 'mysql', 'plain_text', 'php', 'python', 'sh', 'xml', 'space', 'text', 'yaml' ];

// var aceSnippets = ['javascript', 'coffee', 'php', 'python', 'xml', 'html', 'java', 'markdown', 'php'];

var pack = exports;
require('lingo');
require('ect');
require('underscore');
require('./js/client-helpers');
require('brace');
require('brace/misc/keybinding-vim');
require('brace/misc/ext-language_tools');
require('brace/misc/ext-textarea');


require("brace/theme/ambiance");
require("brace/theme/chaos");
require("brace/theme/chrome");
require("brace/theme/clouds");
require("brace/theme/clouds_midnight");
require("brace/theme/cobalt");
require("brace/theme/crimson_editor");
require("brace/theme/dawn");
require("brace/theme/dreamweaver");
require("brace/theme/eclipse");
require("brace/theme/github");
require("brace/theme/idle_fingers");
require("brace/theme/katzenmilch");
require("brace/theme/kr");
require("brace/theme/kuroir");
require("brace/theme/merbivore");
require("brace/theme/merbivore_soft");
require("brace/theme/mono_industrial");
require("brace/theme/monokai");
require("brace/theme/pastel_on_dark");
require("brace/theme/solarized_dark");
require("brace/theme/solarized_light");
require("brace/theme/terminal");
require("brace/theme/textmate");
require("brace/theme/tomorrow");
require("brace/theme/tomorrow_night_blue");
require("brace/theme/tomorrow_night_bright");
require("brace/theme/tomorrow_night_eighties");
require("brace/theme/tomorrow_night");
require("brace/theme/twilight");
require("brace/theme/vibrant_ink");
require("brace/theme/xcode");

require("brace/mode/javascript");
require("brace/mode/json");
require("brace/mode/java");
require("brace/mode/c_cpp");
require("brace/mode/coffee");
require("brace/mode/diff");
require("brace/mode/html");
require("brace/mode/java");
require("brace/mode/markdown");
require("brace/mode/mysql");
require("brace/mode/plain_text");
require("brace/mode/php");
require("brace/mode/python");
require("brace/mode/sh");
require("brace/mode/xml");
require("brace/mode/space");
require("brace/mode/text");
require("brace/mode/yaml");

require("brace/snippets/javascript");
require("brace/snippets/json");
require("brace/snippets/coffee");
require("brace/snippets/php");
require("brace/snippets/python");
require("brace/snippets/xml");
require("brace/snippets/html");
require("brace/snippets/java");
require("brace/snippets/markdown");
require("brace/snippets/php");

if ( window ){
    window.require = require;
}

