import React from 'react';
import Codemirror from 'react-codemirror';

// import AceEditor from 'react-ace';
// import 'brace/theme/monokai';

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
