var SearchBox = ace.acequire('ace/ext/searchbox').SearchBox;
ace.acequire('ace/ext/searchbox');
var snippetManager = ace.acequire("ace/snippets").snippetManager;

var ectSnippets = "snippet %\n\
	<% ${1} %>\n\
snippet =\n\
	<%= @${1:escaped} %>\n\
snippet -\n\
	<%- @${1:unescaped} %>\n\
snippet content\n\
	<%content '${1}'%>${2}\n\
snippet block\n\
	<% block '${1}' : %>\n\
		${2}\n\
	<% end %>${3}\n\
snippet extend\n\
	<% extend '${1:layout.html}' %>\n\
snippet %if\n\
	<% if @${1}?${2:.length} : %>\n\
		${3}\n\
	<% else : %>\n\
		${4}\n\
	<% end %>\n\
snippet %switch\n\
	<% switch @${1} : %>\n\
		<% when '${2}' : %>\n\
			${3}\n\
		<% end %>\n\
		<% else : %>\n\
			${4}\n\
		<% end %>\n\
	<% end %>${5}\n\
snippet %when\n\
	<% when '${1}' : %>\n\
		${2}\n\
	<% end %>${3}\n\
snippet %for\n\
	<% for ${1:item} in @${2:$1s} : %>\n\
		${3}\n\
	<% end %>";




var customEditorOptions = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    behavioursEnabled: true,
    maxLines: 30
};

var TATransformer = ace.acequire('ace/ext/textarea');
var createAceEditor = function( elem, options ){
    options = options || {};
    var openTag = options.openTag;
    var closeTag = options.closeTag;
    var customSnippets = ectSnippets;
    if ( openTag ){
        customSnippets = customSnippets.replace( /<%/g, openTag );
        customSnippets = customSnippets.replace( /%>/g, closeTag );
    }
    elem.style.height = elem.scrollHeight + 'px';
    var editor = TATransformer.transformTextarea( elem );
    editor.setOptions( customEditorOptions );
    var sb = new SearchBox( editor );
    sb.hide();
    var mode = editor.getSession().getMode().$id;
    var snip = snippetManager.files[mode];
    var snippets = snippetManager.parseSnippetFile( customSnippets, snip.mode );
    snippetManager.register( snippets );

    return editor;
}

