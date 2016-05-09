import React, { Component } from 'react';

import Api from './api';
import TemplateViewer from './TemplateViewer';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      template: null
    };
  }

  componentDidMount(){
    Api.getTemplate( this.props.params.templateId )
      .then( (data) => {
        this.setState({
          template: data
        });
      });
  }


  render() {
    if( this.state.template ){
      return ( <TemplateViewer template={this.state.template} /> );
    } else {
      return ( <p className="loading" >Loading...</p> );
    }
  }
}

