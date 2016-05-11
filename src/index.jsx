import React from 'react';
import ReactDOM from 'react-dom';

import brace from 'brace';
import routes from './routes';
import {FixNamedRoutesSupport} from 'react-router-named-routes';

require('expose?$i!inflection');

FixNamedRoutesSupport(routes);



ReactDOM.render( routes, document.getElementById('root') )
