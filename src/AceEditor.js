import React from 'react';

import AceEditor from 'react-ace';
import 'brace/theme/monokai';

const editorProps = {
  $blockScrolling: Infinity,
}

const editorOpts = {
  useWorker: false,
}



export default function( props ){
  return(
    <AceEditor
      value={props.value}
      onChange={props.onChange}
      mode={props.mode}
      theme="monokai"
      fontSize={14}
      name={props.name}
      editorProps={editorProps}
      setOptions={editorOpts}
      width={null}
    />
  );
}
