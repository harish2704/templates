import React from 'react';
import Codemirror from 'react-codemirror';

export default function( props ){

  let options = {
    mode: props.mode,
    theme: props.theme,
    lineNumbers: true,
    readOnly: false,
  };
  return(
    <Codemirror
      value={props.value}
      onChange={props.onChange}
      options={options}
    />
  );
}
