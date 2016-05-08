import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import brace from 'brace';
import AceEditor from 'react-ace';
import Ejs from 'ejs'

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import Api from './api';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      template : {}
    };
  }

  componentDidMount(){
    Api.getTemplate( this.props.params.templateId )
    .then( (data) => {
      this.setState({
        template: data,
      });
    });
  }

  onSubmit( form ){
    var rendered = ejs.render( this.state.template.template, form.formData );
    this.setState({
      rendered: rendered
    });
  }

  render() {
    return ( this.state.template.schema? <div className="col-md-12">
      <div className="col-md-12">
        <div className="col-md-3">
          <Form 
            schema={this.state.template.schema}
            onSubmit={this.onSubmit.bind(this)}
          />
        </div>
        <div className="col-md-9">
          <AceEditor
            mode="javascript"
            theme="monokai"
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: Infinity }}
            value={this.state.rendered}
          />
        </div>
      </div>
    </div> : <p>Loading...</p> );
  }
}

