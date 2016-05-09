import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import brace from 'brace';
import AceEditor from 'react-ace';
import Ejs from 'ejs'

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import Panel from './Panel';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      renderedTxt: '',
      formData: {}
    };
  }

  renderTemplate( form ){
    var renderedTxt = ejs.render( this.props.template.template, form.formData );
    this.setState({
      renderedTxt: renderedTxt,
      formData: form.formData,
    });
  }

  render() {
    let template = this.props.template;

    return ( 
      <div className="col-md-12">
        <Panel title="Data" type="success" width="4" >
          <Form schema={template.schema} onSubmit={this.renderTemplate.bind(this)} formData={this.state.formData} >
            <button className="btn btn-success" type="submit" >Apply</button>
          </Form>
        </Panel>
        <Panel title="Output" type="default" width="8" >
          <AceEditor
            mode={template.syntax}
            fontSize="14"
            width="650"
            theme="monokai"
            name="show-template"
            editorProps={{$blockScrolling: Infinity }}
            value={this.state.renderedTxt}
          />
        </Panel>
      </div>
    );
  }
}


