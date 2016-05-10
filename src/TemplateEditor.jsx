import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import AceEditor from 'react-ace';

import 'brace/theme/monokai';

import Panel from './Panel';
import formCreatorSchema from './form-creator-schema';


let formStyle = {
  overflow: 'auto',
  height: '220px',
};


export default class TemplateEditor extends Component {

  constructor(){
    super();
    this.state = {
      createdSchema: {},
      currentFormData: {},
      template: ''
    };
  }


  componentWillReceiveProps( nextProps ){
    if( nextProps.template ){
      this.setStateFromExisting( nextProps.template );
    }
  }

  componentDidMount(){
    if( this.props.template ){
      this.setStateFromExisting( this.props.template );
    }
  }

  setStateFromExisting( template ){
    var currentFormData = {},
        props;

    props = template.schema.properties;

    currentFormData.name = template.name;
    currentFormData.syntax = template.syntax;
    currentFormData.fields = Object.keys( props ).map((key) => {
      let val = props[key];
      return {
        name: key,
        title: val.title,
        type: val.type
      };
    });

    this.setState({
      createdSchema: template.schema,
      currentFormData: currentFormData,
      template: template.template,
    });
  }

  updateTemplate( newVal ){
    this.setState({
      template: newVal,
    });

    this.props.onTemplateChange( newVal );
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

    this.props.onSchemaChange({
      name: form.formData.name,
      syntax: form.formData.syntax,
      schema: createdSchema
    });
  }

  render(){
    return(
      <div className={'col-md-' + this.props.width}  >
        <Panel type="warning" title="Data Form Defnition" width={this.props.formWidth} className="pnl-create-form" >
          <Form 
            style={formStyle}
            schema={formCreatorSchema}
            formData={this.state.currentFormData}
            onSubmit={this.updateSchema.bind(this)} >
            <button className="btn btn-success" type="submit" >Preview Form</button>
          </Form>
        </Panel>
        <Panel type="success" title="Template Text to be rendered" width={this.props.editorWidth}  >
          <AceEditor
            mode={this.state.currentFormData.syntax}
            theme="monokai"
            fontSize={14}
            name="main-editor"
            editorProps={{$blockScrolling: Infinity }}
            width={null}
            onChange={this.updateTemplate.bind(this)}
            value={this.state.template}
          />
        </Panel>
      </div>
    );
  }
}
