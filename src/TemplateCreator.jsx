import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import brace from 'brace';
import AceEditor from 'react-ace';
import Ejs from 'ejs';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import FormCreator from './FormCreator';
import TemplateEditor from './TemplateEditor';

import Api from './api';


export default class TemplateCreator extends Component {

  constructor(){
    super();
    this.state = {
      sampleData : {}
    };
  }

  testForm( formData ){
    this.setState({
      sampleData: formData
    });
  }

  saveFormToState( data ){
    this.setState( data );
  }

  saveTemplateToState( template ){
    this.setState({
      template: template
    })
  }

  saveTemplate(){
    console.log( 'This is state', this.state );
    Api.saveTemplate({
      schema: this.state.schema,
      template: this.state.template,
      name: this.state.name,
      syntax: this.state.syntax,
    })
    .then( (res) => {
      console.log( 'Template saved', res );
    });
  }

  render(){
    return(
      <div className="row">
        <FormCreator onTestForm={this.testForm.bind(this)} onPreviewForm={this.saveFormToState.bind(this)} />
        <TemplateEditor sampleData={this.state.sampleData} onChange={this.saveTemplateToState.bind(this)} />
        <div className="col-md-12">
          <button className="btn btn-success" onClick={this.saveTemplate.bind(this)}>Save Template</button>
        </div>
      </div>
    );
  }
}

