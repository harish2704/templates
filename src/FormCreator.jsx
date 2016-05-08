import React, { Component } from 'react';
import Form from 'react-jsonschema-form';

import Panel from './Panel';

let formCreatorSchema = {
  type: 'object',
  properties: {
    name: {
      title: 'Template Name',
      type: 'string'
    },
    syntax:{
      title: 'Syntax',
      type: 'string'
    },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            title: 'Field Label'
          },
          name: {
            type: 'string',
            title: 'field key'
          },
          type: {
            title: 'Type of the field',
            type: 'string',
            enum: [
              'string',
              'integer',
              'number',
              'boolean',
            ]
          }
        }
      } 
    } } }


export default class FormCreator extends Component {

  constructor(){
    super();
    this.state = {
      createdSchema: {},
      currentSampleData: {},
      currentFormData: {}
    }
  }


  updateSchema( form ){
    var formProperties = {};
    form.formData.fields.forEach(( item ) => {
      formProperties[item.name] = {
        title: item.title,
        type: item.type
      };
    });

    var createdSchema = {
      type: 'object',
      properties: formProperties
    };

    this.setState({
      createdSchema: createdSchema,
      currentFormData: form.formData,
    });

    this.props.onPreviewForm({
      name: form.formData.name,
      syntax: form.formData.syntax,
      schema: createdSchema
    });
  }

  onTestForm( form ){
    this.setState({
      currentSampleData: form.formData
    });
    this.props.onTestForm( form.formData );
  }

  render(){
    return(
      <div className="col-md-12">
        <div className="col-md-6">
          <Panel type="warning" title="Create custom form" >
            <Form 
              schema={formCreatorSchema}
              formData={this.state.currentFormData}
              onSubmit={this.updateSchema.bind(this)} >
              <div>
                <button className="btn btn-success" type="submit" >Preview Form</button>
              </div>
            </Form>
          </Panel>
        </div>
        <div className="col-md-6">
          <Panel type="success" title="Preview of form" >
            <Form 
              schema={this.state.createdSchema}
              formData={this.state.currentSampleData}
              onSubmit={this.onTestForm.bind(this)} >
              <div>
                <button className="btn btn-warning" type="submit" >Test Form</button>
              </div>
            </Form>
          </Panel>
          <div className="col-md-12">
            <br/>
          </div>
        </div>
      </div>
    );
  }
}
