
import React, { Component } from 'react';
import { Link } from 'react-router';
import Api from './api';




export default class TemplateList extends Component {

  constructor(){
    super();
    this.state = {
      templates: []
    }
  }

  componentDidMount(){
    Api.getTemplates()
    .then( ( data ) => {
      this.setState({
        templates: data
      });
    });
  }


  render(){
    return(
      <div className="row">
        <br/>
        <div className="col-md-12">
          <Link to="template-create" className="btn btn-success">New</Link>
          <br/>
        </div>
        <div className="col-md-12">
          <ul className="list-group" >
            {this.state.templates.map(( item ) => (
            <li className="list-group-item" >
              <div className="row">
                <div className="col-md-1"> {item.id} </div>
                <div className="col-md-3">
                  <Link params={{ templateId: item.id }} to="template-view" >
                    {item.name}
                  </Link>
                  <Link className="badge warning pull-right" params={{ templateId: item.id }} to="template-edit">Edit</Link>
                </div>
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
