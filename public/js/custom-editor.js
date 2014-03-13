ace.acequire('ace/ext/language_tools');
var customEditorOptions = {
    enableBasicAutocompletion: true,
    enableSnippets: false,
    behavioursEnabled: true,
    maxLines: 30
};

var TATransformer = ace.acequire('ace/ext/textarea');
var createAceEditor = function( elem ){
   elem.style.height = elem.scrollHeight + 'px';
   var editor = TATransformer.transformTextarea( elem );
   editor.setOptions( customEditorOptions );
   return editor;
}
