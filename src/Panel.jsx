import React from 'react';

export default function( props ){

  return(
    <div className={'col-md-' + props.width + ' ' + ( props.className || '' )} >
      <div className={'panel panel-'+props.type} >
        <div className="panel-heading">{props.title}</div>
        <div className="panel-body">
          {props.children}
        </div>
      </div>
    </div>
  );
}
