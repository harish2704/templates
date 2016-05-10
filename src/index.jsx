import React from 'react';
import ReactDOM from 'react-dom';

import brace from 'brace';
import enabledSyntaxes from './ace-syntaxes';
import routes from './routes';
import {FixNamedRoutesSupport} from 'react-router-named-routes';

require('expose?$i!inflection');

FixNamedRoutesSupport(routes);

enabledSyntaxes.forEach( (v) => {
  require( 'brace/mode/' + v );
})

ReactDOM.render( routes, document.getElementById('root') )
