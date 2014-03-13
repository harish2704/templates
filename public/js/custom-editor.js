var SearchBox = ace.acequire('ace/ext/searchbox').SearchBox;
ace.acequire('ace/ext/searchbox');

var customEditorOptions = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    behavioursEnabled: true,
    maxLines: 30
};

var TATransformer = ace.acequire('ace/ext/textarea');
var createAceEditor = function( elem ){
    elem.style.height = elem.scrollHeight + 'px';
    var editor = TATransformer.transformTextarea( elem );
    editor.setOptions( customEditorOptions );
    var sb = new SearchBox( editor );
    sb.hide();
    return editor;
}
