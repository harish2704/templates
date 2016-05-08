import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import Ejs from 'ejs'

import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/ext/searchbox';
// import 'brace/ext/language_tools';

import Panel from './Panel';


export default class TemplateEditor extends Component {

  constructor(){
    super();
    this.state = {
      template: '',
      renderedTemplate: ''
    };
  }

  componentWillReceiveProps(){

    var rendered = this.state.renderedTemplate;
    try {
      rendered = ejs.render( this.state.template, this.props.sampleData );
      this.setState({
        renderedTemplate: rendered,
      });
    } catch( e ){
      console.log( 'Error template ' );
    }
  }

  updateTemplateVal( newVal ){
    this.setState({
      template: newVal
    });
    this.props.onChange( newVal );
  }

  render(){
    return(
      <div className="col-md-12">
        <div className="col-md-6">
          <Panel type="warning" title="Enter your template" >
            <AceEditor
              mode="javascript"
              theme="monokai"
              name="main-editor"
              editorProps={{
                $blockScrolling: Infinity,
              }}
              onChange={this.updateTemplateVal.bind(this)}
              value={this.state.template}
            />
          </Panel>
        </div>

        <div className="col-md-6">
          <Panel type="success" title="Preview of rendered text">
            <AceEditor
              mode="javascript"
              theme="monokai"
              name="previe-editor"
              editorProps={{$blockScrolling: Infinity }}
              value={this.state.renderedTemplate}
            />
          </Panel>
        </div>
      </div>
    );
  }
}
