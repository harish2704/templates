import React, { Component } from 'react';

import TemplateEditor from './TemplateEditor';
import TemplateViewer from './TemplateViewer';
import Api from './api';


export default class TemplateCreator extends Component {

  constructor(){
    super();
    this.state = {
      createdTemplate: {
        schema: {}
      }
    };

    this.setSchema = this.setSchema.bind(this);
    this.setTemplate = this.setTemplate.bind(this);
    this.saveTemplate = this.saveTemplate.bind(this);
  }

  setSchema( data ){
    this.setState({
      createdTemplate: {
        name: data.name,
        syntax: data.syntax,
        schema: data.schema,
        template: this.state.createdTemplate.template,
      }
    });
  }

  setTemplate( template ){
    console.log( 'Setting template' );
    let createdTemplate = this.state.createdTemplate;
    this.setState({
      createdTemplate: {
        name: createdTemplate.name,
        syntax: createdTemplate.syntax,
        schema: createdTemplate.schema,
        template: template
      }
    });
  }

  saveTemplate(){
    Api.saveTemplate( this.state.createdTemplate )
    .then( (res) => {
      console.log( 'Template saved', res );
    });
  }

  render(){
    return(
      <div className="row">
        <TemplateEditor onSchemaChange={this.setSchema} onTemplateChange={this.setTemplate} width="6" formWidth="12" editorWidth="12" />
        <TemplateViewer template={this.state.createdTemplate} width="6" formWidth="12" editorWidth="12" />
        <div className="col-md-12">
          <button className="btn btn-success" onClick={this.saveTemplate.bind(this)}>Save Template</button>
        </div>
      </div>
    );
  }
}

