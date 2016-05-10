
import enabledSyntaxes from './ace-syntaxes';

let formCreatorSchema = {
  type: 'object',
  properties: {
    name: {
      title: 'Template Name',
      type: 'string'
    },
    syntax:{
      title: 'Syntax',
      type: 'string',
      enum: enabledSyntaxes,
      default: 'javascript'
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
    }
  }
};

export default formCreatorSchema;
