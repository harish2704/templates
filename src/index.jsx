import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';
import {FixNamedRoutesSupport} from 'react-router-named-routes';
FixNamedRoutesSupport(routes);

ReactDOM.render( routes, document.getElementById('root') )
