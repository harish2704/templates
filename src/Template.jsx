import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import brace from 'brace';
import AceEditor from 'react-ace';
import Ejs from 'ejs'

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import Api from './api';
import Panel from './Panel';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      renderedTxt: '',
      formData: {}
    };
  }

  componentDidMount(){
    Api.getTemplate( this.props.params.templateId )
    .then( (data) => {
      this.setState( data );
    });
  }

  renderTemplate( form ){
    var renderedTxt = ejs.render( this.state.template, form.formData );
    this.setState({
      renderedTxt: renderedTxt,
      formData: form.formData,
    });
  }

  render() {
    return ( this.state.schema? <div className="col-md-12">
      <div className="col-md-12">
        <Panel title="Data" type="success" width="4" >
          <Form schema={this.state.schema} onSubmit={this.renderTemplate.bind(this)} formData={this.state.formData} >
            <button className="btn btn-success" type="submit" >Apply</button>
          </Form>
        </Panel>
        <Panel title="Output" type="default" width="8" >
          <AceEditor
            mode={this.state.syntax}
            fontSize="14"
            width="650"
            theme="monokai"
            name="show-template"
            editorProps={{$blockScrolling: Infinity }}
            value={this.state.renderedTxt}
          />
        </Panel>
      </div>
    </div> : <p>Loading...</p> );
  }
}

